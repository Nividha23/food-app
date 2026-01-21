import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import SpecialSweets from "./components/pages/SpecialSweets";
import RegularSweets from "./components/pages/RegularSweets";
import Snacks from "./components/pages/Snacks";
import Savories from "./components/pages/Savories";
import Cakes from "./components/pages/Cakes";
import FestivalSpecials from "./components/pages/FestivalSpecial";
import Cookies from "./components/pages/Cookies";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import MainPage from "./components/pages/MainPage";
import About from "./components/pages/About";
import Categories from "./components/pages/Categories";
import YourOrder from "./components/pages/YourOrder";
import Address from './components/pages/Address';
import Payment from './components/pages/Payment'; 
import UpiPayment from './components/pages/UpiPayment'; 
import CardPayment from './components/pages/CardPayment'; 
import NetBanking from './components/pages/NetBanking'; 
import Help from './components/pages/Help'; 
import Loading from './components/pages/Loading';
import ProfilePage from "./components/pages/ProfilePage";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ChangePassword from "./components/pages/ChangePassword";
import ItemPage from "./components/pages/ItemPage";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/categories" element={<Categories />} />
        <Route path="/yourorder" element={<YourOrder />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/upipayment" element={<UpiPayment />} />
        <Route path="/cardpayment" element={<CardPayment />} />
        <Route path="/netbanking" element={<NetBanking />} />
        <Route path="/help" element={<Help />} />
        <Route path="/change-password" element={<ChangePassword />} />
        {/* Category pages that support selected item */}
        <Route path="/special-sweets" element={<SpecialSweets />} />
        <Route path="/regularsweets" element={<RegularSweets />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/savories" element={<Savories />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/festivalspecials" element={<FestivalSpecials />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/item" element={<ItemPage />} />

      </Routes>
    </Router>
  );
}

export default App;
