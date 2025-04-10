/* eslint-disable no-await-in-loop */
import type { GithubRepository } from "@type/githubEvent.type";
import { cache } from "react";
import { githubClient } from "./apiBaseClient";

export const getAllGithubRepos = async () => {
  const allRepos = new Map<number, GithubRepository>();

  const getPersonalRepos = async () => {
    let page = 1;
    while (true) {
      const { data } = await githubClient.repos.listForAuthenticatedUser({
        per_page: 100,
        page,
        affiliation: "owner",
      });
      if (data.length === 0) break;
      //@ts-expect-error TODO: fix repo type
      data.forEach((repo) => allRepos.set(repo.id, repo));
      page++;
    }
  };

  const getOrgRepos = async () => {
    const { data: orgs } = await githubClient.orgs.listForAuthenticatedUser();

    for (const org of orgs) {
      let page = 1;
      while (true) {
        const { data } = await githubClient.repos.listForOrg({
          org: org.login,
          per_page: 100,
          page,
          type: "all", // inclut public et privé
        });
        if (data.length === 0) break;
        //@ts-expect-error TODO: fix repo type
        data.forEach((repo) => allRepos.set(repo.id, repo));
        page++;
      }
    }
  };

  await Promise.all([getPersonalRepos(), getOrgRepos()]);

  return Array.from(allRepos.values())
    .filter(
      (r) =>
        !r.fork ||
        (r.fork && r.owner.login.toLowerCase() === "dercraker") ||
        (r.fork && r.owner.login.toLowerCase() === "takadmin00") ||
        (r.fork && r.owner.login.toLowerCase() === "melvynx"),
    )
    .sort(
      (a, b) =>
        new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
    );
};

export const getAllGithubReposCached = cache(getAllGithubRepos);
