"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { ThemeProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { type PropsWithChildren } from "react";

type ProvidersProps = PropsWithChildren<{}>;

const queryClient = new QueryClient();

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <NuqsAdapter>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools buttonPosition="top-right" />
          {children}
        </QueryClientProvider>
      </NuqsAdapter>
    </ThemeProvider>
  );
};
