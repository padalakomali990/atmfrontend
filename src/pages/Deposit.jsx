import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Deposit() {
  const [amount, setAmount] = useState("");

  const deposit = async () => {
    try {
      const res = await API.post(
        "/api/deposit",
        {
          amount
        }
      );

      alert(
        "Current Balance ₹" +
        res.data.balance
      );

    } catch (err) {
      alert(
        err.response?.data?.message
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Deposit Money</h2>

        <input
          type="number"
          onChange={(e)=>
            setAmount(e.target.value)
          }
        />

        <button onClick={deposit}>
          Deposit
        </button>
      </div>
    </>
  );
}

export default Deposit;