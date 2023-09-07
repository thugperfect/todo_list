const mongoose = require('mongoose')
const Data = require('./model')
const controller = {
    post: async (req,res) =>{

     try{   
        const {checked,item} = req.body

        console.log(req.body);

        const data = new Data({
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
       try{ 
        const {_id} = req.body
        console.log(req.body);
        const deleteItem = await Data.findByIdAndDelete(_id)

        if(!deleteItem) return res.json({msg:"Element not found"})

        res.json({msg:"Element deleted successfully"})
        }
        catch (err){
            console.log(err);
        }
    },
    update:async (req,res) =>{
     try{   const {_id,checked} = req.body

        const updateData = await Data.findById(_id)
        if(!updateData) return res.json({msg:"no element found"})

        updateData.checked = checked

        await updateData.save()
        res.json({msg:"updated checked"})}
        catch (err){
            console.log(err);
        }
    }

}
module.exports = controller