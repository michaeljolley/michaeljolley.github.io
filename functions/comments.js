const { Octokit } = require("@octokit/rest")
const querystring = require('querystring');
const yaml = require("js-yaml")

const { GITHUB_USERNAME, GITHUB_AUTHTOKEN, GITHUB_REPO } = process.env;

const octokit = new Octokit({ auth: GITHUB_AUTHTOKEN });
let baseRef, latestCommitSha, treeSha, newTreeSha, comment, commentId, commitRef;

exports.handler = async (event, context) => {
  
  const bodyComment = querystring.decode(event.body);
  comment = {
    postpath   : bodyComment.postpath,
    message    : bodyComment.message,
    name       : bodyComment.name,
    avatar     : bodyComment.avatar,
    redirect   : bodyComment.redirect,
    identity   : bodyComment.identity,
    date       : new Date(),
    id         : Math.abs(
                    hash(
                      `${new Date()}${bodyComment.postpath}${bodyComment.name}`
                    )
                  )
  };
  console.log(comment)
  const redirectUrl = comment.redirect;
  if (comment) {
    try {
      await saveComment(comment);
      return {
          statusCode: 302,
          headers: {
            location: redirectUrl,
            'Cache-Control': 'no-cache',
          },
          body: JSON.stringify({ })
        }
    }
    catch (err) {
      return {
        statusCode: 500,
        body: err
      };
    }
  }
  else {
      return {
          statusCode:400,
          body: "Please pass comment details."
      };
  }
}


const saveComment = async (rawComment) => {
  
  // Validate the incoming comment
  if (comment.message && comment.message.length > 0) {
    await getBaseBranch();
    console.log('getBaseBranch');
    await getLastCommitSha();
    console.log('getLastCommitSha');
    await createTree();
    console.log('createTree');
    await createCommit();
    console.log('createCommit');
    await createRef();
    console.log('createRef');
    await createPullRequest();
    console.log('all good');
  }
}

const getBaseBranch = async () => {
  let response = await octokit.repos.get({
    owner: GITHUB_USERNAME,
    repo: GITHUB_REPO
  });
  baseRef = response.data.default_branch;
}

const getLastCommitSha = async() => {
  let response = await octokit.repos.listCommits({
    owner: GITHUB_USERNAME,
    repo: GITHUB_REPO,
    sha: baseRef,
    per_page: 1
  });
  latestCommitSha = response.data[0].sha;
  treeSha = response.data[0].commit.tree.sha;
}

const createTree = async () => {
 
  console.log(cleanComment);
  const commentYaml = yaml.safeDump(cleanComment);
  console.log(commentYaml);
  let response = await octokit.git.createTree({
    owner: GITHUB_USERNAME,
    repo: GITHUB_REPO,
    base_tree: treeSha,
    tree: [
      {
        path: `content/comments${comment.postpath}${commentId}.yml`,
        mode: "100644",
        content: commentYaml
      }
    ]
  });
  newTreeSha = response.data.sha;
}

 const createCommit = async () => {
  let response = await octokit.git.createCommit({
    owner: GITHUB_USERNAME,
    repo: GITHUB_REPO,
    message: `Comment by ${comment.name} on ${comment.postpath}`,
    tree: newTreeSha,
    parents: [latestCommitSha]
  });
  latestCommitSha = response.data.sha;
}

const createRef = async () => {
  let response = await octokit.git.createRef({
    owner: GITHUB_USERNAME,
    repo: GITHUB_REPO,
    ref: `refs/heads/${commentId}`,
    sha: latestCommitSha
  });
}

const createPullRequest = async () => {
    await octokit.pulls.create({
      owner: GITHUB_USERNAME,
      repo: GITHUB_REPO,
      title: `Comment by ${comment.name} on ${comment.postpath}`,
      body: `avatar: <img src='${comment.avatar}' width='64'  height='64'/>\n\n${comment.message}`,
      head: commentId.toString(),
      base: baseRef
    });

}

const hash = (str) => {
  let hash = 0;
  let i = 0;
  let chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}