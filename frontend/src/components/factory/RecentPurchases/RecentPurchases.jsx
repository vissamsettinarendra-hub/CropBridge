import "./RecentPurchases.css";

const RecentPurchases = () => {
  return (
    <section className="recent-purchases">

      <h2>Recent Purchases</h2>

      <table>

        <thead>
          <tr>
            <th>Crop</th>
            <th>Farmer</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Paddy</td>
            <td>Ramesh</td>
            <td>500 Kg</td>
            <td>Delivered</td>
          </tr>

          <tr>
            <td>Maize</td>
            <td>Suresh</td>
            <td>300 Kg</td>
            <td>Pending</td>
          </tr>

          <tr>
            <td>Cotton</td>
            <td>Mahesh</td>
            <td>800 Kg</td>
            <td>Processing</td>
          </tr>

        </tbody>

      </table>

    </section>
  );
};

export default RecentPurchases;