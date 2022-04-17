import { useEthers } from "@usedapp/core";
import { AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";
import { Button, Card, CardContainer, Cat, Loader } from "../components";
import { useGetCatsByOwnerQuery } from "../lib/graphql/generated";
import { DNA } from "../types";

const Breed = () => {
  const [damId, setDamId] = useState("");
  const [sireId, setSireId] = useState("");

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

  const { account } = useEthers();
  const id = account?.toLowerCase();
  const { data, status } = useGetCatsByOwnerQuery(
    {
      id: id!,
    },
    { enabled: !!id, refetchInterval: 2000 }
  );

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <main className="max-w-container mx-auto mt-16 flex flex-col items-center justify-center">
      <AnimatePresence>
        {damId && sireId && (
          <Button
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
        {data?.users[0].cats?.map(({ dna, id, generation }) => (
          <Card
            id={id}
            generation={generation}
            isSire={id === sireId}
            isDam={id === damId}
            handleParentSet={handleParentSet}
            key={id}
          >
            <Cat dna={dna as DNA} />
          </Card>
        ))}
      </CardContainer>
    </main>
  );
};

export default Breed;
