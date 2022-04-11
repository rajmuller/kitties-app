import "@fontsource/mouse-memoirs";
import { ChainId, Config, DAppProvider } from "@usedapp/core";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/cat.css";
import "../styles/globals.css";

const config: Config = {
  readOnlyChainId: ChainId.Hardhat,
  // readOnlyChainId:
  //   process.env.NEXT_PUBLIC_MUMBAI_ENDPOINT === "local"
  //     ? ChainId.Hardhat
  //     : process.env.NEXT_PUBLIC_MUMBAI_ENDPOINT === "testnet"
  //     ? ChainId.Mumbai
  //     : ChainId.Polygon,
  readOnlyUrls: {
    [ChainId.Hardhat]: "http://127.0.0.1:8545/",
    [ChainId.Mumbai]: process.env.NEXT_PUBLIC_MUMBAI_ENDPOINT as string,
    [ChainId.Polygon]: process.env.NEXT_PUBLIC_POLYGON_ENDPOINT as string,
  },
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Kitties</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DAppProvider config={config}>
        <Component {...pageProps} />;
      </DAppProvider>
    </>
  );
};

export default MyApp;
