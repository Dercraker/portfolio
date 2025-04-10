import posts from "@app/../public/linkedin-posts.json";
import { LatestEvent } from "@components/events/latestEvent";
import { LatestReposLoader } from "@components/github/latestRepos.loader";
import { Layout, LayoutContent } from "@components/layout/layout";
import type { LinkedinPostType } from "@type/linkedinPost.type";
import { LinkedinPostTypeSchema } from "@type/linkedinPost.type";
import type { PageParams } from "@type/next";
import { Suspense } from "react";
import { z } from "zod";
import { Experience } from "./_component/experience";
import { Hardware } from "./_component/hardware";
import { Hero } from "./_component/hero";
import { LatestRepoSection } from "./_component/latestRepoSection";
import { Tools } from "./_component/tools";

const RoutePage = async (props: PageParams) => {
  const linkedinPosts = z
    .array(LinkedinPostTypeSchema)
    .parse(posts)
    .sort((a: LinkedinPostType, b: LinkedinPostType) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return (
    <>
      <Hero />
      <Layout size="lg">
        <LayoutContent>
          <Experience />
          <Tools />
          <Suspense fallback={<LatestReposLoader />}>
            <LatestRepoSection />
          </Suspense>
          <div className="mx-auto mt-40 grid max-w-5xl grid-cols-1 gap-10 px-8 lg:grid-cols-3">
            <div className="col-span-2">
              <LatestEvent posts={linkedinPosts.slice(0, 2)} />
            </div>
            <Hardware />
          </div>
        </LayoutContent>
      </Layout>
    </>
  );
};

export default RoutePage;
