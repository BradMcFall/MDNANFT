import {Avalanche} from "avalanche";

export class AvalancheWork {
    constructor({id,ip}) {
        let avalanche = new Avalanche(ip, 9650, "http", 3, id);
        let xchain = avalanche.XChain();
        let myKeychain = xchain.keyChain();
        let newAddress = myKeychain.makeKey();
        console.log('newAddress: ' + JSON.stringify(newAddress));
    }
}
