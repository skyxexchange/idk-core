import { ChainId, SUPPORTED_CHAINS, SupportedChainsType } from './chains'

type AddressMap = { [chainId: number]: string }

type ChainAddresses = {
  v3CoreFactoryAddress: string
  multicallAddress: string
  quoterAddress: string
  v3MigratorAddress?: string
  nonfungiblePositionManagerAddress?: string
  tickLensAddress?: string
  swapRouter02Address?: string
  v1MixedRouteQuoterAddress?: string
  permit2Address?: string
}

// const BASE_ADDRESSES: ChainAddresses = {
//   v3CoreFactoryAddress: '',
//   multicallAddress: '',
//   quoterAddress: '',
//   v3MigratorAddress: '',
//   nonfungiblePositionManagerAddress: '',
//   tickLensAddress: '',
//   swapRouter02Address: '',
//   v1MixedRouteQuoterAddress: '',
//   permit2Address: '0xC811B24C89Ad5a984e4E2244B9f7606eb5425F7B',
// }

const BASE_TESTNET_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x8C1FF117c5ad343Ddac145A9c1C974E704B8c3eD',
  multicallAddress: '0x7B9932Fd9677F42D52F779E417151868b5e039b8',
  quoterAddress: '0x9BC49821598468798419f6A41bCd150b98AC4663',
  v3MigratorAddress: '0x4eb9160392B570c7E03fE5f9E24620c592fd465B',
  nonfungiblePositionManagerAddress: '0x8B6d61375475E2F7BD58B7B91Dc662E5D328cb68',
  tickLensAddress: '0x6d94EB818CA9e27D15D1bbb7DE7d19D1DD6F17CE',
  swapRouter02Address: '0x9CcFFAd91B3f76EC1A5BcBD0355D87Cf86073Cdb',
  v1MixedRouteQuoterAddress: '0xAC2E122d94002cF6120d5648F46aA6C266f5CB05',
  permit2Address: '0xC811B24C89Ad5a984e4E2244B9f7606eb5425F7B',
}

export const CHAIN_TO_ADDRESSES_MAP: Record<SupportedChainsType, ChainAddresses> = {
  // [ChainId.BASE]: BASE_ADDRESSES,
  [ChainId.BASE_TESTNET]: BASE_TESTNET_ADDRESSES,
}

/* V3 Contract Addresses */
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const v3CoreFactoryAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v3CoreFactoryAddress
    if (v3CoreFactoryAddress) {
      memo[chainId] = v3CoreFactoryAddress
    }
    return memo
  }, {})
}

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const v3MigratorAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v3MigratorAddress
    if (v3MigratorAddress) {
      memo[chainId] = v3MigratorAddress
    }
    return memo
  }, {})
}

export const MULTICALL_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const multicallAddress = CHAIN_TO_ADDRESSES_MAP[chainId].multicallAddress
    if (multicallAddress) {
      memo[chainId] = multicallAddress
    }
    return memo
  }, {})
}

export const QUOTER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const quoterAddress = CHAIN_TO_ADDRESSES_MAP[chainId].quoterAddress
    if (quoterAddress) {
      memo[chainId] = quoterAddress
    }
    return memo
  }, {})
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const nonfungiblePositionManagerAddress = CHAIN_TO_ADDRESSES_MAP[chainId].nonfungiblePositionManagerAddress
    if (nonfungiblePositionManagerAddress) {
      memo[chainId] = nonfungiblePositionManagerAddress
    }
    return memo
  }, {})
}

export const TICK_LENS_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const tickLensAddress = CHAIN_TO_ADDRESSES_MAP[chainId].tickLensAddress
    if (tickLensAddress) {
      memo[chainId] = tickLensAddress
    }
    return memo
  }, {})
}

export const SWAP_ROUTER_02_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const swapRoutersAddress = CHAIN_TO_ADDRESSES_MAP[chainId].swapRouter02Address
    if (swapRoutersAddress) {
      memo[chainId] = swapRoutersAddress
    }
    return memo
  }, {})
}