import "./FactoryDashboard.css";

import FactorySidebar from "../../components/factory/FactorySidebar/FactorySidebar";
import FactoryHeader from "../../components/factory/FactoryHeader/FactoryHeader";
import CropRequest from "../../components/factory/CropRequests/CropRequest";

const FactoryCropRequest = () => {
  return (
    <div className="factory-dashboard">

      <FactorySidebar />

      <div className="dashboard-content">
        <FactoryHeader />
        <CropRequest />
      </div>

    </div>
  );
};

export default FactoryCropRequest;