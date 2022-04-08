import type { NextPage } from "next";
import { Cat } from "../components";

const Factory: NextPage = () => {
  return (
    <div className=" flex h-screen w-full items-center justify-evenly">
      <div className="flex h-1/2 flex-1 items-center justify-center bg-slate-500">
        <Cat />
      </div>
      <div className="h-1/2 flex-1 bg-slate-800"></div>
    </div>
  );
};

export default Factory;
