import "./AdminSidebar.css";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaIndustry,
  FaSeedling,
  FaChartBar,
} from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">
      <h2>⚙️ CropBridge</h2>

      <nav>
        <Link to="/admin">
          <FaHome />
          <span>Dashboard</span>
        </Link>

        <Link to="/admin/farmers">
          <FaUsers />
          <span>Farmers</span>
        </Link>

        <Link to="/admin/factories">
          <FaIndustry />
          <span>Factories</span>
        </Link>

        <Link to="/admin/categories">
          <FaSeedling />
          <span>Categories</span>
        </Link>

        <Link to="/admin/reports">
          <FaChartBar />
          <span>Reports</span>
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;