/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  DeploylessMulticall2,
  DeploylessMulticall2Interface,
} from "../DeploylessMulticall2";

const _abi = [
  {
    inputs: [
      {
        internalType: "bool",
        name: "requireSuccess",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct DeploylessMulticall2.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

export class DeploylessMulticall2__factory {
  static readonly abi = _abi;
  static createInterface(): DeploylessMulticall2Interface {
    return new utils.Interface(_abi) as DeploylessMulticall2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DeploylessMulticall2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DeploylessMulticall2;
  }
}
