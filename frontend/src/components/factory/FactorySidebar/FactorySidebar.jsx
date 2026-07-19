import "./FactorySidebar.css";
import { Link } from "react-router-dom";
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

      <h2>🏭 CropBridge</h2>

      <nav>

        <Link to="/factory">
          <FaHome />
          <span>Dashboard</span>
        </Link>

        <Link to="/factory/browse-crops">
          <FaSeedling />
          <span>Browse Crops</span>
        </Link>

        <Link to="/factory/crop-request">
          <FaClipboardList />
          <span>Crop Requests</span>
        </Link>

        <Link to="/factory/orders">
          <FaShoppingBasket />
          <span>Orders</span>
        </Link>

        <Link to="/factory/payments">
          <FaWallet />
          <span>Payments</span>
        </Link>

        <Link to="/factory/profile">
          <FaUser />
          <span>Profile</span>
        </Link>

      </nav>

    </aside>
  );
};

export default FactorySidebar;