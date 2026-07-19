import "./TrustedPartners.css";
import { partners } from "../../../data/partners";

const TrustedPartners = () => {
  return (
    <section className="trusted-partners">

      <div className="partners-header">

        <span className="partners-tag">
          🤝 Trusted Partners
        </span>

        <h2>Trusted by India's Leading Companies</h2>

        <p>
          CropBridge connects farmers with some of India's most trusted
          agricultural, food processing, textile, and manufacturing companies.
        </p>

      </div>

      <div className="partners-grid">

        {partners.map((partner) => (

          <div className="partner-card" key={partner.id}>

            <img
              src={partner.logo}
              alt={partner.name}
            />

            <h3>{partner.name}</h3>

          </div>

        ))}

      </div>

    </section>
  );
};

export default TrustedPartners;