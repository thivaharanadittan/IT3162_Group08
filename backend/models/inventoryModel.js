const mongoose = require('mongoose')

const schemaData = mongoose.Schema({
    name:String,
    quantity:String,
    status:String,
},{
    timestamps:true
})

const userModel = mongoose.model("userInventory",schemaData)

module.exports =userModel