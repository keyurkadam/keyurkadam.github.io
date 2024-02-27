import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { logo } from "../assets/logos/logo.svg";

const NavBar = () => {
  const [nav, SetNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "portfolio",
    },
    {
      id: 4,
      name: "experience",
    },
    {
      id: 5,
      name: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-custom-yellow-color bg-custom-bg fixed">
      <div>
        {/* <h1 className="text-5xl ml-2">Keyur Kadam</h1> */}
        {/* <img src={logo} alt="" /> */}
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, name }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {name}
          </li>
        ))}
      </ul>
      <div
        onClick={() => SetNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col absolute bg-gradient-to-b from-black to-gray-700 justify-center w-full h-screen items-center top-0 left-0 text-gray-500">
          {links.map(({ id, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
