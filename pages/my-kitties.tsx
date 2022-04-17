import { useEthers } from "@usedapp/core";
import { Cat, Loader } from "../components";
import { useGetCatsByOwnerQuery } from "../lib/graphql/generated";
import { DNA } from "../types";

const MyKitties = () => {
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
    <main className="max-w-container mx-auto mt-16 flex w-full flex-col items-center justify-center">
      <div className="flex flex-wrap gap-8">
        <div className="flex items-center justify-center shadow-lg">
          {data?.users[0].cats?.map(({ dna, id }) => {
            return <Cat key={id} dna={dna as DNA} />;
          })}
        </div>
      </div>
      <div className="">my-kitties</div>
    </main>
  );
};

export default MyKitties;
