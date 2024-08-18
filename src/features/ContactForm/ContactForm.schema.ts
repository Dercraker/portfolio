import { z } from "zod";

export const ContactFormSchema = z.object({
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

export type ContactFormSchema = z.infer<typeof ContactFormSchema>;
