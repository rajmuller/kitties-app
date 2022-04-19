import { ChainId } from "@usedapp/core";

export const CONTRACTS = {
  [ChainId.Mumbai]: {
    kitty: "0x79179d8B8ac086D62CfB8dF9159240870F53765B",
    marketplace: "0x1dF03680b34591FfEE19C51529941B699E418FB0",
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
