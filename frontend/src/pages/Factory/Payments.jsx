import "./FactoryDashboard.css";

import FactorySidebar from "../../components/factory/FactorySidebar/FactorySidebar";
import FactoryHeader from "../../components/factory/FactoryHeader/FactoryHeader";
import Payments from "../../components/factory/Payments/Payments";

const FactoryPayments = () => {
  return (
    <div className="factory-dashboard">

      <FactorySidebar />

      <div className="dashboard-content">
        <FactoryHeader />
        <Payments />
      </div>

    </div>
  );
};

export default FactoryPayments;