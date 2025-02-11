import React from "react";
import img from "../images/web-dev.svg";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <div className="about m-auto p-2 md:p-12 h-5/6 bg-white" id="about">
        <div
          className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
          data-aos="fade-up"
        >
          <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
            <img alt="card img" className="rounded-t float-right" src={img} />
          </div>
          <div
            className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-4xl bg-gradient-to-r from-yellow-300 via-amber-500 to-yellow-600 bg-clip-text text-transparent font-bold">
              Golden Arc Labs is a pioneering force in the realm of Virtual
              Reality (VR), dedicated to pushing the boundaries of immersive
              technology.
            </h3>
            <div>
              <p
                className="my-3 text-xl font-semibold tracking-tight mb-5 
                bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 
                bg-clip-text text-transparent"
              >
                Founded on the belief that VR has the power to revolutionize how
                individuals and businesses interact with digital content, Studio
                Shodwe brings together a diverse team of creative minds and
                technical experts. Our mission is to redefine storytelling and
                user engagement in the metaverse era by delivering unparalleled
                virtual experiences tailored to meet the evolving needs of our
                clients across various industries.
              </p>
            </div>

            <div>
              <p
                className="my-3 text-xl font-semibold tracking-tight mb-5 
                bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 
                bg-clip-text text-transparent"
              >
                We take responsibility for building custom software solutions
                that caters for automation of your business processes and
                improve efficiency.
              </p>
            </div>
            <Link
              to="/contact"
              className="relative text-gray-500 font-mono bg-white inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg 
             shadow-xl rounded-2xl sm:w-auto sm:mb-0 group border border-gray-800
             transition-all duration-300 ease-in-out 
             hover:bg-gradient-to-r hover:from-amber-600 hover:via-yellow-500 hover:to-amber-700
             bg-clip-text hover:text-transparent hover:shadow-lg hover:shadow-amber-500/50"
            >
              Contact us
              <svg
                className="w-4 h-4 ml-1 transition-transform duration-300 transform group-hover:translate-x-2"
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
    </>
  );
};

export default Intro;
