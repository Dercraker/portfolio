import { SectionLayout } from "@/components/layout/SectionLayout";
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
      className="flex flex-col items-center justify-center"
      id="Tools"
    >
      <Typography className="max-w-2xl leading-relaxed">
        Au fil des années, j'ai exploré de nombreux langages et frameworks,
        évoluant de mes premiers scripts JavaScript vers des projets full stack
        complexes en Next.js et .NET. Chaque projet m'a enseigné des leçons
        précieuses, qu'il s'agisse de la gestion de l'authentification
        utilisateur, de l'optimisation des performances, ou encore de la
        création d'interfaces utilisateurs fluides et accessibles.
      </Typography>
      <div className="max-w-lg">
        <IconCloud iconSlugs={slugs} />
      </div>
    </SectionLayout>
  );
};
