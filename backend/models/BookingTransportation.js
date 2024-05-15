const mongoose = require('mongoose');


const bookingTransportationSchema = new mongoose.Schema({
    pickupLocation : {
        type : String,
        required: [true , 'Pickup Location is required']
    },
    dropOffLocation : {
        type : String,
        required:[true , 'Drop Off Location is required']
    },
    date : {
        type : Date,
        required:[true , 'Date is required']
    },
    time : {
        type : String,
        required: true
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('BookingTransportation' , bookingTransportationSchema);