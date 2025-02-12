import React from "react";
import { Link } from "react-router-dom";
const Cta = () => {
  return (
    <div className="w-full flex items-center justify-center text-white cta">
      <div className="mx-8 w-full h-96 text-center lg:text-left py-16 px-12 flex lg:justify-between items-center">
        <div className="w-full flex flex-col lg:flex-row lg:justify-around">
          <div className="mb-4">
            <p className="text-2xl md:text-4xl font-bold mb-4">
              Are you ready to scale your business?
            </p>
            <p className="text-lg md:text-2xl">
              Get in touch and let us build something amazing{" "}
              <span className="font-black">together!</span>
            </p>
          </div>

          <div className="w-full lg:w-72 pt-6 lg:mx-12">
            <Link
              to="/contact"
              className="text-white font-mono bg-white inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg 
             shadow-xl rounded-2xl sm:w-auto sm:mb-0 group border border-white hover:border-yellow-500
             transition-all duration-300 ease-in-out 
             hover:bg-gradient-to-r hover:from-amber-600 hover:via-yellow-500 hover:to-amber-700
             bg-clip-text hover:text-transparent hover:shadow-lg hover:shadow-amber-500/50"
            >
              Send a message
              <svg
                className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
