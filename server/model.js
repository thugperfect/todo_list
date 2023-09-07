const mongoose = require('mongoose')
const dataModel = new  mongoose.Schema({
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