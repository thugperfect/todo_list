const mongoose = require('mongoose')
const Data = require('./model')
const controller = {
    post: async (req,res) =>{

        const {id,checked,item} = req.body

        console.log(req.body);

    }

}
module.exports = controller