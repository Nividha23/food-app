// src/components/pages/RegularSweets.js
import React from "react";
import "./FestivalSpecial.css";
import {Link} from "react-router-dom";

const festivalspecials= [
  {
    name: "Jangiri",
    price: "₹100",
    img: "https://i.imgur.com/NpL3LfZ.jpg"
  },
  {
    name: "Koppuram",
    price: "₹280",
    img: "https://i.imgur.com/DN2SmEU.jpg"
  },
  {
    name: "Laadu (Big)",
    price: "₹160",
    img: "https://i.imgur.com/0J6X5kn.jpg"
  },
   {
    name: "Nippat",
    price: "₹110",
    img: "https://i.imgur.com/0J6X5kn.jpg"
  },
   {
    name: "Puffed Rice Ball",
    price: "₹45",
    img: "https://i.imgur.com/0J6X5kn.jpg"
  },
   {
    name: "Round Murukku",
    price: "₹100",
    img: "https://i.imgur.com/0J6X5kn.jpg"
  },
   {
    name: "Sweet Mix",
    price: "₹160",
    img: "https://i.imgur.com/0J6X5kn.jpg"
  },

];

function FestivalSpecial() {

  const addToCart = (item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, ""));
    fetch("http://localhost:5500/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemName: item.name,
        price,
        category: "FestivalSpecial",
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

      <h1 className="title">Festival Special</h1>

      <div className="item-container">
       {festivalspecials.map((item, idx) => (
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

export default FestivalSpecial;