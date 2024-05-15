const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    name: String,
    email: String,
    roomNo: String,
    checkInDate: Date,
    checkOutDate: Date,
    complaint: String
});

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports =Complaint