import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import heroImg from "../images/VRImage.png";
import logo from "../images/logo.png"
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
              <div className=" basis-2/3 w-full flex justify-start items-end pb-8">
                <h1 className="text-9xl font-extrabold font-[Poppins,sans-serif]">
                  <span className="text-white">VIRTUAL</span> <br />
                  <span className="text-violet-400">REALITY</span>
                </h1>
              </div>


              {/* Search Bar */}
              <div className=" basis-1/3 w-full flex justify-start items-center ">
                {/* <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-12 pt-6 text-lg text-black rounded-full focus:outline-none shadow-lg"
                /> */}
                <div className="bg-white rounded-full lg:px-10 lg:py-3 lg:gap-x-36 lg:flex lg:flex-row lg:justify-center ">
                  <div className="text-black  text-2xl">www.goldenarclabs.com</div>
                  <div className=" flex justify-center items-center">
                    <FaSearch className=" text-blue-500 text-2xl" />
                  </div>
                </div>


              </div>
            </div>

            <div
              className="flex justify-center w-full  lg:w-1/2"
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
