import HomePage from "./pages/HomePage";
import "animate.css";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import AllVendors from "./pages/AllVendors";
import ArrowUp from "./components/ArrowUp";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import RestaurantPage from "./pages/RestaurantPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/OrderPage";
import CheckOut from "./pages/CheckOut";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import CartOffcanvas from "./components/ShoppingCart/cartOffCanvas";

export default function App() {
  const location = useLocation();
  const path = location.pathname;

  const token = localStorage.getItem("token");
  const hideHeader = path === "/";

  return (
    <div className="w-full min-h-screen">
      {!hideHeader && <Header linkClassName="text-black" />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants/orders" element={<Profile />} />
        <Route path="/restaurants/orders/checkout" element={<CheckOut />} />
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/vendor" element={<h1>Vendor MemberShip</h1>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/restaurants" element={<AllVendors />} />
        <Route path="/restaurants/:documentId" element={<RestaurantPage />} />
        <Route
          path="*"
          element={
            <h1 className="text-2xl font-bold flex justify-center items-center h-[100vh]">
              404 Page Not Found
            </h1>
          }
        />
      </Routes>

      <Footer />

      <ArrowUp />
      <ShoppingCart />
      <CartOffcanvas />
    </div>
  );
}
