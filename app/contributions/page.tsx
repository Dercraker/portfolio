import { LatestReposLoader } from "@components/github/latestRepos.loader";
import { LatestReposContainer } from "@components/github/latestReposContainer";
import { SectionLayout } from "@components/layout/SectionLayout";
import { cn } from "@lib/utils";
import { buttonVariants } from "@ui/button";
import { GLOBAL_CONFIG } from "globalConfig";
import Link from "next/link";
import { Suspense } from "react";

const RoutePage = async () => {
  return (
    <SectionLayout>
      <div className="relative mx-auto mt-10 max-w-5xl px-8 md:mt-20">
        <h1 className="max-w-3xl text-3xl font-bold text-zinc-50 md:text-5xl md:leading-tight">
          Committing Code and Crimes Against{" "}
          <span className="text-secondary">Programming World</span>
        </h1>
        <p className="mt-8 max-w-2xl text-sm tracking-wide text-zinc-400 md:text-base md:leading-loose">
          A place where you can witness my caffeinated coding adventures and see
          just how much coffee it takes to fuel my commits. From my first "Hello
          World" to my latest breakthrough, and everything in between.
        </p>
      </div>
      <Suspense fallback={<LatestReposLoader />}>
        <LatestReposContainer />
      </Suspense>

      <div className="relative flex justify-center ">
        <Link
          href={GLOBAL_CONFIG.social.github}
          target="__blank"
          className={cn(
            buttonVariants({
              variant: "outline",
              className: "border-accent",
              size: "lg",
            }),
          )}
        >
          View all on GitHub
        </Link>
      </div>
    </SectionLayout>
  );
};

export default RoutePage;
