import type { NextPage } from "next";
import { ChangeEvent, useCallback, useState } from "react";
import { Deity } from "../components";
import { Dna } from "../types";

const Factory: NextPage = () => {
  const [dna, setDna] = useState<Dna>({
    background: "1",
    cape: "0",
    arm: "0",
    head: "0",
    eye: "0",
    shoulder: "0",
    chest: "0",
    weapon: "0",
    beak: "0",
    face: "0",
  });

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const changedDna = e.target.id as keyof Dna;
      setDna({ ...dna, [changedDna]: e.target.value });
    },
    [dna]
  );

  return (
    <div className=" flex h-screen w-full items-center justify-evenly">
      <div className="flex h-1/2 flex-1 items-center justify-center bg-slate-500">
        <Deity
          background={dna.background}
          arm={dna.arm}
          cape={dna.cape}
          head={dna.head}
          eye={dna.eye}
          shoulder={dna.shoulder}
          chest={dna.chest}
          beak={dna.beak}
          weapon={dna.weapon}
          face={dna.face}
        />
      </div>
      <div className="h-1/2 flex-1 bg-slate-200 p-8 ">
        <div className="flex w-96 flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 text-2xl">
              <label htmlFor="background">Background:</label>
              <p className="rounded-lg bg-teal-500/20 px-4 py-1">
                {dna.background}
              </p>
            </div>
            <input
              value={dna.background}
              onChange={onChange}
              min="1"
              max="5"
              id="background"
              type="range"
              className="slider-thumb form-range h-2 w-full appearance-none bg-teal-300 p-0 focus:shadow-none focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 text-2xl">
              <label htmlFor="cape">Cape:</label>
              <p className="rounded-lg bg-teal-500/20 px-4 py-1">{dna.cape}</p>
            </div>
            <input
              value={dna.cape}
              onChange={onChange}
              min="0"
              max="39"
              id="cape"
              type="range"
              className="slider-thumb form-range h-2 w-full appearance-none bg-teal-300 p-0 focus:shadow-none focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 text-2xl">
              <label htmlFor="arm">Arm:</label>
              <p className="rounded-lg bg-teal-500/20 px-4 py-1">{dna.arm}</p>
            </div>
            <input
              value={dna.arm}
              onChange={onChange}
              min="0"
              max="8"
              id="arm"
              type="range"
              className="slider-thumb form-range h-2 w-full appearance-none bg-teal-300 p-0 focus:shadow-none focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 text-2xl">
              <label htmlFor="eye">Eye:</label>
              <p className="rounded-lg bg-teal-500/20 px-4 py-1">{dna.eye}</p>
            </div>
            <input
              value={dna.eye}
              onChange={onChange}
              min="0"
              max="9"
              id="eye"
              type="range"
              className="slider-thumb form-range h-2 w-full appearance-none bg-teal-300 p-0 focus:shadow-none focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 text-2xl">
              <label htmlFor="head">Head:</label>
              <p className="rounded-lg bg-teal-500/20 px-4 py-1">{dna.head}</p>
            </div>
            <input
              value={dna.head}
              onChange={onChange}
              min="0"
              max="86"
              id="head"
              type="range"
              className="slider-thumb form-range h-2 w-full appearance-none bg-teal-300 p-0 focus:shadow-none focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 text-2xl">
              <label htmlFor="shoulder">Shoulder:</label>
              <p className="rounded-lg bg-teal-500/20 px-4 py-1">
                {dna.shoulder}
              </p>
            </div>
            <input
              value={dna.shoulder}
              onChange={onChange}
              min="0"
              max="46"
              id="shoulder"
              type="range"
              className="slider-thumb form-range h-2 w-full appearance-none bg-teal-300 p-0 focus:shadow-none focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 text-2xl">
              <label htmlFor="chest">Chest:</label>
              <p className="rounded-lg bg-teal-500/20 px-4 py-1">{dna.chest}</p>
            </div>
            <input
              value={dna.chest}
              onChange={onChange}
              min="0"
              max="39"
              id="chest"
              type="range"
              className="slider-thumb form-range h-2 w-full appearance-none bg-teal-300 p-0 focus:shadow-none focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 text-2xl">
              <label htmlFor="weapon">Weapon:</label>
              <p className="rounded-lg bg-teal-500/20 px-4 py-1">
                {dna.weapon}
              </p>
            </div>
            <input
              value={dna.weapon}
              onChange={onChange}
              min="0"
              max="6"
              id="weapon"
              type="range"
              className="slider-thumb form-range h-2 w-full appearance-none bg-teal-300 p-0 focus:shadow-none focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 text-2xl">
              <label htmlFor="beak">Beak:</label>
              <p className="rounded-lg bg-teal-500/20 px-4 py-1">{dna.beak}</p>
            </div>
            <input
              value={dna.beak}
              onChange={onChange}
              min="0"
              max="3"
              id="beak"
              type="range"
              className="slider-thumb form-range h-2 w-full appearance-none bg-teal-300 p-0 focus:shadow-none focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 text-2xl">
              <label htmlFor="face">Face:</label>
              <p className="rounded-lg bg-teal-500/20 px-4 py-1">{dna.face}</p>
            </div>
            <input
              value={dna.face}
              onChange={onChange}
              min="0"
              max="63"
              id="face"
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
