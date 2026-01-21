// src/components/pages/RegularSweets.js
import React from "react";
import "./Cakes.css";
import {Link} from "react-router-dom";

const cakes = [
  {
    name: "Barbie Cake",
    price: "₹120",
    img: "https://i.imgur.com/LlQ0D2Q.jpg"
  },
  {
    name: " Birthday Vanilla Cake",
    price: "₹400",
    img: "https://i.imgur.com/9xOqU2y.jpg"
  },
  {
    name: "Birthday Flavours",
    price: "₹430",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Birthday Fondant Cake",
    price: "₹1500",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Birthday Ice Cake Flavours ",
    price: "₹750",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Birthday Pastry ",
    price: "₹700",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Birthday Prime Ice Cake Flavours",
    price: "₹880",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Birthday Prime Flavours",
    price: "₹500",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Brownie Cake",
    price: "₹30",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Butter Cream Eggless Cake",
    price: "₹630",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Butter Cream Red Velvet",
    price: "₹630",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Butter Scotch Cake",
    price: "₹60",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Cake Desing",
    price: "₹100",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Cake Drawing",
    price: "₹150",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Cake Jar 90",
    price: "₹90",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Cake Iopper",
    price: "₹100",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Choco Truffle",
    price: "₹50",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Chocolate Cake",
    price: "₹20",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Cream Cake",
    price: "₹20",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Customized Red Velvet Cake",
    price: "₹650",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Customized Pastry",
    price: "₹800",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Customized Eggless Cake",
    price: "₹870",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Customized Eggless Cake Ice Cream",
    price: "₹1100",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Customized Flavour Cake",
    price: "₹550",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Customized Ice Cake Flavours",
    price: "₹1000",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Customized Prime flavours",
    price: "₹600",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Customized Prime Ice Cake",
    price: "₹870",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Customized Vanilla",
    price: "₹550",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Dry Fruits",
    price: "₹50",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Eclairs",
    price: "₹30",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Eggless Cup cake",
    price: "₹35",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Fruits",
    price: "₹50",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Honey Cake",
    price: "₹20",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Ice Cake",
    price: "₹100",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Mini Cheese Cake",
    price: "₹40",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Mini Eclairs",
    price: "₹10",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "pastry Red Velvet Cake",
    price: "₹950",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Photo Print Cake",
    price: "₹100",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Saffron Cake",
    price: "₹70",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
  {
    name: "Spl Butter Cream Cake",
    price: "₹30",
    img: "https://i.imgur.com/TvdQwtO.jpg"
  },
];

function Cakes() {

  const addToCart = (item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, ""));
    fetch("http://localhost:5500/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemName: item.name,
        price,
        category: "Cakes",
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

      <h1 className="title">Cakes</h1>

      <div className="item-container">
        {cakes.map((item, idx) => (
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

export default Cakes;