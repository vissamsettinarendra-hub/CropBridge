import "./Farmers.css";

const Farmers = () => {
  return (
    <section className="admin-table">

      <div className="table-header">
        <h2>Registered Farmers</h2>

        <button>Add Farmer</button>
      </div>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Village</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>F001</td>
            <td>Ramesh</td>
            <td>Guntur</td>
            <td>9876543210</td>
            <td>Active</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>

          <tr>
            <td>F002</td>
            <td>Suresh</td>
            <td>Tenali</td>
            <td>9123456789</td>
            <td>Pending</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>

        </tbody>

      </table>

    </section>
  );
};

export default Farmers;