import "./Marketplace.css";
import { marketplace } from "../../../data/marketplace";
import {
  FaMapMarkerAlt,
  FaIndustry,
  FaBoxes,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const Marketplace = () => {
  return (
    <section className="marketplace">

      <div className="marketplace-header">
        <span className="marketplace-tag">
          🌾 Live Marketplace
        </span>

        <h2>Fresh Crop Listings From Farmers</h2>

        <p>
          Browse recently added crop listings and connect directly with verified
          farmers across India.
        </p>
      </div>

      <div className="marketplace-grid">

        {marketplace.map((item) => (

          <div className="market-card" key={item.id}>

            <div className="market-image">

              <img src={item.image} alt={item.crop} />

              <span className="status">
                {item.status}
              </span>

            </div>

            <div className="market-content">

              <h3>{item.crop}</h3>

              <p>
                <FaMapMarkerAlt />
                {item.location}
              </p>

              <p>
                <FaIndustry />
                {item.industry}
              </p>

              <p>
                <FaBoxes />
                {item.quantity}
              </p>

              <h4>{item.price}</h4>

              <div className="verified">

                <FaCheckCircle />

                <span>Verified Farmer</span>

              </div>

              <button className="market-btn">
                View Details
                <FaArrowRight />
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Marketplace;