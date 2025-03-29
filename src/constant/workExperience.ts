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
  image: z.string().nullish(),
});

export type workExperienceType = z.infer<typeof workExperienceSchema>;

export const workExperience = [
  {
    company: "Elcia",
    link: "https://www.elcia.com/",
    role: "Apprenticeship Full Stack Developer",
    startDate: new Date("2022-06-20"),
    endDate: new Date("2025-09-19"),
    description: [
      "Creation of an internal internationalization system.",
      "Creation of an API for calculating eco-participation on invoices.",
      "Maintenance and evolution of an order service.",
    ],
    technologies: ["C#", ".Net", "SQL Server", "React", "Azure", "CI/CD"],
    location: "Brignais, France",
  },
  {
    company: "TechMotion",
    role: "Co-Founder",
    startDate: new Date("2025-03"),
    endDate: null,
    description: [
      "Creation of a boilerplate for Next.js projects with Shadcn UI, Prisma ORM, Framer Motion, BetterAuth and Vercel.",
      "Creation of trainings on Next.js and the boilerplates.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Prisma ORM",
      "Framer Motion",
      "BetterAuth",
      "Vercel",
    ],
  },
  {
    company: "From-A2B",
    role: "Freelance Full Stack",
    startDate: new Date("2024-12"),
    description: ["Creation of a travel planning application"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Prisma ORM",
      "Framer Motion",
      "BetterAuth",
      "Vercel",
    ],
    location: "At home",
  },
  {
    company: "Codeline",
    role: "Freelance Full Stack",
    startDate: new Date("2024-12"),
    description: [
      "Maintenance of an online training platform",
      "Setting up a progress tracking system with webhooks between the training platform and Discord.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Prisma ORM",
      "Framer Motion",
      "Vercel",
    ],
  },
] satisfies workExperienceType[];
