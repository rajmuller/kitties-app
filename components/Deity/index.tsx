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
      <Image
        layout="fill"
        alt="background of Deity"
        objectFit="cover"
        src={`/layers/Background/${background}.png`}
      />

      <Image
        layout="fill"
        alt="cape of Deity"
        objectFit="cover"
        src={`/layers/Cape/${cape}.png`}
      />

      <Image
        layout="fill"
        alt="body of Deity"
        objectFit="cover"
        src={`/layers/Body/0.png`}
      />

      <Image
        layout="fill"
        alt="arm of Deity"
        objectFit="cover"
        src={`/layers/Arm/${arm}.png`}
      />

      <Image
        layout="fill"
        alt="eye of Deity"
        objectFit="cover"
        src={`/layers/Eye/${eye}.png`}
      />

      <Image
        layout="fill"
        alt="head of Deity"
        objectFit="cover"
        src={`/layers/Head/${head}.png`}
      />

      <Image
        layout="fill"
        alt="shoulder of Deity"
        objectFit="cover"
        src={`/layers/Shoulder/${shoulder}.png`}
      />

      <Image
        layout="fill"
        alt="chest of Deity"
        objectFit="cover"
        src={`/layers/Chest/${chest}.png`}
      />

      <Image
        layout="fill"
        alt="weapon of Deity"
        objectFit="cover"
        src={`/layers/Weapon/${weapon}.png`}
      />

      <Image
        layout="fill"
        alt="beak of Deity"
        objectFit="cover"
        src={`/layers/Beak/${beak}.png`}
      />

      <Image
        layout="fill"
        alt="face of Deity"
        objectFit="cover"
        src={`/layers/Face/${face}.png`}
      />
    </div>
  );
};

export default Deity;
