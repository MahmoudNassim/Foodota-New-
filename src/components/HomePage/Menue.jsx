import React, { useState } from "react";
import span from "../../assets/images/span.png";
import pizza from "../../assets/images/pizza.png";
export default function Menue() {
  const [menue] = useState([
    { foodName: "Pizza", resturantNum: "14 Restaurant", img: pizza },
    { foodName: "Pizza", resturantNum: "14 Restaurant", img: pizza },
    { foodName: "Pizza", resturantNum: "14 Restaurant", img: pizza },
    { foodName: "Pizza", resturantNum: "14 Restaurant", img: pizza },
    { foodName: "Pizza", resturantNum: "14 Restaurant", img: pizza },
    { foodName: "Pizza", resturantNum: "14 Restaurant", img: pizza },
    { foodName: "Pizza", resturantNum: "14 Restaurant", img: pizza },
    { foodName: "Pizza", resturantNum: "14 Restaurant", img: pizza },
  ]);
  return (
    <div className="w-full min-md:p-10 flex flex-col container  ">
      <div className="flex flex-col gap-1.5  w-full">
        <p className="text-center text-[16px] text-warning font-bold">
          Top Food
        </p>
        <h3 className="text-center text-[42px] font-bold">Menu</h3>
        <div className="flex justify-center">
          <img src={span} alt="" />
        </div>
      </div>
      <div className="grid max-sm:grid-cols-1 min-sm:grid-cols-2 min-xl:grid-cols-4 gap-6 mt-8">
        {menue.map((el, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-2 items-center justify-center cursor-pointer"
            >
              <div className="w-[200px]">
                <img src={el.img} alt="" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-[24px] font-semibold leading-9">
                  {el.foodName}
                </p>
                <p className="text-[16px] font-normal leading-7 text-gray-500">
                  {el.resturantNum}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
