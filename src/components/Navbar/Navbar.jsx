// src/components/Navbar/Navbar.jsx

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { AuthContext } from '../../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { assets } from '../../assets/assets';
import './Navbar.css';

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  const { currentUser } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo1} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>HOME</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>MENU</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>MOBILE-APP</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>CONTACT US</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search_icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {currentUser ? (
          <div className="user-menu" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
            <img src={currentUser.photoURL || assets.user_icon} alt="User" className="user-icon" />
            {showDropdown && (
              <div className="dropdown">
                <p>{currentUser.email}</p>
                <button onClick={handleLogout}>Sign Out</button>
              </div>
            )}
          </div>
        ) : (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
