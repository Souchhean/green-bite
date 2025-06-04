// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/home";
import Account from "./pages/account/Account";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Category from "./pages/category/Category";


function App() {
  return (
    <Router>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/category/:categoryName" element={<Category />} />
        </Routes>
        <Footer />
      </Navbar>
    </Router>
  );
}

export default App;
