import "./FarmerDashboard.css";

import { useEffect, useState } from "react";

import FarmerSidebar from "../../components/farmer/FarmerSidebar/FarmerSidebar";
import FarmerHeader from "../../components/farmer/FarmerHeader/FarmerHeader";

const API = "http://localhost:5000/api";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  // ==========================================
  // Get Farmer Orders
  // ==========================================

  const fetchOrders = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${API}/orders/farmer`,
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
      }
    } catch (error) {
      console.error(
        "FETCH FARMER ORDERS ERROR:",
        error
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
  // UI
  // ==========================================

  return (
    <div className="farmer-dashboard">

      <FarmerSidebar />

      <div className="dashboard-content">

        <FarmerHeader />

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
                Track orders received from
                factories.
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
                Orders created from accepted
                crop requests will appear here.
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
                      Factory
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
                      Date
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {orders.map(
                    (order) => (

                      <tr
                        key={
                          order._id
                        }
                      >

                        {/* Order */}

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

                        {/* Factory */}

                        <td>

                          <strong>

                            {order.factory
                              ?.name ||
                              "N/A"}

                          </strong>

                          <small>

                            {order.factory
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

                        {/* Date */}

                        <td>

                          {formatDate(
                            order.createdAt
                          )}

                        </td>

                      </tr>

                    )
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