import React, { useEffect, useState } from "react";
import "./MainPage.css";
import logo from '../../assets/images/SNB_LOGO.png';
import bgVideo from '../../assets/images/background.mp4';
import itemCategoryMap from "../../components/pages/itemCategoryMap"; // 🔺 Make sure the path is correct
import {useNavigate } from "react-router-dom"; // Top of MainPage.js

function MainPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // inside MainPage function
const specialsweets = [
  "Agrapan", "Anjur Sweets", "Baklava", "Beshan Laddo", "Cashew Sweets",
  "Dry Fruit Chikki", "Jaggery Coconut Burfi", "Kaju Bite", "Oppat",
  "Spl Beetroot Mysurepak", "Spl Boost Burfi", "Spl Corrot MysorePak", 
  "Spl Dates Burfi", "Spl Dates Laddo", "Spl Horlicks Burfi", "Spl Jelabi",
  "Spl Lala Mysurepak", "Spl Milk Mysorepak", "Spl Moti Laddo", "Spl Mysorepak",
  "Spl Peda", "Spl Soan Papdi", "Spl Sweet Mix", "Spl Halwa"
];

const cakes = [
  "Barbie Cake", "Birthday Vanilla Cake", "Birthday Flavours", "Birthday Fondant Cake",
  "Birthday Ice Cake Flavours", "Birthday Pastry", "Birthday Prime Ice Cake Flavours",
  "Birthday Prime Flavours", "Brownie Cake", "Butter Cream Eggless Cake",
  "Butter Cream Red Velvet", "Butter Scotch Cake", "Cake Desing", "Cake Drawing",
  "Cake Jar 90", "Cake Iopper", "Choco Truffle", "Chocolate Cake", "Cream Cake",
  "Customized Red Velvet Cake", "Customized Pastry", "Customized Eggless Cake",
  "Customized Eggless Cake Ice Cream", "Customized Flavour Cake", "Customized Ice Cake Flavours",
  "Customized Prime flavours", "Customized Prime Ice Cake", "Customized Vanilla", "Dry Fruits", "Eclairs",
  "Eggless Cup cake", "Fruits", "Honey Cake", "Ice Cake", "Mini Cheese Cake", "Mini Eclairs", 
  "pastry Red Velvet Cake", "Photo Print Cake", "Saffron Cake", "Spl Butter Cream Cake"
];

const cookies = [  
  "Butter Biscuits", "Salt Biscuits", "Cashew Biscuits"
];

const festivalspecial = [
  "Jangiri", "Koppuram", "Laadu (Big)", "Nippat", "Puffed Rice Ball", "Round Murukku", "Sweet Mix"
];

const regularsweets = [
  "Bengali Sweets", "Bombay Halwa", "Boost Burfi", "Chandrakala", "Coconut Burfi", "Horlicks Burfi", "Halwa",
  "Jangiri", "Jelabi", "Mini Badusha", "MysorePak", "Peanut Burfi", "Peda", "Rava Laddo", "Sweet Mix", 
  "Soan Papdi", "Sweet Boondhi", "Thirupathi Laadu", "Till Barfi"
];

const savouries = [   
  "Finger Chips", "Avalakki", "Avara Mix Dal", "Benne Murukku", "Berigai Mixture", "Bitter Gourd Pakoda", 
  "Bombay Mixture", "Chana Dal Mix", "Chettinadu Murukku", "Chips", "Congress", "Corn Chips", "Curry Murukku", 
  "Garlic Nippat", "Jangiri Murukku", "Kara Boondhi", "Mangalore Mixture", "Masala Badam", "Masala Cashew", 
  "Masala Groundnuts", "Masala Pori", "Mix Mixtue", "Mix Murukku", "Moong Dal", "Mota Sev", 
  "Om Podi", "Pakoda", "Pearl Pakoda", "Regular Mixture", "Regular Nippat", "Ribbon Murukku", 
  "Rings", "Round Murukku", "Special Murukku", "Sweet Biscuit", "Suthal Murukku", "Till Murukku", 
  "Wheel Chips"
];

const snacks = [  
  "Kachori", "Bread Chilly", "Bread Toast", "Burger", "Cheese Balls", 
  "Chocolate Cream Bun", "Chutney Powders/Paste", "Cold Coffee", "Cream Bun", "Dilpasand", 
  "Dough Nut", "Egg Puff", "Fruit Cream Bun", "Jam Bun", "Jamoon", "Kara Bun", "Maddur Vada", 
  "Mal Pua", "Masala Bun", "Mix Cake And Pakoda", "Moos Cup", "Paneer Puff", "Pizza", "PopCorn", 
  "Puffed Rice Ball", "Rasagulla", "Rasamalai / Malaikulla", "Samosa", "Shahi Roll", 
  "SNB Dairy Milk", "SNB Lollipop", "Spl Dilpasand", "Spl Dough Nut", "Veg Puff", "Veg Roll", "Veg Sandwich"
];

const allItems = [
  ...specialsweets,
  ...cakes,
  ...cookies,
  ...festivalspecial,
  ...regularsweets,
  ...savouries,
  ...snacks
];

  const filteredItems = allItems.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const helpTimeout = setTimeout(() => {
      const popup = document.getElementById("main-page-help-popup");
      if (popup) popup.style.display = "block";
    }, 4000);
    return () => clearTimeout(helpTimeout);
  }, []);

  const redirectToHelp = () => {
    window.location.href = "/help";
  };

