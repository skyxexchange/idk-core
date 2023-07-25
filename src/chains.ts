export enum ChainId {
  // BASE = 8453,
  BASE_TESTNET = 84531,
}

export const SUPPORTED_CHAINS = [
  // ChainId.BASE,
  ChainId.BASE_TESTNET,
] as const
export type SupportedChainsType = typeof SUPPORTED_CHAINS[number]

export enum NativeCurrencyName {
  // Strings match input for CLI
  // BASE = 'ETH',
  BASE_TESTNET = 'ETH',
}
