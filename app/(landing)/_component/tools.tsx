import {
  LayoutDescription,
  LayoutHeader,
  LayoutTitle,
} from "@components/layout/layout";
import { SectionLayout } from "@components/layout/SectionLayout";
import IconCloud from "@components/logo/cloudIcon";
import { Typography } from "@ui/typography";

const slugs = [
  "typescript",
  "trello",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "stripe",
  "postgresql",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "github",
  "gitlab",
  "sonarqube",
  "figma",
  "dotnet",
  "dbeaver",
  "reacthookform",
  "reactquery",
  "zod",
  "tailwindcss",
  "shadcnui",
  "framer",
  "2fas",
];

export const Tools = () => {
  return (
    <SectionLayout
      size="lg"
      className="flex flex-col items-center justify-center"
      id="Tools"
    >
      <LayoutHeader>
        <LayoutTitle>All my tools</LayoutTitle>
        <LayoutDescription>
          <Typography className="max-w-2xl leading-relaxed text-zinc-400">
            Over the years, I've explored many languages and frameworks,
            evolving from my first JavaScript scripts to complex full stack
            projects in Next.js, Nuxt, Golang and .Net. Each project has taught
            me valuable lessons, from user authentication management user
            authentication, optimizing performance, and creating fluid,
            intuitive user interfaces.
          </Typography>
        </LayoutDescription>
      </LayoutHeader>

      <div className="max-w-lg">
        <IconCloud iconSlugs={slugs} />
      </div>
    </SectionLayout>
  );
};
