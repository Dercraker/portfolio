import { z } from "zod";

export const GetCharacterCountSchema = z.object({
  userId: z.string(),
});

export type GetCharacterCountSchema = z.infer<typeof GetCharacterCountSchema>;
