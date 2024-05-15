const express = require('express');
const router = express.Router();
const transportController = require('../controllers/transportController');


router.post('/book-transportation',transportController.bookTransportation);

module.exports = router;