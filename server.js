require("dotenv").config()
const express = require('express');
const server = express();
const port = process.env.PORT;
const mongoose = require('mongoose');
const morgan = require('morgan');
const userAllRoutes = require('./routes/user/index.routes')
const adminAllRoutes = require('./routes/admin/index.routes')


async function main(){
    await mongoose.connect(process.env.MONGO_DB_URL);
}
main().then(()=>{
    console.log('DB is connected...'); 
}).catch((err)=>{
    console.log(err);
}); 

server.use(morgan('dev'))
server.use(express.json());


server.use('/api/v1' , userAllRoutes);
server.use('/api/a1' , adminAllRoutes);

server.listen(port,()=>{
    console.log(`server start at ${port}.`)

})