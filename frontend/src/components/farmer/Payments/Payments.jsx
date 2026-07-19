import "./Payments.css";

const Payments = () => {

  const transactions = [
    {
      id: "#TXN101",
      buyer: "ITC Ltd",
      crop: "Paddy",
      amount: "₹12,500",
      status: "Paid"
    },
    {
      id: "#TXN102",
      buyer: "Nestle",
      crop: "Turmeric",
      amount: "₹18,000",
      status: "Pending"
    },
    {
      id: "#TXN103",
      buyer: "Adani Wilmar",
      crop: "Cotton",
      amount: "₹21,000",
      status: "Paid"
    }
  ];

  return (
    <section className="payments">

      <h2>Payments</h2>

      <div className="payment-cards">

        <div className="payment-card">
          <h3>Total Earnings</h3>
          <h1>₹1,24,000</h1>
        </div>

        <div className="payment-card">
          <h3>Pending Payments</h3>
          <h1>₹32,500</h1>
        </div>

        <div className="payment-card">
          <h3>Today's Income</h3>
          <h1>₹7,200</h1>
        </div>

      </div>

      <h2 className="transaction-title">
        Recent Transactions
      </h2>

      <table>

        <thead>

          <tr>
            <th>Transaction</th>
            <th>Buyer</th>
            <th>Crop</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>

          {transactions.map((item) => (

            <tr key={item.id}>

              <td>{item.id}</td>
              <td>{item.buyer}</td>
              <td>{item.crop}</td>
              <td>{item.amount}</td>
              <td>{item.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>
  );
};

export default Payments;