class nft{
    private payload: any;
    constructor(public id:string){
        this.id = id;
        this.payload = {};
    }
    createNewNFT(){}
}
export class NFT {
    static create(event: { id: string }) {
        return new nft(event.id);
    }
}
