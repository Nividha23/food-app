// src/components/pages/RegularSweets.js
import React from "react";
import "./RegularSweets.css";
import {Link } from "react-router-dom";

const regularSweets = [
  { name: "Bengali Sweets", price: "₹680", img: "bengali.jpg" },
  { name: "Bombay Halwa", price: "₹560", img: "https://i.imgur.com/r3TljZP.jpg" },
  { name: "Boost Burfi", price: "₹560", img: "https://i.imgur.com/ziwZkJg.jpg" },
  { name: "Chandrakala", price: "₹560", img: "https://i.imgur.com/JnH5JFu.jpg" },
  { name: "Coconut Burfi", price: "₹560", img: "https://i.imgur.com/ziwZkJg.jpg" },
  { name: "Horlicks Burfi", price: "₹560", img: "https://i.imgur.com/ziwZkJg.jpg" },
  { name: "Halwa", price: "₹560", img: "https://i.imgur.com/ziwZkJg.jpg" },
  { name: "Jangiri", price: "₹400", img: "https://i.imgur.com/ziwZkJg.jpg" },
  { name: "Jalbi", price: "₹360", img: "https://i.imgur.com/ziwZkJg.jpg" },
  { name: "Mini Badusha", price: "₹560", img: "https://i.imgur.com/ziwZkJg.jpg" },
  { name: "MysorePak", price: "₹560", img: "https://i.imgur.com/ziwZkJg.jpg" },
  { name: "Peanut Burfi", price: "₹400", img: "https://i.imgur.com/ziwZkJg.jpg" },
  { name: "Peda", price: "₹560", img: "https://i.imgur.com/ziwZkJg.jpg" },
  { name: "Rava Laddo", price: "₹560", img: "https://i.imgur.com/ziwZkJg.jpg" },
  { name: "Sweet Mix", price: "₹560", img: "https://i.imgur.com/ziwZkJg.jpg" },
  { name: "Soan Papdi", price: "₹560", img: "https://i.imgur.com/ziwZkJg.jpg" },
  { name: "Sweet Boondhi", price: "₹320", img: "https://i.imgur.com/ziwZkJg.jpg" },
  { name: "Thirupathi Laadu", price: "₹560", img: "https://i.imgur.com/ziwZkJg.jpg" },
  { name: "Till Barfi", price: "₹400", img: "https://i.imgur.com/ziwZkJg.jpg" },
];

const RegularSweets = () => {

  const addToCart = (item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, ""));
    fetch("http://localhost:5500/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemName: item.name,
        price,
        category: "Sweets",
        imageUrl: item.img,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add to cart");
        return res.json();
      })
      .then(() => {
        showPopup("Item added to cart!");
      })
      .catch((err) => {
        showPopup("❌ Failed to add to cart");
        console.error(err);
      });
  };

  const showPopup = (message) => {
    const overlay = document.getElementById("popup-overlay");
    const popup = document.getElementById("popup-message");

    if (overlay && popup) {
      popup.textContent = message;
      overlay.style.display = "flex";
      setTimeout(() => {
        overlay.style.display = "none";
      }, 2000);
    }
  };

  return (
    <>
      <Link to="/categories" className="back-button">← Back</Link>
      <a href="/yourorder" className="view-cart-btn">
        🛒 View Cart
      </a>

      <h1 className="title">Regular Sweets</h1>
      <div className="item-container">
        {regularSweets.map((item, index) => (
          <div className="item-card" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div id="popup-overlay">
        <div id="popup-message">Item added to cart!</div>
      </div>
    </>
  );
};

export default RegularSweets;
