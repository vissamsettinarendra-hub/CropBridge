import "./Register.css";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
} from "react-icons/fa";
import registerBanner from "../../assets/auth/register-banner.jpg";

const Register = () => {
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

          <form>

            <div className="input-box">
              <FaUser />
              <input
                type="text"
                placeholder="Full Name"
              />
            </div>

            <div className="input-box">
              <FaEnvelope />
              <input
                type="email"
                placeholder="Email Address"
              />
            </div>

            <div className="input-box">
              <FaPhone />
              <input
                type="tel"
                placeholder="Phone Number"
              />
            </div>

            <div className="input-box">
              <select>
                <option>Select Role</option>
                <option>Farmer</option>
                <option>Factory</option>
              </select>
            </div>

            <div className="input-box">
              <FaLock />
              <input
                type="password"
                placeholder="Password"
              />
            </div>

            <div className="input-box">
              <FaLock />
              <input
                type="password"
                placeholder="Confirm Password"
              />
            </div>

            <button type="submit">
              Register
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