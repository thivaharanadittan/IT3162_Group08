const express= require("express");

const app=express();
const cors = require('cors');
app.use(cors());
const fileUpload =require('express-fileupload');
app.use(fileUpload());
const dbConfig=require("./db");
app.use(express.json())

//room reservation
const roomsRoute=require('./routes/roomsRoute');
const usersRoute=require('./routes/userRoute');
const bookingroute=require('./routes/bookingRoomRoute');
const employeeRoute=require('./routes/employeeRoute');

app.use('/api/rooms',roomsRoute);
app.use('/api/users',usersRoute);
app.use('/api/bookings',bookingroute);

app.use('/api/employee',employeeRoute);
//*Transportation
{/*const bookingTransportRoutes = require('./routes/bookingTransport');
const transportationRoutes = require('./routes/transportation');
const vehicleRoutes = require('./routes/vehicleTransport');

app.use('/api' , bookingTransportRoutes)
app.use('/api',transportationRoutes);
app.use('/api',vehicleRoutes)
*/}
//Inventory
const inventoryRoute=require('./routes/inventoryRoute');
app.use('/api/inventory',inventoryRoute);

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log("Server is running"));