import React from "react";
import "./SpecialSweets.css";
import { Link, useLocation } from "react-router-dom"; // ⬅️ useLocation added

const specialSweets = [
  { name: "Agrapan", price: "₹700", img: "agrapan.jpg" },
  { name: "Anjur Sweets", price: "₹1300", img: "anjursweet.jpg" },
  { name: "Baklava", price: "₹1800", img: "dry fruits laddo.jpg" },
  { name: "Beshan Laddo", price: "₹680", img: "dry fruits laddo.jpg" },
  { name: "Cashew Sweets", price: "₹1000", img: "dry fruits laddo.jpg" },
  { name: "Dry Fruit Chikki", price: "₹1000", img: "dry fruits laddo.jpg" },
  { name: "Jaggery Coconut Burfi", price: "₹680", img: "dry fruits laddo.jpg" },
  { name: "Kaju Bite", price: "₹1200", img: "dry fruits laddo.jpg" },
  { name: "Oppat", price: "₹18", img: "dry fruits laddo.jpg" },
  { name: "Spl Beetroot Mysurepak", price: "₹700", img: "dry fruits laddo.jpg" },
  { name: "Spl Boost Burfi", price: "₹680", img: "dry fruits laddo.jpg" },
  { name: "Spl Corrot MysorePak", price: "₹700", img: "dry fruits laddo.jpg" },
  { name: "Spl Dates Burfi", price: "₹680", img: "dry fruits laddo.jpg" },
  { name: "Spl Dates Laddo", price: "₹680", img: "dry fruits laddo.jpg" },
  { name: "Spl Horlicks Burfi", price: "₹680", img: "dry fruits laddo.jpg" },
  { name: "Spl Jelabi", price: "₹500", img: "dry fruits laddo.jpg" },
  { name: "Spl Lala Mysurepak", price: "₹680", img: "dry fruits laddo.jpg" },
  { name: "Spl Milk Mysorepak", price: "₹680", img: "dry fruits laddo.jpg" },
  { name: "Spl Moti Laddo", price: "₹680", img: "dry fruits laddo.jpg" },
  { name: "Spl Mysorepak", price: "₹680", img: "dry fruits laddo.jpg" },
  { name: "Spl Peda", price: "₹680", img: "dry fruits laddo.jpg" },
  { name: "Spl Soan Papdi", price: "₹680", img: "dry fruits laddo.jpg" },
  { name: "Spl Sweet Mix", price: "₹680", img: "dry fruits laddo.jpg" },
  { name: "Spl Halwa", price: "₹700", img: "dry fruits laddo.jpg" },
];

function SpecialSweets() {
  const location = useLocation();
  const selectedItem = location.state?.selectedItem;
const addToCart = (item) => {
  const price = parseInt(item.price.replace(/[^\d]/g, ""));
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?._id;

  if (!userId) {
    alert("❌ Please login first");
    return;
  }

  console.log("📦 Sending item to backend:", {
    itemName: item.name,
    price,
    category: "Sweets",
    imageUrl: item.img,
    userId,
  });

  fetch("http://localhost:5500/api/cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      itemName: item.name,
      price,
      category: "Sweets",
      imageUrl: item.img,
      userId, // ✅ send userId here
    }),
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
      console.error("🔥 Error adding to cart:", err);
      alert("❌ Failed to add to cart");
    });
};




  return (
    <div className="special-sweets-page">
      <Link to="/categories" className="back-button">← Back</Link>
      <a href="/yourorder" className="view-cart-btn">🛒 View Cart</a>

      <h1 className="special-sweets-title">Special Sweets</h1>

      {/* ✅ Show selected item if passed */}
      {selectedItem && (
        <div className="selected-item-message" style={{ textAlign: "center", margin: "1rem", color: "darkred" }}>
          You searched for: <strong>{selectedItem}</strong>
        </div>
      )}

      <div className="item-container">
        {specialSweets.map((item, idx) => (
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

export default SpecialSweets;
