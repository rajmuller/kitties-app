import { motion } from "framer-motion";
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
    <header className="flex w-full flex-col items-center justify-center bg-white">
      <div className="flex h-16 w-full max-w-5xl items-center justify-between px-8">
        <NextLink href="/">
          <a>Logo</a>
        </NextLink>
        <ul className="flex items-center justify-center gap-8">
          <Link href="/">Home</Link>
          <Link href="/cataloge">Catalogue</Link>
          <Link href="/factory">Factory</Link>
          <WalletButton />
        </ul>
      </div>
      <div className="h-[3px] w-full bg-header-gradient" />
    </header>
  );
};

export default Header;
