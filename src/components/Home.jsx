// Dependencies
import React from "react";
import Background from "../assets/background.jpg";
import Mini1 from "../assets/mini1.jpg";
import Mini2 from "../assets/mini2.jpg";
import BackgroundImageSlide from "./BackgroundImageSlide.jsx";

const Home = () => {
  return (
    <div
      className="h-screen w-full bg-white relative overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="bg-black flex w-full h-32">
        <div className="text-3xl flex w-32 items-center justify-center h-full">
          <a className="uppercase text-white ml-3 font-extrabold cursor-pointer">
            LOGO
          </a>
        </div>

        <div className="flex justify-center items-center w-full px-6">
          <nav className="flex justify-between w-full h-full items-center">
            <div>
              <ul className="flex gap-6 text-1xl uppercase font-bold text-white cursor-pointer">
                <li>
                  <a className="hover:text-gray-400 duration-300">Home</a>
                </li>
                <li>
                  <a className="hover:text-gray-400 duration-300">Mission</a>
                </li>
                <li>
                  <a className="hover:text-gray-400 duration-300">Gallery</a>
                </li>
              </ul>
            </div>

            <div className="pr-3">
              <ul className="flex gap-6 text-1xl uppercase font-bold text-white cursor-pointer">
                <li>
                  <a className="hover:text-gray-400 duration-300">About</a>
                </li>
                <li>
                  <a className="hover:text-gray-400 duration-300">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="bg-black w-full h-32 absolute bottom-0"></div>

      <div className="bg-black h-screen w-32 flex flex-col justify-center items-center text-white">
        <div className="flex justify-center items-center">
          <span className="font-bold text-1xl uppercase transform rotate-90 select-none">
            Created 2023
          </span>
        </div>
      </div>

      <div className="flex p-4 gap-4 mb-10 mr-32 absolute h-56 w-3/6 bottom-0 right-0 bg-black items-center justify-center">
        <div
          className="w-full h-full bg-white flex items-center justify-center overflow-hidden bg-center bg-cover"
          style={{ backgroundImage: `url(${Mini1})` }}
        ></div>
        <div
          className="w-full h-full bg-white flex items-center justify-center overflow-hidden bg-center bg-cover"
          style={{ backgroundImage: `url(${Mini2})` }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
