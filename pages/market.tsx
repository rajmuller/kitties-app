import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button, Card, CardContainer, Cat, Loader } from "../components";
import { useGetCatsQuery } from "../lib/graphql/generated";
import { DNA } from "../types";

const Market = () => {
  const { data, status } = useGetCatsQuery();
  const cats = data?.cats.filter(({ genes }) => genes !== "0");

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "success" && !cats?.length) {
    return (
      <main className="max-w-container mx-auto mt-16 flex flex-col items-center justify-center">
        <div className="text-neutral-600">
          <p className="mb-4 text-4xl text-black">
            {" "}
            Oh Oh, there are not cats for sale...
          </p>
          <span>head over to </span>
          <Link href="/factory">
            <a className="text-3xl font-semibold text-teal-800">Factory</a>
          </Link>
          <span> to create a Gen0</span>
          <p>Or</p>
          <span>browse the </span>
          <Link href="/catalogue">
            <a className="text-3xl font-semibold text-teal-800">Catalogue</a>
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
                <Cat dna={dna as DNA} />
              </Card>
            )
        )}
      </CardContainer>
    </main>
  );
};

export default Market;
