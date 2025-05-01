import React from "react";
import cover from "../../assets/images/Normas.jpg";
import BlogBody from "./BlogBody";

export default function BlogCover() {
  return (
    <div className="w-full">
      <div
        className="bg-cover bg-center bg-no-repeat h-[400px] w-full"
        style={{ backgroundImage: `url(${cover})` }}
      ></div>
      <div className="w-full flex justify-center translate-y-[-50%] ">
        <div className="bg-white w-[400px] h-[100px] flex justify-center items-center shadow-md rounded-md ">
          <p className="text-[26px] leading-[31px] font-bold text-center">
            Latest News & Trends
          </p>
        </div>
      </div>
    </div>
  );
}
