import { ChainId } from "@usedapp/core";

export const CONTRACTS = {
  [ChainId.Mumbai]: {
    kitty: "0x049d8ed690800dF2ABe533808cDAe811C79D7dCf",
    marketplace: "0x84c9e2FB685B6Cb9Bc94F47DdF8E856617505452",
  },
  [ChainId.Polygon]: {
    kitty: "test",
    marketplace: "test",
  },
};

export const CHAIN_EXPLORER = {
  [ChainId.Mumbai]: "https://mumbai.polygonscan.com/",
  [ChainId.Polygon]: "https://polygonscan.com/",
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
