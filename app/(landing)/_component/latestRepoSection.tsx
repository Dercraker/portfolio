import { LatestRepos } from "@components/github/latestRepos";
import {
  LayoutDescription,
  LayoutHeader,
  LayoutTitle,
} from "@components/layout/layout";
import { SectionLayout } from "@components/layout/SectionLayout";
import { getAllGithubReposCached } from "@feat/api/githubApi";
import { getTranslations } from "next-intl/server";

export const LatestRepoSection = async () => {
  const t = await getTranslations("LatestRepos");

  const repos = await getAllGithubReposCached();
  return (
    <SectionLayout>
      <LayoutHeader>
        <LayoutTitle>{t("Title")}</LayoutTitle>
        <LayoutDescription className="text-zinc-400">
          {t("Description", { repos: repos.length })}
        </LayoutDescription>
      </LayoutHeader>

      <LatestRepos take={9} showMore repos={repos} />
    </SectionLayout>
  );
};
