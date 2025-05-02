import React from "react";
import HomePage from "./pages/HomePage";
import "animate.css";
import Blog from "./pages/Blog";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllVendors from "./pages/AllVendors";

import ArrowUp from "./components/ArrowUp";
import { Route, Routes, useLocation } from "react-router-dom";
import RestaurantPage from "./pages/RestaurantPage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  const location = useLocation();
  const path = location.pathname;
  const hideHeader = path === "/";
  return (
    <div className="w-full min-h-screen ">
      {!hideHeader && <Header linkClassName="text-black" />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/allvendors" element={<AllVendors />} />
        <Route path="/restaurant/:documentId" element={<RestaurantPage />} />
        <Route
          path="*"
          element={
            <h1 className="text-2xl font-bold flex justify-center items-center h-[100vh]">
              404 Page Not Found
            </h1>
          }
        />
      </Routes>
      <ArrowUp />
      <Footer />
    </div>
  );
}
