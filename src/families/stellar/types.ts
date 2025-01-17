import type { BigNumber } from "bignumber.js";
import type {
  TransactionCommon,
  TransactionCommonRaw,
} from "../../types/transaction";
export type CoreStatics = Record<string, never>;
export type CoreAccountSpecifics = Record<string, never>;
export type CoreOperationSpecifics = Record<string, never>;
export type CoreCurrencySpecifics = Record<string, never>;

export type NetworkInfo = {
  family: "stellar";
  fees: BigNumber;
  baseReserve: BigNumber;
};

export type NetworkInfoRaw = {
  family: "stellar";
  fees: string;
  baseReserve: string;
};
export const StellarMemoType = [
  "NO_MEMO",
  "MEMO_TEXT",
  "MEMO_ID",
  "MEMO_HASH",
  "MEMO_RETURN",
];

export type Transaction = TransactionCommon & {
  family: "stellar";
  networkInfo: NetworkInfo | null | undefined;
  fees: BigNumber | null | undefined;
  baseReserve: BigNumber | null | undefined;
  memoType: string | null | undefined;
  memoValue: string | null | undefined;
};
export type TransactionRaw = TransactionCommonRaw & {
  family: "stellar";
  networkInfo: NetworkInfoRaw | null | undefined;
  fees: string | null | undefined;
  baseReserve: string | null | undefined;
  memoType: string | null | undefined;
  memoValue: string | null | undefined;
};
export const reflect = (_declare: any): void => {};
