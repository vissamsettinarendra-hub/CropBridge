import "./Register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
} from "react-icons/fa";

import registerBanner from "../../assets/auth/register-banner.jpg";

import { registerUser } from "../../services/authService";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "farmer",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      setLoading(true);

      const response = await registerUser({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        password: formData.password,
      });

      if (!response.success) {
        alert(response.message);
        return;
      }

      alert("Registration Successful");

      if (response.user.role === "farmer") {
        navigate("/farmer");
      }

      if (response.user.role === "factory") {
        navigate("/factory");
      }

      if (response.user.role === "admin") {
        navigate("/admin");
      }

    } catch (error) {

      console.error(error);

      alert("Registration Failed");

    } finally {

      setLoading(false);

    }

  };

  return (
    <section className="register">

      <div className="register-container">

        <div className="register-left">

          <h1>Join CropBridge</h1>

          <p>
            Register today and connect directly with trusted farmers and
            industries across India.
          </p>

          <img
            src={registerBanner}
            alt="Register Banner"
          />

        </div>

        <div className="register-right">

          <h2>Create Account</h2>

          <form onSubmit={handleSubmit}>

            <div className="input-box">
              <FaUser />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-box">
              <FaEnvelope />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-box">
              <FaPhone />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="input-box">
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="farmer">Farmer</option>
                <option value="factory">Factory</option>
              </select>
            </div>

            <div className="input-box">
              <FaLock />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-box">
              <FaLock />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>

            <p>
              Already have an account?
              <Link to="/login"> Login</Link>
            </p>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Register;