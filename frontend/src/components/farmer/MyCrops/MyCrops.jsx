import "./MyCrops.css";

const MyCrops = () => {

  const crops = [
    {
      id: 1,
      name: "Paddy",
      quantity: "500 Kg",
      price: "₹24/kg",
      status: "Available",
    },
    {
      id: 2,
      name: "Cotton",
      quantity: "300 Kg",
      price: "₹68/kg",
      status: "Sold",
    },
    {
      id: 3,
      name: "Turmeric",
      quantity: "150 Kg",
      price: "₹120/kg",
      status: "Available",
    },
  ];

  return (

    <section className="my-crops">

      <h2>My Crops</h2>

      <div className="crop-grid">

        {crops.map((crop) => (

          <div className="crop-card" key={crop.id}>

            <h3>{crop.name}</h3>

            <p><strong>Quantity:</strong> {crop.quantity}</p>

            <p><strong>Price:</strong> {crop.price}</p>

            <p><strong>Status:</strong> {crop.status}</p>

            <button>Edit Crop</button>

          </div>

        ))}

      </div>

    </section>

  );
};

export default MyCrops;