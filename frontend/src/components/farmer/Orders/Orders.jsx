import "./Orders.css";

const Orders = () => {

  const orders = [
    {
      id: "#ORD101",
      crop: "Paddy",
      buyer: "ITC Ltd",
      quantity: "500 Kg",
      amount: "₹12,500",
      status: "Delivered"
    },
    {
      id: "#ORD102",
      crop: "Cotton",
      buyer: "Adani Wilmar",
      quantity: "300 Kg",
      amount: "₹21,000",
      status: "Processing"
    },
    {
      id: "#ORD103",
      crop: "Turmeric",
      buyer: "Nestle",
      quantity: "200 Kg",
      amount: "₹18,000",
      status: "Pending"
    }
  ];

  return (
    <section className="orders">

      <h2>My Orders</h2>

      <table>

        <thead>

          <tr>
            <th>Order ID</th>
            <th>Crop</th>
            <th>Buyer</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>

          {orders.map(order => (

            <tr key={order.id}>

              <td>{order.id}</td>
              <td>{order.crop}</td>
              <td>{order.buyer}</td>
              <td>{order.quantity}</td>
              <td>{order.amount}</td>
              <td>{order.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>
  );
};

export default Orders;