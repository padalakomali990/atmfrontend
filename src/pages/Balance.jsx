import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Balance() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    API.get("/api/balance").then((res)=>{
      setBalance(res.data.balance);
    });
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">

        <h2>Available Balance</h2>

        <h1>₹ {balance}</h1>

      </div>
    </>
  );
}

export default Balance;