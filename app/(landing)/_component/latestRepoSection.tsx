import { LatestRepos } from "@components/github/latestRepos";
import {
  LayoutDescription,
  LayoutHeader,
  LayoutTitle,
} from "@components/layout/layout";
import { SectionLayout } from "@components/layout/SectionLayout";

export type latestRepoSectionProps = {};

export const LatestRepoSection = ({}: latestRepoSectionProps) => {
  return (
    <SectionLayout>
      <LayoutHeader>
        <LayoutTitle>Latest Repositories</LayoutTitle>
        <LayoutDescription className="text-zinc-400">
          Here are some of the latest repositories I've worked on.
        </LayoutDescription>
      </LayoutHeader>
      <LatestRepos take={10} showMore />
    </SectionLayout>
  );
};
