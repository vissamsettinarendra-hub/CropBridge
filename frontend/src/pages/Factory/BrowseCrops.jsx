import "./FactoryDashboard.css";

import { useEffect, useState } from "react";

import FactorySidebar from "../../components/factory/FactorySidebar/FactorySidebar";
import FactoryHeader from "../../components/factory/FactoryHeader/FactoryHeader";

import { getAllCrops } from "../../services/cropService";
import { sendRequest } from "../../services/requestService";

const BrowseCrops = () => {

  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= Fetch Crops =================

  useEffect(() => {

    const fetchCrops = async () => {

      try {

        const response = await getAllCrops();

        if (response.success) {
          setCrops(response.crops);
        }

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    fetchCrops();

  }, []);

  // ================= Send Crop Request =================

  const handleRequest = async (crop) => {

    const quantity = prompt("Enter Required Quantity (Kg)");

    if (!quantity) return;

    const price = prompt("Enter Offered Price (₹)");

    if (!price) return;

    const message = prompt("Message to Farmer (Optional)") || "";

    try {

      const response = await sendRequest({
        cropId: crop._id,
        requestedQuantity: quantity,
        offeredPrice: price,
        message,
      });

      if (response.success) {

        alert("Crop Request Sent Successfully");

      } else {

        alert(response.message);

      }

    } catch (error) {

      console.error(error);

      alert("Unable to Send Request");

    }

  };

  // ================= UI =================

  return (

    <div className="factory-dashboard">

      <FactorySidebar />

      <div className="dashboard-content">

        <FactoryHeader />

        <div className="dashboard-card">

          <h2>Available Crops</h2>

          {loading ? (

            <p>Loading...</p>

          ) : crops.length === 0 ? (

            <p>No Crops Available.</p>

          ) : (

            <table className="crop-table">

              <thead>

                <tr>

                  <th>Crop</th>
                  <th>Farmer</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Action</th>

                </tr>

              </thead>

              <tbody>

                {crops.map((crop) => (

                  <tr key={crop._id}>

                    <td>{crop.cropName}</td>

                    <td>{crop.farmer?.name}</td>

                    <td>{crop.category}</td>

                    <td>{crop.quantity} Kg</td>

                    <td>₹ {crop.price}</td>

                    <td>{crop.location}</td>

                    <td>{crop.status}</td>

                    <td>

                      <button
                        onClick={() => handleRequest(crop)}
                      >
                        Request Crop
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          )}

        </div>

      </div>

    </div>

  );

};

export default BrowseCrops;