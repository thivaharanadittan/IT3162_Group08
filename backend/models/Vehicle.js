const mongoose = require('mongoose');


const carSchema = new mongoose.Schema({
    make : {
        type:String,
        required:true
    },
    seats: {
        type : Number,
        required:true
    },
    amenities : [String],
    vehicleImage : {
        type : String,
        required : true
    }
});


module.exports = mongoose.model('Car' , carSchema);

