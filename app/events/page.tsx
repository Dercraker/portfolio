import { LatestEvent } from "@components/events/latestEvent";
import { SectionLayout } from "@components/layout/SectionLayout";
import posts from "@constant/linkedin-posts.json";
import { LinkedinPostTypeSchema } from "@type/linkedinPost.type";
import { Typography } from "@ui/typography";
import { combineWithParentMetadata } from "@utils/metadata";
import { getTranslations } from "next-intl/server";
import { z } from "zod";

export const generateMetadata = combineWithParentMetadata({
  title: "Linkedin posts",
  description: "All my linkedin posts and more",
});

const RoutePage = async () => {
  const t = await getTranslations("Events");

  const linkedinPosts = z.array(LinkedinPostTypeSchema).parse(posts);

  return (
    <SectionLayout>
      <div className="relative mx-auto mt-10 max-w-5xl px-8 md:mt-20">
        <Typography className="max-w-3xl text-3xl font-bold text-zinc-50 md:text-5xl md:leading-tight">
          {t("Title")}
          <span className="text-secondary"> {t("Description")}</span>
        </Typography>
        <Typography className="text-muted-foreground mt-8 max-w-2xl text-sm tracking-wide md:text-lg">
          {t("Content")}
        </Typography>
        <div className="mx-auto mt-20 max-w-3xl">
          <LatestEvent posts={linkedinPosts} />
        </div>
      </div>
    </SectionLayout>
  );
};

export default RoutePage;
