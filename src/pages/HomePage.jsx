import React, { useEffect } from "react";
import HeroSection from "../components/HomePage/HeroSection";
import Menue from "../components/HomePage/Menue";
import PopularResturant from "../components/HomePage/PopularResturant";
import DeliciousDeal from "../components/HomePage/DeliciousDeal";
import SimpleProcess from "../components/HomePage/SimpleProcess";
import GetStarted from "../components/HomePage/GetStarted";
import TeamMember from "../components/HomePage/TeamMember";
import TakeAway from "../components/HomePage/TakeAway";
import NewArrival from "../components/HomePage/NewArrival";
import HomeSlides from "../components/HomePage/HomeSlides";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <HeroSection />
      <Menue />
      <PopularResturant />
      <DeliciousDeal />
      <SimpleProcess />
      <GetStarted />
      <TeamMember />
      <TakeAway />
      <NewArrival />
      <HomeSlides />
    </div>
  );
}
