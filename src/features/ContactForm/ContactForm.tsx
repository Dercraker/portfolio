"use client";

import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { Card, cardVariants } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { useMutation } from "@tanstack/react-query";
import type { ComponentPropsWithoutRef } from "react";
import { toast } from "sonner";
import { ContactFormAction } from "./ContactForm.action";
import { ContactFormSchema } from "./ContactForm.schema";

export type ContactFormProps =
  ComponentPropsWithoutRef<"div"> & {} & cardVariants;

export const ContactForm = ({ ...props }: ContactFormProps) => {
  const { isPending, mutateAsync } = useMutation({
    mutationKey: ["SendMail"],
    mutationFn: async (values: ContactFormSchema) => {
      const result = await ContactFormAction(values);

      console.log("🚀 ~ mutationFn: ~ serverError:", result?.serverError);

      if (!result || result.serverError)
        return toast.error(
          "Une erreur est survenue merci de réessayer plus tard.",
        );

      return toast.success("Votre message à bien été envoyé");
    },
  });

  return (
    <Card variant="default" className="px-8 py-4">
      <Typography
        variant="h2"
        className="cursor-default select-none text-center text-primary underline"
      >
        Contactez moi
      </Typography>
      <AutoForm
        formSchema={ContactFormSchema}
        onSubmit={async (v) => await mutateAsync(v)}
        fieldConfig={{
          email: {
            inputProps: {
              placeholder: "email@me.com",
            },
          },
          subject: {
            inputProps: {
              placeholder: "Collaboration ....",
            },
          },
          message: {
            fieldType: "textarea",
            inputProps: {
              placeholder: "Bonjour Antoine, je te contact pour ....",
            },
          },
        }}
      >
        <AutoFormSubmit className="hover:translate-y-0.5">
          Envoyer
        </AutoFormSubmit>
      </AutoForm>
    </Card>
  );
};
