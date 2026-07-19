import "./FarmerSidebar.css";
import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import {
  FaHome,
  FaSeedling,
  FaShoppingBasket,
  FaWallet,
  FaUser,
} from "react-icons/fa";

const FarmerSidebar = () => {
  return (
    <aside className="farmer-sidebar">

      <h2>🌾 CropBridge</h2>

      <nav>

        <Link to="/farmer">
          <FaHome />
          <span>Dashboard</span>
        </Link>

        <Link to="/farmer/my-crops">
          <FaSeedling />
          <span>My Crops</span>
        </Link>

        <Link to="/farmer/orders">
          <FaShoppingBasket />
          <span>Orders</span>
        </Link>

        <Link to="/farmer/payments">
          <FaWallet />
          <span>Payments</span>
        </Link>

        <Link to="/farmer/profile">
          <FaUser />
          <span>Profile</span>
        </Link>

        <Link to="/farmer/add-crop">
        <FaPlusCircle />
        <span>Add Crop</span>
        </Link>

      </nav>

    </aside>
  );
};

export default FarmerSidebar;