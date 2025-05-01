import React, { useState } from "react";
import span from "../../assets/images/span.png";
import none from "../../assets/images/none.png";
import { useNewArrival } from "../../store/store";
export default function NewArrival() {
  const { newArrival } = useNewArrival();
  return (
    <div className="w-full mt-20 bg-[#F2F2F2] pb-3 ">
      <div className="max-w-7xl flex flex-col gap-5 mx-auto container min-md:p-10">
        <div className="flex flex-col gap-1.5 mt-7 w-full">
          <p className="text-center text-[16px] text-warning font-bold">
            New Arivals
          </p>
          <h3 className="text-center text-[42px] font-bold">
            Latest Tips And Tricks
          </h3>
          <div className="flex justify-center">
            <img src={span} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {newArrival.map((el, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-2xl p-3 gap-4"
            >
              <div className="rounded-2xl overflow-hidden">
                <img src={el.img} alt="" />
              </div>

              <div className="flex flex-col gap-3 flex-grow">
                <p className="text-[15px] font-bold leading-[23px] text-warning font-nunito">
                  {el.sort}
                </p>
                <p className="cursor-pointer font-semibold leading-[29px] text-[24px]">
                  {el.name}
                </p>
                <p className="font-normal leading-[29px] text-[16px] text-gray-500">
                  {el.details}
                </p>
                <div className="flex gap-4 items-center mt-auto pt-4">
                  <div className="w-[60px] h-[60px] overflow-hidden rounded-2xl">
                    <img
                      className="object-cover w-full h-full"
                      src={none}
                      alt="admin"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[14px] leading-[20px] font-normal font-nunito">
                      Admin
                    </p>
                    <p className="text-[14px] leading-[20px] font-normal text-gray-600 font-nunito">
                      March 22, 2021
                    </p>
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
