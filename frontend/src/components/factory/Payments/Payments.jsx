import "./Payments.css";

const Payments = () => {
  return (
    <section className="factory-payments">

      <h2>Payment History</h2>

      <table>

        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Farmer</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>#PAY101</td>
            <td>Ramesh</td>
            <td>₹14,000</td>
            <td>15 Jul 2026</td>
            <td>Paid</td>
          </tr>

          <tr>
            <td>#PAY102</td>
            <td>Suresh</td>
            <td>₹9,500</td>
            <td>16 Jul 2026</td>
            <td>Pending</td>
          </tr>

          <tr>
            <td>#PAY103</td>
            <td>Mahesh</td>
            <td>₹28,000</td>
            <td>17 Jul 2026</td>
            <td>Paid</td>
          </tr>

        </tbody>

      </table>

    </section>
  );
};

export default Payments;