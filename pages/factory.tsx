import type { NextPage } from "next";
import { ChangeEvent, useCallback, useState } from "react";
import { Cat } from "../components";

type Dna = {
  bodyColor: string;
  faceColor: string;
};

const Factory: NextPage = () => {
  const [dna, setDna] = useState<Dna>({
    bodyColor: "10",
    faceColor: "0",
  });

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const changedDna = e.target.id as keyof Dna;
      console.log({ dna });
      console.log({ changedDna });
      console.log({ value: e.target.value });

      setDna({ ...dna, [changedDna]: e.target.value });
    },
    [dna]
  );

  return (
    <div className=" flex h-screen w-full items-center justify-evenly">
      <div className="flex h-1/2 flex-1 items-center justify-center bg-slate-500">
        <Cat />
      </div>
      <div className="h-1/2 flex-1 bg-slate-200 p-8 ">
        <div className="flex w-96 flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 text-2xl">
              <label htmlFor="bodyColor">Body Color:</label>
              <p className="rounded-lg bg-teal-500/20 px-4 py-1">
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
              <label htmlFor="faceColor">Face Color:</label>
              <p className="rounded-lg bg-teal-500/20 px-4 py-1">
                {dna.faceColor}
              </p>
            </div>
            <input
              value={dna.faceColor}
              onChange={onChange}
              min="0"
              max="99"
              id="faceColor"
              type="range"
              className="slider-thumb form-range h-2 w-full appearance-none bg-teal-300 p-0 focus:shadow-none focus:outline-none focus:ring-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Factory;
