"use client";

import { useTranslations } from "next-intl";
import { z } from "zod";

export const workExperienceSchema = z.object({
  company: z.string(),
  link: z.string().nullish(),
  role: z.string(),
  startDate: z.date(),
  endDate: z.date().nullish(),
  description: z.array(z.string()),
  technologies: z.array(z.string()),
  location: z.string().nullish(),
});

export type workExperienceType = z.infer<typeof workExperienceSchema>;

export const GetWorkExperience = () => {
  const t = useTranslations("WorkExperience");
  return [
    {
      company: "Elcia",
      link: "https://www.elcia.com/",
      role: t("Elcia.Role"),
      startDate: new Date("2022-06-20"),
      endDate: new Date("2025-09-19"),
      description: [
        t("Elcia.Description1"),
        t("Elcia.Description2"),
        t("Elcia.Description3"),
      ],
      technologies: [
        "dotnet",
        "React",
        "typescript",
        "nodedotjs",
        "nginx",
        "sonarqube",
        "git",
        "github",
        "docker",
        "figma",
        "dbeaver",
        "reacthookform",
        "reactquery",
        "zod",
      ],
      location: "Brignais, France",
    },
    {
      company: "TechMotion",
      role: t("TechMotion.Role"),
      startDate: new Date("2025-03"),
      endDate: null,
      description: [t("TechMotion.Description1"), t("TechMotion.Description2")],
      technologies: [
        "Next.js",
        "TypeScript",
        "tailwindcss",
        "shadcnui",
        "prisma",
        "framer",
        "vercel",
        "docker",
        "git",
        "2fas",
        "github",
        "dbeaver",
        "postgresql",
        "reacthookform",
        "reactquery",
        "zod",
      ],
    },
    {
      company: "From-A2B",
      role: t("FromA2B.Role"),
      startDate: new Date("2025-01"),
      endDate: null,
      description: [t("FromA2B.Description1")],
      technologies: [
        "Next.js",
        "TypeScript",
        "tailwindcss",
        "shadcnui",
        "prisma",
        "framer",
        "vercel",
        "git",
        "2fas",
        "github",
        "docker",
        "dbeaver",
        "postgresql",
        "reacthookform",
        "reactquery",
        "zod",
      ],
      location: "At home",
    },
    {
      company: "Codeline",
      role: t("Codeline.Role"),
      startDate: new Date("2024-12"),
      description: [t("Codeline.Description1"), t("Codeline.Description2")],
      technologies: [
        "Next.js",
        "TypeScript",
        "tailwindcss",
        "shadcnui",
        "docker",
        "prisma",
        "framer",
        "vercel",
        "git",
        "github",
      ],
    },
  ] satisfies workExperienceType[];
};
