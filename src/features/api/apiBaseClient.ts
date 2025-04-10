import { env } from "@lib/env/server";
import { Octokit } from "@octokit/rest";

export const githubClient = new Octokit({
  auth: env.GITHUB_TOKEN,
});
