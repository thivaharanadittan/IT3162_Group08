const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));


const submissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  roomNo: String,
  checkInDate: Date,
  checkOutDate: Date,
  complaint: String
});


const Submission = mongoose.model('Submission', submissionSchema);


app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the complaint submission system');
});

app.post('/submit-complaint', (req, res) => {
    const formData = req.body;
    console.log('Received form data:', formData);
    
  
    const newSubmission = new Submission(formData);
    newSubmission.save()
      .then(() => {
        console.log('Form data saved to MongoDB');
        res.status(200).json({ message: 'Complaint submitted successfully!' });
      })
      .catch(err => {
        console.error('Error saving form data:', err);
        res.status(500).json({ error: 'Failed to submit complaint' });
      });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
