import { z } from "zod";

export const githubEventSchema = z.object({
  id: z.string(),
  type: z.string().nullable(),
  repo: z.object({
    id: z.number(),
    name: z.string(),
    url: z.string(),
  }),
});

export type GithubEvent = z.infer<typeof githubEventSchema>;
