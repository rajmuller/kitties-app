import type { NextPage } from "next";
import { ChangeEvent, useCallback, useState } from "react";
import { Cat } from "../components";
import { DNA } from "../types";

const Factory: NextPage = () => {
  const [dna, setDna] = useState<DNA>({
    bodyColor: "10",
    mouthTailColor: "0",
    eyeColor: "0",
    earPawColor: "0",
    eyeShape: "0",
    pattern: "0",
    patternColor: "0",
    animation: "0",
  });
  const [tab, setTab] = useState<"colors" | "cattributes">("colors");

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const changedDna = e.target.id as keyof DNA;

      setDna({ ...dna, [changedDna]: e.target.value });
    },
    [dna]
  );

  return (
    <div className=" flex h-screen w-full flex-wrap items-center justify-center gap-16">
      <div className="relative flex items-center justify-center rounded-2xl bg-slate-300 p-32">
        <Cat
          bodyColor={dna.bodyColor}
          mouthTailColor={dna.mouthTailColor}
          eyeColor={dna.eyeColor}
          earPawColor={dna.earPawColor}
          eyeShape={dna.eyeShape}
          pattern={dna.pattern}
          patternColor={dna.patternColor}
          animation={dna.animation}
        />
        <p className="absolute bottom-8 left-8 mt-4 text-3xl">
          {`DNA: ${dna.bodyColor} ${dna.mouthTailColor} ${dna.eyeColor} ${dna.earPawColor} ${dna.eyeShape} ${dna.pattern} ${dna.patternColor} ${dna.animation}`}
        </p>
      </div>

      <div className="rounded-2xl bg-slate-200 p-8 ">
        <p className="mb-4 text-4xl">Factory</p>
        <div className="mb-8 flex w-full">
          <button
            onClick={() => setTab("colors")}
            className="-ml-8 w-full border-b border-slate-500  pt-4 pb-2 text-xl hover:border-b-2 hover:border-slate-600 active:border-slate-700"
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
            className="-mr-8 w-full border-b border-slate-500 pt-4 pb-2 text-xl hover:border-b-2  hover:border-slate-600 active:border-slate-700"
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
                  min="0"
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
                  min="0"
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
                  min="0"
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
                  min="0"
                  max="9"
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
                  min="0"
                  max="6"
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
                  min="0"
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
                  min="0"
                  max="5"
                  id="animation"
                  type="range"
                  className="slider-thumb form-range h-2 w-full appearance-none bg-teal-300 p-0 focus:shadow-none focus:outline-none focus:ring-0"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Factory;
