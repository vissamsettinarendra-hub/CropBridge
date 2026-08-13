import "./FactoryDashboard.css";

import { useEffect, useState } from "react";

import FactorySidebar from "../../components/factory/FactorySidebar/FactorySidebar";
import FactoryHeader from "../../components/factory/FactoryHeader/FactoryHeader";

const API = "http://localhost:5000/api";

const Payments = () => {
  // ==========================================
  // States
  // ==========================================

  const [payments, setPayments] = useState([]);

  const [unpaidOrders, setUnpaidOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  const [showPaymentForm, setShowPaymentForm] =
    useState(false);

  const [selectedOrder, setSelectedOrder] =
    useState(null);

  const [paymentMethod, setPaymentMethod] =
    useState("UPI");

  const [transactionId, setTransactionId] =
    useState("");

  const [notes, setNotes] = useState("");

  const [processing, setProcessing] =
    useState(false);

  // ==========================================
  // Fetch Payment History
  // ==========================================

  const fetchPayments = async () => {
    try {
      const response = await fetch(
        `${API}/payments/factory`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      const data = await response.json();

      if (data.success) {
        setPayments(data.payments || []);
      } else {
        console.error(
          data.message ||
            "Failed to load payments."
        );
      }
    } catch (error) {
      console.error(
        "FETCH PAYMENTS ERROR:",
        error
      );
    }
  };

  // ==========================================
  // Fetch Delivered Unpaid Orders
  // ==========================================

  const fetchUnpaidOrders = async () => {
    try {
      const response = await fetch(
        `${API}/payments/factory/unpaid`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      const data = await response.json();

      if (data.success) {
        setUnpaidOrders(data.orders || []);
      } else {
        console.error(
          data.message ||
            "Failed to load unpaid orders."
        );
      }
    } catch (error) {
      console.error(
        "FETCH UNPAID ORDERS ERROR:",
        error
      );
    }
  };

  // ==========================================
  // Fetch Everything
  // ==========================================

  const fetchData = async () => {
    try {
      setLoading(true);

      await Promise.all([
        fetchPayments(),
        fetchUnpaidOrders(),
      ]);
    } catch (error) {
      console.error(
        "FETCH PAYMENT DATA ERROR:",
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
    fetchData();
  }, []);

  // ==========================================
  // Open Payment Form
  // ==========================================

  const openPaymentForm = (order) => {
    setSelectedOrder(order);

    setPaymentMethod("UPI");

    setTransactionId("");

    setNotes("");

    setShowPaymentForm(true);
  };

  // ==========================================
  // Close Payment Form
  // ==========================================

  const closePaymentForm = () => {
    if (processing) {
      return;
    }

    setShowPaymentForm(false);

    setSelectedOrder(null);

    setTransactionId("");

    setNotes("");
  };

  // ==========================================
  // Make Payment
  // ==========================================

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!selectedOrder) {
      return;
    }

    setProcessing(true);

    try {
      const response = await fetch(
        `${API}/payments`,
        {
          method: "POST",

          credentials: "include",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            orderId: selectedOrder._id,

            paymentMethod,

            transactionId,

            notes,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert(
          "Payment completed successfully."
        );

        setShowPaymentForm(false);

        setSelectedOrder(null);

        setTransactionId("");

        setNotes("");

        // Refresh both lists
        await fetchPayments();

        await fetchUnpaidOrders();
      } else {
        alert(
          data.message ||
            "Payment failed."
        );
      }
    } catch (error) {
      console.error(
        "PAYMENT ERROR:",
        error
      );

      alert(
        "Unable to process payment."
      );
    } finally {
      setProcessing(false);
    }
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

      case "Delivered":
        return "status delivered";

      case "Pending":
        return "status pending";

      default:
        return "status pending";
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
  // UI
  // ==========================================

  return (
    <div className="factory-dashboard">

      {/* ======================================
          Sidebar
      ====================================== */}

      <FactorySidebar />

      {/* ======================================
          Main Content
      ====================================== */}

      <div className="dashboard-content">

        <FactoryHeader />

        {/* ====================================
            Main Card
        ==================================== */}

        <div className="dashboard-card">

          {/* ==================================
              Page Header
          ================================== */}

          <div className="dashboard-card-header">

            <div>

              <h2>
                Payments
              </h2>

              <p>
                Manage payments for your
                completed crop orders.
              </p>

            </div>

            <button
              className="refresh-btn"
              onClick={fetchData}
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
                Loading Payments...
              </h3>

              <p>
                Please wait while we fetch
                your payment information.
              </p>

            </div>

          ) : (

            <>

              {/* =================================
                  PENDING PAYMENTS
              ================================= */}

              <div className="payment-section">

                <div className="payment-section-header">

                  <div>

                    <h3>
                      Pending Payments
                    </h3>

                    <p>
                      Delivered orders waiting
                      for payment.
                    </p>

                  </div>

                  <span className="payment-count">

                    {unpaidOrders.length}

                  </span>

                </div>

                {unpaidOrders.length === 0 ? (

                  <div className="empty-state">

                    <h3>
                      No Pending Payments
                    </h3>

                    <p>
                      You don't have any
                      delivered orders waiting
                      for payment.
                    </p>

                  </div>

                ) : (

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
                            Total Amount
                          </th>

                          <th>
                            Status
                          </th>

                          <th>
                            Action
                          </th>

                        </tr>

                      </thead>

                      <tbody>

                        {unpaidOrders.map(
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
                                  ) || "N/A"}
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

                              {/* Amount */}

                              <td>

                                <strong>

                                  ₹
                                  {formatAmount(
                                    order.totalAmount
                                  )}

                                </strong>

                              </td>

                              {/* Status */}

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

                                <button
                                  className="accept-btn"
                                  onClick={() =>
                                    openPaymentForm(
                                      order
                                    )
                                  }
                                >
                                  Pay Now
                                </button>

                              </td>

                            </tr>

                          )
                        )}

                      </tbody>

                    </table>

                  </div>

                )}

              </div>

              {/* =================================
                  PAYMENT HISTORY
              ================================= */}

              <div className="payment-section">

                <div className="payment-section-header">

                  <div>

                    <h3>
                      Payment History
                    </h3>

                    <p>
                      View your completed
                      payment transactions.
                    </p>

                  </div>

                  <span className="payment-count">

                    {payments.length}

                  </span>

                </div>

                {payments.length === 0 ? (

                  <div className="empty-state">

                    <h3>
                      No Payment History
                    </h3>

                    <p>
                      Completed payments will
                      appear here.
                    </p>

                  </div>

                ) : (

                  <div className="table-container">

                    <table className="crop-table">

                      <thead>

                        <tr>

                          <th>
                            Order
                          </th>

                          <th>
                            Farmer
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
                                  ) || "N/A"}
                                </strong>

                                <small>
                                  {payment.order
                                    ?.orderStatus ||
                                    ""}
                                </small>

                              </td>

                              {/* Farmer */}

                              <td>

                                <strong>
                                  {payment.farmer
                                    ?.name ||
                                    "N/A"}
                                </strong>

                                <small>
                                  {payment.farmer
                                    ?.email ||
                                    ""}
                                </small>

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

                                {
                                  payment.paymentMethod ||
                                  "N/A"
                                }

                              </td>

                              {/* Transaction ID */}

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

            </>

          )}

        </div>

      </div>

      {/* ========================================
          PAYMENT MODAL
      ======================================== */}

      {showPaymentForm &&
        selectedOrder && (

          <div className="payment-modal-overlay">

            <div className="payment-modal">

              {/* =================================
                  Modal Header
              ================================= */}

              <div className="payment-modal-header">

                <div>

                  <h2>
                    Complete Payment
                  </h2>

                  <p>
                    Pay for your delivered
                    crop order.
                  </p>

                </div>

                <button
                  type="button"
                  onClick={
                    closePaymentForm
                  }
                  disabled={processing}
                >
                  ×
                </button>

              </div>

              {/* =================================
                  Order Summary
              ================================= */}

              <div className="payment-summary">

                <h3>
                  Order Summary
                </h3>

                <div className="summary-row">

                  <span>
                    Order ID
                  </span>

                  <strong>
                    #
                    {selectedOrder._id?.slice(
                      -6
                    )}
                  </strong>

                </div>

                <div className="summary-row">

                  <span>
                    Crop
                  </span>

                  <strong>
                    {selectedOrder.crop
                      ?.cropName ||
                      "N/A"}
                  </strong>

                </div>

                <div className="summary-row">

                  <span>
                    Farmer
                  </span>

                  <strong>
                    {selectedOrder.farmer
                      ?.name ||
                      "N/A"}
                  </strong>

                </div>

                <div className="summary-row">

                  <span>
                    Quantity
                  </span>

                  <strong>
                    {selectedOrder.quantity ||
                      0}{" "}
                    Kg
                  </strong>

                </div>

                <div className="summary-row total-row">

                  <span>
                    Total Amount
                  </span>

                  <strong>
                    ₹
                    {formatAmount(
                      selectedOrder.totalAmount
                    )}
                  </strong>

                </div>

              </div>

              {/* =================================
                  Payment Form
              ================================= */}

              <form
                onSubmit={
                  handlePayment
                }
              >

                {/* Payment Method */}

                <div className="form-group">

                  <label>
                    Payment Method
                  </label>

                  <select
                    value={
                      paymentMethod
                    }
                    onChange={(e) =>
                      setPaymentMethod(
                        e.target.value
                      )
                    }
                    disabled={
                      processing
                    }
                  >

                    <option value="UPI">
                      UPI
                    </option>

                    <option value="Bank Transfer">
                      Bank Transfer
                    </option>

                    <option value="Online">
                      Online
                    </option>

                    <option value="Cash">
                      Cash
                    </option>

                  </select>

                </div>

                {/* Transaction ID */}

                <div className="form-group">

                  <label>
                    Transaction ID
                  </label>

                  <input
                    type="text"
                    placeholder="Enter transaction ID"
                    value={
                      transactionId
                    }
                    onChange={(e) =>
                      setTransactionId(
                        e.target.value
                      )
                    }
                    disabled={
                      processing
                    }
                  />

                </div>

                {/* Notes */}

                <div className="form-group">

                  <label>
                    Notes
                  </label>

                  <textarea
                    placeholder="Optional notes"
                    value={notes}
                    onChange={(e) =>
                      setNotes(
                        e.target.value
                      )
                    }
                    disabled={
                      processing
                    }
                  />

                </div>

                {/* =================================
                    Modal Actions
                ================================= */}

                <div className="payment-actions">

                  <button
                    type="button"
                    onClick={
                      closePaymentForm
                    }
                    disabled={
                      processing
                    }
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={
                      processing
                    }
                  >

                    {processing
                      ? "Processing..."
                      : "Confirm Payment"}

                  </button>

                </div>

              </form>

            </div>

          </div>

        )}

    </div>
  );
};

export default Payments;