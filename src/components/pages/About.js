// src/components/pages/AboutPage.js
import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';


function AboutPage() {
  return (
    <div className="about-wrapper">
      <header className="about-header">
        <Link to="/main" className="back-btn">← Back to Home</Link>
        <h1 className="about-title">About SNB</h1>
      </header>

      <div className="about-card">
        <h2>Who We Are</h2>
        <p>
          <span className="highlight">Foodies</span> is your one-stop destination for delicious meals delivered straight to your door.
          We bring you a wide variety of cuisines—from spicy Biryani to creamy Paneer Butter Masala and more!
        </p>

        <p>
          Our mission is to make your food ordering experience <span className="highlight">fast</span>, <span className="highlight">easy</span>, and <span className="highlight">tasty</span>.
          With a modern interface and a menu filled with your favorite dishes, Foodies satisfies both hunger and convenience.
        </p>

        <h2>Our Story</h2>
        <p>
          It all began in the humble streets of Bengaluru, where <span className="highlight">Sri Nanjundeshwara Bakery (SNB)</span> was born in 1988.
          From baking the first cookie in a clay oven to becoming a beloved household name, our journey is steeped in tradition, passion, and flavor.
        </p>

        <h2>Our Mission & Vision</h2>
        <p><strong>Mission:</strong> To craft high-quality, hygienic sweets and savories that bring joy to every occasion and heart.</p>
        <p><strong>Vision:</strong> To be a global brand that carries forward the rich tradition of Indian sweets with a modern twist.</p>

        <h2>Meet the Founder</h2>
        <div className="founder-section column-layout">
          <div className="founder-card">
            <img src="https://i.imgur.com/1X5AvYV.png" alt="Founder" />
            <p><strong>Mr. Venugopal</strong><br />
              My father started Sri Nanjundeshwara Bakery (SNB) in 1988 and has successfully completed 32 Years of serving unforgettable sweets, cookies, cakes, and more.
              <br /><br />
              <strong>The Unique Taste</strong><br />
              Serving Since 1988
              <br /><br />
              We try to retain your taste from the past and serve the future with a delightful pinch of traditional sweets & savories.
            </p>
          </div>

          <div className="founder-card">
            <img src="https://i.imgur.com/BjNwCyv.png" alt="Son" />
            <p><strong>Son</strong><br />Son of Mr. Venugopal</p>
          </div>
        </div>
      </div>

      <footer className="about-footer">
        &copy; 2025 Foodies. All rights reserved.
      </footer>
    </div>
  );
};

export default AboutPage;
