const mongoose = require('mongoose');


const bookingSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , 'Name is required']
    },
    email:{
        type : String,
        required : [true , 'Email is Required'],
        validate : {
            validator : function(v){
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message : props => `${props.value} is not a valid email address`
        }
    },
    feedback : {
        type : String,
        required : [true , 'Feedback is required']
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});


module.exports = mongoose.model('Booking' , bookingSchema)