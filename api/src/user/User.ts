class user{
    private payload: any;
    constructor(public id:string){
        this.id = id;
        this.payload = {};
    }
    createNewUser(){}
}
export class User {
    static create(event: { id: string }) {
        return new user(event.id);
    }
}
