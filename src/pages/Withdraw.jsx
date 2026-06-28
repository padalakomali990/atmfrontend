import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";


function Withdraw() {
  const [amount, setAmount] = useState("");

  const withdraw = async () => {
    try {
      const res = await API.post("/api/withdraw", {
        amount
      });

      alert("Current Balance ₹" + res.data.balance);

    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Withdraw Money</h2>

        <input
          type="number"
          onChange={(e)=>setAmount(e.target.value)}
        />

        <button onClick={withdraw}>Withdraw</button>
      </div>
    </>
  );
}

export default Withdraw;