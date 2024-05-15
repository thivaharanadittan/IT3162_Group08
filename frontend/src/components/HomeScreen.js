import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Room from '../components/Room';
import Loder from '../components/Loder';
import Error from '../components/Error';
import { DatePicker } from 'antd';
//const moment = require('moment')
import moment from 'moment';
//import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;
export default function HomeScreen() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [fromDate, setFromdate] = useState();
    const [toDate, setTodate] = useState();
    const [duplicateroom, setDuplicateroom] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/rooms/getallrooms');
                setRooms(response.data);
                setDuplicateroom(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    function filterbydate(dates) {
        setFromdate((dates[0]))
        setTodate((dates[1]))

        var temprooms = []
        var availability = false;
        for (const room of duplicateroom) {
            if (room.currentbookings.length > 0) {
                for (const booking of room.currentbookings) {
                    if (
    !moment(dates[0]).isBetween(
        booking.fromDate,
        booking.toDate
    ) &&
    !moment(dates[1]).isBetween(
        booking.fromDate,
        booking.toDate
    )
){
                        if (
                            (dates[0]) !== booking.fromDate &&
                                (dates[0]) !== booking.toDate &&
                                    (dates[1]) !== booking.fromDate &&
                                        (dates[1]) !== booking.toDate 
                        ){
                            availability = true;
                        }
                    }
                         
                }
            }
            if (availability === true || room.currentbookings.length === 0) {
                temprooms.push(room)
            }
            
        }
        setRooms(temprooms)
        
    }
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-3 text-center bs'>
                    <RangePicker 
                        format='DD MM YYYY'
                        onChange={filterbydate}
                        style={{
                            borderColor: 'black',
                          }}
                    />
                </div>

            </div>
            <div className='row justify-content-center mt-5'>
                {loading ? (
                    <Loder></Loder>
                ) : rooms.length > 1 ? (
                    rooms.map((room) => (
                        <div className='col-md-10 mt-2'>
                            <Room room={room} fromDate={fromDate} toDate={toDate} />
                        </div>
                    ))
                ) : (
                    <Error></Error>
                )}
            </div>
        </div>
    );
}
