"use client";

import AutoForm from "@/components/ui/auto-form";
import { Button } from "@/components/ui/button";
import { Card, cardVariants } from "@/components/ui/card";
import { Loader } from "@/components/ui/loader";
import { Typography } from "@/components/ui/typography";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { type ComponentPropsWithoutRef } from "react";
import { toast } from "sonner";
import { ContactFormAction } from "./ContactForm.action";
import { ContactFormSchema } from "./ContactForm.schema";

export type ContactFormProps =
  ComponentPropsWithoutRef<"div"> & {} & cardVariants;

export const ContactForm = ({ ...props }: ContactFormProps) => {
  const router = useRouter();

  const { isPending, mutateAsync } = useMutation({
    mutationKey: ["SendMail"],
    mutationFn: async (values: ContactFormSchema) => {
      const result = await ContactFormAction(values);
      if (!result || result.serverError)
        return toast.error(
          "Une erreur est survenue merci de réessayer plus tard.",
        );

      toast.success("Votre message à bien été envoyé");
      return router.refresh();
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
        {isPending ? (
          <Button disabled>
            <Loader className="mx-2" />
          </Button>
        ) : (
          <Button type="submit" className="hover:translate-y-0.5">
            Envoyer
          </Button>
        )}
      </AutoForm>
    </Card>
  );
};
