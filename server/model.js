const mongoose = require('mongoose')
const dataModel =new  mongoose.Schema({
    id:{
        required:true
    },
    checked:{
        required:true
    },
    item:{
        type:String,
        required:true
    }

})