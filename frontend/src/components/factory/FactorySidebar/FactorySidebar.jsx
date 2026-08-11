import "./FactorySidebar.css";

import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaSeedling,
  FaClipboardList,
  FaShoppingBasket,
  FaWallet,
  FaUser,
} from "react-icons/fa";

const FactorySidebar = () => {
  return (
    <aside className="factory-sidebar">

      {/* ================================
          Logo
      ================================= */}

      <div className="sidebar-logo">
        🏭
        <span>CropBridge</span>
      </div>

      {/* ================================
          Navigation
      ================================= */}

      <nav>

        {/* Dashboard */}

        <NavLink to="/factory" end>
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        {/* Browse Crops */}

        <NavLink to="/factory/browse-crops">
          <FaSeedling />
          <span>Browse Crops</span>
        </NavLink>

        {/* My Requests */}

        <NavLink to="/factory/requests">
          <FaClipboardList />
          <span>My Requests</span>
        </NavLink>

        {/* Orders */}

        <NavLink to="/factory/orders">
          <FaShoppingBasket />
          <span>Orders</span>
        </NavLink>

        {/* Payments */}

        <NavLink to="/factory/payments">
          <FaWallet />
          <span>Payments</span>
        </NavLink>

        {/* Profile */}

        <NavLink to="/factory/profile">
          <FaUser />
          <span>Profile</span>
        </NavLink>

      </nav>

    </aside>
  );
};

export default FactorySidebar;