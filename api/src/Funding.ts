//This is a user's address that has funds in it from which to send funds to new users with

// It imports the User and then sends funds to their address

//https://docs.avax.network/v1.0/en/api/avm/

import {ApiService} from "./ApiService";
import {User} from "./User";


const API = ApiService.create({avalancheNodeUrl:blockchainIp,jsonRPCVersion:"2.0"});

// Create  user's address to send funds to using password and username


function testAPI() {
    let endpoint = '/ext/bc/X';
    method  = "avm.createAddress";
    let params = [{
        "username":"Username",
        "password":"Password"
    }];

    API.getData(endPoint, method, params)
        .then((response) => {

            console.log(response); //entire response
            console.log('\ni.e. data: ' + JSON.stringify(response.data));

        }).catch((err)=>{
            console.log(err);
    })
}
testAPI();
// Now send funds to user's address

// for Brad:
function testAPI() {
 //"jsonrpc":"2.0",
   // "id"     :1,
    let endPoint = '/ext/bc/X';
    let method = "avm.send";
    let params = [{
        "assetID"   : "AVAX",
        "amount"    : 10000,
        "to"        : "X-avax1yzt57wd8me6xmy3t42lz8m5lg6yruy79m6whsf",
        "from":["X-avax1s65kep4smpr9cnf6uh9cuuud4ndm2z4jguj3gp"],
        "changeAddr": "X-avax1turszjwn05lflpewurw96rfrd3h6x8flgs5uf8",
        "memo"      : "here is some dance money",
        "username"  : "userThatControlsAtLeast10000OfThisAsset",
        "password"  : "myPassword"
}];
    
    
    //let params = [];
    //no params needed for health, other endpoints require params
    //if so it would be params = [{ <params> }]
    API.getData(endPoint, method, params)
        .then((response) => {
            console.log(response); //entire response
            console.log('\ni.e. data: ' + JSON.stringify(response.data));
        }).catch((err)=>{
            console.log(err);
    })
}
//
testAPI()
