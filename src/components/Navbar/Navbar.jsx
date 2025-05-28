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
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const { getTotalCartAmount } = useContext(StoreContext);
  const { currentUser } = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth);
    setShowProfileDropdown(false);
  };

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo1} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>HOME</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>MENU</a>
        <li>
          <a href="#app-download" onClick={(e) => {
            e.preventDefault();
            document.getElementById('app-download')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Mobile App
          </a>
        </li>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>CONTACT US</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />

        <div className="navbar-search_icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="cart" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {currentUser ? (
          <div className="navbar-user">
            <img
              src={assets.user_icon || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
              alt="user"
              className="user-icon"
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            />
            {showProfileDropdown && (
              <div className="profile-dropdown">
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
