import "./RecentOrders.css";

const RecentOrders = () => {
  return (

    <section className="recent-orders">

      <h2>Recent Orders</h2>

      <table>

        <thead>

          <tr>

            <th>Crop</th>

            <th>Buyer</th>

            <th>Quantity</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Paddy</td>

            <td>ITC</td>

            <td>500 Kg</td>

            <td>Delivered</td>

          </tr>

          <tr>

            <td>Cotton</td>

            <td>Adani</td>

            <td>800 Kg</td>

            <td>Pending</td>

          </tr>

          <tr>

            <td>Turmeric</td>

            <td>Nestle</td>

            <td>350 Kg</td>

            <td>Processing</td>

          </tr>

        </tbody>

      </table>

    </section>

  );
};

export default RecentOrders;