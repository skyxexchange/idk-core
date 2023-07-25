import { SupportedChainsType } from './chains';
declare type AddressMap = {
    [chainId: number]: string;
};
declare type ChainAddresses = {
    v3CoreFactoryAddress: string;
    multicallAddress: string;
    quoterAddress: string;
    v3MigratorAddress?: string;
    nonfungiblePositionManagerAddress?: string;
    tickLensAddress?: string;
    swapRouter02Address?: string;
    v1MixedRouteQuoterAddress?: string;
    permit2Address?: string;
};
export declare const CHAIN_TO_ADDRESSES_MAP: Record<SupportedChainsType, ChainAddresses>;
export declare const V3_CORE_FACTORY_ADDRESSES: AddressMap;
export declare const V3_MIGRATOR_ADDRESSES: AddressMap;
export declare const MULTICALL_ADDRESSES: AddressMap;
export declare const QUOTER_ADDRESSES: AddressMap;
export declare const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap;
export declare const TICK_LENS_ADDRESSES: AddressMap;
export declare const SWAP_ROUTER_02_ADDRESSES: AddressMap;
export {};
