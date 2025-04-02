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
