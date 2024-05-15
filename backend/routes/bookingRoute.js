// bookingRoute.js
const express = require("express");
const router = express.Router();
const Room = require('../models/room')
const Booking = require('../models/booking');
const moment = require("moment")

router.post('/bookroom', async (req, res) => {
    const { room, userid, fromdate, todate, totalamount, totaldays } = req.body;
    try {
        const newBooking = new Booking({
            room: room.name,
            roomid: room._id,
            userid,
            fromdate: moment(fromdate).format('DD MM YYYY'),
            todate: moment(todate).format('DD MM YYYY'),
            totalamount,
            totaldays,
            transactionid: '1234'
        });

        const booking = await newBooking.save();
        const roomTemp = await Room.findOne({ _id: room._id })

        roomTemp.currentbookings.push({ 
            bookingid: booking._id, 
            fromdate: moment(fromdate).format('DD MM YYYY'), 
            todate: moment(todate).format('DD MM YYYY'),
            userid : userid,
            status : booking.status
         })

         await roomTemp.save()
        res.send('Room booked successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
router.post('/getbookingsbyuserid', async(req,res) =>{
    const userid= req.body.userid

    try {
        const bookings =await Booking.find({userid :userid})
        res.send(bookings)
    } catch (error) {
        return res.status(404).json({error})
    }
});

router.post('/cancelbooking', async(req,res) =>{
    const {bookingid, roomid}=req.body

    try {
        const bookingItem =await Booking.findOne({_id :bookingid})
        bookingItem.status = 'canceled'
        await bookingItem.save()
        const room = await Room.findOne({_id :roomid})

        const bookings = room.currentbookings

        const temp =bookings.filter(booking => booking.bookingid.toString() !== bookingid)        
        
        room.currentbookings =temp

        await room.save()
        res.send("cancel")
    } catch (error) {
        return res.status(404).json({error})
    }
})
module.exports = router;
