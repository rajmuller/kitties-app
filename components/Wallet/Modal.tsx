import { Dialog } from "@headlessui/react";
import { useEthers } from "@usedapp/core";
import { useRouter } from "next/router";
import { Dispatch, ReactNode, SetStateAction, useCallback } from "react";
import toast from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { CHAIN_EXPLORER } from "../../config";
import { useChainId } from "../../lib/hooks";
import { Button } from "../Ui";
import { useCopyClipboard } from "./hooks";

type ModalProps = {
  children?: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ isOpen, setIsOpen }: ModalProps) => {
  const { account, deactivate } = useEthers();
  const chainId = useChainId();
  const { push } = useRouter();
  const { staticCopy } = useCopyClipboard();

  const onDisconnect = useCallback(() => {
    deactivate();
    setIsOpen(false);
  }, [deactivate, setIsOpen]);

  const onCopy = useCallback(() => {
    staticCopy(account);
    toast.success("Address copied to clipboard");
  }, [account, staticCopy]);

  return (
    <Dialog
      className="fixed inset-0 z-50 mx-8 flex items-center justify-center overflow-y-auto text-center text-xl tracking-wide"
      open={isOpen}
      as="div"
      onClose={() => setIsOpen(false)}
    >
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />

      <div className="z-10 flex max-w-2xl flex-col items-center justify-center rounded-md bg-offWhite p-4">
        <Dialog.Title className="flex w-full items-center justify-between text-2xl">
          <span>Account</span>
          <AiOutlineClose
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </Dialog.Title>
        <Dialog.Description className="my-8 flex w-full flex-col items-start rounded-md border border-neutral-300 p-4">
          <span className="mb-3 text-3xl">
            {`${account?.slice(0, 6)}...${account?.slice(-4)}`}
          </span>
          <div className="flex gap-4 text-lg">
            <span className="flex items-center justify-center gap-1 text-blue-600">
              <FiExternalLink />
              <a
                target="_blank"
                href={`${CHAIN_EXPLORER[chainId]}/address/${account}`}
                rel="noreferrer"
              >
                View on explorer
              </a>
            </span>
            <span className="cursor-pointer" onClick={onCopy}>
              Copy address
            </span>
          </div>
        </Dialog.Description>

        <div className="flex w-full gap-8">
          <Button
            className="flex-1 bg-orange-500"
            onClick={() => push("/my-kitties")}
          >
            My Kitties
          </Button>
          <Button
            className="flex-1 border border-orange-500"
            onClick={onDisconnect}
          >
            Disconnect
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
