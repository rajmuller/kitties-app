import { useEthers } from "@usedapp/core";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCallback, useState } from "react";
import { Button, Card, CardContainer, Cat, Loader } from "../components";
import { useGetCatsByOwnerQuery } from "../lib/graphql/generated";
import { useBreed } from "../lib/hooks";
import { DNA } from "../types";

const MyKitties = () => {
  const [damId, setDamId] = useState("");
  const [sireId, setSireId] = useState("");

  const { account } = useEthers();
  const id = account?.toLowerCase();
  const { data, status } = useGetCatsByOwnerQuery(
    {
      id: id!,
    },
    { enabled: !!id, refetchInterval: 2000 }
  );

  const cats = data?.user?.cats.filter(({ genes }) => genes !== "0");

  const { onBreed } = useBreed(damId, sireId);
  const handleParentSet = useCallback(
    (id: string, role: "dam" | "sire") => {
      if (role === "sire") {
        if (damId === id) {
          setDamId("");
        }

        setSireId(id);
      }
      if (role === "dam") {
        if (sireId === id) {
          setSireId("");
        }

        setDamId(id);
      }
    },
    [damId, sireId]
  );

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "success" && !cats?.length) {
    return (
      <main className="max-w-container mx-auto mt-16 flex flex-col items-center justify-center">
        <div className="text-neutral-600">
          <p className="mb-4 text-4xl text-black">
            {" "}
            Oh Oh, you have zero cats...
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

  return (
    <main className="max-w-container mx-auto mt-16 flex flex-col items-center justify-center">
      <AnimatePresence>
        {damId && sireId && (
          <Button
            onClick={onBreed}
            initial={{ x: "-50%", bottom: 0, size: 0 }}
            animate={{ bottom: "40px", size: 1 }}
            exit={{ bottom: "-200px", size: 0 }}
            className="fixed left-1/2 z-50 bg-teal-500 px-12 py-3 uppercase"
            style={{
              fontSize: 42,
            }}
          >
            Breed
          </Button>
        )}
      </AnimatePresence>
      <CardContainer>
        {cats?.map(
          ({ dna, id, generation, genes }) =>
            genes !== "0" && (
              <Card
                id={id}
                generation={generation}
                isSire={id === sireId}
                isDam={id === damId}
                handleParentSet={handleParentSet}
                key={id}
              >
                <Cat dna={dna as DNA} className="scale-[60%]" />
                <p className=" pl-2 text-xl text-neutral-500">
                  {`DNA: ${dna.bodyColor} ${dna.mouthTailColor} ${dna.eyeColor} ${dna.earPawColor} ${dna.eyeShape} ${dna.pattern} ${dna.patternColor} ${dna.animation}`}
                </p>
              </Card>
            )
        )}
      </CardContainer>
    </main>
  );
};

export default MyKitties;
