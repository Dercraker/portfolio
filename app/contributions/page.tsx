import { LatestReposLoader } from "@components/github/latestRepos.loader";
import { LatestReposContainer } from "@components/github/latestReposContainer";
import { SectionLayout } from "@components/layout/SectionLayout";
import { cn } from "@lib/utils";
import { buttonVariants } from "@ui/button";
import { combineWithParentMetadata } from "@utils/metadata";
import { GLOBAL_CONFIG } from "globalConfig";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Suspense } from "react";

export const generateMetadata = combineWithParentMetadata({
  title: "My contributions",
  description: "My contributions to the world of programming",
});

const RoutePage = async () => {
  const t = await getTranslations("Contributions");
  return (
    <SectionLayout>
      <div className="relative mx-auto mt-10 max-w-5xl px-8 md:mt-20">
        <h1 className="max-w-3xl text-3xl font-bold text-zinc-50 md:text-5xl md:leading-tight">
          {t("Title")}
          <span className="text-secondary"> {t("Description")}</span>
        </h1>
        <p className="mt-8 max-w-2xl text-sm tracking-wide text-zinc-400 md:text-base md:leading-loose">
          {t("Content")}
        </p>
      </div>
      <Suspense fallback={<LatestReposLoader />}>
        <LatestReposContainer />
      </Suspense>

      <div className="relative flex justify-center">
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
          {t("ViewAllOnGitHub")}
        </Link>
      </div>
    </SectionLayout>
  );
};

export default RoutePage;
