import Image from "next/image";
import { HTMLAttributes } from "react";
import { Dna } from "../../types";

type DeityProps = Dna & {
  containerProps?: HTMLAttributes<HTMLDivElement>;
};

const Deity = ({
  background,
  arm,
  cape,
  eye,
  head,
  shoulder,
  beak,
  chest,
  face,
  weapon,
  ...containerProps
}: DeityProps) => {
  return (
    <div className={`relative h-[500px] w-[500px] ${containerProps}`}>
      {[...new Array(5).map(() => 0)].map((_, index) => {
        return (
          <Image
            key={index}
            className={
              index.toString() === background ? "opacity-100" : "opacity-0"
            }
            layout="fill"
            alt="background of Deity"
            objectFit="cover"
            src={`/layers/Background/${index + 1}.png`}
          />
        );
      })}

      {[...new Array(40).map(() => 0)].map((_, index) => {
        return (
          <Image
            key={index}
            className={index.toString() === cape ? "opacity-100" : "opacity-0"}
            layout="fill"
            alt="cape of Deity"
            objectFit="cover"
            src={`/layers/Cape/${index}.png`}
          />
        );
      })}

      <Image
        layout="fill"
        alt="body of Deity"
        objectFit="cover"
        src={`/layers/Body/0.png`}
      />

      {[...new Array(9).map(() => 0)].map((_, index) => {
        return (
          <Image
            key={index}
            className={index.toString() === arm ? "opacity-100" : "opacity-0"}
            layout="fill"
            alt="arm of Deity"
            objectFit="cover"
            src={`/layers/Arm/${index}.png`}
          />
        );
      })}

      {[...new Array(9).map(() => 0)].map((_, index) => {
        return (
          <Image
            key={index}
            className={index.toString() === eye ? "opacity-100" : "opacity-0"}
            layout="fill"
            alt="eye of Deity"
            objectFit="cover"
            src={`/layers/Eye/${index}.png`}
          />
        );
      })}

      {[...new Array(87).map(() => 0)].map((_, index) => {
        return (
          <Image
            key={index}
            className={index.toString() === head ? "opacity-100" : "opacity-0"}
            layout="fill"
            alt="head of Deity"
            objectFit="cover"
            src={`/layers/Head/${index}.png`}
          />
        );
      })}

      {[...new Array(47).map(() => 0)].map((_, index) => {
        return (
          <Image
            key={index}
            className={
              index.toString() === shoulder ? "opacity-100" : "opacity-0"
            }
            layout="fill"
            alt="shoulder of Deity"
            objectFit="cover"
            src={`/layers/Shoulder/${index}.png`}
          />
        );
      })}

      {[...new Array(40).map(() => 0)].map((_, index) => {
        return (
          <Image
            key={index}
            className={index.toString() === chest ? "opacity-100" : "opacity-0"}
            layout="fill"
            alt="chest of Deity"
            objectFit="cover"
            src={`/layers/Chest/${index}.png`}
          />
        );
      })}

      {[...new Array(7).map(() => 0)].map((_, index) => {
        return (
          <Image
            key={index}
            className={
              index.toString() === weapon ? "opacity-100" : "opacity-0"
            }
            layout="fill"
            alt="weapon of Deity"
            objectFit="cover"
            src={`/layers/Weapon/${index}.png`}
          />
        );
      })}

      {[...new Array(4).map(() => 0)].map((_, index) => {
        return (
          <Image
            key={index}
            className={index.toString() === beak ? "opacity-100" : "opacity-0"}
            layout="fill"
            alt="beak of Deity"
            objectFit="cover"
            src={`/layers/Beak/${index}.png`}
          />
        );
      })}

      {[...new Array(64).map(() => 0)].map((_, index) => {
        return (
          <Image
            key={index}
            className={index.toString() === face ? "opacity-100" : "opacity-0"}
            layout="fill"
            alt="face of Deity"
            objectFit="cover"
            src={`/layers/Face/${index}.png`}
          />
        );
      })}
    </div>
  );
};

export default Deity;
