import { SectionLayout } from "@/features/landing/SectionLayout";
import IconCloud from "../magicui/icon-cloud";
import { Typography } from "../ui/typography";

const slugs = [
  "typescript",
  "trello",
  "csharp",
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
  "visualstudiocode",
  "sonarqube",
  "figma",
];

export const ToolsSection = () => {
  return (
    <SectionLayout
      size="lg"
      className="flex flex-col items-center justify-center "
    >
      <Typography
        variant="h2"
        className="cursor-default select-none text-primary underline"
      >
        My tools
      </Typography>
      <div className="max-w-lg">
        <IconCloud iconSlugs={slugs} />
      </div>
    </SectionLayout>
  );
};