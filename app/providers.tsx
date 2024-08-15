"use client";

import { Toaster } from "@/components/ui/sonner";
import { DialogRenderer } from "@/features/dialogs-provider/DialogProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <DialogRenderer />
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  );
};
