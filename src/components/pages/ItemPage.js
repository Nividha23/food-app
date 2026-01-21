import React, { useState } from "react";
import { Link,useLocation, useNavigate } from "react-router-dom";
import "./ItemPage.css";

function ItemPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item;
  const [notification, setNotification] = useState(""); // ✅ New state
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState("200g");

  const weightMultipliers = {
    "200g": 1,
    "400g": 2,
    "500g": 2.5,
    "1kg": 5,
  };

  if (!item) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>No item selected!</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  const basePrice = parseInt(item.price);

  const calculatePrice = () => {
    const weightFactor = weightMultipliers[selectedWeight];
    return basePrice * weightFactor * quantity;
  };

  const addToCart = () => {
    const totalPrice = calculatePrice();
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?._id;

    if (!userId) {
      alert("❌ Please login first");
      return;
    }

    fetch("http://localhost:5500/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemName: item.name,
        price: totalPrice,
        category: item.category || "Sweets",
        imageUrl: item.img,
        quantity,
        weight: selectedWeight,
        userId,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then(() => {
        setNotification("✅ Item added to cart!");
        setTimeout(() => setNotification(""), 3000); // hide after 3s
      })
      .catch((err) => {
        console.error("🔥 Error adding to cart:", err);
        setNotification("❌ Failed to add to cart");
        setTimeout(() => setNotification(""), 3000);
      });
  };
  return (
    <div className="item-page-container">
      <div className="item-images">
        <Link to="/main" className="back-btn">← Back to Home</Link>
        <img src={item.img} alt={item.name} className="item-main-img" />
      </div>

      <div className="item-info">
        <h1>{item.name}</h1>
        <div className="tags">
          <span className="tag">Special</span>
          <span className="tag green">Pure Veg</span>
        </div>
        <div className="reviews">⭐⭐⭐⭐⭐ 184+ Reviews</div>
        <div className="price">₹{calculatePrice()}</div>

        <div className="weight-select">
          <label htmlFor="weight">Weight: </label>
          <select
            id="weight"
            value={selectedWeight}
            onChange={(e) => setSelectedWeight(e.target.value)}
          >
            {Object.keys(weightMultipliers).map((weight) => (
              <option key={weight} value={weight}>
                {weight}
              </option>
            ))}
          </select>
        </div>

        <div className="quantity-selector">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>

        <button className="add-to-cart-btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
      {notification && <div className="toast">{notification}</div>}
    </div>
  );
}

export default ItemPage;
