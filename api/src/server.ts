import express from "express";
import bodyParser from "body-parser"
import path from "path";
import {AvalancheWork} from "./AvalancheWork"

const app = express();
const port = 3000;

//Brad
const blockchainId = "2JVSBoinj9C2J33VntvzYtVJNZdN2NKiwwKjcumHUWEb5DbBrm";
const blockchainIp = "localhost";

//environment variables
//const blockchainId = process.env.DEV_BLOCKCHAIN_ID;
//const ip = process.env.DEV_AVALANCHE_IP;

const AVA = new AvalancheWork({id:blockchainId,ip:blockchainIp});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../app/build')));
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../app/build/index.html'));
});
app.get('/api/test', (req, res) => {
    res.json({"avalanche":'data'});
});
app.listen(port, () => {
    console.log(`listening on the port ${port}`);
});
