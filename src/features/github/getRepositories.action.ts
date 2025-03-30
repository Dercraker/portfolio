"use server";

import { getAllGithubReposCached } from "@feat/api/githubApi";
import { action } from "@lib/actions/safeActions";

export const GetRepositoriesActionAction = action.action(async () => {
  const repos = await getAllGithubReposCached();
  return repos;
});
