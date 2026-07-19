import "./CTA.css";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="cta">

      <div className="cta-content">

        <span className="cta-tag">
          🚀 Join CropBridge Today
        </span>

        <h2>
          Empowering Farmers. Connecting Industries.
        </h2>

        <p>
          Join thousands of farmers and industries using CropBridge to build a
          transparent, profitable, and technology-driven agricultural supply
          chain across India.
        </p>

        <div className="cta-buttons">

          <button className="cta-primary">
            Get Started
            <FaArrowRight />
          </button>

          <button className="cta-secondary">
            <FaPhoneAlt />
            Contact Us
          </button>

        </div>

      </div>

    </section>
  );
};

export default CTA;