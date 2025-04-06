import { getAllGithubReposCached } from "@feat/api/githubApi";
import { LatestRepos } from "./latestRepos";

type LatestReposContainerProps = {
  take?: number;
  showMore?: boolean;
};

export const LatestReposContainer = async ({
  take,
  showMore,
}: LatestReposContainerProps) => {
  const repos = await getAllGithubReposCached();
  return <LatestRepos take={take} showMore={showMore} repos={repos} />;
};
