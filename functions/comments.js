const { Octokit } = require("@octokit/rest")
const yaml = require("js-yaml")

const { GITHUB_USERNAME, GITHUB_AUTHTOKEN, GITHUB_REPO } = process.env;
let x = '';

exports.handler = async (event, context) => {

  const comment = event.body;
  const redirectUrl = event.body.redirect;

  if (comment) {
    try {
      await saveComment(comment);
      return {
        statusCode: 302,
        headers: {
          Location: redirectUrl,
          'Cache-Control': 'no-cache',
        },
        body: JSON.stringify({
          repo: GITHUB_REPO,
          un: GITHUB_USERNAME,
          comment: comment,
          baseRef,
          resp: x
        })
      };
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

const octokit = new Octokit({ auth: GITHUB_AUTHTOKEN });
let baseRef, latestCommitSha, treeSha, newTreeSha, comment, commentId, commitRef;

const saveComment = async (comment) => {
  comment = comment;

  // Validate the incoming comment
  if (comment.message && comment.message.length > 0) {
    await getBaseBranch();
    await getLastCommitSha();
    await createTree();
    await createCommit();
    await createRef();
    await createPullRequest();
  }
}

const getBaseBranch = async () => {
  let response = await octokit.repos.get({
    owner: GITHUB_USERNAME,
    repo: GITHUB_REPO
  });
  console.log(JSON.stringify(response));
  x = response;
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
  commentId = Math.abs(
    hash(
      `${comment.date}${comment.postpath}${comment.name}`
    )
  );
  const cleanComment = {
    postpath: comment.postpath,
    avatar: comment.avatar,
    message: comment.message,
    name: comment.name,
    date: new Date(),
    id: commentId
  };
  const commentYaml = yaml.safeDump(cleanComment);
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