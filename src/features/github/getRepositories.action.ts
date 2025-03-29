"use server";

import { getAllGithubRepos } from "@feat/api/githubApi";
import { action } from "@lib/actions/safeActions";
import { z } from "zod";

const GetRepositoriesActionSchema = z.object({});

export const GetRepositoriesActionAction = action
  .schema(GetRepositoriesActionSchema)
  .action(async () => {
    const repos = await getAllGithubRepos();
    return repos;
  });
