import "./Categories.css";

import paddy from "../../../assets/categories/paddy.jpg";
import maize from "../../../assets/categories/maize.jpg";
import wheat from "../../../assets/categories/wheat.jpg";
import cotton from "../../../assets/categories/cotton.jpg";
import chilli from "../../../assets/categories/chilli.jpg";
import onion from "../../../assets/categories/onion.jpg";
import potato from "../../../assets/categories/potato.jpg";
import fruits from "../../../assets/categories/fruits.jpg";
import vegetables from "../../../assets/categories/vegetables.jpg";
import pulses from "../../../assets/categories/pulses.jpg";
import turmeric from "../../../assets/categories/turmeric.jpg";
import groundnut from "../../../assets/categories/groundnut.jpg";

const crops = [
  { name: "Paddy", image: paddy, demand: "High Demand" },
  { name: "Maize", image: maize, demand: "High Demand" },
  { name: "Wheat", image: wheat, demand: "High Demand" },
  { name: "Cotton", image: cotton, demand: "High Demand" },
  { name: "Chilli", image: chilli, demand: "Medium Demand" },
  { name: "Onion", image: onion, demand: "High Demand" },
  { name: "Potato", image: potato, demand: "Medium Demand" },
  { name: "Fruits", image: fruits, demand: "High Demand" },
  { name: "Vegetables", image: vegetables, demand: "High Demand" },
  { name: "Pulses", image: pulses, demand: "High Demand" },
  { name: "Turmeric", image: turmeric, demand: "Medium Demand" },
  { name: "Groundnut", image: groundnut, demand: "High Demand" },
];

const Categories = () => {
  return (
    <section className="categories">

      <div className="category-header">
        <h2>Explore Crop Categories</h2>
        <p>
          Discover a wide range of crops traded directly between
          farmers and industries through CropBridge.
        </p>
      </div>

      <div className="category-grid">

        {crops.map((crop, index) => (
          <div className="category-card" key={index}>

            <img
              src={crop.image}
              alt={crop.name}
              className="category-image"
            />

            <div className="category-content">

              <h3>{crop.name}</h3>

              <span className="demand-badge">
                {crop.demand}
              </span>

              <button className="explore-btn">
                Explore Crop →
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Categories;