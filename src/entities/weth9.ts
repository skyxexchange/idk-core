import { Token } from './token'

/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WETH9: { [chainId: number]: Token } = {
  // [8453]: new Token(8453, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped ETH'),
  [84531]: new Token(84531, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped ETH'),
}
