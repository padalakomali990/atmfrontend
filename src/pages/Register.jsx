import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await API.post("/api/register", {
        username,
        email,
        password,
        pin
      });

      alert(res.data.message);
      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.message || "Register failed");
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>

      <input placeholder="Username"
        onChange={(e)=>setUsername(e.target.value)} />

      <input placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)} />

      <input placeholder="Password"
        type="password"
        onChange={(e)=>setPassword(e.target.value)} />

      <input placeholder="PIN"
        onChange={(e)=>setPin(e.target.value)} />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;