import { useEthers } from "@usedapp/core";
import { motion } from "framer-motion";
import { HTMLAttributes } from "react";
import { useNetworkHelper, useTotalSupply } from "../../lib/hooks";

type WalletButtonProps = {
  className?: HTMLAttributes<HTMLButtonElement>["className"];
};

const WalletButton = ({ className }: WalletButtonProps) => {
  const { activateBrowserWallet, account } = useEthers();
  const { changeOrAddNetwork } = useNetworkHelper();
  const supply = useTotalSupply();
  console.log({ supply });

  return (
    <motion.button
      onClick={activateBrowserWallet}
      whileTap={{ y: 0 }}
      whileHover={{ y: -2 }}
      className={`inline-flex items-center justify-center overflow-hidden rounded-md bg-orange-500 hover:shadow-wallet ${className}`}
    >
      <span className="h-full w-full px-6 py-2">
        {account ? account.slice(0, 6) : "Connect"}
      </span>
    </motion.button>
  );
};

export default WalletButton;
