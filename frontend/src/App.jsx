import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

// ================= Public Pages =================
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Marketplace from "./pages/Marketplace/Marketplace";
import Categories from "./pages/Categories/Categories";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

// ================= Farmer Pages =================
import FarmerDashboard from "./pages/Farmer/FarmerDashboard";
import MyCrops from "./pages/Farmer/MyCrops";
import AddCrop from "./pages/Farmer/AddCrop";
import Orders from "./pages/Farmer/Orders";
import Payments from "./pages/Farmer/Payments";
import Profile from "./pages/Farmer/Profile";

// ================= Factory Pages =================
import FactoryDashboard from "./pages/Factory/FactoryDashboard";
import FactoryBrowseCrops from "./pages/Factory/BrowseCrops";
import FactoryCropRequest from "./pages/Factory/CropRequest";
import FactoryOrders from "./pages/Factory/Orders";
import FactoryPayments from "./pages/Factory/Payments";
import FactoryProfile from "./pages/Factory/Profile";

// ================= Admin Pages =================
import AdminDashboard from "./pages/Admin/AdminDashboard";
import FarmersPage from "./pages/Admin/Farmers";
import FactoriesPage from "./pages/Admin/Factories";
import CategoriesPage from "./pages/Admin/Categories";
import ReportsPage from "./pages/Admin/Reports";

// ================= Not Found =================
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const location = useLocation();

  const hideLayout =
    location.pathname.startsWith("/farmer") ||
    location.pathname.startsWith("/factory") ||
    location.pathname.startsWith("/admin");

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>

        {/* ================= Public Routes ================= */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ================= Farmer Routes ================= */}

        <Route path="/farmer" element={<FarmerDashboard />} />
        <Route path="/farmer/my-crops" element={<MyCrops />} />
        <Route path="/farmer/add-crop" element={<AddCrop />} />
        <Route path="/farmer/orders" element={<Orders />} />
        <Route path="/farmer/payments" element={<Payments />} />
        <Route path="/farmer/profile" element={<Profile />} />

        {/* ================= Factory Routes ================= */}

        <Route path="/factory" element={<FactoryDashboard />} />
        <Route path="/factory/browse-crops" element={<FactoryBrowseCrops />} />
        <Route path="/factory/crop-request" element={<FactoryCropRequest />} />
        <Route path="/factory/orders" element={<FactoryOrders />} />
        <Route path="/factory/payments" element={<FactoryPayments />} />
        <Route path="/factory/profile" element={<FactoryProfile />} />

        {/* ================= Admin Routes ================= */}

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/farmers" element={<FarmersPage />} />
        <Route path="/admin/factories" element={<FactoriesPage />} />
        <Route path="/admin/categories" element={<CategoriesPage />} />
        <Route path="/admin/reports" element={<ReportsPage />} />
        {/* ================= 404 ================= */}

        <Route path="*" element={<NotFound />} />

      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;