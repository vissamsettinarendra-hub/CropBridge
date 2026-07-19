import "./MarketplaceCTA.css";
import { Link } from "react-router-dom";

const MarketplaceCTA = () => {
  return (
    <section className="marketplace-cta">

      <h2>Ready to Sell Your Crops?</h2>

      <p>
        Join thousands of farmers and industries already using CropBridge.
      </p>

      <Link to="/register">
        <button>Register Now</button>
      </Link>

    </section>
  );
};

export default MarketplaceCTA;