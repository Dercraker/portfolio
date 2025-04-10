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

export const projects = [
  {
    title: "EmojiGenerator",
    description:
      "A web app that allows users to practice for front-end and UI interviews.",
    image: "/images/projects/algochurn.png",
    stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
    link: "https://github.com/Dercraker/EmojiGenerator",
  },
  {
    title: "TechMotion",
    description:
      "A web app that allows users to practice for front-end and UI interviews.",
    image: "/images/projects/algochurn.png",
    stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
    link: "https://github.com/Dercraker/Boilerplate",
  },
  {
    title: "From-A2B",
    description:
      "A web app that allows users to practice for front-end and UI interviews.",
    image: "/images/projects/algochurn.png",
    stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
    link: "https://github.com/Dercraker/From-A2B",
  },
  {
    title: "Staracter",
    description:
      "A web app that allows users to practice for front-end and UI interviews.",
    image: "/images/projects/algochurn.png",
    stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
    link: "https://github.com/Dercraker/Motdle",
  },
  {
    title: "Motdle",
    description:
      "A web app that allows users to practice for front-end and UI interviews.",
    image: "/images/projects/algochurn.png",
    stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
    link: "https://github.com/Dercraker/EmojiGenerator",
  },
  {
    title: "SnakeGame",
    description:
      "A web app that allows users to practice for front-end and UI interviews.",
    image: "/images/projects/algochurn.png",
    stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
    link: "https://github.com/Dercraker/SnakeGame",
  },
  {
    title: "StarTrad",
    description:
      "A web design and development agency that gets the job done. Somehow.",
    image: "/images/projects/aceternity.png",
    stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
    link: "https://github.com/circuslisoir/StarTrad",
  },

  {
    title: "GameTrip",
    description:
      "Buy premium tailwind components and templates for your next project.",
    image: "/images/projects/tailwindmasterkit.png",
    stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
    link: "https://tailwindmasterkit.com",
  },
  {
    title: "Forza Horizon 5 Interactive Live Map",
    description:
      "Copy and paste beautiful box shadows that stand out for your next project.",
    image: "/images/projects/boxshadows.png",
    stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
    link: "https://github.com/Forza-Horizon-5-Interactive-Live-Map",
  },
  {
    title: "GuanajuatoRP",
    description:
      "Your one-stop shop for web app needs tailored to your requirements.",
    image: "/images/projects/placeholdertech.png",
    stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
    link: "https://github.com/GuanajuatoRP",
  },
];
