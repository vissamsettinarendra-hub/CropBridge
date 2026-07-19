import "./CropList.css";
import { marketplace } from "../../../data/marketplace";

const CropList = () => {
  return (
    <section className="crop-list">

      <h2>Available Crops</h2>

      <div className="crop-grid">

        {marketplace.map((crop) => (

          <div className="crop-card" key={crop.id}>

            <img src={crop.image} alt={crop.name} />

            <h3>{crop.name}</h3>

            <p>{crop.description}</p>

            <div className="crop-details">

              <span>₹ {crop.price}</span>

              <span>{crop.location}</span>

            </div>

            <button>View Details</button>

          </div>

        ))}

      </div>

    </section>
  );
};

export default CropList;