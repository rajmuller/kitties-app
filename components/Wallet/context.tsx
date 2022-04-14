import { createContext, Dispatch, SetStateAction } from "react";

export const ModalContext = createContext<{
  isOpen: boolean | null;
  setIsOpen: Dispatch<SetStateAction<boolean>> | null;
}>({
  isOpen: null,
  setIsOpen: null,
});
