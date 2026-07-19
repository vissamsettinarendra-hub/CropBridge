import "./FactoryHeader.css";
import { FaBell, FaUserCircle } from "react-icons/fa";

const FactoryHeader = () => {
  return (
    <header className="factory-header">

      <div>
        <h1>Factory Dashboard</h1>
        <p>Welcome back to CropBridge 🏭</p>
      </div>

      <div className="header-right">
        <FaBell className="header-icon" />
        <FaUserCircle className="header-icon profile-icon" />
      </div>

    </header>
  );
};

export default FactoryHeader;