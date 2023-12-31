require('dotenv').config()
const express = require('express')
const app = express()
const cors =require('cors')


app.use(cors())

app.use(express.json())

app.use('/',require('./router'))
app.get('/api',(req,res)=>{
    res.send("fu")
})
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
