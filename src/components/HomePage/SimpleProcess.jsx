import React from "react";
import banner from "../../assets/images/banner-1.jpg";
import span from "../../assets/images/span.png";
import checklist from "../../assets/images/checklist.png";
import salary from "../../assets/images/salary.png";
import box from "../../assets/images/box.png";

export default function SimpleProcess() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-right flex flex-col w-full relative"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="layer absolute bg-[rgb(2,2,2,0.5)] w-full h-full top-0 left-0"></div>
      <div className="container max-w-7xl mx-auto static z-20 flex justify-center items-center flex-col pb-20">
        <div className="flex flex-col gap-1.5 mt-7 w-full">
          <p className="text-center text-[16px] text-warning font-bold">
            How It Works
          </p>
          <h3 className="text-center text-[42px] text-white font-bold">
            Simple Process
          </h3>
          <div className="flex justify-center">
            <img src={span} alt="" />
          </div>
        </div>
        <div className="bg-white grid max-lg:grid-cols-1 min-lg:grid-cols-3 place-items-center shadow-2xl max-lg:translate-y-[15%] min-lg:translate-y-[40%]">
          <div className="border-r border-r-gray-300">
            <div className="p-5 flex flex-col gap-2.5">
              <div className="w-[100px]">
                <img src={checklist} alt="" />
              </div>
              <div className="flex flex-col gap-2.5">
                <p className="text-[24px] font-bold leading-9">
                  Place Your Order
                </p>
                <p className="text-[16px] font-normal leading-7">
                  Thank you for being valued customer. We are so grateful to
                  serving for the honored be clients pleasure of serving hope we
                  meets.
                </p>
              </div>
            </div>
          </div>
          <div className="border-r border-r-gray-300">
            <div className="p-5 flex flex-col gap-2.5">
              <div className="w-[100px]">
                <img src={salary} alt="" />
              </div>
              <div className="flex flex-col gap-2.5">
                <p className="text-[24px] font-bold leading-9">
                  Place Your Order
                </p>
                <p className="text-[16px] font-normal leading-7">
                  Thank you for being valued customer. We are so grateful to
                  serving for the honored be clients pleasure of serving hope we
                  meets.
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 flex flex-col gap-2.5">
            <div className="w-[100px]">
              <img src={box} alt="" />
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="text-[24px] font-bold leading-9">
                Place Your Order
              </p>
              <p className="text-[16px] font-normal leading-7">
                Thank you for being valued customer. We are so grateful to
                serving for the honored be clients pleasure of serving hope we
                meets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
