import { LatestRepos } from "@components/github/latestRepos";
import {
  LayoutDescription,
  LayoutHeader,
  LayoutTitle,
} from "@components/layout/layout";
import { SectionLayout } from "@components/layout/SectionLayout";
import { getAllGithubReposCached } from "@feat/api/githubApi";

export const LatestRepoSection = async () => {
  const repos = await getAllGithubReposCached();
  return (
    <SectionLayout>
      <LayoutHeader>
        <LayoutTitle>Latest Repositories</LayoutTitle>
        <LayoutDescription className="text-zinc-400">
          Here are some of the latest repositories I've worked on. <br />
          From my first hello world to my latest projects, with {
            repos.length
          }{" "}
          repositories in between. <br />
          I've learned a lot from each and every one of them.
        </LayoutDescription>
      </LayoutHeader>

      <LatestRepos take={9} showMore repos={repos} />
    </SectionLayout>
  );
};
