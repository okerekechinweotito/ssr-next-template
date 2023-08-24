'use client';

import { CacheProvider as ChakraCacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, useToast } from "@chakra-ui/react";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider as JotaiProvider } from "jotai";

import theme from "@/shared/styles/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  const toast = useToast();

  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error: any, query: any) => {
        if (
          query.options.hasOwnProperty("meta") &&
          query.options.meta.errorMessageToast
        ) {
          toast({
            title: "Server Error",
            description: `${query.meta.errorMessageToast}`,
            status: "error",
            duration: 9000,
            isClosable: true,
            position: "top",
          });
        } else {
          toast({
            title: "Server Error",
            description: "Fetch Aborted! Check your internet Connection",
            status: "error",
            duration: 9000,
            isClosable: true,
            position: "top",
          });
        }
      },
    }),
  });

  return (
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        <ChakraCacheProvider>
          <ChakraProvider theme={theme}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </ChakraProvider>
        </ChakraCacheProvider>
      </JotaiProvider>
    </QueryClientProvider>
  );
}
