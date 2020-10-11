
import { Request, Response } from 'express';

import {
    Avalanche,
    BinTools,
    Buffer,
    BN
  } from "avalanche";

let bintools = BinTools.getInstance();

import {
    InitialStates,
    SECPTransferOutput
  } from "avalanche/dist/apis/avm";

let myNetworkID = 5; //default is 3, we want to override that for our local network
let myBlockchainID = "2JVSBoinj9C2J33VntvzYtVJNZdN2NKiwwKjcumHUWEb5DbBrm"; // The X-Chain blockchainID on this network
let avax = new Avalanche("localhost", 9650, "http", myNetworkID, myBlockchainID);
let xchain = avax.XChain(); //returns a reference to the X-Chain used by AvalancheJS
let myKeychain = xchain.keyChain();

let newAddress1 = myKeychain.makeKey(); //returns a Buffer for the address


interface HelloResponse {
  hello: string;
}

type HelloBuilder = (name: string) => HelloResponse;

const helloBuilder: HelloBuilder = name => ({ hello: name });

export const rootHandler = (_req: Request, res: Response) => {
  return res.send(myKeychain);
};

export const helloHandler = (req: Request, res: Response) => {
  const { params } = req;
  const { name = 'World' } = params;
  const response = helloBuilder(name);

  return res.json(response);
};
