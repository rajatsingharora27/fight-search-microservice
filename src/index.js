const {PORT,express} =require('./config/serverConfig');
const bodyParser=require('body-parser');

const setupAndStartServer =async()=>{

    //Creating express object
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))
    app.listen(PORT,()=>{
        console.log(`Server Strted at the Port :${PORT} `)
    })
}

setupAndStartServer();