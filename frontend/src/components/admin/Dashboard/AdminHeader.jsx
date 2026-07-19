import "./AdminHeader.css";
import { FaBell, FaUserCircle } from "react-icons/fa";

const AdminHeader = () => {
  return (
    <header className="admin-header">

      <div>
        <h1>Admin Dashboard</h1>
        <p>Welcome back, Administrator 👋</p>
      </div>

      <div className="header-right">
        <FaBell className="header-icon" />
        <FaUserCircle className="header-icon" />
      </div>

    </header>
  );
};

export default AdminHeader;