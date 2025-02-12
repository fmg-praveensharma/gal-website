import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import heroImg from "../images/ram0.png";
import Button from "./Button";

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
            className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left gap-28"
          >
            <div
              className="lg:w-1/2 flex flex-col justify-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h1
                className="mb-5 pb-5 md:text-5xl text-4xl font-bold 
             bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 
             bg-clip-text text-transparent"
              >
                Transforming Businesses with Cutting-Edge VR & AR
              </h1>

              <div
                className="text-xl font-semibold tracking-tight mb-5 
                bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 
                bg-clip-text text-transparent"
              >
                Golden Arc Labs excels in integrating state-of-the-art VR
                technology, including spatial computing and realistic rendering,
                to deliver seamless, immersive virtual experiences. Our
                expertise ensures each project meets the highest standards of
                realism and user engagement.
              </div>

              {/* <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                <Link
                  to="/contact"
                  className="relative overflow-hidden text-white bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-600 
               hover:from-yellow-600 hover:to-amber-700 
               inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg 
               font-bold tracking-wider uppercase rounded-2xl sm:w-auto sm:mb-0 
               shadow-md transition-all duration-300 ease-in-out transform 
               hover:scale-105 hover:shadow-amber-600/30 
               outline-none focus:ring-0 before:absolute before:-inset-1 
               before:bg-gradient-to-r from-amber-800 to-yellow-700 
               before:blur-md before:opacity-20 before:-z-10 
               border border-amber-700 hover:border-yellow-600"
                >
                  ⚡ Learn More ⚡
                  <svg
                    className="w-5 h-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div> */}
            </div>
            <div
              className="flex justify-center w-full lg:w-1/2"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <img
                alt="card img"
                className="rounded-t float-right duration-1000 w-auto h-auto 
               max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 
               animate-wiggle"
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
