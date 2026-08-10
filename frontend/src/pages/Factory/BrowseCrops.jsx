import "./FactoryDashboard.css";

import { useEffect, useState } from "react";

import FactorySidebar from "../../components/factory/FactorySidebar/FactorySidebar";
import FactoryHeader from "../../components/factory/FactoryHeader/FactoryHeader";

import { getAllCrops } from "../../services/cropService";

const REQUEST_API = "http://localhost:5000/api/requests";

const BrowseCrops = () => {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedCrop, setSelectedCrop] = useState(null);

  const [formData, setFormData] = useState({
    requestedQuantity: "",
    offeredPrice: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  // ==========================================
  // Fetch Crops
  // ==========================================

  const fetchCrops = async () => {
    try {
      setLoading(true);

      const response = await getAllCrops();

      if (response.success) {
        setCrops(response.crops || []);
      } else {
        alert(response.message || "Failed to load crops");
      }
    } catch (error) {
      console.error("FETCH CROPS ERROR:", error);
      alert("Unable to load crops");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCrops();
  }, []);

  // ==========================================
  // Open Request Form
  // ==========================================

  const handleRequestClick = (crop) => {
    setSelectedCrop(crop);

    setFormData({
      requestedQuantity: "",
      offeredPrice: crop.price || "",
      message: "",
    });
  };

  // ==========================================
  // Close Form
  // ==========================================

  const closeModal = () => {
    if (submitting) return;

    setSelectedCrop(null);

    setFormData({
      requestedQuantity: "",
      offeredPrice: "",
      message: "",
    });
  };

  // ==========================================
  // Handle Input
  // ==========================================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ==========================================
  // Submit Request
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedCrop) return;

    const quantity = Number(formData.requestedQuantity);
    const price = Number(formData.offeredPrice);

    if (quantity <= 0) {
      alert("Enter a valid quantity.");
      return;
    }

    if (quantity > selectedCrop.quantity) {
      alert(
        `Only ${selectedCrop.quantity} Kg is available for this crop.`
      );
      return;
    }

    if (price <= 0) {
      alert("Enter a valid offered price.");
      return;
    }

    try {
      setSubmitting(true);

      const response = await fetch(REQUEST_API, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cropId: selectedCrop._id,
          requestedQuantity: quantity,
          offeredPrice: price,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Crop request sent successfully.");

        closeModal();
      } else {
        alert(data.message || "Failed to send request.");
      }
    } catch (error) {
      console.error("SEND REQUEST ERROR:", error);
      alert("Something went wrong while sending the request.");
    } finally {
      setSubmitting(false);
    }
  };

  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="factory-dashboard">

      <FactorySidebar />

      <div className="dashboard-content">

        <FactoryHeader />

        <div className="dashboard-card">

          <div className="dashboard-card-header">

            <div>
              <h2>Available Crops</h2>

              <p>
                Browse crops listed by farmers and send purchase
                requests.
              </p>
            </div>

            <button
              className="refresh-btn"
              onClick={fetchCrops}
              disabled={loading}
            >
              {loading ? "Loading..." : "Refresh"}
            </button>

          </div>

          {/* ================= Loading ================= */}

          {loading ? (

            <div className="empty-state">
              <h3>Loading Crops...</h3>
              <p>Please wait.</p>
            </div>

          ) : crops.length === 0 ? (

            /* ================= Empty ================= */

            <div className="empty-state">

              <h3>No Crops Available</h3>

              <p>
                Farmers have not added any crops yet.
              </p>

            </div>

          ) : (

            /* ================= Table ================= */

            <div className="table-container">

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

                      <td>
                        <strong>
                          {crop.cropName}
                        </strong>
                      </td>

                      <td>
                        {crop.farmer?.name || "Unknown"}
                      </td>

                      <td>
                        {crop.category}
                      </td>

                      <td>
                        {crop.quantity} Kg
                      </td>

                      <td>
                        ₹{crop.price}
                      </td>

                      <td>
                        {crop.location || "Not specified"}
                      </td>

                      <td>
                        <span className="status">
                          {crop.status}
                        </span>
                      </td>

                      <td>

                        {crop.status === "Available" ? (

                          <button
                            className="request-btn"
                            onClick={() =>
                              handleRequestClick(crop)
                            }
                          >
                            Request Crop
                          </button>

                        ) : (

                          <button
                            disabled
                            className="request-btn disabled"
                          >
                            Not Available
                          </button>

                        )}

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>

      </div>

      {/* ==========================================
          Request Modal
      ========================================== */}

      {selectedCrop && (

        <div className="request-modal-overlay">

          <div className="request-modal">

            <div className="request-modal-header">

              <div>
                <h2>Request Crop</h2>

                <p>
                  {selectedCrop.cropName}
                </p>
              </div>

              <button
                className="close-modal"
                onClick={closeModal}
                disabled={submitting}
              >
                ×
              </button>

            </div>

            {/* Crop Information */}

            <div className="request-crop-info">

              <div>
                <span>Available</span>
                <strong>
                  {selectedCrop.quantity} Kg
                </strong>
              </div>

              <div>
                <span>Farmer</span>
                <strong>
                  {selectedCrop.farmer?.name || "Unknown"}
                </strong>
              </div>

              <div>
                <span>Listed Price</span>
                <strong>
                  ₹{selectedCrop.price}
                </strong>
              </div>

            </div>

            {/* Request Form */}

            <form onSubmit={handleSubmit}>

              <div className="form-group">

                <label>
                  Requested Quantity (Kg)
                </label>

                <input
                  type="number"
                  name="requestedQuantity"
                  value={formData.requestedQuantity}
                  onChange={handleChange}
                  min="1"
                  max={selectedCrop.quantity}
                  placeholder="Enter quantity"
                  required
                />

              </div>

              <div className="form-group">

                <label>
                  Offered Price (₹)
                </label>

                <input
                  type="number"
                  name="offeredPrice"
                  value={formData.offeredPrice}
                  onChange={handleChange}
                  min="1"
                  placeholder="Enter offered price"
                  required
                />

              </div>

              <div className="form-group">

                <label>
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write a message to the farmer..."
                  rows="4"
                />

              </div>

              <div className="request-form-actions">

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={closeModal}
                  disabled={submitting}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="submit-request-btn"
                  disabled={submitting}
                >
                  {submitting
                    ? "Sending..."
                    : "Send Request"}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
};

export default BrowseCrops;