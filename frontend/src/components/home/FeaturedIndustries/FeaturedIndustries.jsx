import "./FeaturedIndustries.css";
import { industries } from "../../../data/industries";
import { FaArrowRight, FaIndustry, FaLeaf } from "react-icons/fa";

const FeaturedIndustries = () => {
  return (
    <section className="featured-industries">

      <div className="industry-header">

        <span className="industry-tag">
          🏭 Featured Industries
        </span>

        <h2>Industries Connected with CropBridge</h2>

        <p>
          CropBridge connects Indian farmers with verified industries across
          different sectors, ensuring direct trade, better prices, and
          long-term business relationships.
        </p>

      </div>

      <div className="industry-grid">

        {industries.map((industry) => (

          <div className="industry-card" key={industry.id}>

            <div className="industry-image">

              <img
                src={industry.image}
                alt={industry.name}
              />

            </div>

            <div className="industry-content">

              <h3>{industry.name}</h3>

              <p className="industry-description">
                {industry.description}
              </p>

              <div className="industry-info">

                <p>
                  <FaLeaf />
                  <strong>Crops:</strong> {industry.crops.join(", ")}
                </p>

                <p>
                  <FaIndustry />
                  <strong>{industry.buyers}</strong>
                </p>

              </div>

              <button className="industry-btn">

                Explore Industry

                <FaArrowRight />

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default FeaturedIndustries;