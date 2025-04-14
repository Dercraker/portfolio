"use client";

import { ConversationConsultationIcon } from "@components/animatedIcon/conversationConsultation.icon";
import { SubmitButton } from "@components/form/submitButton";
import { ContactAction } from "@feat/contact/contact.action";
import { ContactFormSchema } from "@feat/contact/contactForm.schema";
import { useDisclosure } from "@hooks/useDisclosure";
import { isActionSuccessful } from "@lib/actions/actionUtils";
import { cn } from "@lib/utils";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@ui/button";
import { Checkbox } from "@ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from "@ui/form";
import { Input } from "@ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@ui/popover";
import { Textarea } from "@ui/textarea";
import { InlineTooltip } from "@ui/tooltip";
import { Typography } from "@ui/typography";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

export const ContactDialog = () => {
  const t = useTranslations("Contact");
  const [isOpen, { close, toggle }] = useDisclosure(false);

  const form = useZodForm({
    schema: ContactFormSchema,
    defaultValues: {
      messageCopy: false,
    },
    mode: "onBlur",
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () => {
      const result = await ContactAction(form.getValues());

      if (!isActionSuccessful(result)) {
        toast.error(t("Error"), {
          description: t("ErrorDescription"),
        });
        return;
      }

      close();
      toast.success(t("Success"));
    },
  });

  return (
    <Popover open={isOpen} onOpenChange={toggle}>
      <InlineTooltip title="Contact Us">
        <PopoverTrigger asChild>
          <Button className="fixed right-3 bottom-3 z-50 size-12 cursor-pointer rounded-full">
            <ConversationConsultationIcon
              size={32}
              colorize="var(--secondary)"
            />
          </Button>
        </PopoverTrigger>
      </InlineTooltip>
      <PopoverContent className="mr-6 w-full max-w-xs md:max-w-md">
        <Form
          onSubmit={async () => mutateAsync()}
          form={form}
          className="space-y-4"
        >
          <div>
            <Typography variant="h2">{t("Title")}</Typography>
            <Typography variant="muted">{t("Description")}</Typography>
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("Email")}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="your@email.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("Message")}</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Your message here" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="messageCopy"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormLabel>{t("Copy")}</FormLabel>
                <FormControl>
                  <Checkbox
                    {...field}
                    onCheckedChange={(state) => field.onChange(state)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <SubmitButton
            className={cn("opacity-0", form.formState.isValid && "opacity-100")}
            isLoading={isPending}
          >
            {t("Button")}
          </SubmitButton>
        </Form>
      </PopoverContent>
    </Popover>
  );
};
