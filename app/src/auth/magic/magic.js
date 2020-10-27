import {Magic} from 'magic-sdk';

export function getMagic(){
    return new Magic('pk_test_86CFD80F8625D7F0');
}
export function loginStatus(m){
    return m.user.isLoggedIn();
}
export function logout(m){
    return m.user.logout();
}
