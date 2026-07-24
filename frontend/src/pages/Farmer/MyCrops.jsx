import "./FarmerDashboard.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import FarmerSidebar from "../../components/farmer/FarmerSidebar/FarmerSidebar";
import FarmerHeader from "../../components/farmer/FarmerHeader/FarmerHeader";

import {
  getMyCrops,
  deleteCrop,
} from "../../services/cropService";

const MyCrops = () => {

  const navigate = useNavigate();

  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= Fetch My Crops =================

  const fetchCrops = async () => {
    try {

      const response = await getMyCrops();

      if (response.success) {
        setCrops(response.crops);
      }

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    fetchCrops();
  }, []);

  // ================= Delete Crop =================

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this crop?"
    );

    if (!confirmDelete) return;

    try {

      const response = await deleteCrop(id);

      if (response.success) {

        alert("Crop Deleted Successfully");

        fetchCrops();

      } else {

        alert(response.message);

      }

    } catch (error) {

      console.error(error);

      alert("Unable to delete crop");

    }

  };

  // ================= Render =================

  return (

    <div className="farmer-dashboard">

      <FarmerSidebar />

      <div className="dashboard-content">

        <FarmerHeader />

        <div className="dashboard-card">

          <h2>My Crops</h2>

          {loading ? (

            <p>Loading...</p>

          ) : crops.length === 0 ? (

            <p>No Crops Added Yet.</p>

          ) : (

            <table className="crop-table">

              <thead>

                <tr>

                  <th>Crop</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Actions</th>

                </tr>

              </thead>

              <tbody>

                {crops.map((crop) => (

                  <tr key={crop._id}>

                    <td>{crop.cropName}</td>

                    <td>{crop.category}</td>

                    <td>{crop.quantity} Kg</td>

                    <td>₹ {crop.price}</td>

                    <td>{crop.status}</td>

                    <td>

                      <button
                        onClick={() =>
                          navigate(`/farmer/edit-crop/${crop._id}`)
                        }
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(crop._id)
                        }
                      >
                        Delete
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

export default MyCrops;