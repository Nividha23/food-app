import React, { useEffect, useState } from 'react';
import './YourOrder.css';
import { useNavigate, Link } from 'react-router-dom';

function YourOrderPage() {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [couponCode, setCouponCode] = useState('');
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")); // 🟢 get user from login

  const fetchCart = async () => {
    const res = await fetch(`http://localhost:5500/api/cart/${user?._id || ''}`);
    const data = await res.json();
    setCartItems(data);

    const totalPrice = data.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotal(totalPrice);
    setTotal(totalPrice);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQuantity = async (id, action) => {
    await fetch(`http://localhost:5500/api/cart/${id}/${action}`, { method: 'PUT' });
    fetchCart();
  };

  const deleteItem = async (id) => {
    await fetch(`http://localhost:5500/api/cart/${id}`, { method: 'DELETE' });
    fetchCart();
  };

  const cancelOrder = async () => {
    for (let item of cartItems) {
      await deleteItem(item._id);
    }
    showPopup("❌ Order Cancelled");
  };

  const applyCoupon = () => {
    let discount = 0;
    switch (couponCode.toUpperCase()) {
      case 'DISCOUNT10':
        discount = subtotal * 0.1;
        break;
      case 'SAVE50':
        discount = 50;
        break;
      case 'FREESHIP':
        discount = 20;
        break;
      case 'BUY1GET1':
        discount = subtotal >= 500 ? 100 : 0;
        break;
      default:
        return showPopup("Invalid coupon ❌");
    }
    setTotal(subtotal - discount);
    showPopup(`🎉 Coupon applied! You saved ₹${discount}`);
  };

  const showPopup = (message) => {
    const popup = document.getElementById("popup-message");
    const overlay = document.getElementById("popup-overlay");
    popup.textContent = message;
    overlay.style.display = "flex";
    setTimeout(() => (overlay.style.display = "none"), 2000);
  };

  const [suggestions, setSuggestions] = useState([
    { name: "Kesar Peda", price: 500, imageUrl: "dry fruits laddo.jpg" },
    { name: "Rasmalai", price: 850, imageUrl: "dry fruits laddo.jpg" },
    { name: "Kaju Katli", price: 700, imageUrl: "kaju katli.jpg" },
  ]);

const addSuggestedToCart = async (name, price, imageUrl) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?._id;

  console.log("🟡 userId = ", userId);
  console.log("🟡 Sending to backend:", {
    itemName: name,
    price,
    category: "Suggested",
    imageUrl,
    userId,
  });

  if (!userId) {
    showPopup("❌ Please login first");
    return;
  }

  try {
    const res = await fetch("http://localhost:5500/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemName: name,
        price,
        category: "Suggested",
        imageUrl,
        userId,
      }),
    });

    const data = await res.json();
    console.log("🔵 Response from backend:", data); // 🟢 Log response

    if (res.ok) {
      showPopup("✅ Item added!");
      fetchCart();
    } else {
      showPopup(`❌ Failed: ${data.error}`);
    }
  } catch (err) {
    console.error("🔥 Network Error:", err);
    showPopup("❌ Error adding to cart");
  }
};




  return (
    <div className="cart-page">
      <div className="back-button-container">
        <Link to="/categories" className="back-button">← Back to Categories</Link>
      </div>

      <h2>🛒 Your Cart</h2>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={item.imageUrl} alt={item.itemName} />
              <h3>{item.itemName}</h3>
              <p>₹{item.price}</p>
              <div className="quantity-buttons">
                <button onClick={() => updateQuantity(item._id, 'decrease')}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item._id, 'increase')}>+</button>
              </div>
              <p><b>Total: ₹{item.price * item.quantity}</b></p>
              <button onClick={() => deleteItem(item._id)} className="remove-btn">🗑️ Remove</button>
            </div>
          ))
        )}
      </div>

      <div className="subtotal-section">
        <p>Subtotal: ₹{subtotal}</p>
        <p>Total: ₹{total}</p>
        <div className="button-group">
          <button onClick={() => navigate('/address')}>Checkout</button>
          <button className="cancel-btn" onClick={cancelOrder}>Cancel</button>
          <button onClick={() => navigate('/trackorder')} className="track-btn">Track</button>
        </div>
      </div>

      <div className="coupon-section">
        <div className="coupon-input-group">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Apply Coupon"
            list="couponList"
          />
          <button onClick={applyCoupon}>Apply</button>
        </div>
        <datalist id="couponList">
          <option value="DISCOUNT10" />
          <option value="FREESHIP" />
          <option value="SAVE50" />
          <option value="BUY1GET1" />
        </datalist>
      </div>

      <h3>You May Also Like</h3>
      <div id="suggestions" className="suggestion-items">
        {suggestions.map((item, idx) => (
          <div key={idx} className="suggestion-card">
            <img src={item.imageUrl} alt={item.name} />
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
            <button onClick={() => addSuggestedToCart(item.name, item.price, item.imageUrl)}>Add</button>
          </div>
        ))}
      </div>

      <div id="popup-overlay">
        <div id="popup-message">Message</div>
      </div>
    </div>
  );
}

export default YourOrderPage;
