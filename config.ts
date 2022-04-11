import { ChainId } from "@usedapp/core";

export const CONTRACTS = {
  [ChainId.Hardhat]: {
    dex: "0x0ce803d574fEd126389Fa38d622d0DA3E3e830D6",
  },
  [ChainId.Mumbai]: {
    dex: "0x0ce803d574fEd126389Fa38d622d0DA3E3e830D6",
  },
  [ChainId.Polygon]: {
    dex: "test",
  },
};

export const NATIVE_CURRENCY = {
  [ChainId.Hardhat]: "ETH",
  [ChainId.Mumbai]: "MATIC",
  [ChainId.Polygon]: "MATIC",
};

export const CONTRACT_OWNERS = {
  [ChainId.Hardhat]: "0x4c7f83D25bCEfB3f7Ae61C3A85a5B2037B37b994",
  [ChainId.Mumbai]: "0x4c7f83D25bCEfB3f7Ae61C3A85a5B2037B37b994",
  [ChainId.Polygon]: "test",
};
