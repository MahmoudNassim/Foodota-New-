import React from "react";
import { IoIosArrowUp } from "react-icons/io";
export default function ArrowUp() {
  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed w-[50px] z-50 h-[50px] bg-amber-400 bottom-7 right-7 flex justify-center items-center cursor-pointer hover:text-white hover:bg-black transition-all duration-[400ms]"
    >
      <IoIosArrowUp />
    </div>
  );
}
