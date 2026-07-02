import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import "../styles/Login.css";
import { useAuth } from "../context/AuthContext";

import {
  FaEnvelope,
  FaLock,
  FaUtensils,
  FaArrowRight,
} from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setToken, setUser } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await login({
        email,
        password,
      });
  
      setToken(response.data.token);
      setUser(response.data.user);
      
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login-container">

      <div className="background-circle circle-1"></div>
      <div className="background-circle circle-2"></div>
      <div className="background-circle circle-3"></div>

      <div className="login-card">

        <div className="brand">

          <div className="logo">
            <FaUtensils />
          </div>

          <div>
            <h1>MessTrack</h1>
            <p>Smart Dining</p>
          </div>

        </div>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <div className="input-group">
            <FaEnvelope className="input-icon" />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label>Password</label>

          <div className="input-group">
            <FaLock className="input-icon" />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="forgot">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">
            Login <FaArrowRight />
          </button>

        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <div className="register-text">
          Don't have an account?{" "}
          <Link to="/register">Sign Up</Link>
        </div>

      </div>

    </div>
  );
}

export default Login;