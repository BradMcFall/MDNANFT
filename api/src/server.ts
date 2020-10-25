import express from "express";
import {ApiService} from "./ApiService";
import {User} from "./User";

const app = express();
const port = 3000;

const user = new Map();

const blockchainIp = process.env.DEV_AVALANCHE_IP;
const API = ApiService.create({avalancheNodeUrl:blockchainIp,jsonRPCVersion:"2.0"});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/user/create', (req, res) => {

    /* from the quickstart guide */
    /* https://docs.avax.network/v1.0/en/quickstart/#create-a-keystore-user */

    let endPoint = req.body.endPoint;
    let method = req.body.method;
    let params = req.body.params;

    console.log('method: ' + method);

    if(method === 'keystore.createUser') {

        /* check if bootstrapped */
        API.getData(endPoint,'info.isBootstrapped',params)
            .then((r)=>{

                if(r.data){//true: bootstrapped

                    //create user
                    API.getData(endPoint,method,params)
                        .then((r)=>{
                            /*
                            responses...
                            { code: -32000, message: 'password is too weak', data: null }
                            { code: -32000, message: 'user already exists: usertest1', data: null }
                            {"jsonrpc":"2.0","result":{"success":true},"id":1}
                            */
                            if(r.data.error){
                                console.log(r.data.error);
                            }else{
                                console.log('USER CREATED: ' + JSON.stringify(r.data));
                                user.set('brad@bradcom.com', User.create({username:'test',password:'test'}))
                                console.log(JSON.stringify(user.get('brad@bradcom.com')))

                                    //next //--> add address
                            }

                        }).catch((err)=>{
                        console.log(err);
                    })
                }

            }).catch((err)=>{
            console.log(err);
        })

    }else{
        res.json({'error':'not valid method'})
    }
});



app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
