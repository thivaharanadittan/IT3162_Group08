const express = require('express');
const db = require('./database/db');
const bookingRoutes = require('./routes/booking');
const transportationRoutes = require('./routes/transportation');
const vehicleRoutes = require('./routes/vehicle');
require('dotenv').config();

const cors = require('cors');




const app = express();
app.use(cors());
app.use(express.json());

app.use('/api' , bookingRoutes)
app.use('/api',transportationRoutes);
app.use('/api',vehicleRoutes)

const PORT = 5000;
app.listen(PORT , () => {
    console.log(`Server is running on ${PORT}`);
});