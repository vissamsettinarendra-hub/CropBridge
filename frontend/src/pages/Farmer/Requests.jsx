import "./FarmerDashboard.css";

import { useEffect, useState } from "react";

import FarmerSidebar from "../../components/farmer/FarmerSidebar/FarmerSidebar";
import FarmerHeader from "../../components/farmer/FarmerHeader/FarmerHeader";

const API = "http://localhost:5000/api/requests";

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null);

  // ==========================================
  // Fetch Farmer Requests
  // ==========================================

  const fetchRequests = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${API}/farmer`, {
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
      console.error("FETCH REQUESTS ERROR:", error);
      alert("Unable to load requests");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // ==========================================
  // Accept Request
  // ==========================================

  const handleAccept = async (id) => {
    const confirmAccept = window.confirm(
      "Are you sure you want to accept this crop request?"
    );

    if (!confirmAccept) return;

    try {
      setActionLoading(id);

      const response = await fetch(`${API}/${id}/accept`, {
        method: "PUT",
        credentials: "include",
      });

      const data = await response.json();

      if (data.success) {
        alert("Crop request accepted successfully.");
        fetchRequests();
      } else {
        alert(data.message || "Failed to accept request");
      }
    } catch (error) {
      console.error("ACCEPT REQUEST ERROR:", error);
      alert("Something went wrong.");
    } finally {
      setActionLoading(null);
    }
  };

  // ==========================================
  // Reject Request
  // ==========================================

  const handleReject = async (id) => {
    const confirmReject = window.confirm(
      "Are you sure you want to reject this crop request?"
    );

    if (!confirmReject) return;

    try {
      setActionLoading(id);

      const response = await fetch(`${API}/${id}/reject`, {
        method: "PUT",
        credentials: "include",
      });

      const data = await response.json();

      if (data.success) {
        alert("Crop request rejected.");
        fetchRequests();
      } else {
        alert(data.message || "Failed to reject request");
      }
    } catch (error) {
      console.error("REJECT REQUEST ERROR:", error);
      alert("Something went wrong.");
    } finally {
      setActionLoading(null);
    }
  };

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
    <div className="farmer-dashboard">

      <FarmerSidebar />

      <div className="dashboard-content">

        <FarmerHeader />

        <div className="dashboard-card">

          <div className="dashboard-card-header">
            <div>
              <h2>Crop Requests</h2>

              <p>
                View requests received from factories for your crops.
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

          {/* Loading */}

          {loading ? (
            <div className="empty-state">
              <h3>Loading Requests...</h3>
              <p>Please wait while we fetch your crop requests.</p>
            </div>
          ) : requests.length === 0 ? (

            /* Empty */

            <div className="empty-state">
              <h3>No Crop Requests</h3>

              <p>
                You have not received any crop requests from factories yet.
              </p>
            </div>

          ) : (

            /* Table */

            <div className="table-container">

              <table className="crop-table">

                <thead>

                  <tr>
                    <th>Crop</th>
                    <th>Factory</th>
                    <th>Quantity</th>
                    <th>Offered Price</th>
                    <th>Message</th>
                    <th>Status</th>
                    <th>Action</th>
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

                        <small>
                          {request.crop?.category || ""}
                        </small>
                      </td>

                      {/* Factory */}

                      <td>

                        <strong>
                          {request.factory?.name || "N/A"}
                        </strong>

                        <small>
                          {request.factory?.email || ""}
                        </small>

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

                      {/* Actions */}

                      <td>

                        {request.status === "Pending" ? (

                          <div className="action-buttons">

                            <button
                              className="accept-btn"
                              onClick={() =>
                                handleAccept(request._id)
                              }
                              disabled={
                                actionLoading === request._id
                              }
                            >
                              {actionLoading === request._id
                                ? "..."
                                : "Accept"}
                            </button>

                            <button
                              className="reject-btn"
                              onClick={() =>
                                handleReject(request._id)
                              }
                              disabled={
                                actionLoading === request._id
                              }
                            >
                              Reject
                            </button>

                          </div>

                        ) : (

                          <span>
                            No Action
                          </span>

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

    </div>
  );
};

export default Requests;