const renderPreview = () => {
  if (!hoveredCategory) return null;

  const items = {
    specialsweets: [
      { name: "Kaju Katli", price: 600, img: "/images/kajukatli.jpg" },
      { name: "Badam Halwa", price: 500, img: "/images/badamhalwa.jpg" },
      { name: "Dry Fruit Ladoo", price: 450, img: "/images/dryfruitladoo.jpg" }
    ],
    cookies: [
      { name: "Little Millet Cookies", price: 120, img: "/images/littlemilletcookie.webp" },
      { name: "Pear Millet Cookies", price: 100, img: "/images/pearmilletcookie.webp" },
      { name: "Oats Cookies", price: 150, img: "/images/oatscookie.jpg" }
    ],
    cakes: [
      { name: "Barbie Cake", price: 120, img: "/images/birthdaycake.avif"},
      { name: "Birthday Vanilla Cake", price: 400, img: "/images/birthdayvanillacake.jpg" },
      { name: "Birthday Flavours", price: 430, img: "/images/birthdayflavours.webp" }
    ],
    festivalspecials: [
      { name: "Jangiri", price: 100, img: "/images/jangiri.jpg" },
      { name: "Puffed Rice Ball", price: 280, img: "/images/puffedriceball.jpg" },
      { name: "Laadu (Big)", price: 160, img: "/images/laddu(big).jpg" }
    ]
  };

  const categoryLabels = {
    specialsweets: "Sweets",
    cookies: "Cookies",
    cakes: "Cakes",
    festivalspecials: "Festival Specials"
  };

  return (
    <div className="main-preview-dropdown">
      {items[hoveredCategory]?.map((item) => (
        <div
          className="main-sweet-card"
          key={item.name}
          onClick={() => {
            navigate("/item", {
              state: {
                item: {
                  ...item,
                  category: categoryLabels[hoveredCategory]
                }
              }
            });
          }}
          style={{ cursor: "pointer" }}
        >
          <img src={item.img} alt={item.name} />
          <p><strong>{item.name}</strong><br />₹{item.price}</p>
        </div>
      ))}

      <a
        href={`/${hoveredCategory}`}
        className="main-view-all-btn"
      >
        View All
      </a>
    </div>
  );
};

  

  const handleItemClick = (itemName) => {
    const formattedName = itemName.toLowerCase().replace(/\s+/g, "-");
    const category = itemCategoryMap[formattedName];

    if (category) {
      // ✅ Navigate to category only
      navigate(`/${category}`, { state: { selectedItem: itemName } });
    } else {
      alert("Item not found in any category.");
    }
  };



  return (
    <div className="main-wrapper-custom">
      <video autoPlay muted loop id="main-bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="main-video-overlay"></div>

      <div className="main-offer-banner">
        <div className="main-scroll-container">
          <div className="main-scroll-track">
            {[...Array(6)].map((_, i) => (
              <div className="main-scroll-item" key={i}>
                ✨ <strong>Extra 10% Off</strong> above ₹999 | Use Code: <strong>WELCOME</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      <header className="main-page-header">
        <div className="main-logo">
          <img src={logo} alt="SNB Logo" />
        </div>

        <nav className="main-page-navbar">
          <ul>
            <li><a className="main-nav-link" href="/about">About</a></li>

            <li className="main-dropdown-wrapper">
              <div
                className="main-dropdown-container"
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => {
                  setMenuOpen(false);
                  setHoveredCategory(null);
                }}
              >
                <span className="main-page-link-button">Categories</span>

                {menuOpen && (
                  <div className="main-vertical-menu">
                    <button className="main-dropdown-link" onMouseEnter={() => setHoveredCategory("specialsweets")}>Special Sweets</button>
                    <button className="main-dropdown-link" onMouseEnter={() => setHoveredCategory("cookies")}>Cookies</button>
                    <button className="main-dropdown-link" onMouseEnter={() => setHoveredCategory("cakes")}>Cakes</button>
                    <button className="main-dropdown-link" onMouseEnter={() => setHoveredCategory("festivalspecials")}>Festival Sweets</button>
                    <a
        href="/categories" className="main-shop-all">Shop All
      </a>
                    {renderPreview()}
                  </div>
                )}
              </div>
            </li>

            <li><a className="main-nav-link" href="/yourorder">Your Order</a></li>
            <li><a className="main-nav-link" href="/help">Help</a></li>
            <li><span className="main-page-link-button main-offer-tag">Combos</span></li>
          </ul>
        </nav>

<div className="main-page-icons">
  <div className="search-container">
    <i
      className="fas fa-search"
      onClick={() => setShowSearch(!showSearch)}
    ></i>

    {showSearch && (
      <div className="search-bar-dropdown">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="main-search-input-small"
        />
        {searchQuery.trim() !== "" && (
          <div className="main-search-results-dropdown">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div
                  key={index}
                  className="main-search-item"
                  onClick={() => handleItemClick(item)}
                  style={{ cursor: "pointer" }}
                >
                  {item}
                </div>
              ))
            ) : (
              <div className="main-search-item no-result">No items found</div>
            )}
          </div>
        )}
      </div>
    )}
  </div>

 <i className="fas fa-user" onClick={() => navigate("/profile")} style={{ cursor: "pointer" }}></i>

  <i className="fas fa-shopping-cart" onClick={() => navigate("/yourorder")} style={{ cursor:"pointer"}}></i>
</div>

      </header>

      <main className="main-content"></main>

      <div className="main-page-shop-now-wrapper">
        <a href="/categories" className="main-page-shop-btn">Shop Now</a>
      </div>

      <footer className="main-page-footer">
        <p>© 2025 SNB Bakery. All rights reserved.</p>
      </footer>

      <div className="main-page-help-popup" id="main-page-help-popup" onClick={redirectToHelp}>
        <div className="main-page-popup-content">
          <span className="main-page-popup-icon">📱</span>
          <span className="main-page-popup-text">Hello, how can I help you?</span>
          <span className="main-page-popup-icon">✉️</span>
        </div>
      </div>
    </div>
  );
}

export default MainPage;


