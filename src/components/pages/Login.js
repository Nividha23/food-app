// src/components/pages/Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5500/api/login", {

  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData)
});


      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("user", JSON.stringify(data.user));
        setPopupMessage("✅ Login successful!");
        setPopupVisible(true);
        setTimeout(() => {
  setPopupVisible(false);
  navigate("/main"); // ✅ This is where redirection happens
}, 2000);

      } else {
        const err = await res.json();
        setPopupMessage("❌ Login failed: " + err.message);
        setPopupVisible(true);
        setTimeout(() => setPopupVisible(false), 3000);
      }
    } catch (error) {
      console.error(error);
      setPopupMessage("⚠️ Server error. Please try again.");
      setPopupVisible(true);
      setTimeout(() => setPopupVisible(false), 3000);
    }
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>

        <p className="switch-link">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>

      {/* Popup message */}
      {popupVisible && (
        <div className="popup">
          <p>{popupMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Login;
