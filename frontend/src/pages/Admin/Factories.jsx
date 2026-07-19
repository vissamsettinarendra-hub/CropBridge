import AdminSidebar from "../../components/admin/Sidebar/AdminSidebar";
import "./Factories.css";
const factories = [
  {
    id: "F001",
    name: "ABC Rice Mill",
    location: "Guntur",
    owner: "Ramesh",
    status: "Active",
  },
  {
    id: "F002",
    name: "Fresh Foods Pvt Ltd",
    location: "Vijayawada",
    owner: "Suresh",
    status: "Pending",
  },
  {
    id: "F003",
    name: "Green Agro",
    location: "Tenali",
    owner: "Mahesh",
    status: "Active",
  },
];

const Factories = () => {
  return (
    <div className="admin-dashboard">

      <AdminSidebar />
    <div className="factory-table">
    


      <div className="table-header">
        <h2>Registered Factories</h2>
        <button>Add Factory</button>
      </div>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Factory</th>
            <th>Location</th>
            <th>Owner</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {factories.map((factory) => (
            <tr key={factory.id}>
              <td>{factory.id}</td>
              <td>{factory.name}</td>
              <td>{factory.location}</td>
              <td>{factory.owner}</td>
              <td>{factory.status}</td>
            </tr>
          ))}

        </tbody>

      </table>
      

    </div>
    </div>
  );
};

export default Factories;