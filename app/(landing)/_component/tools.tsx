import {
  LayoutDescription,
  LayoutHeader,
  LayoutTitle,
} from "@components/layout/layout";
import { SectionLayout } from "@components/layout/SectionLayout";
import IconCloud from "@components/logo/cloudIcon";
import { Typography } from "@ui/typography";
import { getTranslations } from "next-intl/server";

const slugs = [
  "typescript",
  "trello",
  "javascript",
  "dbeaver",
  "react",
  "html5",
  "css3",
  "github",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "stripe",
  "postgresql",
  "nginx",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "gitlab",
  "sonarqube",
  "figma",
  "vercel",
  "dotnet",
  "reacthookform",
  "reactquery",
  "zod",
  "tailwindcss",
  "shadcnui",
  "framer",
  "2fas",
];

export const Tools = async () => {
  const t = await getTranslations("Tools");
  return (
    <SectionLayout
      size="lg"
      className="flex flex-col items-center justify-center"
      id="Tools"
    >
      <LayoutHeader>
        <LayoutTitle>{t("Title")}</LayoutTitle>
        <LayoutDescription>
          <Typography className="max-w-2xl leading-relaxed text-zinc-400">
            {t("Description")}
          </Typography>
        </LayoutDescription>
      </LayoutHeader>

      <div className="max-w-lg">
        <IconCloud iconSlugs={slugs} />
      </div>
    </SectionLayout>
  );
};
