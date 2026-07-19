import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import { FaSeedling } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      {/* Logo */}

      <NavLink to="/" className="logo">

        <FaSeedling className="logo-icon"/>

        <span>CropBridge</span>

      </NavLink>

      {/* Navigation */}

      <nav>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/marketplace" onClick={closeMenu}>
              Marketplace
            </NavLink>
          </li>

          <li>
            <NavLink to="/categories" onClick={closeMenu}>
              Categories
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>

        </ul>

      </nav>

      {/* Buttons */}

      <div className="nav-btn">

        <NavLink to="/login">
          <button className="login-btn">Login</button>
        </NavLink>

        <NavLink to="/register">
          <button className="register-btn">
            Get Started
          </button>
        </NavLink>

      </div>

      {/* Mobile Menu */}

      <div
        className="menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
      </div>

    </header>
  );
};

export default Navbar;