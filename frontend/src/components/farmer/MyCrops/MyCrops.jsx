import "./MyCrops.css";

const MyCrops = () => {
  const crops = [
    {
      id: 1,
      name: "Paddy",
      quantity: "500 Kg",
      price: "₹22/Kg",
      status: "Available",
    },
    {
      id: 2,
      name: "Maize",
      quantity: "300 Kg",
      price: "₹18/Kg",
      status: "Sold",
    },
    {
      id: 3,
      name: "Cotton",
      quantity: "150 Kg",
      price: "₹65/Kg",
      status: "Pending",
    },
  ];

  return (
    <div className="my-crops">
      <h2>My Crops</h2>

      <table className="crop-table">
        <thead>
          <tr>
            <th>Crop</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {crops.map((crop) => (
            <tr key={crop.id}>
              <td>{crop.name}</td>
              <td>{crop.quantity}</td>
              <td>{crop.price}</td>
              <td>{crop.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCrops;