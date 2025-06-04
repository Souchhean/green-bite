// src/pages/account/Account.jsx
import React, { useState } from "react";
import "./Account.css";

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="account-container">
      <div className="account-card">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form>
          {!isLogin && (
            <input type="text" placeholder="Username" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>
        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Don't have an account? Sign up"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default Account;
