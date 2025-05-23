import React from "react";
import bg from "../../assets/images/bg.jpg";
import MainContent from "./MainContent";
import Header from "../Header/Header";
export default function HeroSection() {
  return (
    <div className="w-[100%]">
      <div
        className="heroSection   bg-cover bg-no-repeat  flex flex-col w-full"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Header linkClassName="text-white" menuColor={"text-white"} />
        <MainContent />
      </div>
    </div>
  );
}
