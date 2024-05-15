const express = require("express");
const router  = express.Router();

const Inventory= require('../models/inventoryModel')

router.get("/",async(req,res)=>{
    const data = await Inventory.find({})
    res.json({success:true ,data:data})
})

//create data
router.post("/create",async(req,res)=>{
    console.log(req.body)
    const data = new Inventory(req.body)
    await data.save()
    res.send({success:true , message:"data save succesfully" , data:data})
})

//update
router.put("/update",async(req,res)=>{
    console.log(req.body)
    const {_id,...rest} = req.body
    console.log(rest)
    const data = await Inventory.updateOne({_id:_id},rest)
    res.send({success:true , message : "data update successfully", data:data })
})

// delete
router.delete("/delete/:id",async(req,res)=>{
    const id = req.params.id
    console.log(id)
    const data = await Inventory.deleteOne({_id:id})
    res.send({success:true , message : "data deleted successfully", data:data })
})

module.exports= router;