import copy from "copy-to-clipboard";
import { useCallback, useContext, useEffect, useState } from "react";
import { ModalContext } from "./context";

export const useCopyClipboard = (timeout = 500) => {
  const [isCopied, setIsCopied] = useState(false);

  const staticCopy = useCallback((text: string) => {
    const didCopy = copy(text);
    setIsCopied(didCopy);
  }, []);

  useEffect(() => {
    if (isCopied) {
      const hide = setTimeout(() => {
        setIsCopied(false);
      }, timeout);

      return () => {
        clearTimeout(hide);
      };
    }
    return undefined;
  }, [isCopied, setIsCopied, timeout]);

  return { isCopied, staticCopy };
};

export const useModal = () => {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  return { isOpen, setIsOpen };
};
