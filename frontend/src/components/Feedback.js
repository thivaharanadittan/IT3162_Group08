
import React, { useState } from 'react';
import '../style/Feedback.css';
import { useNavigate } from 'react-router-dom';
const Feedback = () => {
  const navigate=useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement feedback submission logic (e.g., API call or local state update)
    console.log('Feedback submitted:', { name, email, feedback });
    // You can add logic here to send the feedback to a server or update local state
  };

  return (
    <div className="feedback-form-container">
      <br/>
        <h2>Booking confirmed!</h2>
    
        <h3>Feedback Form</h3>
      <form className='form1' onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Feedback:
          <br/>
          <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} rows={5}   />
        </label>
        <br />
        <button type="submit">Submit Feedback</button>
      </form>
      <center><button  className="back"type='submit' onClick={()=>navigate('/')}>Go Home</button></center>
    </div>
  );
};

export default Feedback;
