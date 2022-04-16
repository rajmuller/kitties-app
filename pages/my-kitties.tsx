import { useEthers } from "@usedapp/core";
import { Cat, Loader } from "../components";
import { useGetCatsByOwnerQuery } from "../lib/graphql/generated";
import { From10To15, From10To16, From10To19, From10To99 } from "../types";

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
          {data?.users[0].cats?.map((cat) => {
            const {
              dna: {
                animation,
                bodyColor,
                earPawColor,
                eyeShape,
                eyeColor,
                mouthTailColor,
                pattern,
                patternColor,
                secret,
              },
            } = cat;
            return (
              <Cat
                key={cat.id}
                bodyColor={bodyColor as From10To99}
                mouthTailColor={mouthTailColor as From10To99}
                eyeColor={eyeColor as From10To99}
                earPawColor={earPawColor as From10To99}
                eyeShape={eyeShape as From10To19}
                pattern={pattern as From10To16}
                patternColor={patternColor as From10To99}
                animation={animation as From10To15}
                secret={secret as From10To19 | undefined}
              />
            );
          })}
        </div>
      </div>
      <div className="">my-kitties</div>
    </main>
  );
};

export default MyKitties;
