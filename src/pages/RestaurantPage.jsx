import React from "react";
import Profile from "../components/RestaurantPage/Profile";
import RestaurantBody from "../components/RestaurantPage/RestaurantBody";

export default function RestaurantPage() {
  return (
    <div className="w-full bg-[#F2F2F2]">
      <Profile />
      <RestaurantBody />
    </div>
  );
}
