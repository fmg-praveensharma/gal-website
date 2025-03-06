import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import heroImg from "../images/VRImage.png";
import logo from "../images/logo.png";
import Button from "./Button";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="hero" id="hero">
        <div>
          <NavBar />
        </div>

        <div
          className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6"
          data-aos="zoom-in"
        >
          <div
            id="hero"
            className="flex flex-col lg:flex-row py-4 justify-between text-center lg:text-left gap-1 pt-20"
          >
            <div
              className="flex flex-col justify-center items-start text-center w-full "
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              {/* Large Centered Text */}
              <div className=" basis-2/3 w-full flex justify-center lg:justify-start items-end pb-8">
                <h1 className="text-7xl lg:text-9xl font-extrabold font-[Poppins,sans-serif]">
                  <span className="text-white">VIRTUAL</span> <br />
                  <span className="text-violet-400">REALITY</span>
                </h1>
              </div>

              {/* Search Bar */}
              <div className="basis-1/3 w-full flex justify-center lg:justify-start items-center">
                <div className="bg-white rounded-full px-10 py-3 flex lflex-row items-center">
                  {/* Fixed-width container for animated text */}
                  <div className="overflow-hidden whitespace-nowrap">
                    <span className="text-black text-lg lg:text-2xl font-mono animate-typing inline-block">
                      www.goldenarclabs.com
                    </span>
                  </div>

                  {/* Search icon in a separate fixed-width div */}
                  <div className="flex justify-center items-center ml-4 ">
                    <FaSearch className="text-blue-500  text-xl lg:text-2xl" />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="flex justify-center w-full  lg:w-1/2 mt-8"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                alt="card img"
                className="rounded-t float-right duration-1000 w-auto h-auto 
               max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 
               "
                src={heroImg}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
