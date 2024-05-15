const Booking = require('../models/Booking');



exports.bookVehicle = async (req,res) => {
    try{
        const {name , email , feedback} = req.body;
        const booking = new Booking({
            name,
            email,
            feedback
        });
        await booking.save();
        res.status(201).json({message : 'Booking successful', booking});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}