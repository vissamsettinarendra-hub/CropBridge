import "./FactoryDashboard.css";

import FactorySidebar from "../../components/factory/FactorySidebar/FactorySidebar";
import FactoryHeader from "../../components/factory/FactoryHeader/FactoryHeader";
import DashboardCards from "../../components/factory/DashboardCards/DashboardCards";
import QuickActions from "../../components/factory/QuickActions/QuickActions";
import RecentPurchases from "../../components/factory/RecentPurchases/RecentPurchases";

const FactoryDashboard = () => {
  return (
    <div className="factory-dashboard">

      <FactorySidebar />

      <div className="dashboard-content">

        <FactoryHeader />

        <DashboardCards />

        <QuickActions />

        <RecentPurchases />

      </div>

    </div>
  );
};

export default FactoryDashboard;