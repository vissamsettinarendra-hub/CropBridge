import "./Login.css";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import loginBanner from "../../assets/auth/login-banner.jpg";

const Login = () => {
  return (
    <section className="login">

      <div className="login-container">

        <div className="login-left">

          <h1>Welcome Back!</h1>

          <p>
            Login to CropBridge and connect directly with farmers and industries
            across India.
          </p>

          <img
            src={loginBanner}
            alt="Login Banner"
          />

        </div>

        <div className="login-right">

          <h2>Login</h2>

          <form>

            <div className="input-box">
              <FaEnvelope />
              <input
                type="email"
                placeholder="Email Address"
              />
            </div>

            <div className="input-box">
              <FaLock />
              <input
                type="password"
                placeholder="Password"
              />
            </div>

            <button type="submit">
              Login
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