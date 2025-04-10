import { z } from "zod";

export const ContactFormSchema = z.object({
  email: z.string().email(),
  message: z.string().min(1),
  messageCopy: z.boolean().default(false),
});

export type ContactFormSchema = z.infer<typeof ContactFormSchema>;
