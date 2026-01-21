import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NetBanking.css';

function NetBanking() {
  const [popupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    navigate('/orderconfirmation'); // You can change this to your success page
  };

  return (
    <div className="container">
      {/* Absolute top-left back button */}
      <button className="back-home-btn" onClick={() => navigate('/payment')}>
        ← Back
      </button>
      <h2>Pay using Net Banking</h2>

      <form onSubmit={handlePayment}>
        <label htmlFor="bank">Select Your Bank:</label>
        <select id="bank" required>
          <option value="">--Choose a Bank--</option>
          <option>State Bank of India</option>
          <option>HDFC Bank</option>
          <option>ICICI Bank</option>
          <option>Axis Bank</option>
          <option>Kotak Mahindra Bank</option>
          <option>Canara Bank</option>
        </select>

        <label htmlFor="userid">User ID:</label>
        <input type="text" id="userid" placeholder="Enter User ID" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter Password" required />

        <label htmlFor="otp">Transaction Password / OTP:</label>
        <input type="password" id="otp" placeholder="Enter OTP or Transaction Password" required />

        <button type="submit">Pay Now</button>
      </form>

      {popupVisible && (
        <div className="popup" id="popup">
          <p>✅ Payment Successful!</p>
          <button onClick={closePopup}>OK</button>
        </div>
      )}
    </div>
  );
}

export default NetBanking;
