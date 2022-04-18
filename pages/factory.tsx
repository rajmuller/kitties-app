import { formatEther } from "ethers/lib/utils";
import type { NextPage } from "next";
import { ChangeEvent, useCallback, useState } from "react";
import { GiChemicalDrop } from "react-icons/gi";
import { Cat, Logo, Spinner } from "../components";
import { Button } from "../components/Ui";
import { NATIVE_CURRENCY } from "../config";
import { useChainId, useCreateGen0Kitty, useGen0Price } from "../lib/hooks";
import { DNA, From10To15, From10To16, From10To19, From10To99 } from "../types";

const generateRandom = (min = 0, max = 100) => {
  const difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;

  return rand.toString();
};

const Factory: NextPage = () => {
  const [dna, setDna] = useState<DNA>({
    bodyColor: "10",
    mouthTailColor: "10",
    eyeColor: "10",
    earPawColor: "10",
    eyeShape: "10",
    pattern: "10",
    patternColor: "10",
    animation: "10",
  });
  const [tab, setTab] = useState<"colors" | "cattributes">("colors");

  const price = useGen0Price();
  const chainId = useChainId();
  const { onCreate } = useCreateGen0Kitty(dna);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const changedDna = e.target.id as keyof DNA;

      setDna({ ...dna, [changedDna]: e.target.value });
    },
    [dna]
  );

  const onRandomize = useCallback(() => {
    setDna({
      bodyColor: generateRandom(10) as From10To99,
      mouthTailColor: generateRandom(10) as From10To99,
      eyeColor: generateRandom(10) as From10To99,
      earPawColor: generateRandom(10) as From10To99,
      eyeShape: generateRandom(10, 20) as From10To19,
      pattern: generateRandom(10, 17) as From10To16,
      patternColor: generateRandom(10) as From10To99,
      animation: generateRandom(10, 16) as From10To15,
    });
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-full flex-wrap items-center justify-center gap-16 py-12">
        <div className="rounded-md bg-rainbow p-1 shadow-xl">
          <div className="relative flex items-center justify-center rounded-md bg-white p-32 ">
            <Cat dna={dna} className="scale-[100%]" />
            <p className="absolute bottom-8 left-8 mt-4 text-3xl">
              {`DNA: ${dna.bodyColor} ${dna.mouthTailColor} ${dna.eyeColor} ${dna.earPawColor} ${dna.eyeShape} ${dna.pattern} ${dna.patternColor} ${dna.animation}`}
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-2xl">
          <div className="mb-8 flex justify-between">
            <div className="flex items-end gap-2">
              <p className="text-4xl">Factory</p>
              <GiChemicalDrop size={36} className="text-teal-400" />
            </div>
            <div className="flex items-center gap-2">
              {price ? (
                <>
                  <Logo className="h-9 w-9" ticker={NATIVE_CURRENCY[chainId]} />
                  <p className="text-3xl">{`${formatEther(price)}`}</p>
                </>
              ) : (
                <Spinner />
              )}
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
          <div className="flex w-96 flex-col gap-8">
            {tab === "colors" ? (
              <>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4 text-2xl">
                    <label htmlFor="bodyColor">Body and Face Color</label>
                    <p className="rounded-lg bg-teal-500/20 px-4 py-1">
                      <span>code: </span>
                      {dna.bodyColor}
                    </p>
                  </div>
                  <input
                    value={dna.bodyColor}
                    onChange={onChange}
                    min="10"
                    max="99"
                    id="bodyColor"
                    type="range"
                    className="slider-thumb form-range h-2 w-full appearance-none bg-teal-300 p-0 focus:shadow-none focus:outline-none focus:ring-0"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4 text-2xl">
                    <label htmlFor="mouthTailColor">Mouth and Tail Color</label>
                    <p className="rounded-lg bg-teal-500/20 px-4 py-1">
                      <span>code: </span>
                      {dna.mouthTailColor}
                    </p>
                  </div>
                  <input
                    value={dna.mouthTailColor}
                    onChange={onChange}
                    min="10"
                    max="99"
                    id="mouthTailColor"
                    type="range"
                    className="slider-thumb form-range h-2 w-full appearance-none bg-teal-300 p-0 focus:shadow-none focus:outline-none focus:ring-0"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4 text-2xl">
                    <label htmlFor="eyeColor">Eye Color</label>
                    <p className="rounded-lg bg-teal-500/20 px-4 py-1">
                      <span>code: </span>
                      {dna.eyeColor}
                    </p>
                  </div>
                  <input
                    value={dna.eyeColor}
                    onChange={onChange}
                    min="10"
                    max="99"
                    id="eyeColor"
                    type="range"
                    className="slider-thumb form-range h-2 w-full appearance-none bg-teal-300 p-0 focus:shadow-none focus:outline-none focus:ring-0"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4 text-2xl">
                    <label htmlFor="earPawColor">Ear and Paw Color</label>
                    <p className="rounded-lg bg-teal-500/20 px-4 py-1">
                      <span>code: </span>
                      {dna.earPawColor}
                    </p>
                  </div>
                  <input
                    value={dna.earPawColor}
                    onChange={onChange}
                    min="10"
                    max="99"
                    id="earPawColor"
                    type="range"
                    className="slider-thumb form-range h-2 w-full appearance-none bg-teal-300 p-0 focus:shadow-none focus:outline-none focus:ring-0"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4 text-2xl">
                    <label htmlFor="eyeShape">Eye Shape</label>
                    <p className="rounded-lg bg-teal-500/20 px-4 py-1">
                      <span>code: </span>
                      {dna.eyeShape}
                    </p>
                  </div>
                  <input
                    value={dna.eyeShape}
                    onChange={onChange}
                    min="10"
                    max="19"
                    id="eyeShape"
                    type="range"
                    className="slider-thumb form-range h-2 w-full appearance-none bg-teal-300 p-0 focus:shadow-none focus:outline-none focus:ring-0"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4 text-2xl">
                    <label htmlFor="pattern">Pattern</label>
                    <p className="rounded-lg bg-teal-500/20 px-4 py-1">
                      <span>code: </span>
                      {dna.pattern}
                    </p>
                  </div>
                  <input
                    value={dna.pattern}
                    onChange={onChange}
                    min="10"
                    max="16"
                    id="pattern"
                    type="range"
                    className="slider-thumb form-range h-2 w-full appearance-none bg-teal-300 p-0 focus:shadow-none focus:outline-none focus:ring-0"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4 text-2xl">
                    <label htmlFor="patternColor">Pattern Color</label>
                    <p className="rounded-lg bg-teal-500/20 px-4 py-1">
                      <span>code: </span>
                      {dna.patternColor}
                    </p>
                  </div>
                  <input
                    value={dna.patternColor}
                    onChange={onChange}
                    min="10"
                    max="99"
                    id="patternColor"
                    type="range"
                    className="slider-thumb form-range h-2 w-full appearance-none bg-teal-300 p-0 focus:shadow-none focus:outline-none focus:ring-0"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4 text-2xl">
                    <label htmlFor="animation">Animation</label>
                    <p className="rounded-lg bg-teal-500/20 px-4 py-1">
                      <span>code: </span>
                      {dna.animation}
                    </p>
                  </div>
                  <input
                    value={dna.animation}
                    onChange={onChange}
                    min="10"
                    max="15"
                    id="animation"
                    type="range"
                    className="slider-thumb form-range h-2 w-full appearance-none bg-teal-300 p-0 focus:shadow-none focus:outline-none focus:ring-0"
                  />
                </div>
              </>
            )}
          </div>
          <div className="mt-8 flex items-center justify-center gap-8">
            <Button
              onClick={onRandomize}
              className="flex-1 border border-teal-400"
            >
              Randomize
            </Button>
            <Button
              disabled={!price || !onCreate}
              onClick={onCreate}
              className="flex-1 bg-teal-400"
            >
              Create
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Factory;
