import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CardPayment.css';

function CardPayment() {
  const [popupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();

  const handleCardPayment = (e) => {
    e.preventDefault();
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    navigate('/orderconfirmation'); // change path if needed
  };

  return (
    <div className="container">
      {/* Absolute top-left back button */}
      <button className="back-home-btn" onClick={() => navigate('/payment')}>
        ← Back
      </button>
      <h2>Pay using Credit / Debit Card</h2>

      <form onSubmit={handleCardPayment}>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          placeholder="XXXX XXXX XXXX XXXX"
          required
        />

        <label htmlFor="cardName">Cardholder Name:</label>
        <input
          type="text"
          id="cardName"
          placeholder="Name on Card"
          required
        />

        <label htmlFor="expiry">Expiry Date:</label>
        <input type="text" id="expiry" placeholder="MM/YY" required />

        <label htmlFor="cvv">CVV:</label>
        <input type="password" id="cvv" placeholder="123" required />

        <button type="submit">Pay Now</button>
      </form>

      {popupVisible && (
        <div id="popup" className="popup" style={{ display: 'block' }}>
          <div className="popup-content">
            <p>✅ Payment Successful via Card!</p>
            <button onClick={closePopup}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardPayment;
