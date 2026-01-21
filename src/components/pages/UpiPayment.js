import React, {useState } from 'react';
import './UpiPayment.css'; // use your original CSS
import paytm from '../../assets/images/paytm.png';
import phonepe from '../../assets/images/phpe.jpeg';
import gpay from '../../assets/images/googlepay.png';
import bhim from '../../assets/images/bhim.png';
import { useNavigate } from 'react-router-dom';

function UpiPayment() {
  const navigate = useNavigate();
  const [upiInput, setUpiInput] = useState('');

  const payViaUPI = () => {
    const upiId = upiInput.trim();
    const amount = 50; // You can also fetch this dynamically

    if (upiId) {
      const upiUrl = `upi://pay?pa=${upiId}&pn=Merchant&am=${amount}&cu=INR`;

      // ✅ Save transaction to backend before redirect
      fetch('http://localhost:5500/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          method: 'UPI',
          upiId,
          amount,
          status: 'Initiated',
          time: new Date(),
        }),
      })
        .then((res) => res.json())
        .then(() => {
          window.location.href = upiUrl; // ✅ Proceed to UPI intent
        })
        .catch((err) => {
          console.error('Transaction error:', err);
          alert('Something went wrong. Try again.');
        });
    } else {
      alert('Please enter a valid UPI ID.');
    }
  };

  const payWithUPI = (id) => {
    setUpiInput(id);
    setTimeout(payViaUPI, 100);
  };

  return (
    <div className="container">
      {/* Absolute top-left back button */}
      <button className="back-home-btn" onClick={() => navigate('/payment')}>
        ← Back
      </button>
      <h2>Scan & Pay using UPI</h2>

      <div className="apps">
        <img src={paytm} alt="Paytm" onClick={() => payWithUPI('paytm@paytm')} />
        <img src={phonepe} alt="PhonePe" onClick={() => payWithUPI('phonepe@ybl')} />
        <img src={gpay} alt="Google Pay" onClick={() => payWithUPI('gpay@okaxis')} />
        <img src={bhim} alt="BHIM" onClick={() => payWithUPI('bhim@upi')} />
      </div>

      <label htmlFor="upiInput">Pay via UPI ID:</label>
      <input
        type="text"
        id="upiInput"
        placeholder="Enter your UPI ID"
        value={upiInput}
        onChange={(e) => setUpiInput(e.target.value)}
      />
      <div className="pay-btn-wrapper">
  <button className="pay-btn">Pay</button>
</div>


      <p><strong>OR</strong></p>

      <img
        src="https://api.qrserver.com/v1/create-qr-code/?data=upi://pay?pa=merchant@upi&pn=MerchantName&am=50&cu=INR"
        alt="QR Code"
        className="qr"
      />
      <p>You can also scan the above QR using any UPI app</p>
    </div>
  );
}

export default UpiPayment;
