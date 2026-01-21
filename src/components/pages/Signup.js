// src/components/pages/Signup.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5500/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setPopupMessage("🎉 Signed up successfully!");
        setPopupVisible(true);
        setTimeout(() => {
          setPopupVisible(false);
          navigate("/main");
        }, 1500);
      } else {
        setPopupMessage("❌ Signup failed: " + (data.message || "Unknown error"));
        setPopupVisible(true);
        setTimeout(() => setPopupVisible(false), 3000);
      }
    } catch (error) {
      console.error("Signup error:", error);
      setPopupMessage("⚠️ Could not reach server. Try again.");
      setPopupVisible(true);
      setTimeout(() => setPopupVisible(false), 3000);
    }
  };

  return (
    <div className="form-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Sign Up</button>
        <p className="switch-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>

      {popupVisible && (
        <div className="popup">
          <p>{popupMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Signup;
