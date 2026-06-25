import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import "../styles/Register.css";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaUniversity,
  FaBuilding,
  FaArrowRight,
  FaUtensils,
} from "react-icons/fa";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    collegeName: "",
    hostelName: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await register(formData);

      alert("Registration Successful");

      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Registration Failed");
    }
  };

  return (
    <div className="register-container">

      <div className="background-circle circle-1"></div>
      <div className="background-circle circle-2"></div>
      <div className="background-circle circle-3"></div>

      <div className="register-card">

        <div className="brand">

          <div className="logo">
            <FaUtensils />
          </div>

          <div>
            <h1>MessTrack</h1>
            <p>Create your account</p>
          </div>

        </div>

        <form onSubmit={handleRegister}>

          <label>Full Name</label>

          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <label>Email</label>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <label>Password</label>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <label>College</label>

          <div className="input-group">
            <FaUniversity className="input-icon" />

            <select
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
            >
              <option value="">Select College</option>

              <option value="Bakhtiyarpur College of Engineering">
                Bakhtiyarpur College of Engineering
              </option>
            </select>
          </div>

          <label>Hostel</label>

          <div className="input-group">
            <FaBuilding className="input-icon" />

            <select
              name="hostelName"
              value={formData.hostelName}
              onChange={handleChange}
            >
              <option value="">Select Hostel</option>

              <option value="Aryabhatta Hostel">
                Aryabhatta Hostel
              </option>

              <option value="Chanakya Hostel">
                Chanakya Hostel
              </option>

              <option value="Nalanda Hostel">
                Nalanda Hostel
              </option>
            </select>
          </div>

          <button type="submit">
            Register <FaArrowRight />
          </button>

        </form>

        <div className="register-footer">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </div>

      </div>

    </div>
  );
}

export default Register;