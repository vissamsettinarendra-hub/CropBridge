import "../../components/admin/Dashboard/AdminDashboard.css";

import AdminSidebar from "../../components/admin/Sidebar/AdminSidebar";
import AdminHeader from "../../components/admin/Dashboard/AdminHeader";
import Farmers from "../../components/admin/Farmers/Farmers";

const FarmersPage = () => {
  return (
    <div className="admin-dashboard">

      <AdminSidebar />

      <div className="dashboard-content">
        <AdminHeader />
        <Farmers />
      </div>

    </div>
  );
};

export default FarmersPage;