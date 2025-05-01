import React from "react";
import { TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Drawer({ menuColor }) {
  const mobileLinks = [
    { to: "/", label: "Home Page" },
    { to: "/registration", label: "Registration" },
    { to: "/blog", label: "Blog" },
    { to: "/allvendors", label: "All Vendors" },
  ];

  return (
    <div className="drawer drawer-end min-lg:hidden z-[1000]">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-4" className="drawer-button">
          <TbMenu3 className={`mr-5 text-3xl cursor-pointer  ${menuColor} `} />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 px-6 py-8 gap-4">
          {mobileLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="text-lg font-medium py-3 px-2 rounded hover:bg-base-300 transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
