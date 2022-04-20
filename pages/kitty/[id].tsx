import { useEthers } from "@usedapp/core";
import { formatEther } from "ethers/lib/utils";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaHashtag } from "react-icons/fa";
import { GiDna1 } from "react-icons/gi";
import { Button, Cat, Loader, Logo, Spinner } from "../../components";
import { NATIVE_CURRENCY } from "../../config";
import {
  useGetCatByIdQuery,
  useGetOfferByIdQuery,
} from "../../lib/graphql/generated";
import {
  useBuyKitty,
  useChainId,
  useCreateListing,
  useIsApprovedForAll,
  useRemoveListing,
  useSetApprovalForAll,
} from "../../lib/hooks";
import { DNA } from "../../types";

const Kitty: NextPage = () => {
  const [tab, setTab] = useState<"colors" | "cattributes">("colors");
  const [price, setPrice] = useState("");

  const router = useRouter();
  const id = router.query.id as string | undefined;

  const { account } = useEthers();
  const address = account?.toLowerCase();

  const chainId = useChainId();

  const isApprovedForAll = useIsApprovedForAll(account);
  const { data: offerData } = useGetOfferByIdQuery(
    { id: id as string },
    { enabled: !!id, refetchInterval: 1000 }
  );
  const { data: catData, status: catStatus } = useGetCatByIdQuery(
    { id: id as string },
    { enabled: !!id }
  );

  console.log({ offerData });

  const { onApprove, state: approvalState } = useSetApprovalForAll(true);
  const { onCreateListing, state: createState } = useCreateListing(price, id);
  const { onRemoveListing, state: removeState } = useRemoveListing(id);
  const { onBuy, state: buyState } = useBuyKitty(offerData?.offer?.price, id);

  if (catStatus === "loading") {
    return <Loader />;
  }

  if (!catData?.cat) {
    return (
      <main className="max-w-container mx-auto mt-16 flex flex-col items-center justify-center">
        <div className="text-neutral-600">
          <p className="mb-4 text-4xl text-black">
            Oh Oh, this cat does not exist
          </p>
          <span>head over to </span>
          <Link href="/factory">
            <a className="text-3xl font-semibold text-teal-800">Factory</a>
          </Link>
          <span> to create a Gen0</span>
          <p>Or</p>
          <span>browse the </span>
          <Link href="/market">
            <a className="text-3xl font-semibold text-teal-800">Market</a>
          </Link>
          <span> to buy a cat for sale</span>
        </div>
      </main>
    );
  }

  const isMine = address === catData?.cat.owner.id;
  const onSale = offerData?.offer?.active;
  const { dna } = catData.cat;

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-full flex-wrap items-center justify-center gap-16 py-12">
        <div className="rounded-md bg-rainbow p-1 shadow-2xl">
          <div className="relative flex items-center justify-center rounded-md bg-white p-32 ">
            <Cat dna={dna as DNA} className="scale-[105%]" />
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
                {onSale ? "Listed" : "Owned"}
              </div>
            )}

            {!isMine && onSale && (
              <div className="border-rain absolute -top-8 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-md border px-6 py-2 text-5xl uppercase shadow-xl">
                <Logo className="h-8 w-8" ticker={NATIVE_CURRENCY[chainId]} />
                <span>{formatEther(offerData.offer?.price)}</span>
              </div>
            )}

            <div className="flex items-center gap-1 text-3xl text-neutral-500">
              <GiDna1 className="text-2xl" />
              <p>Gen</p>
              <span className="text-4xl">{catData.cat.generation}</span>
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
            {isApprovedForAll == undefined && !onSale && (
              <Button
                disabled
                className="flex flex-1 items-center justify-center capitalize text-teal-400"
              >
                <Spinner />
              </Button>
            )}

            {!isApprovedForAll && !onSale && isMine && (
              <Button
                disabled={["Mining", "PendingSignature"].includes(
                  approvalState.status
                )}
                onClick={onApprove}
                className="flex-1 bg-teal-400 capitalize"
              >
                Approve to sell
              </Button>
            )}

            {isApprovedForAll && !onSale && (
              <>
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
                <Button
                  disabled={
                    price <= "0" ||
                    ["Mining", "PendingSignature"].includes(createState.status)
                  }
                  onClick={onCreateListing}
                  className="flex-1 bg-teal-400 capitalize"
                >
                  Sell
                </Button>
              </>
            )}

            {onSale && !isMine && (
              <Button
                disabled={
                  !offerData.offer?.price ||
                  ["Mining", "PendingSignature"].includes(buyState.status)
                }
                onClick={onBuy}
                className="flex-1 bg-teal-400 capitalize"
              >
                Buy Kitty
              </Button>
            )}

            {onSale && isMine && (
              <Button
                onClick={onRemoveListing}
                disabled={["Mining", "PendingSignature"].includes(
                  removeState.status
                )}
                className="flex-1 bg-teal-400 capitalize"
              >
                Remove Listing
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kitty;
