import React from "react";
import span from "../../assets/images/span.png";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
export default function AllDetails() {
  return (
    <div className=" h-[60vh] max-lg:mt-3.5 max-lg:col-span-12 col-span-3 bg-white rounded-[10px] p-5 flex flex-col  gap-3">
      <p className="text-[20px] leading-[24px] font-bold  ">All Details</p>
      <div>
        <img src={span} alt="" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-1.5 items-center cursor-pointer p-3 hover:bg-gray-500 hover:text-white transition-all duration-[400ms]">
          <MdOutlineMenuBook className="text-2xl text-blue-800" />
          <p className="text-[16px] font-normal leading-[28px]">Menue</p>
        </div>
        <div className="flex gap-1.5 items-center cursor-pointer p-3 hover:bg-gray-500 hover:text-white transition-all duration-[400ms]">
          <FaPeopleGroup className="text-2xl text-blue-800 " />
          <p className="text-[16px] font-normal leading-[28px]">Reviews</p>
        </div>
        <div className="flex gap-1.5 items-center cursor-pointer p-3 hover:bg-gray-500 hover:text-white transition-all duration-[400ms]">
          <FaCircleInfo className="text-2xl text-blue-800" />
          <p className="text-[16px] font-normal leading-[28px]">
            Restaraunt Info
          </p>
        </div>
      </div>
    </div>
  );
}
