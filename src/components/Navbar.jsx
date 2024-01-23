import React from "react";

const Navbar = () => {
  return (
    <div id="navbar" className="text-white border-b-2 border-t-2">
      <div className="flex flex-row justify-center" id="menu">
        <ul className="justify-center text-md text-center flex">
          <li className="py-2 px-4  md:border-b-2 md:hover:border-[#175fff] md:border-b-transparent md:hover:border-b-2 text-[#555555]">
            <a href="#0">Analytics</a>
          </li>
          <li className="py-2 px-4 md:border-b-2 md:hover:border-[#175fff] md:border-b-transparent md:hover:border-b-2 text-[#555555]">
            <a href="#0">Overview</a>
          </li>
          <li className="py-2 px-4 md:border-b-2 border-b-[#175fff] md:hover:border-[#175fff]  md:hover:border-b-2 text-[#175fff]">
            <a href="#0">Schedule</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
