import { GeistSans } from "geist/font/sans";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import "~/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={GeistSans.className}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  );
}

export default MyApp;
