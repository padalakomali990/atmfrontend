import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/api/login", {
        username,
        password,
        pin
      });

      alert("Login Success");

      localStorage.setItem("loggedIn", "true");

      navigate("/dashboard");

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <input placeholder="Username"
        onChange={(e)=>setUsername(e.target.value)} />

      <input placeholder="Password"
        type="password"
        onChange={(e)=>setPassword(e.target.value)} />

      <input placeholder="PIN"
        onChange={(e)=>setPin(e.target.value)} />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;