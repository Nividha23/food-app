import React from 'react';
import './Payment.css';
import { useNavigate } from 'react-router-dom';

import upiIcon from '../../assets/images/images.png';
import cardIcon from '../../assets/images/cd card.jpeg';
import netbankIcon from '../../assets/images/netbanking.png';

function PaymentPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Absolute top-left back button */}
      <button className="back-home-btn" onClick={() => navigate('/YourOrder')}>
        ← Back 
      </button>

      <h2 className="center-heading">Payment Options</h2>

      <div className="payment-options-column">
        <div className="payment-option" onClick={() => navigate('/UpiPayment')}>
          <img src={upiIcon} alt="UPI" />
          <span>UPI</span>
        </div>

        <div className="payment-option" onClick={() => navigate('/cardpayment')}>
          <img src={cardIcon} alt="Card" />
          <span>Debit/Credit Card</span>
        </div>

        <div className="payment-option" onClick={() => navigate('/netbanking')}>
          <img src={netbankIcon} alt="Netbanking" />
          <span>Netbanking</span>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
