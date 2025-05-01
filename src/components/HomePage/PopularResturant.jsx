import React, { useEffect } from "react";
import span from "../../assets/images/span.png";
import { domain, useRestaurantStore } from "../../store/store";
import { useNavigate } from "react-router-dom";

export default function PopularResturant() {
  const { restaurants, setRestaurants } = useRestaurantStore();

  useEffect(() => {
    setRestaurants();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="bg-[#F2F2F2] w-full my-10">
      <div className="max-w-7xl mx-auto container min-md:p-10 flex justify-center flex-col items-center ">
        <div className="flex flex-col gap-1.5  w-full">
          <p className="text-center text-[16px] text-warning font-bold">
            Delicious Food in
          </p>
          <h3 className="text-center text-[42px] font-bold">
            Papular Restaurant
          </h3>
          <div className="flex justify-center">
            <img src={span} alt="" />
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 min-lg:grid-cols-3 gap-3.5 w-full ">
          {restaurants.map((el) => (
            <div
              onClick={() => {
                navigate(`/restaurant/${el.documentId}`);
              }}
              key={el.documentId}
              className="card bg-base-100 shadow-sm  cursor-pointer "
            >
              <figure>
                <div className="relative">
                  <div>
                    <img
                      className="object-cover"
                      src={domain + el.brand_cover.url}
                    />
                  </div>
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
                <div className="flex items-center gap-2 p-2">
                  <div className="w-[50px]">
                    <img src={domain + el.brand_img.url} alt="" />
                  </div>
                  <div className="flex flex-col p-2 justify-center">
                    <p className="text-red-600">12:08 am - 11:58 pm</p>
                    <p>{el.brand_location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
