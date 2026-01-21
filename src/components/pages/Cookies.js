// src/components/pages/RegularSweets.js
import React from "react";
import "./Cookies.css";
import {Link} from "react-router-dom";

const cookies = [
  {
    name: "Butter Biscuits",
    price: "₹120",
    img: "https://i.imgur.com/YyVnhgC.jpg"
  },
  {
    name: "Salt Biscuits",
    price: "₹100",
    img: "https://i.imgur.com/pFtM6Se.jpg"
  },
  {
    name: "Cashew Biscuits",
    price: "₹150",
    img: "https://i.imgur.com/zzOjUS0.jpg"
  }
];

function Cookies() {

  const addToCart = (item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, ""));
    fetch("http://localhost:5500/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemName: item.name,
        price,
        category: "Cookies",
        imageUrl: item.img
      })
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then(() => {
        const popup = document.getElementById("popup-overlay");
        popup.style.display = "flex";
        setTimeout(() => {
          popup.style.display = "none";
        }, 2000);
      })
      .catch((err) => {
        console.error(err);
        alert("❌ Failed to add to cart");
      });
  };

  return (
    <div>
     <Link to="/categories" className="back-button">← Back</Link>

      <a href="/yourorder" className="view-cart-btn">
        🛒 View Cart
      </a>

      <h1 className="title">Cookies</h1>


      <div className="item-container">
        {cookies.map((item, idx) => (
          <div className="item-card" key={idx}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Styled popup message */}
      <div id="popup-overlay">
        <div id="popup-message">Item added to cart!</div>
      </div>
    </div>
  );
}

export default Cookies;