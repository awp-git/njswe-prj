import { useRouter } from "next/router";
import Head from "next/head"; /**for future reference https://github.com/vercel/next.js/issues/13958 hopefully this doesnt happen*/

import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const pageTitles: { [key: string]: string } = {
    "/": "Food Insecurity - j.s",
    "/learn": "Learn - j.s",
    "/causes": "Causes - j.s",
    "/impact": "Impact - j.s",
    "/solutions": "Solutions - j.s",
    "/donate": "Donate - j.s",
  };

  const pageTitle = pageTitles[router.pathname] || "Food Insecurity - j.s";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
