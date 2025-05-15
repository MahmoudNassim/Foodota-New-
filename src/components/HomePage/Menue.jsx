import React, { useState } from "react";
import span from "../../assets/images/span.png";
import pizza from "../../assets/images/pizza.png";
import broast from "../../assets/images/broast.png";
import chicken from "../../assets/images/chicken.png";
import burger from "../../assets/images/burger.png";
import shakes from "../../assets/images/shakes.png";
import sandwich from "../../assets/images/sandwich.png";
import pasta from "../../assets/images/pasta.png";
import dessert from "../../assets/images/dessert.png";

export default function Menue() {
  const [menue] = useState([
    { foodName: "Pizza", resturantNum: "4 Restaurant", img: pizza },
    { foodName: "Broast", resturantNum: "5 Restaurant", img: broast },
    { foodName: "Chicken", resturantNum: "2 Restaurant", img: chicken },
    { foodName: "Burger", resturantNum: "7 Restaurant", img: burger },
    { foodName: "Shakes", resturantNum: "9 Restaurant", img: shakes },
    { foodName: "Sandwich", resturantNum: "3 Restaurant", img: sandwich },
    { foodName: "Pasta", resturantNum: "11 Restaurant", img: pasta },
    { foodName: "Dessert", resturantNum: "10 Restaurant", img: dessert },
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
