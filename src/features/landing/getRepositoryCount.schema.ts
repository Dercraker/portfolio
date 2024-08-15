import { z } from "zod";

export const GetRepositoryCountSchema = z.object({
  userId: z.string(),
});

export type GetRepositoryCountSchema = z.infer<typeof GetRepositoryCountSchema>;
