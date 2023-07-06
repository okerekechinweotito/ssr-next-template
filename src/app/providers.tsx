'use client';

import { CacheProvider as ChakraCacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider as JotaiProvider } from 'jotai';

import theme from '@/styles/theme';

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

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
