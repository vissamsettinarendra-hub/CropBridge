import "./AdminDashboard.css";

import AdminSidebar from "../../components/admin/Sidebar/AdminSidebar";
import AdminHeader from "../../components/admin/Dashboard/AdminHeader";
import Categories from "../../components/admin/Categories/Categories";

const CategoriesPage = () => {
  return (
    <div className="admin-dashboard">

      <AdminSidebar />

      <div className="dashboard-content">
        <AdminHeader />
        <Categories />
      </div>

    </div>
  );
};

export default CategoriesPage;