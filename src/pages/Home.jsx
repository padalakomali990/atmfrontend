import React from "react";
import { Link } from "react-router-dom";
import { FaUniversity, FaLock, FaBolt, FaMobileAlt } from "react-icons/fa";
import "../css/Home.css";

function Home() {
  return (
    <div className="home-container">

      {/* Navbar */}
      <nav className="home-navbar">
        <div className="brand">
          🏦 ATM Bank
        </div>

        <div className="nav-buttons">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="register-btn">
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">

        <div className="hero-left">
          <h1>
            Secure Banking <br />
            Made <span>Simple</span>
          </h1>

          <p>
            Manage deposits, withdrawals, account balance,
            and transaction statements with a secure
            modern banking experience.
          </p>

          <div className="hero-buttons">
            <Link to="/login" className="primary-btn">
              Get Started
            </Link>

            <Link to="/register" className="secondary-btn">
              Create Account
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="bank-card">
            <FaUniversity className="bank-icon" />
            <h3>Digital Banking</h3>
            <p>Fast • Secure • Reliable</p>
          </div>
        </div>

      </div>

      {/* Features */}
      <div className="features-section">

        <div className="feature-card">
          <FaLock />
          <h3>Secure Transactions</h3>
          <p>Protected with secure authentication & session management.</p>
        </div>

        <div className="feature-card">
          <FaBolt />
          <h3>Instant Banking</h3>
          <p>Deposit and withdraw money instantly in real time.</p>
        </div>

        <div className="feature-card">
          <FaMobileAlt />
          <h3>Easy Access</h3>
          <p>Access your account anytime with a smooth experience.</p>
        </div>

      </div>

    </div>
  );
}

export default Home;