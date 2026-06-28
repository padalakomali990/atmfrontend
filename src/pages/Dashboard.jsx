import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "../services/api";
import "../css/Dashboard.css";

function Dashboard() {

  const [data, setData] = useState({
    balance: 0,
    deposit: 0,
    withdraw: 0
  });
  const [username, setUsername] = useState("");

  useEffect(() => {

    axios.get("/api/dashboard",)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const res = await axios.get("/api/user");
      setUsername(res.data.username);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />

      <div className="dashboard-container">

        <h1>{`Welcome ${username || 'User'} 👋`}</h1>

        <div className="card-container">

          <div className="bank-card">
            <h3>Current Balance</h3>
            <h2>₹ {data.balance}</h2>
          </div>

          <div className="bank-card">
            <h3>Total Deposits</h3>
            <h2>₹ {data.deposit}</h2>
          </div>

          <div className="bank-card">
            <h3>Total Withdrawals</h3>
            <h2>₹ {data.withdraw}</h2>
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;