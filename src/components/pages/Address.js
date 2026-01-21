import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Address.css';

function AddressPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    mobile: '',
    pincode: '',
    city: '',
    state: '',
    fullname: '',
    email: '',
    landmark: '',
    address: ''
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('userAddress'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userAddress', JSON.stringify(formData));
    navigate('/payment');
  };

  return (
    <div className="address-page">
      <div className="address-container">
        <button className="address-back-btn" onClick={() => navigate('/YourOrder')}>
          ← Back
        </button>

        <h2 className="address-title">Add / Edit Address</h2>

        <form className="address-form" onSubmit={handleSubmit}>
          <label>Mobile Number</label>
          <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />

          <label>Pincode *</label>
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />

          <div className="address-row">
            <div className="address-col">
              <label>City *</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            </div>
            <div className="address-col">
              <label>State *</label>
              <input type="text" name="state" value={formData.state} onChange={handleChange} required />
            </div>
          </div>

          <label>Full Name *</label>
          <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} required />

          <label>Email Address *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Landmark</label>
          <input type="text" name="landmark" value={formData.landmark} onChange={handleChange} />

          <label>Complete Address *</label>
          <textarea name="address" value={formData.address} onChange={handleChange} required></textarea>

          <button type="submit" className="address-continue-btn">
            Continue →
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddressPage;
