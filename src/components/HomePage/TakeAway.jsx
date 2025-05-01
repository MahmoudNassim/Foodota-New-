import React from "react";
import span from "../../assets/images/span.png";
import onlinedev from "../../assets/images/Online-delivery-1.png";

export default function TakeAway() {
  return (
    <div className=" max-w-7xl mx-auto container min-md:p-10 grid grid-cols-1 min-lg:grid-cols-2 gap-4 ">
      <div className=" flex flex-col items-start gap-3 mt-7 w-full max-md:p-4">
        <p className=" text-[16px] text-warning font-bold">
          Dine In or Take Away
        </p>
        <h3 className=" min-md:text-[42px] text-[28px] font-bold">
          Get Your Order 24/7 Right At Your Doorsteps
        </h3>
        <div className="flex ">
          <img src={span} alt="" />
        </div>
        <p className="text-[18px] leading-[32px] text-gray-500">
          Plant-based diets may offer an advantage over those that are not plant
          based with respect to prevention and management of diabetes. the
          adventist health studies found that vegetarians have approximately
          half the risk of developing diabetes
        </p>
        <div className="flex gap-2.5 max-md:flex-col max-md:w-full ">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn btn-warning text-black hover:bg-black hover:text-white transition-all duration-[400ms]"
          >
            Order Food
          </button>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn text-white bg-[#071c1f] hover:bg-black  transition-all duration-[400ms]"
          >
            Search Now
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <img src={onlinedev} alt="" />
      </div>
    </div>
  );
}
