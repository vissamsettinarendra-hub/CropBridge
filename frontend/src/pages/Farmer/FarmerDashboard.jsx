import "./FarmerDashboard.css";

import FarmerSidebar from "../../components/farmer/FarmerSidebar/FarmerSidebar";
import FarmerHeader from "../../components/farmer/FarmerHeader/FarmerHeader";
import DashboardCards from "../../components/farmer/DashboardCards/DashboardCards";
import QuickActions from "../../components/farmer/QuickActions/QuickActions";
import RecentOrders from "../../components/farmer/RecentOrders/RecentOrders";

const FarmerDashboard = () => {
  return (
    <div className="farmer-dashboard">

      <FarmerSidebar />

      <div className="dashboard-content">
        <FarmerHeader />
        <DashboardCards />
        <QuickActions />
        <RecentOrders />
      </div>

    </div>
  );
};

export default FarmerDashboard;