class user{
    constructor(public username:string,public password:string){
        this.username = username;
        this.password = password;
    }
}
export class User {
    static create(event: { username: string,password: string }) {
        return new user(event.username,event.password);
    }
}
