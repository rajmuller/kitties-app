import { AddressZero } from "@ethersproject/constants";
import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import {
  ChainId,
  TransactionStatus,
  useCall,
  useContractFunction,
  useEthers,
} from "@usedapp/core";
import { BigNumber, Contract } from "ethers";
import { Interface, isAddress } from "ethers/lib/utils";
import { useCallback, useEffect, useMemo, useRef } from "react";
import toast from "react-hot-toast";
import { CONTRACTS } from "../../config";
import { DNA, KittyContract } from "../../types";
import KittyJson from "../abis/KittyContract.json";

const KittyContractInterface = new Interface(KittyJson.abi);

const getSigner = (library: Web3Provider, account: string): JsonRpcSigner => {
  return library.getSigner(account);
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
      // eslint-disable-next-line no-console
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

const useKittyContract = (withSignerIfPossible?: boolean) => {
  const chainId = useChainId();

  const kittiContract = useContract(
    CONTRACTS[chainId].kitty,
    KittyContractInterface,
    withSignerIfPossible
  ) as unknown as KittyContract;

  return useMemo(() => kittiContract, [kittiContract]);
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
  }

  return useMemo(() => value?.[0], [value]);
};

const convertDnaToGenes = (dna: DNA): BigNumber => {
  let genes = "";

  Object.values(dna).forEach((dnaValue) => {
    genes += dnaValue;
  });

  return BigNumber.from(genes);
};

export const useDnaToGenes = (dna: DNA): BigNumber => {
  return useMemo(() => convertDnaToGenes(dna), [dna]);
};

type UseContractNotificationType = {
  resetState: () => void;
  status: TransactionStatus["status"];
  errorMessage: string;
  miningMessage: string;
  successMessage: string;
};

export const useContractNotification = ({
  resetState,
  status,
  errorMessage,
  miningMessage,
  successMessage,
}: UseContractNotificationType) => {
  const toastRef = useRef("");

  useEffect(() => {
    resetState();

    switch (status) {
      case "Exception":
      case "Fail": {
        if (!errorMessage) return;

        const toastId = toast.error(errorMessage, {
          id: toastRef.current,
          duration: 6000,
        });
        toastRef.current = toastId;
        break;
      }

      case "Mining": {
        if (!miningMessage) return;

        const toastId = toast.loading(miningMessage, { id: toastRef.current });
        toastRef.current = toastId;
        break;
      }

      case "Success": {
        if (!successMessage) return;

        const toastId = toast.success(successMessage, {
          id: toastRef.current,
          duration: 6000,
        });
        toastRef.current = toastId;
        break;
      }
    }
  }, [errorMessage, miningMessage, resetState, status, successMessage]);
};

export const useCreateGen0Kitty = (dna: DNA) => {
  const contract = useKittyContract();
  const create = useContractFunction(contract, "createKittyGen0");
  const genes = useDnaToGenes(dna);

  useContractNotification({
    resetState: create.resetState,
    status: create.state.status,
    errorMessage: `Error - create Gen0 Kitty: \n${create.state.errorMessage} `,
    miningMessage: `Loading - create Gen0 Kitty with genes: ${genes.toString()}...`,
    successMessage: `Success - create Gen0 Kitty with genes: ${genes.toString()}`,
  });

  const onCreate = useCallback(() => {
    console.log("create");

    return create.send(genes);
  }, [create, genes]);

  return useMemo(() => {
    return { ...create, onCreate };
  }, [create, onCreate]);
};

// export const useBreed = (momId: BigNumberish, dadId: BigNumberish) => {
//   const contract = useKittyContract();
//   const breed = useContractFunction(contract, "breed");

//   useContractNotification({
//     resetState: breed.resetState,
//     status: breed.state.status,
//     errorMessage: `Error - breeding \n${breed.state.errorMessage} `,
//     miningMessage: `Loading - breed kitty...`,
//     successMessage: `Success - breed kitty`,
//   });

//   const onBreed = useCallback(
//     () => breed.send(momId, dadId),
//     [breed, dadId, momId]
//   );

//   return useMemo(() => {
//     return { ...breed, onBreed };
//   }, [breed, onBreed]);
// };
