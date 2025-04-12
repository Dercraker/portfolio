import { z } from "zod";

export const LinkedinPostTypeSchema = z.object({
  date: z.string().nullable(),
  content: z.string().nullable(),
  impressions: z.number().nullable(),
  likes: z.number().nullable(),
  shares: z.number().nullable(),
  comments: z.number().nullable(),
  url: z.string().nullable(),
});

export type LinkedinPostType = z.infer<typeof LinkedinPostTypeSchema>;
