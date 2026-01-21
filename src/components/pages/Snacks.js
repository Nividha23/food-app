import React from "react";
import "./Snacks.css";
import { Link} from "react-router-dom";

const snacks = [
  {
    name: "Kachori",
    price: "₹15",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
  {
    name: "Bread Chilly",
    price: "₹50",
    img: "https://i.imgur.com/Avalakki.jpg"
  },
  {
    name: "Bread Toast",
    price: "₹15",
    img: "https://i.imgur.com/MixDal.jpg"
  },
   {
    name: "Burger",
    price: "₹40",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
   {
    name: "Cheese Balls",
    price: "₹22",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
   {
    name: "Chocolate Cream Bun",
    price: "₹25",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
   {
    name: "Chutney Powders/Paste",
    price: "₹500",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
   {
    name: "Cold Coffee",
    price: "₹55",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
   {
    name: "Cream Bun",
    price: "₹20",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
   {
    name: "Dilpasand",
    price: "₹15",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
   {
    name: "Dough Nut",
    price: "₹20",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
   {
    name: "Egg Puff",
    price: "₹30",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
   {
    name: "Fruit Cream Bun",
    price: "₹25",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
   {
    name: "Jam Bun",
    price: "₹20",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
   {
    name: "Jamoon",
    price: "₹20",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
   {
    name: "Kara Bun",
    price: "₹10",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
   {
    name: "Maddur Vada",
    price: "₹10",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
   {
    name: "Mal Pua",
    price: "₹30",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
   {
    name: "Masala Bun",
    price: "₹15",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
   {
    name: "Mix Cake And Pakoda",
    price: "₹5",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
   {
    name: "Moos Cup",
    price: "₹40",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
   {
    name: "Paneer Puff",
    price: "₹25",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
  {
    name: "Pizza",
    price: "₹40",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
  {
    name: "PopCorn",
    price: "₹50",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
  {
    name: "Puffed Rice Ball",
    price: "10",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
  {
    name: "Rasagulla",
    price: "₹30",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
  {
    name: "Rasamalai / Malaikulla",
    price: "₹40",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
  {
    name: "Samosa",
    price: "₹15",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
  {
    name: "Shahi Roll",
    price: "₹30",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
  {
    name: "SNB Dairy Milk",
    price: "₹50",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
   {
    name: "SNB Lollipop",
    price: "₹15",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
   {
    name: "Spl Dilpasand",
    price: "₹100",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
  {
    name: "Spl Dough Nut",
    price: "₹50",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
  {
    name: "Veg Puff",
    price: "₹20",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
  {
    name: "Veg Roll",
    price: "₹25",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
   {
    name: "Veg Sandwich",
    price: "₹40",
    img: "https://i.imgur.com/FingerChips.jpg"
  },
];

function Snacks() {

  const addToCart = (item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, ""));
    fetch("http://localhost:5500/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemName: item.name,
        price,
        category: "Snacks",
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

      <h1 className="title">Snacks</h1>
      <div className="item-container">
        {snacks.map((item, index) => (
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

export default Snacks;
