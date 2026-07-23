import "./AdminDashboard.css";

import AdminSidebar from "../../components/admin/Sidebar/AdminSidebar";
import AdminHeader from "../../components/admin/Dashboard/AdminHeader";
import Reports from "../../components/admin/Reports/Reports";

const ReportsPage = () => {
  return (
    <div className="admin-dashboard">

      <AdminSidebar />

      <div className="dashboard-content">
        <AdminHeader />
        <Reports />
      </div>

    </div>
  );
};

export default ReportsPage;