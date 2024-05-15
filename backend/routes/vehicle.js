const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');


router.get('/available-vehicles' , vehicleController.getAvailableVehicles);


module.exports = router;