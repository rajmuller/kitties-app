import { AddressZero } from "@ethersproject/constants";
import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { ChainId, useCall, useEthers } from "@usedapp/core";
import { Contract } from "ethers";
import { Interface, isAddress } from "ethers/lib/utils";
import { useMemo } from "react";
import { CONTRACTS } from "../../config";
import { KittyContract } from "../../types";
import KittyJson from "../abis/KittyContract.json";

export enum ApprovalState {
  // bug
  // eslint-disable-next-line no-unused-vars
  UNKNOWN = "UNKNOWN",
  // eslint-disable-next-line no-unused-vars
  NOT_APPROVED = "NOT_APPROVED",
  // eslint-disable-next-line no-unused-vars
  APPROVED = "APPROVED",
  // eslint-disable-next-line no-unused-vars
  PENDING = "PENDING",
}

export enum Side {
  // eslint-disable-next-line no-unused-vars
  BUY = 0,
  // eslint-disable-next-line no-unused-vars
  SELL = 1,
}

const DexInterface = new Interface(KittyJson.abi);

const getSigner = (library: Web3Provider, account: string): JsonRpcSigner => {
  return library.getSigner(account).connectUnchecked();
};

const getProviderOrSigner = (
  library: Web3Provider,
  account?: string
): Web3Provider | JsonRpcSigner => {
  return account ? getSigner(library, account) : library;
};

const getContract = (
  address: string,
  ABI: any,
  library: Web3Provider,
  account?: string
): Contract => {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  return new Contract(address, ABI, getProviderOrSigner(library, account));
};

const useContract = (
  address: string | undefined,
  ABI: any,
  withSignerIfPossible = true
): Contract | null => {
  const { library, account } = useEthers();
  return useMemo(() => {
    if (!address || address === AddressZero || !ABI || !library) {
      return null;
    }
    try {
      return getContract(
        address,
        ABI,
        library as Web3Provider,
        withSignerIfPossible && account ? account : undefined
      );
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [address, ABI, library, withSignerIfPossible, account]);
};

export function useChainId() {
  const { chainId } = useEthers();

  switch (chainId) {
    case ChainId.Mumbai:
      return chainId;
    case ChainId.Polygon:
      return chainId;
    default:
      return ChainId.Mumbai;
  }
}

const useKittyContract = (
  withSignerIfPossible?: boolean
): KittyContract | null => {
  const chainId = useChainId();

  const dex = useContract(
    CONTRACTS[chainId].kitty,
    DexInterface,
    withSignerIfPossible
  ) as unknown as KittyContract;
  return dex;
};

export const useTotalSupply = () => {
  const contract = useKittyContract(false);

  const { value, error } =
    useCall(
      contract && {
        contract,
        method: "totalSupply",
        args: [],
      }
    ) ?? {};
  if (error) {
    // eslint-disable-next-line no-console
    console.error(error.message);
    return;
  }

  return value?.[0];
};
