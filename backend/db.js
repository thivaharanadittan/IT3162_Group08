const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  bufferCommands: false,
  serverSelectionTimeoutMS: 5000
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Define a schema for a collection
const complaintSchema = new mongoose.Schema({
  name: String,
  email: String,
  roomNo: String,
  checkInDate: Date,
  checkOutDate: Date,
  complaint: String
});


// Define a model for the collection
const Complaint = mongoose.model('Complaint', complaintSchema);

// Example of creating a document (data) in the collection
const newComplaint = new Complaint({
  name: 'John Doe',
  email: 'john@example.com',
  roomNo: '101',
  checkInDate: new Date(),
  checkOutDate: new Date(),
  complaint: 'No hot water in the room'
});

newComplaint.save()
.then(() => {
  console.log('Complaint saved successfully');
})
.catch((error) => {
  console.error('Error saving complaint:', error);
});
