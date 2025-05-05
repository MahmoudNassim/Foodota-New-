import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

export default function ProfileAccord({ changeTextColor }) {
  // const [token, setToken] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   setToken(token);
  // });

  const handleLogout = () => {
    localStorage.clear();
  };
  return (
    <div className="relative group ">
      <div className={`font-semibold cursor-pointer ${changeTextColor}`}>
        Profile
      </div>

      <div className="absolute top-[60px] left-0 mt-2  hidden group-hover:block bg-white border border-gray-300 rounded shadow-md p-4 w-60 z-50 animate__animated animate__fadeInBottomRight">
        <div className="flex flex-col ">
          <Link
            className=" flex items-center gap-2 hover:underline hover:translate-x-2.5 transition-all duration-[400ms] text-black"
            to={"/orders"}
          >
            <FaCartShopping />
            Your Orders
          </Link>
          <Link
            onClick={handleLogout}
            className="hover:underline hover:translate-x-2.5 transition-all duration-[400ms] text-black"
            to={"/"}
          >
            Log Out
          </Link>
        </div>
      </div>
    </div>
  );
}
