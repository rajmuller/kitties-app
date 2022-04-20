import { Dialog } from "@headlessui/react";
import { useEtherBalance, useEthers } from "@usedapp/core";
import { formatEther } from "ethers/lib/utils";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Dispatch, ReactNode, SetStateAction, useCallback } from "react";
import toast from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { IoCopyOutline } from "react-icons/io5";
import { SiEthereum } from "react-icons/si";
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
  const { account } = useEthers();
  const balance = useEtherBalance(account);
  const chainId = useChainId();
  const { push } = useRouter();
  const { staticCopy } = useCopyClipboard();

  const onCopy = useCallback(() => {
    staticCopy(account);
    toast.success("Address copied to clipboard");
  }, [account, staticCopy]);

  const onNavigate = useCallback(() => {
    setIsOpen(false);
    push("/my-kitties");
  }, [push, setIsOpen]);

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
        <div className="my-8 flex w-full flex-col items-start rounded-md border border-neutral-300 p-4">
          <div className="flex items-center gap-2 text-2xl">
            <span className="rounded-full border-2 border-indigo-400 p-1.5">
              <SiEthereum className="text-indigo-400" size={24} />
            </span>
            {balance ? (
              <span>{formatEther(balance).slice(0, 6)}</span>
            ) : (
              <span>fetching...</span>
            )}
          </div>
          <span className="my-3 text-3xl">
            {`${account?.slice(0, 6)}...${account?.slice(-4)}`}
          </span>
          <div className="flex gap-4 text-lg">
            <span className="flex items-center justify-center gap-1 text-teal-500">
              <FiExternalLink />
              <a
                target="_blank"
                href={`${CHAIN_EXPLORER[chainId]}/address/${account}`}
                rel="noreferrer"
              >
                View on explorer
              </a>
            </span>

            <motion.span
              whileTap={{ y: 2 }}
              className="flex items-center justify-center gap-1"
            >
              <IoCopyOutline />
              <span className="cursor-pointer" onClick={onCopy}>
                Copy address
              </span>
            </motion.span>
          </div>
        </div>

        <div className="flex w-full gap-8">
          <Button
            className="flex-1 border border-teal-500"
            onClick={onNavigate}
          >
            My Kittens
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
