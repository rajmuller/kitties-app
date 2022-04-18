import { useEthers } from "@usedapp/core";
import { parseEther } from "ethers/lib/utils";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { FaHashtag } from "react-icons/fa";
import { GiDna1 } from "react-icons/gi";
import { Button, Cat, Loader, Spinner } from "../../components";
import { NATIVE_CURRENCY } from "../../config";
import { useGetCatByIdQuery } from "../../lib/graphql/generated";
import {
  useChainId,
  useCreateListing,
  useIsApprovedForAll,
  useSetApprovalForAll,
} from "../../lib/hooks";
import { DNA } from "../../types";

const Kitty: NextPage = () => {
  const [tab, setTab] = useState<"colors" | "cattributes">("colors");
  const [price, setPrice] = useState("");

  const router = useRouter();
  const id = router.query.id as string | undefined;

  const { account } = useEthers();
  const address = account && account.toLowerCase();

  const chainId = useChainId();
  const isApprovedForAll = useIsApprovedForAll(account);
  const { data, status } = useGetCatByIdQuery(
    { id: id as string },
    { enabled: !!id }
  );

  const { onApprove } = useSetApprovalForAll(true);
  const { onCreateListing } = useCreateListing(parseEther(price || "0"), id);

  const onClick = useCallback(() => {
    if (!isApprovedForAll) {
      return onApprove();
    }

    return onCreateListing();
  }, [isApprovedForAll, onApprove, onCreateListing]);

  if (status === "loading" || !data?.cat) {
    return <Loader />;
  }

  const isMine = address === data?.cat.owner.id;
  const { dna } = data.cat;

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-full flex-wrap items-center justify-center gap-16 py-12">
        <div className="rounded-md bg-rainbow p-1 shadow-2xl">
          <div className="relative flex items-center justify-center rounded-md bg-white p-32 ">
            <Cat dna={dna as DNA} className="scale-105" />
            <p className="absolute bottom-8 left-8 mt-4 text-3xl">
              {`DNA: ${dna.bodyColor} ${dna.mouthTailColor} ${dna.eyeColor} ${dna.earPawColor} ${dna.eyeShape} ${dna.pattern} ${dna.patternColor} ${dna.animation}`}
            </p>
          </div>
        </div>
        <div className="relative rounded-2xl bg-white p-8 shadow-2xl">
          <div className="mb-8 flex items-baseline justify-between">
            <div className="flex items-center gap-1">
              <FaHashtag className="text-2xl text-teal-500" />
              <span className="text-4xl">{id}</span>
            </div>

            {isMine && (
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 -rotate-[12deg] bg-rainbow px-6 py-2 text-5xl uppercase text-white shadow-xl">
                Owned
              </div>
            )}

            <div className="flex items-center gap-1 text-3xl text-neutral-500">
              <GiDna1 className="text-2xl" />
              <p>Gen</p>
              <span className="text-4xl">{data.cat.generation}</span>
            </div>
          </div>
          <div className="mb-8 flex w-full text-3xl">
            <button
              onClick={() => setTab("colors")}
              className={`-ml-8 w-full border-b border-teal-500  pt-4 pb-2 hover:border-b-2 hover:border-teal-600 active:border-teal-700 `}
              style={
                tab === "colors"
                  ? {
                      borderBottomWidth: "2px",
                    }
                  : {}
              }
            >
              Colors
            </button>
            <button
              onClick={() => setTab("cattributes")}
              className="-mr-8 w-full border-b border-teal-500 pt-4 pb-2 hover:border-b-2  hover:border-teal-600 active:border-teal-700"
              style={
                tab === "cattributes"
                  ? {
                      borderBottomWidth: "2px",
                    }
                  : {}
              }
            >
              Cattributes
            </button>
          </div>
          <div className="flex w-96 flex-col gap-4">
            {tab === "colors" ? (
              <>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-4 text-2xl">
                    <label htmlFor="bodyColor">Body and Face Color</label>
                    <p className="rounded-lg bg-teal-500/20 px-4 py-1">
                      <span>code: </span>
                      {dna.bodyColor}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-4 text-2xl">
                    <label htmlFor="mouthTailColor">Mouth and Tail Color</label>
                    <p className="rounded-lg bg-teal-500/20 px-4 py-1">
                      <span>code: </span>
                      {dna.mouthTailColor}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-4 text-2xl">
                    <label htmlFor="eyeColor">Eye Color</label>
                    <p className="rounded-lg bg-teal-500/20 px-4 py-1">
                      <span>code: </span>
                      {dna.eyeColor}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-4 text-2xl">
                    <label htmlFor="earPawColor">Ear and Paw Color</label>
                    <p className="rounded-lg bg-teal-500/20 px-4 py-1">
                      <span>code: </span>
                      {dna.earPawColor}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-4 text-2xl">
                    <label htmlFor="eyeShape">Eye Shape</label>
                    <p className="rounded-lg bg-teal-500/20 px-4 py-1">
                      <span>code: </span>
                      {dna.eyeShape}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-4 text-2xl">
                    <label htmlFor="pattern">Pattern</label>
                    <p className="rounded-lg bg-teal-500/20 px-4 py-1">
                      <span>code: </span>
                      {dna.pattern}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-4 text-2xl">
                    <label htmlFor="patternColor">Pattern Color</label>
                    <p className="rounded-lg bg-teal-500/20 px-4 py-1">
                      <span>code: </span>
                      {dna.patternColor}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-4 text-2xl">
                    <label htmlFor="animation">Animation</label>
                    <p className="rounded-lg bg-teal-500/20 px-4 py-1">
                      <span>code: </span>
                      {dna.animation}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="mt-8 flex items-center justify-center gap-8">
            {isApprovedForAll && (
              <div className="relative flex-1 rounded-md border border-teal-500">
                <input
                  type="number"
                  className="flex-1 bg-transparent py-2 pl-6 outline-teal-500"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <div className="absolute right-2 bottom-0 mb-2">
                  {NATIVE_CURRENCY[chainId]}
                </div>
              </div>
            )}
            {isApprovedForAll == undefined ? (
              <Button
                disabled
                className="flex flex-1 items-center justify-center capitalize text-teal-400"
              >
                <Spinner />
              </Button>
            ) : (
              <Button
                disabled={
                  isApprovedForAll == undefined ||
                  (isApprovedForAll && price <= "0")
                }
                onClick={onClick}
                className="flex-1 bg-teal-400 capitalize"
              >
                {isApprovedForAll ? "Sell" : "Approve to sell"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kitty;
