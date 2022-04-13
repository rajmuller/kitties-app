import { ChainId } from "@usedapp/core";

export const CONTRACTS = {
  [ChainId.Hardhat]: {
    kitty: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  },
  [ChainId.Mumbai]: {
    kitty: "0x6A5ac2FaC7B6E4F4E5AA6D32641EB3009e8550FB",
  },
  [ChainId.Polygon]: {
    kitty: "test",
  },
};

export const NATIVE_CURRENCY = {
  [ChainId.Hardhat]: "ETH",
  [ChainId.Mumbai]: "MATIC",
  [ChainId.Polygon]: "MATIC",
};

export const CONTRACT_OWNERS = {
  [ChainId.Hardhat]: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
  [ChainId.Mumbai]: "0x4c7f83D25bCEfB3f7Ae61C3A85a5B2037B37b994",
  [ChainId.Polygon]: "test",
};
