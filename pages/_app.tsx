import "@fontsource/mouse-memoirs";
import { ChainId, Config, DAppProvider } from "@usedapp/core";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/cat.css";
import "../styles/globals.css";

const config: Config = {
  readOnlyChainId: ChainId.Mumbai,
  readOnlyUrls: {
    [ChainId.Mumbai]: process.env.NEXT_PUBLIC_MUMBAI_ENDPOINT as string,
    [ChainId.Polygon]: process.env.NEXT_PUBLIC_POLYGON_ENDPOINT as string,
  },
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Rein Kitties</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DAppProvider config={config}>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </DAppProvider>
    </>
  );
};

export default MyApp;
