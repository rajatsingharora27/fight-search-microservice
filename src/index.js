const {PORT,express} =require('./config/serverConfig');
const bodyParser=require('body-parser');
const ApiRoutes=require('./router/index');




const setupAndStartServer =async()=>{

    //Creating express object
    const app=express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',ApiRoutes);
    
    app.listen(PORT,()=>{
        console.log(`Server Strted at the Port :${PORT} `);
        // repo.createCity({name:"New Delhi"});
    })
}

setupAndStartServer();