require('dotenv').config()
const express = require('express')
const app = express()
const cors =require('cors')

const router = require('./router')
app.use(cors())


app.use('/',router)
const mongoose  = require('mongoose')

const db = process.env.MONGO_URL
mongoose.connect(db,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
mongoose.connection.on('error',(err)=>{
    console.log("MONGODB ==> DISCONNECTED");
    console.log(err);
})
mongoose.connection.once('open',()=>{
    console.log('MONGODB ==> CONNECTED');
})

require('./model')


const port = process.env.PORT || 5001
app.listen(port,()=>{
    console.log(`Server@${port}`);
})
