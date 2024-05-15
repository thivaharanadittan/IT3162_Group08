const BookingTransportation = require('../models/BookingTransportation');


exports.bookTransportation = async (req,res) => {
    try{
        const { pickupLocation, dropOffLocation, date, time } = req.body;
        const bookingTransportation = new BookingTransportation({
            pickupLocation,
            dropOffLocation,
            date,
            time
        });
        await bookingTransportation.save();
        res.status(201).json({message:'Transport Booking Successful',bookingTransportation});
    }catch(err){
        res.status(500).json({message:err.message})
    }
}