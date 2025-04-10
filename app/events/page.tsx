import posts from "@app/../public/linkedin-posts.json";
import { LatestEvent } from "@components/events/latestEvent";
import { SectionLayout } from "@components/layout/SectionLayout";
import type { LinkedinPostType } from "@type/linkedinPost.type";
import { LinkedinPostTypeSchema } from "@type/linkedinPost.type";
import { Typography } from "@ui/typography";
import { combineWithParentMetadata } from "@utils/metadata";
import { z } from "zod";

export const generateMetadata = combineWithParentMetadata({
  title: "Linkedin posts",
  description: "All my linkedin posts and more",
});

const RoutePage = () => {
  const linkedinPosts = z
    .array(LinkedinPostTypeSchema)
    .parse(posts)
    .sort((a: LinkedinPostType, b: LinkedinPostType) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return (
    <SectionLayout>
      <div className="relative mx-auto mt-10 max-w-5xl px-8 md:mt-20">
        <Typography className="max-w-3xl text-3xl font-bold text-zinc-50 md:text-5xl md:leading-tight">
          I share on linkedin
          <span className="text-secondary"> my technical knowledge</span>
        </Typography>
        <Typography className="text-muted-foreground mt-8 max-w-2xl text-sm tracking-wide md:text-lg">
          I don't understand why people are still interested in PHP when new
          technologies such as React and .Net are making it possible to build
          applications that are clearly more powerful. I've built a lot of
          things, from small experiments to complete web applications, and every
          project shows my love for coding and problem solving.
        </Typography>
        <div className="mx-auto mt-20 max-w-3xl">
          <LatestEvent posts={linkedinPosts} />
        </div>
      </div>
    </SectionLayout>
  );
};

export default RoutePage;
