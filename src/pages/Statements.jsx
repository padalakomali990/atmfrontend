import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";


function Statements() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/api/statements")
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">

        <h2>Transaction History</h2>

        <table border="1" width="100%">
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item,index)=>(
              <tr key={index}>
                <td>{item.type}</td>
                <td>₹{item.amount}</td>
                <td>{item.created_at}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </>
  );
}

export default Statements;