"use client";

import { useTranslations } from "next-intl";
import { z } from "zod";
import { stack } from "./stack";

export const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string().url(),
  stack: z.array(z.string()),
  link: z.string().url(),
});

export type ProjectSchemaType = z.infer<typeof ProjectSchema>;

export const GetProjects = () => {
  const t = useTranslations("Projects");

  return [
    {
      title: "EmojiGenerator",
      description: t("EmojiGenerator.Description"),
      image: "/images/projects/algochurn.png",
      stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
      link: "https://github.com/Dercraker/EmojiGenerator",
    },
    {
      title: "TechMotion",
      description: t("TechMotion.Description"),
      image: "/images/projects/algochurn.png",
      stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
      link: "https://github.com/Dercraker/Boilerplate",
    },
    {
      title: "From-A2B",
      description: t("FromA2B.Description"),
      image: "/images/projects/algochurn.png",
      stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
      link: "https://github.com/Dercraker/From-A2B",
    },
    {
      title: "Staracter",
      description: t("Staracter.Description"),
      image: "/images/projects/algochurn.png",
      stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
      link: "https://github.com/Dercraker/Motdle",
    },
    {
      title: "Motdle",
      description: t("Motdle.Description"),
      image: "/images/projects/algochurn.png",
      stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
      link: "https://github.com/Dercraker/EmojiGenerator",
    },
    {
      title: "SnakeGame",
      description: t("SnakeGame.Description"),
      image: "/images/projects/algochurn.png",
      stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
      link: "https://github.com/Dercraker/SnakeGame",
    },
    {
      title: "StarTrad",
      description: t("StarTrad.Description"),
      image: "/images/projects/aceternity.png",
      stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
      link: "https://github.com/circuslisoir/StarTrad",
    },

    {
      title: "GameTrip",
      description: t("GameTrip.Description"),
      image: "/images/projects/tailwindmasterkit.png",
      stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
      link: "https://tailwindmasterkit.com",
    },
    {
      title: "Forza Horizon 5 Interactive Live Map",
      description: t("ForzaHorizon5InteractiveLiveMap.Description"),
      image: "/images/projects/boxshadows.png",
      stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
      link: "https://github.com/Forza-Horizon-5-Interactive-Live-Map",
    },
    {
      title: "GuanajuatoRP",
      description: t("GuanajuatoRP.Description"),
      image: "/images/projects/placeholdertech.png",
      stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
      link: "https://github.com/GuanajuatoRP",
    },
  ];
};
