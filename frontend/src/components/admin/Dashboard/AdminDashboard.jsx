import "./AdminDashboard.css";

import AdminSidebar from "../Sidebar/AdminSidebar";
import AdminHeader from "./AdminHeader";
import DashboardCards from "./DashboardCards";
import Farmers from "../Farmers/Farmers";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">

      <AdminSidebar />

      <div className="dashboard-content">

        <AdminHeader />

        <DashboardCards />
        <Farmers />

      </div>

    </div>
  );
};

export default AdminDashboard;