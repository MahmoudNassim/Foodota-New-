import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import blackLogo from "../assets/images/logoblack.svg";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";

export default function Header({ linkClassName = "", menuColor = "" }) {
  const [isFixed, setIsFixed] = useState(false);

  const changeTextColor = isFixed ? "text-black" : linkClassName;
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 300); // Scroll threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full z-50 transition-all   duration-300 ${
        isFixed
          ? "lg:fixed top-0 left-0 bg-white text-black shadow-lg animate__animated animate__bounceInDown"
          : "static "
      }`}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
        <div className="w-[190px]">
          <img src={isFixed ? blackLogo : logo} alt="Logo" />
        </div>

        <div className="max-lg:hidden lg:flex gap-10 text-[16px] leading-24 font-semibold">
          <Link to={"/"} className={`cursor-pointer ${changeTextColor}`}>
            Home Page
          </Link>
          {/* <Link
            to={"/resturaunt"}
            className={`cursor-pointer ${changeTextColor}`}
          >
            Single Restaurant
          </Link> */}
          <Link
            to={"/register"}
            className={`cursor-pointer ${changeTextColor}`}
          >
            Registration
          </Link>
          <Link to={"/blog"} className={`cursor-pointer ${changeTextColor}`}>
            Blog
          </Link>
          <Link
            to={"/allvendors"}
            className={`cursor-pointer ${changeTextColor}`}
          >
            All Vendors
          </Link>
        </div>

        <Link
          to="/allvendors"
          className="max-xl:hidden btn btn-warning p-[26px] text-black text-[20px] mr-[20px]"
        >
          Restaurant Search
        </Link>

        <div>
          <Drawer menuColor={menuColor} />
        </div>
      </div>
    </div>
  );
}
