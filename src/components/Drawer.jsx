import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Drawer({ menuColor }) {
  const mobileLinks = [
    { id: 1, to: "/", label: "Home Page" },
    { id: 2, to: "/login", label: "Registration" },
    { id: 3, to: "/vendor", label: "Vendor MemberShip" },
    { id: 4, to: "/blog", label: "Blog" },
    { id: 5, to: "/restaurants", label: "All Vendors" },
  ];

  const [token, setToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
  };

  return (
    <div className="drawer drawer-end min-lg:hidden  z-[1000]">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-4" className="drawer-button">
          <TbMenu3 className={`mr-5 text-3xl cursor-pointer  ${menuColor} `} />
        </label>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 px-6 py-8 flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            {mobileLinks
              .filter((link) => !(token && link.label === "Registration"))
              .map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.to}
                    className="text-lg font-medium py-3 px-2 rounded hover:bg-base-300 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            {token && (
              <li>
                <Link
                  to={"/restaurants/orders"}
                  className="text-lg font-medium py-3 px-2 rounded hover:bg-base-300 transition flex items-center gap-2"
                >
                  <FaCartShopping />
                  Your Orders
                </Link>
              </li>
            )}
          </div>

          {token && (
            <li>
              <Link
                onClick={handleLogout}
                to={"/login"}
                className="text-lg font-medium py-3 px-2 rounded hover:bg-base-300 transition"
              >
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
