import AdminSidebar from "../../components/admin/Sidebar/AdminSidebar";
import "./Reports.css";

const Reports = () => {
  return (
    <div className="admin-dashboard">

      <AdminSidebar />
    <div className="reports">

      <div className="report-card">
        <h3>Total Farmers</h3>
        <h1>1,250</h1>
      </div>

      <div className="report-card">
        <h3>Total Factories</h3>
        <h1>215</h1>
      </div>

      <div className="report-card">
        <h3>Total Orders</h3>
        <h1>4,875</h1>
      </div>

      <div className="report-card">
        <h3>Total Revenue</h3>
        <h1>₹28,75,000</h1>
      </div>

    </div>
    </div>
  );
};

export default Reports;