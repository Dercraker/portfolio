"use server";

import { action } from "@lib/actions/safeActions";
import { env } from "@lib/env/server";
import { sendEmail } from "@lib/mail/sendEmail";
import { ContactFormSchema } from "./contactForm.schema";

export const ContactAction = action
  .schema(ContactFormSchema)
  .action(async ({ parsedInput: { email, message, messageCopy } }) => {
    await sendEmail({
      to: env.RESEND_EMAIL_TO,
      ...(messageCopy && { cc: email }),
      subject: `${!messageCopy && "[Portfolio]"} Contact from portfolio`,
      text: `Email: ${email}\nMessage: ${message}`,
    });
  });
