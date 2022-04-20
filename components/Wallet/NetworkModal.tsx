import { Dialog } from "@headlessui/react";
import { ChainId } from "@usedapp/core";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  SUPPORTED_NETWORKS,
  useChainId,
  useNetworkHelper,
} from "../../lib/hooks";
import { Button } from "../Ui";

const NetworkModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const chainId = useChainId();

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
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />

      <div className="z-10 flex max-w-2xl flex-col items-center justify-center gap-12 rounded-md bg-offWhite p-4">
        <Dialog.Title className="flex w-full items-center justify-between text-2xl">
          <span>Invalid Network!</span>
          <AiOutlineClose
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </Dialog.Title>

        <div className="flex w-full gap-8">
          <Button onClick={onClick} className="flex-1 border border-teal-500">
            Switch to Mumbai
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default NetworkModal;
