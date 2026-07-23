import "./AdminDashboard.css";

import AdminSidebar from "../../components/admin/Sidebar/AdminSidebar";
import AdminHeader from "../../components/admin/Dashboard/AdminHeader";
import Factories from "../../components/admin/Factories/Factories";

const FactoriesPage = () => {
  return (
    <div className="admin-dashboard">

      <AdminSidebar />

      <div className="dashboard-content">
        <AdminHeader />
        <Factories />
      </div>

    </div>
  );
};

export default FactoriesPage;