import React from "react";
import "./Savories.css";
import {Link} from "react-router-dom";

const savories = [
  {
    name: "Finger Chips",
    price: "₹360",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Avalakki",
    price: "₹340",
    img: "https://i.imgur.com/Berigai.jpg"
  },
  {
    name: "Avara Mix Dal",
    price: "₹8000",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Benne Murukku",
    price: "₹340",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Berigai Mixture",
    price: "₹440",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Bitter Gourd Pakoda",
    price: "₹360",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Bombay Mixture",
    price: "₹320",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Chana Dal Mix",
    price: "₹400",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Chettinadu Murukku",
    price: "₹340",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Chips",
    price: "₹26",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Congress",
    price: "₹400",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Corn Chips",
    price: "₹340",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Curry Murukku",
    price: "₹340",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Garlic Nippat",
    price: "₹340",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Jangiri Murukku",
    price: "₹400",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Kara Boondhi",
    price: "₹320",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Mangalore Mixture",
    price: "₹320",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Masala Badam",
    price: "₹1500",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Masala Cashew",
    price: "₹1200",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Masala Groundnuts",
    price: "₹340",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Masala Pori",
    price: "₹280",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Mix Mixtue",
    price: "₹320",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Mix Murukku",
    price: "₹340",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Moong Dal",
    price: "₹340",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
   {
    name: "Mota Sev",
    price: "₹340",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
   {
    name: "Om Podi",
    price: "₹340",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
   {
    name: "Pakoda",
    price: "₹360",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
   {
    name: "Pearl Pakoda",
    price: "₹380",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
   {
    name: "Regular Mixture",
    price: "₹320",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Regular Nippat",
    price: "₹340",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Ribbon Murukku",
    price: "₹340",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Rings",
    price: "₹340",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Round Murukku",
    price: "₹360",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
 
   {
    name: "Special Murukku",
    price: "₹400",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
   {
    name: "Sweet Biscuit",
    price: "₹400",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  {
    name: "Suthal Murukku",
    price: "₹340",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
   {
    name: "Till Murukku",
    price: "₹340",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
   {
    name: "Wheel Chips",
    price: "₹20",
    img: "https://i.imgur.com/BenneMuruk.jpg"
  },
  
];

function Savories() {

  const addToCart = (item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, ""));
    fetch("http://localhost:5500/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemName: item.name,
        price,
        category: "Savories",
        imageUrl: item.img,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error");
        return res.json();
      })
      .then(() => showPopup("Item added to cart!"))
      .catch(() => showPopup("❌ Failed to add to cart"));
  };

  const showPopup = (message) => {
    const overlay = document.getElementById("popup-overlay");
    const popup = document.getElementById("popup-message");
    if (popup && overlay) {
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
      <a href="/yourorder" className="view-cart-btn">🛒 View Cart</a>
      <h1 className="title">Savories</h1>
      <div className="item-container">
        {savories.map((item, i) => (
          <div key={i} className="item-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div id="popup-overlay">
        <div id="popup-message">Item added to cart!</div>
      </div>
    </>
  );
}

export default Savories;