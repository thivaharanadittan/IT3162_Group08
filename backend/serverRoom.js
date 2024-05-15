const express= require("express");

const app=express();
const cors = require('cors');
app.use(cors());
const dbConfig=require("./roomDB");
const roomsRoute=require('./routes/roomsRoute');
const bookingroute=require('./routes/bookingRoute');
const usersRoute=require('./routes/userRoute');

app.use(express.json())
app.use('/api/rooms',roomsRoute);
app.use('/api/users',usersRoute);
app.use('/api/bookings',bookingroute);
const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log("Server is running"));
