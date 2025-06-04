// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/GreenBite.png";

const Navbar = ({ children }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="layout-container">
      <div className="layout">
        <aside className="sidebar">
          <div className="logo-container">
            <img src={logo} alt="Green Bite Logo" className="logo-img" />
            <h2 className="logo-text">Green Bite</h2>
          </div>

          <input type="text" className="search-box" placeholder="Search..." />

          <div className="category-dropdown">
            <button className="dropdown-toggle" onClick={() => setShowDropdown(!showDropdown)}>
              Category ▼
            </button>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li><Link to="/category/all">All</Link></li>
                <li><Link to="/category/food">Food</Link></li>
                <li><Link to="/category/groceries">Groceries</Link></li>
                <li><Link to="/category/electronics">Study Supply</Link></li>
                <li><Link to="/category/clothing">Clothing</Link></li>
                <li><Link to="/category/food">Skincare</Link></li>
                <li><Link to="/category/food">Healthcare</Link></li>
              </ul>
            )}
          </div>
        </aside>

        <div className="main-content-wrapper">
          <nav className="navbar">
            <div className="navbar-center">
              <a href="/">Home</a>
              <span>|</span>
              <Link to="/About">About</Link>
              <span>|</span>
              <Link to="/Contact">Contact</Link>
              <span>|</span>
              <Link to="/Account">Account</Link>
            </div>
            <div className="navbar-right">
              <FaHeart className="icon" />
              <FaShoppingCart className="icon" />
            </div>
          </nav>

          <div className="page-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
