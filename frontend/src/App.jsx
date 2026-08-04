import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

// Public Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Marketplace from "./pages/Marketplace/Marketplace";
import Categories from "./pages/Categories/Categories";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

// Farmer Pages
import FarmerDashboard from "./pages/Farmer/FarmerDashboard";
import MyCrops from "./pages/Farmer/MyCrops";
import AddCrop from "./pages/Farmer/AddCrop";
import Orders from "./pages/Farmer/Orders";
import Payments from "./pages/Farmer/Payments";
import Profile from "./pages/Farmer/Profile";
import EditCrop from "./pages/Farmer/EditCrop";

// Factory Pages
import FactoryDashboard from "./pages/Factory/FactoryDashboard";
import FactoryBrowseCrops from "./pages/Factory/BrowseCrops";
import FactoryCropRequest from "./pages/Factory/CropRequest";
import FactoryOrders from "./pages/Factory/Orders";
import FactoryPayments from "./pages/Factory/Payments";
import FactoryProfile from "./pages/Factory/Profile";

// Admin Pages
import AdminDashboard from "./pages/Admin/AdminDashboard";
import FarmersPage from "./pages/Admin/Farmers";
import FactoriesPage from "./pages/Admin/Factories";
import CategoriesPage from "./pages/Admin/Categories";
import ReportsPage from "./pages/Admin/Reports";

// Protected Routes
import ProtectedRoute from "./routers/ProtectedRoute";
import RoleProtectedRoute from "./routers/RoleProtectedRoute";

// 404
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

        {/* Public Routes */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Farmer Routes */}

        <Route
          path="/farmer"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute role="farmer">
                <FarmerDashboard />
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/farmer/my-crops"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute role="farmer">
                <MyCrops />
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/farmer/add-crop"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute role="farmer">
                <AddCrop />
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/farmer/orders"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute role="farmer">
                <Orders />
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/farmer/payments"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute role="farmer">
                <Payments />
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/farmer/profile"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute role="farmer">
                <Profile />
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />
        <Route path="/farmer/edit-crop/:id" element={
              <RoleProtectedRoute role="farmer">
                <EditCrop />
              </RoleProtectedRoute>
            }/>

        {/* Factory Routes */}

        <Route
          path="/factory"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute role="factory">
                <FactoryDashboard />
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/factory/browse-crops"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute role="factory">
                <FactoryBrowseCrops />
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/factory/crop-request"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute role="factory">
                <FactoryCropRequest />
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/factory/orders"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute role="factory">
                <FactoryOrders />
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/factory/payments"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute role="factory">
                <FactoryPayments />
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/factory/profile"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute role="factory">
                <FactoryProfile />
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute role="admin">
                <AdminDashboard />
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/farmers"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute role="admin">
                <FarmersPage />
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/factories"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute role="admin">
                <FactoriesPage />
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/categories"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute role="admin">
                <CategoriesPage />
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/reports"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute role="admin">
                <ReportsPage />
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        {/* 404 */}

        <Route path="*" element={<NotFound />} />

      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;