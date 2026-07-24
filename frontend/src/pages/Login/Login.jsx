import "./Login.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

import loginBanner from "../../assets/auth/login-banner.jpg";

import { loginUser } from "../../services/authService";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    try {

      setLoading(true);

      const response = await loginUser(formData);

      if (!response.success) {
        alert(response.message);
        return;
      }

      alert("Login Successful");

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

      alert("Login Failed");

    } finally {

      setLoading(false);

    }

  };

  return (

    <section className="login">

      <div className="login-container">

        <div className="login-left">

          <h1>Welcome Back</h1>

          <p>
            Login to manage crops, orders and connect with industries.
          </p>

          <img
            src={loginBanner}
            alt="Login Banner"
          />

        </div>

        <div className="login-right">

          <h2>Login</h2>

          <form onSubmit={handleSubmit}>

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

            <button
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <p>
              Don't have an account?
              <Link to="/register"> Register</Link>
            </p>

          </form>

        </div>

      </div>

    </section>

  );

};

export default Login;