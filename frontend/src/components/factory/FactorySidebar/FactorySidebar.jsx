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

      <div className="sidebar-logo">
        🏭 <span>CropBridge</span>
      </div>

      <nav>

        <NavLink to="/factory" end>
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/factory/browse-crops">
          <FaSeedling />
          <span>Browse Crops</span>
        </NavLink>

        <NavLink to="/factory/crop-request">
          <FaClipboardList />
          <span>Crop Requests</span>
        </NavLink>

        <NavLink to="/factory/orders">
          <FaShoppingBasket />
          <span>Orders</span>
        </NavLink>

        <NavLink to="/factory/payments">
          <FaWallet />
          <span>Payments</span>
        </NavLink>

        <NavLink to="/factory/profile">
          <FaUser />
          <span>Profile</span>
        </NavLink>

      </nav>

    </aside>
  );
};

export default FactorySidebar;