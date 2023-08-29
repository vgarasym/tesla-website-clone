import React from "react";
import Logo from "../Assets/Tesla.svg";

const Navbar = () => {
  return (
    <div className="bg-transparent pt-4 pl-4 pb-4">
      <div className="bg-transparent w-full h-[60px]">
      <a href="/" className="absolute">
        <img
          src={Logo}
          alt="Tesla logo"
          width={150}
        ></img></a>
        <ul className="flex justify-center items-start px-12">
          <li className="text-white text-md font-bold px-12">Vehicles</li>
          <li className="text-white text-md font-bold px-12">Energy</li>
          <li className="text-white text-md font-bold px-12">Charging</li>
          <li className="text-white text-md font-bold px-12">Discover</li>
          <li className="text-white text-md font-bold px-12">Shop</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
