import "./FactoryDashboard.css";

import FactorySidebar from "../../components/factory/FactorySidebar/FactorySidebar";
import FactoryHeader from "../../components/factory/FactoryHeader/FactoryHeader";
import Orders from "../../components/factory/Orders/Orders";

const FactoryOrders = () => {
  return (
    <div className="factory-dashboard">

      <FactorySidebar />

      <div className="dashboard-content">
        <FactoryHeader />
        <Orders />
      </div>

    </div>
  );
};

export default FactoryOrders;