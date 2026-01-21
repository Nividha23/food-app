import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './ProfilePage.css';

export default function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('userAddress'));
    if (savedData) {
      setUserData(savedData);
    }
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem('userAddress', JSON.stringify(userData));
    setEditing(false);
  };

const handleLogout = async () => {
  try {
    const res = await fetch("http://localhost:5500/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.removeItem("userAddress");
      navigate("/");
    } else {
      alert(`Failed to logout: ${data.message}`);
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong during logout.");
  }
};


  if (!userData) {
    return (
      <div className="profile-page">
        <p>No user data found. Please fill address page first.</p>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="profile-picture"
        />
        <h2>{userData.fullname || 'N/A'}</h2>
        <Link to="/main" className="back-btn">← Back</Link>

        <div className="profile-info">
          {editing ? (
            <>
              <div>
                <span>Email:</span>
                <input name="email" value={userData.email} onChange={handleChange} />
              </div>
              <div>
                <span>Phone:</span>
                <input name="mobile" value={userData.mobile} onChange={handleChange} />
              </div>
              <div>
                <span>Address:</span>
                <textarea name="address" value={userData.address} onChange={handleChange}></textarea>
              </div>
              <button onClick={handleSave}>Save</button>
            </>
          ) : (
            <>
              <div><span>Email:</span> {userData.email}</div>
              <div><span>Phone:</span> {userData.mobile}</div>
              <div><span>Address:</span> {userData.address}</div>
              <button onClick={() => setEditing(true)}>✏️ Edit Profile</button>
            </>
          )}
        </div>

        <div className="profile-actions">
          <button onClick={() => navigate("/change-password")}>
            🔒 Change Password
          </button>
          <button className="logout" onClick={handleLogout}>
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
}
