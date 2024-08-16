import { z } from "zod";

export const githubUserOrganisation = z.object({
  login: z.string(),
  id: z.number(),
  node_id: z.string(),
  url: z.string(),
  repos_url: z.string(),
  events_url: z.string(),
  hooks_url: z.string(),
  issues_url: z.string(),
  members_url: z.string(),
  public_members_url: z.string(),
  avatar_url: z.string(),
  description: z.string().optional(),
});

export type githubUserOrganisation = z.infer<typeof githubUserOrganisation>;
