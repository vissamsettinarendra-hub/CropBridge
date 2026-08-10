import "./FarmerSidebar.css";

import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaSeedling,
  FaShoppingBasket,
  FaWallet,
  FaUser,
  FaPlusCircle,
  FaClipboardList,
} from "react-icons/fa";

const FarmerSidebar = () => {
  return (
    <aside className="farmer-sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        🌾
        <span>CropBridge</span>
      </div>

      {/* Navigation */}
      <nav>

        {/* Dashboard */}
        <NavLink to="/farmer" end>
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        {/* My Crops */}
        <NavLink to="/farmer/my-crops">
          <FaSeedling />
          <span>My Crops</span>
        </NavLink>

        {/* Add Crop */}
        <NavLink to="/farmer/add-crop">
          <FaPlusCircle />
          <span>Add Crop</span>
        </NavLink>

        {/* Crop Requests */}
        <NavLink to="/farmer/requests">
          <FaClipboardList />
          <span>Crop Requests</span>
        </NavLink>

        {/* Orders */}
        <NavLink to="/farmer/orders">
          <FaShoppingBasket />
          <span>Orders</span>
        </NavLink>

        {/* Payments */}
        <NavLink to="/farmer/payments">
          <FaWallet />
          <span>Payments</span>
        </NavLink>

        {/* Profile */}
        <NavLink to="/farmer/profile">
          <FaUser />
          <span>Profile</span>
        </NavLink>

      </nav>

    </aside>
  );
};

export default FarmerSidebar;