import FarmerSidebar from "../../components/farmer/FarmerSidebar/FarmerSidebar";
import FarmerHeader from "../../components/farmer/FarmerHeader/FarmerHeader";
import MyCrops from "../../components/farmer/MyCrops/MyCrops";

const FarmerMyCrops = () => {
  return (
    <div className="farmer-dashboard">
      <FarmerSidebar />

      <div className="dashboard-content">
        <FarmerHeader />
        <MyCrops />
      </div>
    </div>
  );
};

export default FarmerMyCrops;