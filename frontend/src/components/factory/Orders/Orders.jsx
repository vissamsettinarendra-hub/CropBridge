import "./Orders.css";

const Orders = () => {
  return (
    <section className="factory-orders">

      <h2>Purchase Orders</h2>

      <table>

        <thead>
          <tr>
            <th>Order ID</th>
            <th>Farmer</th>
            <th>Crop</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>#1001</td>
            <td>Ramesh</td>
            <td>Paddy</td>
            <td>500 Kg</td>
            <td>Delivered</td>
          </tr>

          <tr>
            <td>#1002</td>
            <td>Suresh</td>
            <td>Maize</td>
            <td>300 Kg</td>
            <td>Processing</td>
          </tr>

          <tr>
            <td>#1003</td>
            <td>Mahesh</td>
            <td>Cotton</td>
            <td>700 Kg</td>
            <td>Pending</td>
          </tr>

        </tbody>

      </table>

    </section>
  );
};

export default Orders;