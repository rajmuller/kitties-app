import { useEthers } from "@usedapp/core";
import Link from "next/link";
import { Card, CardContainer, Cat, Loader } from "../components";
import { useGetOffersQuery } from "../lib/graphql/generated";
import { DNA } from "../types";

const Market = () => {
  const { account } = useEthers();
  const { data, status } = useGetOffersQuery();

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "success" && !data.offers?.length) {
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
          <span>list one on </span>
          <Link href="/my-kitties">
            <a className="text-3xl font-semibold text-teal-800">My Kitties</a>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-container mx-auto mt-16 flex flex-col items-center justify-center">
      <CardContainer>
        {data?.offers.map(({ cat, price, seller }) => {
          const isMine = account?.toLowerCase() === seller;

          return (
            <Card
              id={cat.id}
              generation={cat.generation}
              owned={isMine}
              price={price}
              key={cat.id}
            >
              <Cat dna={cat.dna as DNA} className="scale-[60%]" />
            </Card>
          );
        })}
      </CardContainer>
    </main>
  );
};

export default Market;
