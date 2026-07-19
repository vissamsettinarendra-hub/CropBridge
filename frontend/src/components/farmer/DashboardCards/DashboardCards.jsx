import "./DashboardCards.css";
import {
  FaSeedling,
  FaShoppingCart,
  FaRupeeSign,
  FaTractor,
} from "react-icons/fa";

const DashboardCards = () => {
  return (
    <section className="dashboard-cards">

      <div className="card">
        <FaSeedling className="card-icon" />
        <h3>My Crops</h3>
        <h2>12</h2>
      </div>

      <div className="card">
        <FaShoppingCart className="card-icon" />
        <h3>Orders</h3>
        <h2>26</h2>
      </div>

      <div className="card">
        <FaRupeeSign className="card-icon" />
        <h3>Total Earnings</h3>
        <h2>₹1,24,000</h2>
      </div>

      <div className="card">
        <FaTractor className="card-icon" />
        <h3>Active Crops</h3>
        <h2>8</h2>
      </div>

    </section>
  );
};

export default DashboardCards;