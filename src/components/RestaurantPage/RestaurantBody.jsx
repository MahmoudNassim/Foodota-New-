import React from "react";

import AllDetails from "./AllDetails";

import RestaurantCategories from "./RestaurantCategories";

export default function RestaurantBody() {
  return (
    <div className="max-w-7xl mx-auto container min-md:p-10 max-md:p-2 grid grid-cols-12  gap-3">
      <AllDetails />
      <RestaurantCategories />
    </div>
  );
}
