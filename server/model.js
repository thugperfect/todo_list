const mongoose = require('mongoose')
const dataModel = new  mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    checked:{
        type:Boolean,
        required:true
    },
    item:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('Data',dataModel)