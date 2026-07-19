import "./FarmerDashboard.css";

import FarmerSidebar from "../../components/farmer/FarmerSidebar/FarmerSidebar";
import FarmerHeader from "../../components/farmer/FarmerHeader/FarmerHeader";
import Payments from "../../components/farmer/Payments/Payments";

const FarmerPayments = () => {
  return (
    <div className="farmer-dashboard">

      <FarmerSidebar />

      <div className="dashboard-content">
        <FarmerHeader />
        <Payments />
      </div>

    </div>
  );
};

export default FarmerPayments;