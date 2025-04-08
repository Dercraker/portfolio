import { z } from "zod";

export const LinkedinPostTypeSchema = z.object({
  date: z.string(),
  content: z.string(),
  impressions: z.number().nullable(),
  likes: z.number().nullable(),
  shares: z.number().nullable(),
  comments: z.number().nullable(),
  url: z.string(),
});

export type LinkedinPostType = z.infer<typeof LinkedinPostTypeSchema>;
