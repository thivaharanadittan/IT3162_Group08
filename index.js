const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8080

//schema

const schemaData = mongoose.Schema({
    name:String,
    quantity:String,
    status:String,

},{
    timestamps:true
})

const userModel = mongoose.model("user",schemaData)

mongoose.connect("mongodb://localhost:27017/inventory")
.then(()=>console.log("connected to DB"))
.catch((err)=>console.log(err))

//read data
app.get("/",async(req,res)=>{
    const data = await userModel.find({})
    res.json({success:true ,data:data})
})

//create data
app.post("/create",async(req,res)=>{
    console.log(req.body)
    const data = new userModel(req.body)
    await data.save()
    res.send({success:true , message:"data save succesfully" , data:data})
})

//update
app.put("/update",async(req,res)=>{
    console.log(req.body)
    const {_id,...rest} = req.body
    console.log(rest)
    const data = await userModel.updateOne({_id:_id},rest)
    res.send({success:true , message : "data update successfully", data:data })
})

// delete
app.delete("/delete/:id",async(req,res)=>{
    const id = req.params.id
    console.log(id)
    const data = await userModel.deleteOne({_id:id})
    res.send({success:true , message : "data deleted successfully", data:data })
})




app.listen(PORT,()=>console.log("server is running"))



