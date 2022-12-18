const {PORT,express} =require('./config/serverConfig');
const bodyParser=require('body-parser');
const { CityRepository } = require('./repository/city-repository');


const setupAndStartServer =async()=>{

    //Creating express object
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    const repo =new CityRepository();
    app.listen(PORT,()=>{
        console.log(`Server Strted at the Port :${PORT} `);
        repo.deleteCity({id:1});
    })
}

setupAndStartServer();