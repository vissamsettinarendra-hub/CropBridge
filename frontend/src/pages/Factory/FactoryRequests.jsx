import "./FactoryDashboard.css";

import { useEffect, useState } from "react";

import FactorySidebar from "../../components/factory/FactorySidebar/FactorySidebar";
import FactoryHeader from "../../components/factory/FactoryHeader/FactoryHeader";

const API = "http://localhost:5000/api/requests";

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // ==========================================
  // Fetch Factory Requests
  // ==========================================

  const fetchRequests = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${API}/factory`, {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();

      if (data.success) {
        setRequests(data.requests || []);
      } else {
        alert(data.message || "Failed to load requests");
      }
    } catch (error) {
      console.error("FETCH FACTORY REQUESTS ERROR:", error);
      alert("Unable to load requests");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // ==========================================
  // Status Class
  // ==========================================

  const getStatusClass = (status) => {
    switch (status) {
      case "Accepted":
        return "status accepted";

      case "Rejected":
        return "status rejected";

      case "Pending":
        return "status pending";

      default:
        return "status";
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
              <h2>My Crop Requests</h2>

              <p>
                Track the crop requests you have sent to farmers.
              </p>
            </div>

            <button
              className="refresh-btn"
              onClick={fetchRequests}
              disabled={loading}
            >
              {loading ? "Loading..." : "Refresh"}
            </button>

          </div>

          {/* =====================================
              Loading
          ====================================== */}

          {loading ? (

            <div className="empty-state">

              <h3>Loading Requests...</h3>

              <p>
                Please wait while we fetch your requests.
              </p>

            </div>

          ) : requests.length === 0 ? (

            /* =====================================
               Empty
            ====================================== */

            <div className="empty-state">

              <h3>No Requests Yet</h3>

              <p>
                You have not sent any crop requests.
              </p>

            </div>

          ) : (

            /* =====================================
               Table
            ====================================== */

            <div className="table-container">

              <table className="crop-table">

                <thead>

                  <tr>

                    <th>Crop</th>

                    <th>Farmer</th>

                    <th>Category</th>

                    <th>Quantity</th>

                    <th>Offered Price</th>

                    <th>Message</th>

                    <th>Status</th>

                    <th>Date</th>

                  </tr>

                </thead>

                <tbody>

                  {requests.map((request) => (

                    <tr key={request._id}>

                      {/* Crop */}

                      <td>

                        <strong>
                          {request.crop?.cropName || "N/A"}
                        </strong>

                      </td>

                      {/* Farmer */}

                      <td>

                        <strong>
                          {request.farmer?.name || "N/A"}
                        </strong>

                        <small>
                          {request.farmer?.email || ""}
                        </small>

                      </td>

                      {/* Category */}

                      <td>
                        {request.crop?.category || "N/A"}
                      </td>

                      {/* Quantity */}

                      <td>
                        {request.requestedQuantity || 0} Kg
                      </td>

                      {/* Price */}

                      <td>
                        ₹{request.offeredPrice || 0}
                      </td>

                      {/* Message */}

                      <td>
                        {request.message
                          ? request.message
                          : "No message"}
                      </td>

                      {/* Status */}

                      <td>

                        <span
                          className={getStatusClass(
                            request.status
                          )}
                        >
                          {request.status}
                        </span>

                      </td>

                      {/* Date */}

                      <td>

                        {request.createdAt
                          ? new Date(
                              request.createdAt
                            ).toLocaleDateString()
                          : "N/A"}

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default Requests;