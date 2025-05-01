import React from "react";
import { useNewArrival } from "../../store/store";
import none from "../../assets/images/none.png";

export default function BlogBody() {
  const { newArrival } = useNewArrival();
  return (
    <div className="w-full bg-[#F2F2F2] ">
      <div className="grid min-md:grid-cols-2 grid-cols-1 max-md:p-4 gap-5 max-w-7xl mx-auto container min-md:p-10">
        {newArrival.map((el, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-2xl p-3 gap-4"
          >
            <div className="rounded-2xl overflow-hidden">
              <img className="w-full" src={el.img} alt="" />
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
  );
}
