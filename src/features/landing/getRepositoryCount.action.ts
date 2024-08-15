"use server";

import { env } from "@/lib/env/server";
import { action } from "@/lib/safeAction";
import { GithubUser } from "@/types/githubUser.type";
import { githubUserOrganisation } from "@/types/userOrgs.type";
import ky from "ky";
import { GetRepositoryCountSchema } from "./getRepositoryCount.schema";

export const GetRepositoryCountAction = action
  .schema(GetRepositoryCountSchema)
  .action(async ({ parsedInput: { userId } }) => {
    const {
      public_repos,
      total_private_repos,
      public_gists,
      private_gists,
    }: GithubUser = await ky
      .get(`user/${userId}`, {
        prefixUrl: "https://api.github.com/",
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        },
      })
      .json();

    const orgs: githubUserOrganisation[] = await ky
      .get(`user/orgs`, {
        prefixUrl: "https://api.github.com/",
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        },
      })
      .json();

    const orgReposCounts = await Promise.all(
      orgs.map(async (org) => {
        const orgRepos: unknown[] = await ky
          .get(`orgs/${org.id}/repos`, {
            prefixUrl: "https://api.github.com/",
            headers: {
              Accept: "application/vnd.github+json",
              "X-GitHub-Api-Version": "2022-11-28",
              Authorization: `Bearer ${env.GITHUB_TOKEN}`,
            },
          })
          .json();
        return orgRepos.length;
      }),
    );

    const totalOrgRepos = orgReposCounts.reduce((sum, count) => sum + count, 0);

    const count =
      public_repos +
      total_private_repos +
      public_gists +
      private_gists +
      totalOrgRepos;

    return count;
  });
