/* eslint-disable no-await-in-loop */
import type { Repository } from "@type/repository.type";
import { cache } from "react";
import { githubClient } from "./apiBaseClient";

export const getAllGithubRepos = async () => {
  const allRepos = new Map<number, Repository>();

  // 1. Repos personnels (public + privé)
  const getPersonalRepos = async () => {
    let page = 1;
    while (true) {
      const { data } = await githubClient.repos.listForAuthenticatedUser({
        per_page: 100,
        page,
        affiliation: "owner",
        direction: "desc",
        sort: "updated",
      });
      if (data.length === 0) break;
      //@ts-expect-error TODO: fix repo type
      data.forEach((repo) => allRepos.set(repo.id, repo));
      page++;
    }
  };

  // 2. Repos des organisations
  const getOrgRepos = async () => {
    // Récupère toutes les orgs
    const { data: orgs } = await githubClient.orgs.listForAuthenticatedUser();

    for (const org of orgs) {
      let page = 1;
      while (true) {
        const { data } = await githubClient.repos.listForOrg({
          org: org.login,
          per_page: 100,
          page,
          type: "all", // inclut public et privé
          direction: "desc",
          sort: "updated",
        });
        if (data.length === 0) break;
        //@ts-expect-error TODO: fix repo type
        data.forEach((repo) => allRepos.set(repo.id, repo));
        page++;
      }
    }
  };

  // 3. Repos où je suis collaborateur
  const getCollaboratedRepos = async () => {
    let page = 1;
    while (true) {
      const { data } = await githubClient.repos.listForAuthenticatedUser({
        per_page: 100,
        page,
        affiliation: "collaborator",
        direction: "desc",
        sort: "updated",
      });
      if (data.length === 0) break;
      //@ts-expect-error TODO: fix repo type
      data.forEach((repo) => allRepos.set(repo.id, repo));
      page++;
    }
  };

  // 4. Repos forkés
  const getForkedRepos = async () => {
    let page = 1;
    while (true) {
      const { data } = await githubClient.repos.listForAuthenticatedUser({
        per_page: 100,
        page,
        affiliation: "organization_member",
        direction: "desc",
        sort: "updated",
      });
      if (data.length === 0) break;
      //@ts-expect-error TODO: fix repo type
      data.forEach((repo) => allRepos.set(repo.id, repo));
      page++;
    }
  };

  // Exécute toutes les requêtes
  await Promise.all([
    getPersonalRepos(),
    getOrgRepos(),
    getCollaboratedRepos(),
    getForkedRepos(),
  ]);

  return Array.from(allRepos.values()).filter(
    (r) =>
      !r.name.includes("now.ts") ||
      r.full_name.includes("takadmin00") ||
      r.full_name.includes("Melvynx") ||
      r.full_name.includes("Dercraker"),
  );
};

export const getAllGithubReposCached = cache(getAllGithubRepos);
