import { Link } from "react-router-dom";

export default function RegisterAccordion({ changeTextColor }) {
  return (
    <div className="relative group ">
      <div className={`font-semibold cursor-pointer ${changeTextColor}`}>
        Registration
      </div>

      <div className="absolute top-[60px] left-0 mt-2  hidden group-hover:block bg-white border border-gray-300 rounded shadow-md p-4 w-60 z-50 animate__animated animate__fadeInBottomRight">
        <div className="flex flex-col ">
          <Link
            className="hover:underline hover:translate-x-2.5 transition-all duration-[400ms] text-black"
            to={"/login"}
          >
            Sign-in / Sign-Up
          </Link>
          <Link
            className="hover:underline hover:translate-x-2.5 transition-all duration-[400ms] text-black"
            to={"/vendor"}
          >
            Vendor MemberShip
          </Link>
        </div>
      </div>
    </div>
  );
}
