import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import blackLogo from "../../assets/images/logoblack.svg";
import { Link } from "react-router-dom";
import Drawer from "../Drawer";
import RegisterAccordion from "./RegisterAccod";
import ProfileAccord from "../Profile/ProfileAccord";

export default function Header({ linkClassName = "", menuColor = "" }) {
  const [isFixed, setIsFixed] = useState(false);

  const changeTextColor = isFixed ? "text-black" : linkClassName;
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [token, setToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  });

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

          <Link to={"/blog"} className={`cursor-pointer ${changeTextColor}`}>
            Blog
          </Link>
          <Link
            to={"/restaurants"}
            className={`cursor-pointer ${changeTextColor}`}
          >
            All Vendors
          </Link>
          {token ? (
            <ProfileAccord changeTextColor={changeTextColor} />
          ) : (
            <div className={`cursor-pointer ${changeTextColor}`}>
              <RegisterAccordion changeTextColor={changeTextColor} />
            </div>
          )}
        </div>

        <Link
          to="/restaurants"
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
