import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaMoneyBillWave,
  FaWallet,
  FaBalanceScale,
  FaFileAlt,
  FaSignOutAlt,
  FaUserCircle
} from "react-icons/fa";

import API from "../services/api";
import "../css/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    // try {
    //   const res = await API.get("/api/user");
    //   setUsername(res.data.username);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const handleLogout = async () => {
    try {
      await API.post("/api/logout");
      localStorage.removeItem("loggedIn");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="navbar">

      {/* Left */}
      <div className="logo">
        🏦 ATM Bank
      </div>

      {/* Center */}
      <div className="nav-links">

        <Link to="/dashboard">
          <FaHome /> Dashboard
        </Link>

        <Link to="/deposit">
          <FaMoneyBillWave /> Deposit
        </Link>

        <Link to="/withdraw">
          <FaWallet /> Withdraw
        </Link>

        <Link to="/balance">
          <FaBalanceScale /> Balance
        </Link>

        <Link to="/statements">
          <FaFileAlt /> Statements
        </Link>

      </div>

      {/* Right */}
      <div className="right-section">

        {/* <div className="user-info">
          <FaUserCircle />
          <span>Hi, {username}</span>
        </div> */}

        <button onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;