// src/pages/home/home.jsx
import React from "react";
import "./home.css";
import heroImage from "../../assets/hero.png"; // replace with your actual image path

const Home = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-section">
        <div className="hero-text">
          <h2>
            Welcome to <span style={{ color: "#1e7d22" }}>Green Bite</span>
          </h2>
          <p>
            Your all-in-one online store for <br />
            food, groceries, <strong>Skincare</strong>, and more products.
          </p>
        </div>
        <div className="hero-image">
          <img
            src={heroImage}
            alt="shopping visual"
            style={{ maxWidth: "400px", borderRadius: "10px" }}
          />
        </div>
      </div>

      {/* Button goes here under the hero-section */}
      <div className="hero-button-container">
        <h2 className="button-h2">We Offer the Best of Products for you</h2>
        <button className="shop-now-btn">Shop Now</button>
      </div>
    </div>
  );
};

export default Home;
