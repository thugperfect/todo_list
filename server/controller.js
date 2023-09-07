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
        res.json({msg:'send to mongo',
            data:{
        ...data._doc
    }
    })
        
    }catch (err){
        res.json({err:err})
    }

    },
    get: async(req,res) =>{
        const dt =await Data.find({}) 
        res.json({dt})
    },
    delete: async (req,res)=>{
       try{ const {_id} = req.body
        const deleteItem = await Data.findByIdAndDelete(_id)

        if(!deleteItem) return res.json({msg:"Element not found"})

        res.json({msg:"Element deleted successfully"})
        }
        catch (err){
            console.log(err);
        }
    }

}
module.exports = controller