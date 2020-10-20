import {Avalanche} from 'avalanche'
import {User} from './user/User'
import {NFT} from './asset/NFT'

class Ava {
    private avalanche: any;
    constructor(public id:string, public ip:string) {
        this.avalanche = new Avalanche(ip, 9650, "http", 3, id);
    }
    getNewXChainAddress(){
        let x = this.avalanche.XChain();
        let myKeychain = x.keyChain();
        return myKeychain.makeKey();
    }

    createNewUser(email:string){
        let user = User.create({id:email});
        return new Promise(()=>{});
    }
    createNewNFT(id:string){
        let nft = NFT.create({id:id});
        return new Promise(()=>{});
    }
}
export class AvalancheWork{
    static create(event: { ip: string; id: string }){
        return new Ava(event.id,event.ip);
    }
}
