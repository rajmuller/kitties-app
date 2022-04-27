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
    <main className="relative mt-16 flex min-h-[calc(100vh_-_131px)] items-start justify-center">
      <div className="absolute top-0 left-0 h-full w-full bg-[url('/rainbow.png')] bg-center bg-no-repeat opacity-20" />
      <div className="relative flex w-full flex-col flex-wrap items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-9xl">Rein Kitties</p>
          <p className="text-4xl text-neutral-600">
            Collect and Breed Furry Friends
          </p>
        </div>
        <div className="relative w-full max-w-4xl pt-[20%]">
          <Image
            src="/cat-home.png"
            layout="fill"
            objectFit="contain"
            alt="cats"
          />
        </div>
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
