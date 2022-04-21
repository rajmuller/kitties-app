import { useEthers } from "@usedapp/core";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "../components";
import { WalletButton } from "../components/Wallet";

const Home: NextPage = () => {
  const { account } = useEthers();
  const { push } = useRouter();

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="relative flex w-full flex-col flex-wrap items-center justify-center gap-8 bg-teal-100 py-24">
        <span className="text-7xl">Welcome to Rein Kitties</span>
        <Image src="/cats/welcome.png" width={962} height={276} alt="cat1" />
        {account ? (
          <Button
            onClick={() => push("/market")}
            className="bg-orange-500 px-12 py-4 text-5xl"
          >
            Market
          </Button>
        ) : (
          <WalletButton className="px-12 py-4 text-5xl"></WalletButton>
        )}
      </div>
    </main>
  );
};

export default Home;
