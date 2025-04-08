"use client";

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
import { MessageSquareShare } from "lucide-react";
import { toast } from "sonner";

export const ContactDialog = () => {
  const [isOpen, { close, toggle }] = useDisclosure(false);

  const form = useZodForm({
    schema: ContactFormSchema,
    defaultValues: {
      email: "antoine.capitain+test@gmail.com",
      message: "Hello, how are you?",
      messageCopy: false,
    },
    mode: "onBlur",
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () => {
      const result = await ContactAction(form.getValues());

      console.log("🚀 ~ mutationFn: ~ toast:", toast);

      if (!isActionSuccessful(result)) {
        toast.error("Failed to send email", {
          description: "Please try again later or contact us directly",
        });
        return;
      }

      close();
      toast.success("Email sent successfully");
    },
  });

  return (
    <Popover open={isOpen} onOpenChange={toggle}>
      <InlineTooltip title="Contact Us">
        <PopoverTrigger asChild>
          <Button className="fixed bottom-4 right-16 z-50 rounded-full cursor-pointer">
            <MessageSquareShare className="size-5" />
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
            <Typography variant="h2">Need to contact us?</Typography>
            <Typography variant="muted">
              Fill out the form below and we will get back to you as soon as
              possible.
            </Typography>
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
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
                <FormLabel>Message</FormLabel>
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
                <FormLabel>Send a copy to my email</FormLabel>
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
            Send
          </SubmitButton>
        </Form>
      </PopoverContent>
    </Popover>
  );
};
