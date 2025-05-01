import React from "react";
import banner from "../assets/images/top-banner_.png";
import span from "../assets/images/span.png";
import { useResturaunt } from "../store/store";

export default function AllVendors() {
  const { restaurant } = useResturaunt();
  return (
    <div className="w-full bg-[#F2F2F2]">
      <div className=" flex flex-col gap-2.5 max-w-7xl mx-auto container min-md:p-10 max-md:p-3.5">
        <div className="max-md:hidden">
          <img src={banner} alt="" />
        </div>
        <div className="flex  ">
          <input
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
            {restaurant.map((el, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-sm min-md:col-span-2 cursor-pointer "
              >
                <figure>
                  <div className="relative">
                    <img src={el.cover} />
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
                  <h2 className="card-title">{el.name}</h2>
                  <hr className=" border-gray-300 w-full my-2" />
                  <div className="flex p-2">
                    <div className="w-[50px]">
                      <img src={el.brand} alt="" />
                    </div>
                    <div className="flex flex-col p-2 justify-center">
                      <p className="text-red-600">{el.date}</p>
                      <p>{el.location}</p>
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
