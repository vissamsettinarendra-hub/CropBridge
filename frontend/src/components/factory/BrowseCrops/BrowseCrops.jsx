import "./BrowseCrops.css";

const crops = [
  {
    id: 1,
    name: "Paddy",
    farmer: "Ramesh",
    location: "Guntur",
    quantity: "500 Kg",
    price: "₹28/Kg",
  },
  {
    id: 2,
    name: "Maize",
    farmer: "Suresh",
    location: "Vijayawada",
    quantity: "800 Kg",
    price: "₹24/Kg",
  },
  {
    id: 3,
    name: "Cotton",
    farmer: "Mahesh",
    location: "Warangal",
    quantity: "350 Kg",
    price: "₹65/Kg",
  },
];

const BrowseCrops = () => {
  return (
    <section className="browse-crops">

      <h2>Browse Crops</h2>

      <input
        type="text"
        placeholder="Search Crops..."
        className="search-box"
      />

      <div className="crop-grid">

        {crops.map((crop) => (

          <div className="crop-card" key={crop.id}>

            <h3>{crop.name}</h3>

            <p><strong>Farmer:</strong> {crop.farmer}</p>

            <p><strong>Location:</strong> {crop.location}</p>

            <p><strong>Quantity:</strong> {crop.quantity}</p>

            <p><strong>Price:</strong> {crop.price}</p>

            <div className="buttons">

              <button>View Details</button>

              <button>Buy Now</button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default BrowseCrops;