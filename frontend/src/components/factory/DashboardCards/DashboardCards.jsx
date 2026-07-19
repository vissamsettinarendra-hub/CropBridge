import "./DashboardCards.css";
import {
  FaSeedling,
  FaShoppingCart,
  FaRupeeSign,
  FaTruck,
} from "react-icons/fa";

const DashboardCards = () => {
  return (
    <section className="dashboard-cards">

      <div className="card">
        <FaSeedling className="card-icon" />
        <h3>Available Crops</h3>
        <h2>154</h2>
      </div>

      <div className="card">
        <FaShoppingCart className="card-icon" />
        <h3>Orders</h3>
        <h2>42</h2>
      </div>

      <div className="card">
        <FaRupeeSign className="card-icon" />
        <h3>Total Purchase</h3>
        <h2>₹8.6L</h2>
      </div>

      <div className="card">
        <FaTruck className="card-icon" />
        <h3>Deliveries</h3>
        <h2>18</h2>
      </div>

    </section>
  );
};

export default DashboardCards;