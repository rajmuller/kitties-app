import { useEthers } from "@usedapp/core";
import { HTMLAttributes, useCallback } from "react";
import { useNetworkHelper } from "../../lib/hooks";
import { Button } from "../Ui";
import { useModal } from "./hooks";

type ButtonProps = {
  className?: HTMLAttributes<HTMLButtonElement>["className"];
};

const WalletButton = ({ className }: ButtonProps) => {
  const { setIsOpen } = useModal();
  const { activateBrowserWallet, account } = useEthers();
  const { changeOrAddNetwork } = useNetworkHelper();

  const onClick = useCallback(() => {
    if (account && setIsOpen) {
      setIsOpen(true);
      return;
    }
    activateBrowserWallet();
  }, [account, activateBrowserWallet, setIsOpen]);

  return (
    <Button
      onClick={onClick}
      className={`${
        account ? "border border-orange-500" : "bg-orange-500"
      } ${className}`}
    >
      {account ? account.slice(0, 6) : "Connect"}
    </Button>
  );
};

export default WalletButton;
