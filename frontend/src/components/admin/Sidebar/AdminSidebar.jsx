import "./AdminSidebar.css";
import { NavLink } from "react-router-dom";
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

      <div className="sidebar-logo">
        ⚙️ <span>CropBridge</span>
      </div>

      <nav>

        <NavLink to="/admin" end>
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/admin/farmers">
          <FaUsers />
          <span>Farmers</span>
        </NavLink>

        <NavLink to="/admin/factories">
          <FaIndustry />
          <span>Factories</span>
        </NavLink>

        <NavLink to="/admin/categories">
          <FaSeedling />
          <span>Categories</span>
        </NavLink>

        <NavLink to="/admin/reports">
          <FaChartBar />
          <span>Reports</span>
        </NavLink>

      </nav>

    </aside>
  );
};

export default AdminSidebar;