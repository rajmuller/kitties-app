import Image from "next/image";
import { useState } from "react";

type LogoProps = {
  ticker: string;
  className?: string;
};

export const BASE_URL =
  "https://raw.githubusercontent.com/sushiswap/icons/master/token/";

export const UNKNOWN_ICON = BASE_URL + "unknown.png";

const Logo = ({ ticker, className }: LogoProps) => {
  const [fallback, setFallback] = useState("");

  const src = `${BASE_URL}${ticker}.jpg`;

  return (
    <div
      className={`relative flex h-6 w-6 items-center overflow-hidden rounded-full ${className}`}
    >
      <Image
        onError={() => setFallback(UNKNOWN_ICON)}
        layout="fill"
        alt={`logo of ${ticker}`}
        objectFit="cover"
        src={fallback || src.toLowerCase()}
      />
    </div>
  );
};

export default Logo;
