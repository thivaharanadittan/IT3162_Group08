const mongoose=require("mongoose");
//var mongoURL = 'mongodb://localhost:27017/room_details';
var mongoURL = 'mongodb://localhost:27017/HotelManagement';

mongoose.connect(mongoURL ,{ useNewUrlParser: true, useUnifiedTopology: true });

var connection=mongoose.connection

connection.on('error' , ()=>{
    console.log('Mongo DB connection failed')
})
 
connection.on('connected',()=>{
    console.log('Mongo DB connection Successfull')
})

module.exports = mongoose;
