import { GeistSans } from "geist/font/sans";
import { type AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import "~/styles/globals.css";

function MyApp({
  Component,
  pageProps,
}: AppProps<{ session: Session | null }>) {
  return (
    <main className={GeistSans.className}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  );
}

export default MyApp;
