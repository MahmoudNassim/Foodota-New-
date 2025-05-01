import React, { useEffect, useState } from "react";
import banner from "../assets/images/top-banner_.png";
import span from "../assets/images/span.png";
import { domain, useRestaurantStore, useResturaunt } from "../store/store";
import { useNavigate } from "react-router-dom";

export default function AllVendors() {
  const { restaurants, setRestaurants } = useRestaurantStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(); // fetch all restaurants
  }, []);

  useEffect(() => {
    if (searchTerm.length >= 3) {
      const filtered = restaurants.filter((r) =>
        r.brand_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    } else {
      setFilteredRestaurants(restaurants);
    }
  }, [searchTerm, restaurants]);
  const navigate = useNavigate();

  // const handleSearch = (value) => {
  //   restaurants.includes(value);
  // };
  return (
    <div className="w-full bg-[#F2F2F2]">
      <div className=" flex flex-col gap-2.5 max-w-7xl mx-auto container min-md:p-10 max-md:p-3.5">
        <div className="max-md:hidden">
          <img src={banner} alt="" />
        </div>
        <div className="flex  ">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white w-[80%] p-3  focus-visible:outline-none"
            type="text"
            placeholder="Search by restaurants name enter at least 3 characters..."
          />
          <button className="py-2.5 bg-warning w-[20%] font-bold cursor-pointer">
            Search
          </button>
        </div>
        <div className="flex flex-col gap-2.5">
          <p className="text-[28px] leading-[34px] font-semibold">
            9 + Restaraunts
          </p>
          <div>
            <img src={span} alt="" />
          </div>
          <div className="mt-10 grid max-md:grid-cols-1  max-xl:grid-cols-4  min-xl:grid-cols-6 gap-3.5 w-full ">
            {filteredRestaurants.map((el) => (
              <div
                onClick={() => {
                  navigate(`/restaurant/${el.documentId}`);
                }}
                key={el.documentId}
                className="card bg-base-100 shadow-sm min-md:col-span-2 cursor-pointer "
              >
                <figure>
                  <div className="relative">
                    <img src={domain + el.brand_cover.url} />
                    <div className="rating absolute bottom-[10px] left-5 ">
                      <div
                        className="mask mask-star bg-white"
                        aria-label="1 star"
                      ></div>
                      <div
                        className="mask mask-star bg-white"
                        aria-label="2 star"
                      ></div>
                      <div
                        className="mask mask-star bg-white"
                        aria-label="3 star"
                        aria-current="true"
                      ></div>
                      <div
                        className="mask mask-star bg-white"
                        aria-label="4 star"
                        aria-current="true"
                      ></div>
                      <div
                        className="mask mask-star bg-white"
                        aria-label="5 star"
                        aria-current="true"
                      ></div>
                    </div>
                  </div>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{el.brand_name}</h2>
                  <hr className=" border-gray-300 w-full my-2" />
                  <div className="flex items-center gap-3 p-2">
                    <div className="w-[150px]">
                      <img
                        className="object-cover"
                        src={domain + el.brand_img.url}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col p-2 justify-center">
                      <p className="text-red-600">12:01 am - 11:59 pm</p>
                      <p>{el.brand_location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
