"use server";

import { sendEmail } from "@/lib/mail/sendEmail";
import { action } from "@/lib/safeAction";
import { SiteConfig } from "@/site-config";
import { ContactFormSchema } from "./ContactForm.schema";

export const ContactFormAction = action
  .schema(ContactFormSchema)
  .action(async ({ parsedInput: { email, subject, message, copy } }) => {
    await sendEmail({
      to: SiteConfig.email.contact,
      subject: `[Portfolio] - Contact ${subject}`,
      text: message,
      reply_to: email,
      cc: copy ? email : undefined,
    });
  });
