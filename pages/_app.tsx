import "@fontsource/mouse-memoirs";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/cat.css";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Kitties</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
};

export default MyApp;
