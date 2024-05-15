const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/book',bookingController.bookVehicle);


module.exports = router;