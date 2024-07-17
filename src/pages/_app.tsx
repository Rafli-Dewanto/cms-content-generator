import { AuthContextProvider } from "@/contexts/auth-context";
import supabaseClient from "@/lib/supabase";
import "@/styles/globals.css";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { useState } from "react";
import { CookiesProvider } from "react-cookie";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <AuthContextProvider>
          <CookiesProvider>
            <NextNProgress color="#1e51af" />
            <Component {...pageProps} />
          </CookiesProvider>
        </AuthContextProvider>
      </SessionContextProvider>
    </QueryClientProvider>
  );
}
