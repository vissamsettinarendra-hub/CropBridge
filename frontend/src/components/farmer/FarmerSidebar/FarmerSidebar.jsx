import "./FarmerSidebar.css";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaSeedling,
  FaShoppingBasket,
  FaWallet,
  FaUser,
  FaPlusCircle,
} from "react-icons/fa";

const FarmerSidebar = () => {
  return (
    <aside className="farmer-sidebar">

      <div className="sidebar-logo">
        🌾 <span>CropBridge</span>
      </div>

      <nav>

        <NavLink to="/farmer" end>
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/farmer/my-crops">
          <FaSeedling />
          <span>My Crops</span>
        </NavLink>

        <NavLink to="/farmer/add-crop">
          <FaPlusCircle />
          <span>Add Crop</span>
        </NavLink>

        <NavLink to="/farmer/orders">
          <FaShoppingBasket />
          <span>Orders</span>
        </NavLink>

        <NavLink to="/farmer/payments">
          <FaWallet />
          <span>Payments</span>
        </NavLink>

        <NavLink to="/farmer/profile">
          <FaUser />
          <span>Profile</span>
        </NavLink>

      </nav>

    </aside>
  );
};

export default FarmerSidebar;