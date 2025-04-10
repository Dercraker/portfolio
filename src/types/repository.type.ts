import { z } from "zod";

export const repositorySchema = z.object({
  id: z.number(),
  node_id: z.string(),
  name: z.string(),
  full_name: z.string(),
  private: z.boolean(),
  owner: z.object({
    id: z.number(),
    node_id: z.string(),
    login: z.string(),
    avatar_url: z.string(),
    type: z.string(),
  }),
  html_url: z.string(),
  description: z.string().nullable(),
  fork: z.boolean(),
  forks_count: z.number().optional(),
  stargazers_count: z.number().optional(),
  language: z.string().optional(),
  size: z.number().optional(),
  watchers_count: z.number().optional(),
  visibility: z.string().optional(),
  source: z
    .object({
      full_name: z.string(),
    })
    .optional(),
});

export type Repository = z.infer<typeof repositorySchema>;
