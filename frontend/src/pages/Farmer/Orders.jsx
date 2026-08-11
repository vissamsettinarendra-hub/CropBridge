import "./FarmerDashboard.css";

import { useEffect, useState } from "react";

import FarmerSidebar from "../../components/farmer/FarmerSidebar/FarmerSidebar";
import FarmerHeader from "../../components/farmer/FarmerHeader/FarmerHeader";

const API = "http://localhost:5000/api/orders";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // ==========================================
  // Fetch Farmer Orders
  // ==========================================

  const fetchOrders = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${API}/farmer`, {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();

      if (data.success) {
        setOrders(data.orders || []);
      } else {
        alert(data.message || "Failed to load orders");
      }
    } catch (error) {
      console.error("FETCH FARMER ORDERS ERROR:", error);
      alert("Unable to load orders.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // ==========================================
  // Update Order Status
  // ==========================================

  const updateStatus = async (orderId, status) => {
    const confirmUpdate = window.confirm(
      `Change order status to "${status}"?`
    );

    if (!confirmUpdate) return;

    try {
      const response = await fetch(
        `${API}/${orderId}/status`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Order status updated successfully.");
        fetchOrders();
      } else {
        alert(
          data.message ||
            "Failed to update order status."
        );
      }
    } catch (error) {
      console.error(
        "UPDATE ORDER STATUS ERROR:",
        error
      );

      alert("Unable to update order status.");
    }
  };

  // ==========================================
  // Status Class
  // ==========================================

  const getStatusClass = (status) => {
    switch (status) {
      case "Confirmed":
        return "status confirmed";

      case "Processing":
        return "status processing";

      case "Shipped":
        return "status shipped";

      case "Delivered":
        return "status delivered";

      case "Cancelled":
        return "status cancelled";

      case "Pending":
      default:
        return "status pending";
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

          {/* Header */}

          <div className="dashboard-card-header">

            <div>
              <h2>My Orders</h2>

              <p>
                View and manage orders received
                from factories.
              </p>
            </div>

            <button
              className="refresh-btn"
              onClick={fetchOrders}
              disabled={loading}
            >
              {loading ? "Loading..." : "Refresh"}
            </button>

          </div>

          {/* Loading */}

          {loading ? (

            <div className="empty-state">

              <h3>Loading Orders...</h3>

              <p>
                Please wait while we fetch
                your orders.
              </p>

            </div>

          ) : orders.length === 0 ? (

            /* Empty */

            <div className="empty-state">

              <h3>No Orders Yet</h3>

              <p>
                Orders will appear here when a
                factory request is accepted.
              </p>

            </div>

          ) : (

            /* Orders Table */

            <div className="table-container">

              <table className="crop-table">

                <thead>

                  <tr>

                    <th>Crop</th>

                    <th>Factory</th>

                    <th>Quantity</th>

                    <th>Price / Kg</th>

                    <th>Total Amount</th>

                    <th>Order Status</th>

                    <th>Payment</th>

                    <th>Action</th>

                  </tr>

                </thead>

                <tbody>

                  {orders.map((order) => (

                    <tr key={order._id}>

                      {/* Crop */}

                      <td>

                        <strong>
                          {order.crop?.cropName ||
                            "N/A"}
                        </strong>

                        <small>
                          {order.crop?.category ||
                            ""}
                        </small>

                      </td>

                      {/* Factory */}

                      <td>

                        <strong>
                          {order.factory?.name ||
                            "N/A"}
                        </strong>

                        <small>
                          {order.factory?.email ||
                            ""}
                        </small>

                      </td>

                      {/* Quantity */}

                      <td>
                        {order.quantity} Kg
                      </td>

                      {/* Price */}

                      <td>
                        ₹{order.pricePerKg}
                      </td>

                      {/* Total */}

                      <td>
                        ₹{order.totalAmount}
                      </td>

                      {/* Order Status */}

                      <td>

                        <span
                          className={getStatusClass(
                            order.orderStatus
                          )}
                        >
                          {order.orderStatus}
                        </span>

                      </td>

                      {/* Payment */}

                      <td>

                        <span
                          className={getStatusClass(
                            order.paymentStatus
                          )}
                        >
                          {order.paymentStatus}
                        </span>

                      </td>

                      {/* Actions */}

                      <td>

                        {order.orderStatus ===
                          "Pending" && (

                          <button
                            className="accept-btn"
                            onClick={() =>
                              updateStatus(
                                order._id,
                                "Confirmed"
                              )
                            }
                          >
                            Confirm
                          </button>

                        )}

                        {order.orderStatus ===
                          "Confirmed" && (

                          <button
                            className="submit-request-btn"
                            onClick={() =>
                              updateStatus(
                                order._id,
                                "Processing"
                              )
                            }
                          >
                            Process
                          </button>

                        )}

                        {order.orderStatus ===
                          "Processing" && (

                          <button
                            className="submit-request-btn"
                            onClick={() =>
                              updateStatus(
                                order._id,
                                "Shipped"
                              )
                            }
                          >
                            Ship
                          </button>

                        )}

                        {order.orderStatus ===
                          "Shipped" && (

                          <button
                            className="submit-request-btn"
                            onClick={() =>
                              updateStatus(
                                order._id,
                                "Delivered"
                              )
                            }
                          >
                            Delivered
                          </button>

                        )}

                        {order.orderStatus ===
                          "Delivered" && (

                          <span>
                            Completed
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

export default Orders;