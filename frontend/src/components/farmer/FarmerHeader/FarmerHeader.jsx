import "./FarmerHeader.css";
import { FaBell, FaUserCircle } from "react-icons/fa";

const FarmerHeader = () => {
  return (
    <header className="farmer-header">

      <div>
        <h1>Farmer Dashboard</h1>
        <p>Welcome back to CropBridge 🌾</p>
      </div>

      <div className="header-right">
        <FaBell className="header-icon" />
        <FaUserCircle className="header-icon profile-icon" />
      </div>

    </header>
  );
};

export default FarmerHeader;