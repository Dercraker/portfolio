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
      title: "MapTiles Cutter",
      description: t("MapTilesCutter.Description"),
      image: "/images/projects/algochurn.png",
      stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
      link: "https://github.com/Dercraker/MapTilesCutter",
    },
    {
      title: "EmojiGenerator",
      description: t("EmojiGenerator.Description"),
      image: "/images/projects/Emojigenerator.png",
      stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
      link: "https://github.com/Dercraker/EmojiGenerator",
    },
    {
      title: "From-A2B",
      description: t("FromA2B.Description"),
      image: "/images/projects/From-A2B.png",
      stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
      link: "https://github.com/Dercraker/From-A2B",
    },
    {
      title: "Staracter",
      description: t("Staracter.Description"),
      image: "/images/projects/staracter.png",
      stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
      link: "https://github.com/Dercraker/Staracter",
    },
    {
      title: "Motdle",
      description: t("Motdle.Description"),
      image: "/images/projects/motdle.png",
      stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
      link: "https://github.com/Dercraker/Motdle",
    },
    {
      title: "SnakeGame",
      description: t("SnakeGame.Description"),
      image: "/images/projects/snakeGame.gif",
      stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
      link: "https://github.com/Dercraker/SnakeGame",
    },
    {
      title: "StarTrad",
      description: t("StarTrad.Description"),
      image: "/images/projects/starTrad.png",
      stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
      link: "https://github.com/circuslisoir/StarTrad",
    },
    {
      title: "Forza Horizon 5 Interactive Live Map",
      description: t("ForzaHorizon5InteractiveLiveMap.Description"),
      image: "/images/projects/fh5LiveMap.png",
      stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
      link: "https://github.com/Forza-Horizon-5-Interactive-Live-Map",
    },
    {
      title: "GuanajuatoRP",
      description: t("GuanajuatoRP.Description"),
      image: "/images/projects/guanajuato.png",
      stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
      link: "https://github.com/GuanajuatoRP",
    },
  ];
};
