const octokit = require("@octokit/rest")
const yaml = require("js-yaml")

dotenv.config();

const { GITHUB_USERNAME, GITHUB_AUTHTOKEN, GITHUB_REPO } = process.env;

exports.handler = async (event, context, callback) => {
    
    return new Promise((resolve, reject) => {

        const comment = context.body;
        const redirectUrl = req.body.redirect;

        if (comment) {
            await saveComment(comment);
            resolve({
                statusCode:302,
                headers: {
                    location: redirectUrl
                }
            });
        }
        else {
            resolve({
                statusCode:400,
                body: "Please pass comment details."
            });
        }
    });
}



export class GitHub {
  private octokit: Octokit = new Octokit({ auth: GITHUB_AUTHTOKEN });
  private baseRef: string;
  private latestCommitSha: string;
  private treeSha: string;
  private newTreeSha: string;
  private comment: IComment;
  private commentId: number;
  private commitRef: string;

  public async saveComment(comment: IComment): Promise<void> {
    this.comment = comment;

    // Validate the incoming comment
    if (this.comment.message && this.comment.message.length > 0) {
      await this.getBaseBranch();
      await this.getLastCommitSha();
      await this.createTree();
      await this.createCommit();
      await this.createRef();
      await this.createPullRequest();
    }
  }

  private async getBaseBranch(): Promise<void> {
    let response = await this.octokit.repos.get({
      owner: GITHUB_USERNAME,
      repo: GITHUB_REPO
    });
    this.baseRef = response.data.default_branch;
  }

  private async getLastCommitSha(): Promise<void> {
    let response = await this.octokit.repos.listCommits({
      owner: GITHUB_USERNAME,
      repo: GITHUB_REPO,
      sha: this.baseRef,
      per_page: 1
    });
    this.latestCommitSha = response.data[0].sha;
    this.treeSha = response.data[0].commit.tree.sha;
  }

  private async createTree(): Promise<void> {
    this.commentId = Math.abs(
      this.hash(
        `${this.comment.date}${this.comment.postpath}${this.comment.name}`
      )
    );
    const cleanComment = {
      postpath: this.comment.postpath,
      avatar: this.comment.avatar,
      message: this.comment.message,
      name: this.comment.name,
      date: new Date(),
      id: this.commentId
    };
    const commentYaml: string = yaml.safeDump(cleanComment);
    let response = await this.octokit.git.createTree({
      owner: GITHUB_USERNAME,
      repo: GITHUB_REPO,
      base_tree: this.treeSha,
      tree: [
        {
          path: `content/comments${this.comment.postpath}${this.commentId}.yml`,
          mode: "100644",
          content: commentYaml
        }
      ]
    });
    this.newTreeSha = response.data.sha;
  }

  private async createCommit(): Promise<void> {
    let response = await this.octokit.git.createCommit({
      owner: GITHUB_USERNAME,
      repo: GITHUB_REPO,
      message: `Comment by ${this.comment.name} on ${this.comment.postpath}`,
      tree: this.newTreeSha,
      parents: [this.latestCommitSha]
    });
    this.latestCommitSha = response.data.sha;
  }

  private async createRef(): Promise<void> {
    let response = await this.octokit.git.createRef({
      owner: GITHUB_USERNAME,
      repo: GITHUB_REPO,
      ref: `refs/heads/${this.commentId}`,
      sha: this.latestCommitSha
    });
  }

  private async createPullRequest(): Promise<void> {
    await this.octokit.pulls.create({
      owner: GITHUB_USERNAME,
      repo: GITHUB_REPO,
      title: `Comment by ${this.comment.name} on ${this.comment.postpath}`,
      body: `avatar: <img src='${this.comment.avatar}' width='64'  height='64'/>\n\n${this.comment.message}`,
      head: this.commentId.toString(),
      base: this.baseRef
    });
  }

  private hash(str: string): number {
    let hash: number = 0;
    let i: number;
    let chr: number;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
      chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }
}
