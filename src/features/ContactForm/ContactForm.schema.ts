import { z } from "zod";

export const ContactFormSchema = z.object({
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
  copy: z
    .boolean()
    .default(true)
    .optional()
    .describe("Recevoir une copie du mail"),
});

export type ContactFormSchema = z.infer<typeof ContactFormSchema>;
