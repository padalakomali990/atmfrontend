import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Balance from "./pages/Balance";
import Statements from "./pages/Statements";
import ProtectedRoute from "./components/ProtectedRoute";
import "./css/Dashboard.css";
import "./css/App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route path="/deposit" element={
          <ProtectedRoute><Deposit /></ProtectedRoute>
        } />

        <Route path="/withdraw" element={
          <ProtectedRoute><Withdraw /></ProtectedRoute>
        } />

        <Route path="/balance" element={
          <ProtectedRoute><Balance /></ProtectedRoute>
        } />

        <Route path="/statements" element={
          <ProtectedRoute><Statements /></ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;