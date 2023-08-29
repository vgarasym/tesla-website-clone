import React from "react";
import VideoBG from "../Assets/Model-3-Main-Hero-Video-Desktop-NA.mp4";
import Logo from "../Assets/Tesla.svg";
import { CgProfile } from "react-icons/cg";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { VscGlobe } from "react-icons/vsc";

const Main = () => {
  return (
    <div className="main">
      <video src={VideoBG} autoPlay loop muted />
      {/* <div className="bg-transparent pt-4 pl-4 pb-4">
        <div className="w-full h-[60px]">
          <a href="/" className="absolute">
            <img src={Logo} alt="Tesla logo" width={150}></img>
          </a>
          <ul className="flex justify-center items-start">
            <li className="text-white text-md font-bold pl-4">Vehicles</li>
            <li className="text-white text-md font-bold pl-4">Energy</li>
            <li className="text-white text-md font-bold pl-4">Charging</li>
            <li className="text-white text-md font-bold pl-4">Discover</li>
            <li className="text-white text-md font-bold pl-4">Shop</li>
          </ul>
        </div>
      </div> */}
      <div className="absolute top-0 w-full h-full pt-4">
        <div className="bg-transparent w-full h-[60px]">
          <a href="/" className="absolute pl-9 pt-1.5">
            <img src={Logo} alt="Tesla logo" width={135}></img>
          </a>
          <ul className="flex justify-center items-center">
            <div className="flex justify-end pt-0.5">
              <li className="text-white text-[15px]">
                <a href="/">Vehicles</a>
              </li>
              <li className="text-white text-[15px] pl-8">
                <a href="/">Energy</a>
              </li>
              <li className="text-white text-[15px] pl-8">
                <a href="/">Charging</a>
              </li>
              <li className="text-white text-[15px] pl-8">
                <a href="/">Discover</a>
              </li>
              <li className="text-white text-[15px] pl-8">
                <a href="/">Shop</a>
              </li>
            </div>
            <div className="absolute right-12 justify-center pt-2 pr-3 text-white text-2xl">
              <button className="p-[4px] mr-1.5 hover:bg-[#191b1b] hover:bg-opacity-[.20] hover:rounded-md">
                <AiOutlineQuestionCircle />
              </button>
              <button className="p-[4px] mr-1.5 hover:bg-[#191b1b] hover:bg-opacity-[.10] hover:rounded-md">
                <VscGlobe/>
              </button>
              <button className="p-[4px] hover:bg-[#191b1b] hover:bg-opacity-[.10] hover:rounded-md">
                <CgProfile />
              </button>
            </div>
          </ul>
        </div>
        <div className="flex justify-center items-center pt-14">
          <h1 className="text-white text-[39px] font-bold">Model 3</h1>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-white text-[20px] font-bold ">From $29,740*</h1>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-white text-[12px]">
            After Federal Tax Credit & Est. Gas Savings
          </p>
        </div>
        <div className="absolute top-[86%] left-[33%]">
          <button className="px-[92px] py-3 text-[14px] bg-white text-center mx-3 opacity-[.84] rounded-[4px]">
            Order Now
          </button>
          <button className="px-[92px] py-3 bg-[#191b1b] mx-3 text-[14px] text-center text-white rounded-[4px] bg-opacity-[.65]">
            Demo Drive
          </button>
          <footer>
            <p className="flex justify-center items-center text-[12px] text-center text-white pt-[34px]">
              *Price before incentives and savings is $40,240, excluding taxes
              and fees. Subject to change.
            </p>
            <a
              href="/"
              className="flex justify-center items-center text-[12px] text-white underline underline-offset-4"
            >
              Learn about est. gas savings.
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Main;
