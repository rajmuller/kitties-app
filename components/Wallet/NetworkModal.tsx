import { Dialog } from "@headlessui/react";
import { ChainId, useEthers } from "@usedapp/core";
import { useCallback, useEffect, useState } from "react";
import { SUPPORTED_NETWORKS, useNetworkHelper } from "../../lib/hooks";
import { Button } from "../Ui";

const NetworkModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { chainId } = useEthers();

  const { changeOrAddNetwork } = useNetworkHelper();

  useEffect(() => {
    if (chainId && SUPPORTED_NETWORKS[chainId] == undefined) {
      setIsOpen(true);
      return;
    }

    setIsOpen(false);
  }, [chainId]);

  const onClick = useCallback(() => {
    changeOrAddNetwork && changeOrAddNetwork(ChainId.Mumbai);
  }, [changeOrAddNetwork]);

  return (
    <Dialog
      className="fixed inset-0 z-50 mx-8 flex items-center justify-center overflow-y-auto text-center text-xl tracking-wide"
      open={isOpen}
      as="div"
      onClose={() => setIsOpen(false)}
    >
      <Dialog.Overlay className="pointer-events-none fixed inset-0 bg-black opacity-60" />

      <div className="z-10 flex max-w-2xl flex-col items-center justify-center gap-12 rounded-md bg-offWhite p-4">
        <Dialog.Title className="flex w-full items-center justify-between text-5xl">
          <span>Invalid Network!</span>
        </Dialog.Title>

        <div className="flex w-full gap-8">
          <Button onClick={onClick} className="flex-1 border border-teal-500">
            Switch to Mumbai Testnet
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default NetworkModal;
