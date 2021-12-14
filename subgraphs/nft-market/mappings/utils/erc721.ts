/* eslint-disable prefer-const */
import { Address, BigInt } from "@graphprotocol/graph-ts";
import { IERC721 } from "../../generated/TOOSWAPNFTMarketV1/IERC721";
import { TOOKITV2 } from "../../generated/TOOSWAPNFTMarketV1/TOOKITV2";

export function fetchName(collectionAddress: Address): string {
  let contract = IERC721.bind(collectionAddress);

  let nameResult = contract.try_name();
  if (!nameResult.reverted) {
    return nameResult.value;
  }

  return "unknown";
}

export function fetchSymbol(collectionAddress: Address): string {
  let contract = IERC721.bind(collectionAddress);

  let symbolResult = contract.try_symbol();
  if (!symbolResult.reverted) {
    return symbolResult.value;
  }

  return "unknown";
}

export function fetchTokenURI(collectionAddress: Address, tokenId: BigInt): string | null {
  let contract = IERC721.bind(collectionAddress);

  let tokenURIResult = contract.try_tokenURI(tokenId);
  if (!tokenURIResult.reverted) {
    return tokenURIResult.value;
  }

  return null;
}

export function fetchBunnyId(collectionAddress: Address, tokenId: BigInt): BigInt | null {
  let contract = TOOKITV2.bind(collectionAddress);

  let bunnyIdResult = contract.try_getBunnyId(tokenId);
  if (!bunnyIdResult.reverted) {
    return BigInt.fromI32(bunnyIdResult.value);
  }

  return null;
}
