import "./BuyerSection.css";

const BuyerSection = () => {
  return (
    <section className="buyer-section">

      <h2>Why Industries Choose CropBridge?</h2>

      <div className="buyer-grid">

        <div className="buyer-card">
          <h3>🌾 Quality Crops</h3>
          <p>Fresh products sourced directly from verified farmers.</p>
        </div>

        <div className="buyer-card">
          <h3>💰 Fair Pricing</h3>
          <p>No unnecessary middlemen, ensuring transparent pricing.</p>
        </div>

        <div className="buyer-card">
          <h3>🚚 Fast Delivery</h3>
          <p>Reliable logistics and timely transportation support.</p>
        </div>

      </div>

    </section>
  );
};

export default BuyerSection;