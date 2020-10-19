import {Magic} from 'magic-sdk';

export function getMagic(){
    return new Magic(process.env.MAGIC_API_KEY);
}
export function loginStatus(m){
    return m.user.isLoggedIn();
}
export function logout(m){
    return m.user.logout();
}
