const express = require('express');
const router  = express.Router();

const Complaint= require('../models/ComplaintModel')

router.get('/', (req, res) => {
    res.send('Welcome to the complaint submission system');
});

// Handle POST request to submit complaint
router.post('/submit-complaint', (req, res) => {
    const formData = req.body;
    console.log('Received form data:', formData);
    // Process the form data as needed (e.g., save to database)
    res.status(200).json({ message: 'Complaint submitted successfully!' });
});

module.exports= router;
