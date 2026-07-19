import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaSeedling,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-box">

          <div className="footer-logo">

            <FaSeedling className="logo-icon" />

            <h2>CropBridge</h2>

          </div>

          <p>
            CropBridge is a digital agricultural platform connecting farmers
            directly with industries, eliminating unnecessary middlemen and
            ensuring fair trade across India.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <ul>

            <li>Home</li>

            <li>Marketplace</li>

            <li>Categories</li>

            <li>About</li>

            <li>Contact</li>

          </ul>

        </div>

        {/* Services */}

        <div className="footer-box">

          <h3>Services</h3>

          <ul>

            <li>Crop Trading</li>

            <li>Market Prices</li>

            <li>Industry Network</li>

            <li>Logistics</li>

            <li>Secure Payments</li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-box">

          <h3>Contact Us</h3>

          <p>
            <FaMapMarkerAlt />
            Guntur, Andhra Pradesh
          </p>

          <p>
            <FaPhoneAlt />
            +91 98765 43210
          </p>

          <p>
            <FaEnvelope />
            support@cropbridge.in
          </p>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 CropBridge. All Rights Reserved. Built with ❤️ for Indian Farmers.
        </p>

      </div>

    </footer>
  );
};

export default Footer;