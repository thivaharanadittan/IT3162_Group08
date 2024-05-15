import React, { useState } from 'react';
import axios from 'axios';


const Complaint = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        roomNo: '',
        checkInDate: '',
        checkOutDate: '',
        complaint: ''
    });
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3000/submit-complaint', formData);
            console.log(response.data); 
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    
    
    
        
        setFormData({
            name: '',
            email: '',
            roomNo: '',
            checkInDate: '',
            checkOutDate: '',
            complaint: ''
        });
    };

    const handleClear = () => {

        setFormData({
            name: '',
            email: '',
            roomNo: '',
            checkInDate: '',
            checkOutDate: '',
            complaint: ''
        });
    };

    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <h2 style={styles.heading}>Complaint Form</h2>
                <form onSubmit={handleSubmit}>
                    <div style={styles.inputGroup}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor="roomNo">Room No:</label>
                        <input type="text" id="roomNo" name="roomNo" value={formData.roomNo} onChange={handleChange} required />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor="checkInDate">Check In Date:</label>
                        <input type="date" id="checkInDate" name="checkInDate" value={formData.checkInDate} onChange={handleChange} required />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor="checkOutDate">Check Out Date:</label>
                        <input type="date" id="checkOutDate" name="checkOutDate" value={formData.checkOutDate} onChange={handleChange} required />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor="complaint">Complaint:</label>
                        <textarea id="complaint" name="complaint" value={formData.complaint} onChange={handleChange} required />
                    </div>
                    <div style={styles.buttonGroup}>
                        <button type="submit" style={styles.button}>Submit</button>
                        <button type="button" onClick={handleClear} style={styles.button}>Clear</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    box: {
        padding: '50px',
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '500px',
        background: '#ffffff',
        height: '75vh'
    },
    heading: {
        textAlign: 'center',
        marginBottom: '30px' 
    },
    inputGroup: {
        marginBottom: '15px',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '50px'
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
    },
    button: {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        margin: '0 10px',
        cursor: 'pointer'
    }
};

export default Complaint;
