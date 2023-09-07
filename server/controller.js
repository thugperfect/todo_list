const mongoose = require('mongoose')
const Data = require('./model')
const controller = {
    post: async (req,res) =>{

     try{   
        const {id,checked,item} = req.body

        console.log(req.body);

        const data = new Data({
            id,
            checked,
            item
        })
        await data.save()
        res.json({msg:'send to mongo'})
        
    }catch (err){
        res.json({err:err})
    }

    },
    get: async(req,res) =>{
        const dt =await Data.find({}) 
        res.json({dt})
    }

}
module.exports = controller