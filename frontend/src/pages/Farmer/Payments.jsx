import "./FarmerDashboard.css";

import { useEffect, useState } from "react";

import FarmerSidebar from "../../components/farmer/FarmerSidebar/FarmerSidebar";
import FarmerHeader from "../../components/farmer/FarmerHeader/FarmerHeader";

const API = "http://localhost:5000/api";

const Payments = () => {
  const [payments, setPayments] = useState([]);

  const [loading, setLoading] = useState(true);

  // ==========================================
  // Fetch Farmer Payments
  // ==========================================

  const fetchPayments = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${API}/payments/farmer`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      const data = await response.json();

      if (data.success) {
        setPayments(data.payments || []);
      } else {
        alert(
          data.message ||
            "Failed to load payments."
        );
      }
    } catch (error) {
      console.error(
        "FETCH FARMER PAYMENTS ERROR:",
        error
      );

      alert(
        "Unable to load payment history."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // Initial Load
  // ==========================================

  useEffect(() => {
    fetchPayments();
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
      case "Paid":
        return "status delivered";

      case "Failed":
        return "status cancelled";

      case "Refunded":
        return "status processing";

      case "Pending":
      default:
        return "status pending";
    }
  };

  // ==========================================
  // Calculate Total Earnings
  // ==========================================

  const totalReceived = payments.reduce(
    (total, payment) => {
      if (payment.paymentStatus === "Paid") {
        return (
          total +
          Number(payment.amount || 0)
        );
      }

      return total;
    },
    0
  );

  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="farmer-dashboard">

      {/* ======================================
          Sidebar
      ====================================== */}

      <FarmerSidebar />

      {/* ======================================
          Main Content
      ====================================== */}

      <div className="dashboard-content">

        <FarmerHeader />

        {/* ====================================
            Payment Card
        ==================================== */}

        <div className="dashboard-card">

          {/* Header */}

          <div className="dashboard-card-header">

            <div>

              <h2>
                Payments
              </h2>

              <p>
                View your payments received
                from factories.
              </p>

            </div>

            <button
              className="refresh-btn"
              onClick={fetchPayments}
              disabled={loading}
            >
              {loading
                ? "Loading..."
                : "Refresh"}
            </button>

          </div>

          {/* ==================================
              Summary
          ================================== */}

          <div className="payment-summary-cards">

            <div className="payment-summary-card">

              <span>
                Total Payments
              </span>

              <strong>
                {payments.length}
              </strong>

            </div>

            <div className="payment-summary-card">

              <span>
                Total Received
              </span>

              <strong>
                ₹
                {formatAmount(
                  totalReceived
                )}
              </strong>

            </div>

          </div>

          {/* ==================================
              Loading
          ================================== */}

          {loading ? (

            <div className="empty-state">

              <h3>
                Loading Payments...
              </h3>

              <p>
                Please wait while we fetch
                your payment history.
              </p>

            </div>

          ) : payments.length === 0 ? (

            /* =================================
               Empty State
            ================================= */

            <div className="empty-state">

              <h3>
                No Payments Received
              </h3>

              <p>
                Payments from factories will
                appear here after completed
                orders are paid.
              </p>

            </div>

          ) : (

            /* =================================
               Payment Table
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
                      Amount
                    </th>

                    <th>
                      Method
                    </th>

                    <th>
                      Transaction ID
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

                  {payments.map(
                    (payment) => (

                      <tr
                        key={
                          payment._id
                        }
                      >

                        {/* Order */}

                        <td>

                          <strong>

                            #
                            {payment.order?._id?.slice(
                              -6
                            ) ||
                              "N/A"}

                          </strong>

                        </td>

                        {/* Crop */}

                        <td>

                          <strong>

                            {payment.order
                              ?.crop?.cropName ||
                              payment.crop
                                ?.cropName ||
                              "N/A"}

                          </strong>

                        </td>

                        {/* Factory */}

                        <td>

                          <strong>

                            {payment.factory
                              ?.name ||
                              "N/A"}

                          </strong>

                          <small>

                            {payment.factory
                              ?.email ||
                              ""}

                          </small>

                        </td>

                        {/* Quantity */}

                        <td>

                          {payment.order
                            ?.quantity ||
                            0}{" "}
                          Kg

                        </td>

                        {/* Amount */}

                        <td>

                          <strong>

                            ₹
                            {formatAmount(
                              payment.amount
                            )}

                          </strong>

                        </td>

                        {/* Method */}

                        <td>

                          {payment.paymentMethod ||
                            "N/A"}

                        </td>

                        {/* Transaction */}

                        <td>

                          {payment.transactionId ||
                            "N/A"}

                        </td>

                        {/* Status */}

                        <td>

                          <span
                            className={getStatusClass(
                              payment.paymentStatus
                            )}
                          >

                            {
                              payment.paymentStatus
                            }

                          </span>

                        </td>

                        {/* Date */}

                        <td>

                          {formatDate(
                            payment.paidAt ||
                              payment.createdAt
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

export default Payments;