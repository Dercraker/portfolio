import posts from "@app/../public/linkedin-posts.json";
import { LatestEvent } from "@components/events/latestEvent";
import { SectionLayout } from "@components/layout/SectionLayout";
import {
  LinkedinPostType,
  LinkedinPostTypeSchema,
} from "@type/linkedinPost.type";
import { Typography } from "@ui/typography";
import { z } from "zod";

const RoutePage = () => {
  const linkedinPosts = z
    .array(LinkedinPostTypeSchema)
    .parse(posts)
    .sort((a: LinkedinPostType, b: LinkedinPostType) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return (
    <SectionLayout>
      <div className="max-w-5xl mx-auto px-8 mt-10 md:mt-20 relative">
        <Typography className="font-bold text-3xl md:text-5xl md:leading-tight text-zinc-50 max-w-3xl">
          I share on linkedin
          <span className="text-secondary"> my technical knowledge</span>
        </Typography>
        <Typography className="text-muted-foreground text-sm md:text-lg max-w-2xl mt-8 tracking-wide">
          I don't understand why people are still interested in PHP when new
          technologies such as React and .Net are making it possible to build
          applications that are clearly more powerful. I've built a lot of
          things, from small experiments to complete web applications, and every
          project shows my love for coding and problem solving.
        </Typography>
        <div className="mt-20 max-w-3xl mx-auto">
          <LatestEvent posts={linkedinPosts} />
        </div>
      </div>
    </SectionLayout>
  );
};

export default RoutePage;
