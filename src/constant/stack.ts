import { z } from "zod";

export const StackItemSchema = z.object({
  name: z.string(),
  id: z.string(),
  slug: z.string(),
});

export const StackSchema = z.record(z.string(), StackItemSchema);

export type StackItemType = z.infer<typeof StackItemSchema>;
export type StackType = z.infer<typeof StackSchema>;

export const stack = {
  github: {
    name: "Github",
    id: "github",
    slug: "github",
  },
  docker: {
    name: "Docker",
    id: "docker",
    slug: "docker",
  },
  shadcnui: {
    name: "Shadcn UI",
    id: "shadcnui",
    slug: "shadcnui",
  },
  go: {
    name: "Go",
    id: "go",
    slug: "go",
  },
  discord: {
    name: "Discord",
    id: "discord",
    slug: "discord",
  },
  vue: {
    name: "Vue",
    id: "vue",
    slug: "vuedotjs",
  },
  vite: {
    name: "Vite",
    id: "vite",
    slug: "vite",
  },
  javascript: {
    name: "Javascript",
    id: "javascript",
    slug: "javascript",
  },
  googlemaps: {
    name: "Google Maps",
    id: "googlemaps",
    slug: "googlemaps",
  },
  vercel: {
    name: "Vercel",
    id: "vercel",
    slug: "vercel",
  },
  dotnet: {
    name: ".NET",
    id: "dotnet",
    slug: "dotnet",
  },
  zod: {
    name: "Zod",
    id: "zod",
    slug: "zod",
  },
  reactquery: {
    name: "React Query",
    id: "reactquery",
    slug: "reactquery",
  },
  reacthookform: {
    name: "React Hook Form",
    id: "reacthookform",
    slug: "reacthookform",
  },
  dbeaver: {
    name: "DBeaver",
    id: "dbeaver",
    slug: "dbeaver",
  },
  nextjs: {
    name: "Next.js",
    id: "nextjs",
    slug: "nextdotjs",
  },
  tailwindcss: {
    name: "Tailwind CSS",
    id: "tailwindcss",
    slug: "tailwindcss",
  },
  typescript: {
    name: "Typescript",
    id: "typescript",
    slug: "typescript",
  },
  react: {
    name: "React",
    id: "react",
    slug: "react",
  },
} satisfies StackType;
