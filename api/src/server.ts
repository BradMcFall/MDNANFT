import express from "express";
import {ApiService} from "./ApiService";
import {User} from "./User";

const app = express();
const port = 3000;

const user = new Map();

const blockchainIp = '127.0.0.1';
//const blockchainIp = process.env.DEV_AVALANCHE_IP;
const API = ApiService.create({avalancheNodeUrl:blockchainIp,jsonRPCVersion:"2.0"});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post('/api/user/create', (req, res) => {

    /* from the quickstart guide */
    /* https://docs.avax.network/v1.0/en/quickstart/#create-a-keystore-user */

    let endPoint = req.body.endPoint;
    let method = req.body.method;
    let params = req.body.params;

    if(method === 'keystore.createUser') {

        /* check if bootstrapped */
        API.getData('/ext/info',
            'info.isBootstrapped',{"chain":"X"})
            .then((r)=>{

                if(r.data.result.isBootstrapped){//true: bootstrapped
                    //create user
                    API.getData(endPoint,method,params)
                        .then((r)=>{

                            if(r.data.error){
                                console.log(r.data.error);
                                res.json(r.data.error);
                            }else{
                                user.set(params.username, User.create({username:params.username, password:params.password}))
                                console.log('\nuser created:\n' +
                                    JSON.stringify(user.get(params.username)));
                                console.log('\nusers in map: ' + user.size);
                                    //next //--> add address ???
                                res.json(r.data);
                            }

                        }).catch((err)=>{
                            res.json(err);
                            console.log(err);
                    })
                }else{
                    res.json({'error':'not bootstrapped'})
                }

            }).catch((err)=>{
            console.log(err);
        })

    }else{
        res.json({'error':'not valid method'})
    }
});


/* for Brad:
function testAPI() {
    //  let endPoint
   let endPoint = '/ext/health';
    let method = 'health.getLiveness';
    let params = [];
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
*/

app.listen(port, () => {
    console.log(`listening on port ${port}`);
  //  testAPI();
});
