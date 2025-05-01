import React from "react";
import easygo from "../../assets/images/easygo.png";
import { IoSearch } from "react-icons/io5";
import organic from "../../assets/images/organic.jpg";
import tasty from "../../assets/images/tasty.jpg";
import foodchef from "../../assets/images/chef.jpg";
import tony from "../../assets/images/tony.jpg";
import masterchef from "../../assets/images/masterchef.jpg";
import funchicken from "../../assets/images/funchicken.jpg";
import ganteng from "../../assets/images/ganteng.jpg";

export default function MainContent() {
  return (
    <div className="container max-w-7xl mx-auto flex flex-col justify-center gap-10 p-3 min-md:p-10 min-xl:mt-12">
      <div className="w-[306px] mt-3">
        <img src={easygo} alt="" />
      </div>
      <h1 className="text-[35px] min-md:text-5xl min-md:leading-16 font-bold  text-white">
        Order Healthy And <br className="max-md:hidden" /> Fresh Food Any Time
      </h1>
      <p
        style={{ fontFamily: "Nunito, sans-serif" }}
        className="text-[22px] min-md:text-2xl leading-8 font-bold  text-white"
      >
        Italian food makes people think of big <br className="min-md:hidden" />
        family dinners.
        <br className="max-md:hidden" /> So you may want to position your
        restaurant as a place to bring
        <br className="max-md:hidden" /> the whole family.
      </p>
      <div className="max-md:w-full max-md:flex max-md:justify-center">
        <div className="w-[401px] min-md:w-[641px] h-[73px] bg-white flex justify-between">
          <div className="flex flex-col  px-4 py-2.5">
            <label className="text-black" htmlFor="search">
              Search Keywords
            </label>
            <input
              type="text"
              name="search"
              placeholder="Recipe Name Here"
              className=" w-full  focus:outline-none"
            />
          </div>
          <div className="flex items-center mr-3 my-2 bg-warning px-5 py-5 cursor-pointer">
            <IoSearch className="text-[20px]" />
          </div>
        </div>
      </div>
      <h2 className="text-white text-[22px]">Popular Restaurant</h2>
      <div className="flex gap-2">
        <div className="w-[78px] h-[78px] cursor-pointer">
          <img src={organic} alt="" />
        </div>
        <div className="w-[78px] h-[78px] cursor-pointer">
          <img src={tasty} alt="" />
        </div>
        <div className="w-[78px] h-[78px] cursor-pointer">
          <img src={foodchef} alt="" />
        </div>
        <div className="w-[78px] h-[78px] cursor-pointer">
          <img src={tony} alt="" />
        </div>
        <div className="w-[78px] h-[78px] cursor-pointer">
          <img src={masterchef} alt="" />
        </div>
        <div className="w-[78px] h-[78px] cursor-pointer">
          <img src={funchicken} alt="" />
        </div>
        <div className="w-[78px] h-[78px] cursor-pointer">
          <img src={ganteng} alt="" />
        </div>
      </div>
    </div>
  );
}
