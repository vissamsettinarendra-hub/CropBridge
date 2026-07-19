import "./FarmerDashboard.css";

import FarmerSidebar from "../../components/farmer/FarmerSidebar/FarmerSidebar";
import FarmerHeader from "../../components/farmer/FarmerHeader/FarmerHeader";
import Orders from "../../components/farmer/Orders/Orders";

const FarmerOrders = () => {
  return (
    <div className="farmer-dashboard">

      <FarmerSidebar />

      <div className="dashboard-content">
        <FarmerHeader />
        <Orders />
      </div>

    </div>
  );
};

export default FarmerOrders;