import React from "react";
import blackLogo from "../assets/images/logoblack.svg";
import se5 from "../assets/images/post-5-150x150.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#F2F2F2] w-full ">
      <div className="max-w-7xl mx-auto container p-10  flex flex-col gap-5 items-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-x-2 gap-y-7">
          <div className="flex flex-col gap-2.5">
            <div className="w-[200px]">
              <img src={blackLogo} alt="" />
            </div>
            <p
              className="text-[16px] font-normal"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              One is to focus on the quality of your meat. If you can call out
              organic beef, sustainable farming.
            </p>
            <p
              className="text-[16px]"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              <span className="font-bold text-[16px]">Phone</span>{" "}
              +92300-400-2333
            </p>
            <p
              className="text-[16px]"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              <span className="font-bold text-[16px]">Email</span>:
              restaurant@gmail.com
            </p>
            <div className="flex gap-2.5">
              <FaFacebookF className="text-2xl" />
              <FaTwitter className="text-2xl" />
              <FaLinkedin className="text-2xl" />
              <AiOutlineGooglePlus className="text-2xl" />
              <FaYoutube className="text-2xl" />
            </div>
          </div>
          <div className="flex flex-col gap-3 min-lg:p-7">
            <p className="text-[20px] leading-[24px] font-bold mb-2.5 ">
              Our Service
            </p>
            <p className="cursor-pointer">All Vendors</p>
            <p className="cursor-pointer">Resturantrs</p>
          </div>
          <div className="flex flex-col gap-3 min-lg:p-7">
            <p className="text-[20px] leading-[24px] font-bold mb-2.5">
              Latest News
            </p>
            <div className="flex gap-3 ">
              <div className="w-[200px]">
                <img src={se5} alt="" />
              </div>
              <div className="flex flex-col">
                <p className="text-[16px] font-bold leading-[23px] cursor-pointer">
                  Grilled Chicken & kabab with tomato Sauce
                </p>
                <p className="text-[15px] font-normal leading-[23px]">
                  March 19, 2021
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 min-lg:p-7">
            <p className="text-[20px] leading-[24px] font-bold mb-2.5 ">
              Useful Links
            </p>
            <p className="cursor-pointer">All Vendors</p>
            <p className="cursor-pointer">Resturantrs</p>
          </div>
        </div>
        <p
          className="text-gray-700 leading-[29px] text-[16px] font-normal text-center"
          style={{ fontFamily: "Nunito, sans-serif" }}
        >
          Copyright 2023 © Theme Created By{" "}
          <span className="underline cursor-pointer font-bold text-black">
            Scriptsbundle
          </span>{" "}
          All Rights Reserved
        </p>
      </div>
    </div>
  );
}
