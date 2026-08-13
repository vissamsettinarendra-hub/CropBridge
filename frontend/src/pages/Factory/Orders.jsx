import "./FactoryDashboard.css";

import { useEffect, useState } from "react";

import FactorySidebar from "../../components/factory/FactorySidebar/FactorySidebar";
import FactoryHeader from "../../components/factory/FactoryHeader/FactoryHeader";

const API = "http://localhost:5000/api";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  const [updatingId, setUpdatingId] = useState(null);

  // ==========================================
  // Fetch Factory Orders
  // ==========================================

  const fetchOrders = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${API}/orders/factory`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      const data = await response.json();

      if (data.success) {
        setOrders(data.orders || []);
      } else {
        console.error(data.message);
        alert(
          data.message ||
            "Failed to load orders."
        );
      }
    } catch (error) {
      console.error(
        "FETCH FACTORY ORDERS ERROR:",
        error
      );

      alert(
        "Unable to load factory orders."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // Initial Load
  // ==========================================

  useEffect(() => {
    fetchOrders();
  }, []);

  // ==========================================
  // Update Order Status
  // ==========================================

  const updateStatus = async (
    orderId,
    status
  ) => {
    const confirmUpdate = window.confirm(
      `Change order status to "${status}"?`
    );

    if (!confirmUpdate) {
      return;
    }

    try {
      setUpdatingId(orderId);

      const response = await fetch(
        `${API}/orders/${orderId}/status`,
        {
          method: "PUT",

          credentials: "include",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            status,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert(
          "Order status updated successfully."
        );

        await fetchOrders();
      } else {
        alert(
          data.message ||
            "Failed to update order."
        );
      }
    } catch (error) {
      console.error(
        "UPDATE ORDER STATUS ERROR:",
        error
      );

      alert(
        "Unable to update order status."
      );
    } finally {
      setUpdatingId(null);
    }
  };

  // ==========================================
  // Format Amount
  // ==========================================

  const formatAmount = (amount) => {
    return Number(amount || 0).toLocaleString(
      "en-IN"
    );
  };

  // ==========================================
  // Format Date
  // ==========================================

  const formatDate = (date) => {
    if (!date) {
      return "N/A";
    }

    return new Date(date).toLocaleDateString(
      "en-IN"
    );
  };

  // ==========================================
  // Status Class
  // ==========================================

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "status pending";

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

      default:
        return "status pending";
    }
  };

  // ==========================================
  // Get Next Status
  // ==========================================

  const getNextStatus = (currentStatus) => {
    switch (currentStatus) {
      case "Pending":
        return "Confirmed";

      case "Confirmed":
        return "Processing";

      case "Processing":
        return "Shipped";

      case "Shipped":
        return "Delivered";

      default:
        return null;
    }
  };

  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="factory-dashboard">

      {/* Sidebar */}

      <FactorySidebar />

      {/* Main Content */}

      <div className="dashboard-content">

        <FactoryHeader />

        <div className="dashboard-card">

          {/* ==================================
              Header
          ================================== */}

          <div className="dashboard-card-header">

            <div>

              <h2>
                My Orders
              </h2>

              <p>
                Manage and track orders from
                farmers.
              </p>

            </div>

            <button
              className="refresh-btn"
              onClick={fetchOrders}
              disabled={loading}
            >
              {loading
                ? "Loading..."
                : "Refresh"}
            </button>

          </div>

          {/* ==================================
              Loading
          ================================== */}

          {loading ? (

            <div className="empty-state">

              <h3>
                Loading Orders...
              </h3>

              <p>
                Please wait while we fetch
                your orders.
              </p>

            </div>

          ) : orders.length === 0 ? (

            /* =================================
               No Orders
            ================================= */

            <div className="empty-state">

              <h3>
                No Orders Yet
              </h3>

              <p>
                Orders created after accepting
                farmer crop requests will appear
                here.
              </p>

            </div>

          ) : (

            /* =================================
               Orders Table
            ================================= */

            <div className="table-container">

              <table className="crop-table">

                <thead>

                  <tr>

                    <th>
                      Order
                    </th>

                    <th>
                      Crop
                    </th>

                    <th>
                      Farmer
                    </th>

                    <th>
                      Quantity
                    </th>

                    <th>
                      Price / Kg
                    </th>

                    <th>
                      Total
                    </th>

                    <th>
                      Payment
                    </th>

                    <th>
                      Status
                    </th>

                    <th>
                      Action
                    </th>

                    <th>
                      Date
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {orders.map(
                    (order) => {

                      const nextStatus =
                        getNextStatus(
                          order.orderStatus
                        );

                      return (
                        <tr
                          key={
                            order._id
                          }
                        >

                          {/* Order ID */}

                          <td>

                            <strong>

                              #
                              {order._id?.slice(
                                -6
                              ) ||
                                "N/A"}

                            </strong>

                          </td>

                          {/* Crop */}

                          <td>

                            <strong>

                              {order.crop
                                ?.cropName ||
                                "N/A"}

                            </strong>

                            <small>

                              {order.crop
                                ?.category ||
                                ""}

                            </small>

                          </td>

                          {/* Farmer */}

                          <td>

                            <strong>

                              {order.farmer
                                ?.name ||
                                "N/A"}

                            </strong>

                            <small>

                              {order.farmer
                                ?.email ||
                                ""}

                            </small>

                          </td>

                          {/* Quantity */}

                          <td>

                            {order.quantity ||
                              0}{" "}
                            Kg

                          </td>

                          {/* Price */}

                          <td>

                            ₹
                            {formatAmount(
                              order.pricePerKg
                            )}

                          </td>

                          {/* Total */}

                          <td>

                            <strong>

                              ₹
                              {formatAmount(
                                order.totalAmount
                              )}

                            </strong>

                          </td>

                          {/* Payment */}

                          <td>

                            <span
                              className={getStatusClass(
                                order.paymentStatus
                              )}
                            >

                              {
                                order.paymentStatus
                              }

                            </span>

                          </td>

                          {/* Order Status */}

                          <td>

                            <span
                              className={getStatusClass(
                                order.orderStatus
                              )}
                            >

                              {
                                order.orderStatus
                              }

                            </span>

                          </td>

                          {/* Action */}

                          <td>

                            {nextStatus ? (

                              <button
                                className="accept-btn"
                                disabled={
                                  updatingId ===
                                  order._id
                                }
                                onClick={() =>
                                  updateStatus(
                                    order._id,
                                    nextStatus
                                  )
                                }
                              >

                                {updatingId ===
                                order._id
                                  ? "Updating..."
                                  : `Mark ${nextStatus}`}

                              </button>

                            ) : order.orderStatus ===
                              "Delivered" ? (

                              <span className="status delivered">
                                Completed
                              </span>

                            ) : order.orderStatus ===
                              "Cancelled" ? (

                              <span className="status cancelled">
                                Cancelled
                              </span>

                            ) : (

                              <span>
                                No Action
                              </span>

                            )}

                          </td>

                          {/* Date */}

                          <td>

                            {formatDate(
                              order.createdAt
                            )}

                          </td>

                        </tr>
                      );
                    }
                  )}

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