import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

function CategoriesPage() {
  return (
    <div className="categories-wrapper categories-body">
      {/* Top Left Return to Main Page */}
      <div className="categories-top-left">
        <Link to="/main" className="categories-back-btn">←Back to Home</Link>
      </div>

      {/* Main Category Content */}
      <div className="categories-food-items">
        <h2 className="categories-title">Our Items:</h2>
        <div className="categories-section">
          <div className="categories-grid">
            <Link to="/special-sweets" className="categories-card">Special Sweets</Link>
            <Link to="/snacks" className="categories-card">Snacks</Link>
            <Link to="/cookies" className="categories-card">Cookies</Link>
            <Link to="/regularsweets" className="categories-card">Regular Sweets</Link>
            <Link to="/cakes" className="categories-card">Cakes</Link>
            <Link to="/festivalspecials" className="categories-card">Festival Spl</Link>
            <Link to="/savories" className="categories-card">Savories</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
