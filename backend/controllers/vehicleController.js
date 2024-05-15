const Vehicle = require('../models/Vehicle');


exports.getAvailableVehicles = async (req,res) => {
    try{
        const availableVehicles = await Vehicle.find({available:true});
        res.status(200).json(availableVehicles);
    }catch(err){
        res.status(500).json({message:err.message});
    }
};

