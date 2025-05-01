import React from "react";
import span from "../../assets/images/span.png";
import profit from "../../assets/images/profit.png";
import promotion from "../../assets/images/promotion.png";
import girl from "../../assets/images/girl.jpg";

export default function GetStarted() {
  return (
    <div className="mt-20 max-w-7xl mx-auto container min-md:p-10 grid grid-cols-2 max-xl:grid-cols-1 gap-4">
      <div className="flex flex-col gap-4 max-md:p-2.5">
        <div className=" flex flex-col items-start gap-1.5 mt-7 w-full">
          <p className=" text-[16px] text-warning font-bold">Pizza Delivery</p>
          <h3 className=" min-md:text-[42px] text-[28px] font-bold">
            Get Started Today!
          </h3>
          <div className="flex ">
            <img src={span} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-3.5">
          <h2
            className="font-bold text-[30px] leading-[45px]"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Everything you need to build an amazing food restaurant responsive
            website.
          </h2>
          <p
            className="font-normal text-[17px] leading-[29px] text-gray-400"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Hendrerit in vulputate velit esse molestie consequat, vel illum
            dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
            odio dignissim qui blandit praesent luptatum zzril delenit augue
            duis.
          </p>
        </div>
        <div className="grid min-md:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col max-md:items-center max-md:text-center">
            <div className="w-[60px]">
              <img src={profit} alt="" />
            </div>
            <h3 className="text-[24px] leading-[29px] font-semibold mt-1.5">
              Food Order
            </h3>
            <p
              className="font-normal text-[17px] leading-[29px] text-gray-400"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Food is the necessity of life. It provides nutrition, sustenance
              growth to human body. Food can be classified.
            </p>
          </div>
          <div className="flex flex-col max-md:items-center max-md:text-center">
            <div className="w-[60px]">
              <img src={promotion} alt="" />
            </div>
            <h3 className="text-[24px] leading-[29px] font-semibold mt-1.5">
              Promote Restaurant
            </h3>
            <p
              className="font-normal text-[16px] leading-[29px] text-gray-400"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Food can be classified into cereals, pulses, nuts and oilseeds,
              vegetable, fruits, milk and milk products and flesh food.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center overflow-hidden">
        <img
          className="rounded-full w-[296px] min-lg:w-[536px]  object-cover"
          src={girl}
          alt=""
        />
      </div>
    </div>
  );
}
