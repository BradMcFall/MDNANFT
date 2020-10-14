import express from "express";
import bodyParser from "body-parser"
import path from "path";
import {AvalancheWork} from "./AvalancheWork"
import {ApiService} from "./ApiService";

const app = express();
const port = 3000;

//Brad
//const blockchainId = "2JVSBoinj9C2J33VntvzYtVJNZdN2NKiwwKjcumHUWEb5DbBrm";
//const blockchainIp = "localhost";

//environment variables
const blockchainId = process.env.DEV_BLOCKCHAIN_ID;
const blockchainIp = process.env.DEV_AVALANCHE_IP;

const AVA = new AvalancheWork({id:blockchainId,ip:blockchainIp});
const API = new ApiService(blockchainIp,"2.0");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../app/build')));
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../app/build/index.html'));
});

app.get('/api/test', (req, res) => {
    API.test('/ext/bc/C/rpc', 'eth_chainId', [])
        .then((r)=>{
        res.json(r.data);
    })
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
