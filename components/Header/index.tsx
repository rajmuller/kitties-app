import { motion } from "framer-motion";
import Image from "next/image";
import NextLink from "next/link";
import { ReactNode } from "react";
import { WalletButton } from "../Wallet";

type LinkProps = {
  href: string;
  children?: ReactNode;
};

const Link = ({ href, children }: LinkProps) => {
  return (
    <motion.li whileTap={{ y: 0 }} whileHover={{ y: -2 }}>
      <NextLink href={href}>
        <a className="h-full px-4 py-2 hover:shadow-link">{children}</a>
      </NextLink>
    </motion.li>
  );
};

const Header = () => {
  return (
    <header className="flex w-full flex-col items-center justify-center">
      <div className="max-w-container flex h-16 w-full items-center justify-between">
        <NextLink href="/">
          <a className="relative h-16 w-16">
            <Image
              src="/logo.png"
              alt="cat logo"
              layout="fill"
              objectFit="contain"
            />
          </a>
        </NextLink>

        <nav>
          <ul className="flex items-center justify-center gap-8">
            <Link href="/">Home</Link>
            <Link href="/market">Market</Link>
            <Link href="/my-kitties">My Kitties</Link>
            <Link href="/factory">Factory</Link>
            <WalletButton />
          </ul>
        </nav>
      </div>
      <div className="h-[3px] w-full bg-rainbow" />
    </header>
  );
};

export default Header;
