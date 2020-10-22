import express from "express";
import {AvalancheWork} from "./AvalancheWork"
import {ApiService} from "./ApiService";

const app = express();
const port = 3000;

const user = new Map(); // "db -email is key"

const blockchainId = process.env.DEV_BLOCKCHAIN_ID;
const blockchainIp = process.env.DEV_AVALANCHE_IP;

const AVA = AvalancheWork.create({id:blockchainId,ip:blockchainIp});
const API = ApiService.create({avalancheNodeUrl:blockchainIp,jsonRPCVersion:"2.0"});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/data', (req, res) => {

    let endPoint = req.body.endPoint;
    let method = req.body.method;
    let params = req.body.params;

    API.getData(endPoint,method,params)
        .then((r)=>{
        res.json(r.data);
    }).catch((err)=>{
        console.log(err);
    })
});

app.post('/api/user/create', (req, res) => {
    let email = req.body.email;
    AVA.createNewUser(email)
        .then((r)=>{
            user.set(email,r);
            res.json(r);
        })
});
//api/user/get
//api/user/update

//api/nft/create
//api/nft/update
//api/nft/get


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
