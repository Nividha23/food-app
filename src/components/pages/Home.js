// src/components/pages/Home.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../../assets/images/SNB_LOGO.png";

function Home() {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      console.log("Welcome back, " + user.name);
    }
  }, []);

  return (
    <div className="home-page-container">
      {/* Header */}
      <header className="home-page-header">
        <img src={logo} alt="SNB Logo" className="home-page-logo" />
        <nav className="home-page-nav">
          <Link to="/login" className="home-page-link">Login</Link>
          <Link to="/signup" className="home-page-link">Sign Up</Link>
        </nav>
      </header>

      {/* Center Content */}
      <main className="home-page-main">
        <div className="home-page-content-box">
          <h1 className="home-page-title">
            <img src={logo} alt="SNB logo icon" className="home-page-logo-small" />
            <span>SNB Bakery</span>
          </h1>
          <p className="home-page-tagline">Coping the Taste of the Past</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="home-page-footer">
        <p className="home-page-copyright">© 2025 SNB Bakery</p>
        <div className="home-page-social-icons">
          <a href="https://www.instagram.com/yourpage" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com/yourpage" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
