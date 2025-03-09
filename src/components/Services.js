import React from "react";
import img from "../images/ram5.jpg";
import img2 from "../images/ram6.jpg";
import img3 from "../images/ram1.jpg";
import img4 from "../images/ram2.jpg";
import logoImage from "../images/logo.png";
import mobileImg from "../images/Mobile.png"

const Services = () => {
  return (
    <div id="services" className="services bg-gray-100 py-12">
      {/* Main div container */}
      <div data-aos="" className=" mt-10 flex justify-between">
        {/* Left div */}
        <div className="lg:ml-10 my-4 flex flex-col justify-center ">
          <div>
            <h2 className="text-center font-extrabold text-6xl pb-20 bg-gradient-to-r from-violet-300 to-violet-600 bg-clip-text text-transparent uppercase">
              services
            </h2>

          </div>
          <div className="flex justify-center">
            <img
              alt="card img"
              className="rounded-t"
              src={mobileImg}
            />
          </div>
        </div>
        {/* Right div */}
        <div className="px-12 w-2/3 my-4 flex flex-col justify-center" data-aos="fade-down" data-aos-delay="600">
          <div className="flex flex-row justify-start items-center gap-x-5 py-2">
            <img
              alt="card img"
              className="rounded-t w-16 h-16"
              src={logoImage}
            />
            <h1 className={`font-extrabold text-4xl text-white `}>
              Golden Arc Labs
            </h1>
          </div>
          {/* Grid Section */}
          <div className="w-4/5 self-center grid grid-cols-1 sm:grid-cols-2 gap-6 sm:p-6 h-full">
            {[img, img2, img3, img4].map((image, index) => (
              <div key={index} className="bg-gray-800 text-white hover:text-black hover:bg-white rounded-lg shadow-2xl p-6 group flex flex-col h-full">
                <div className="w-full">
                  <img alt="card img" className="rounded-t w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" src={image} />
                </div>
                <h2 className="font-semibold my-4 text-2xl text-center flex-grow">
                  {index === 0 && "VR Content Creation"}
                  {index === 1 && "Virtual Commerce Solutions"}
                  {index === 2 && "Interactive Simulations"}
                  {index === 3 && "Immersive Brand Experiences"}
                </h2>
                <p className="text-md font-medium text-center">
                  {index === 0 && "Crafting immersive storytelling and interactive experiences."}
                  {index === 1 && "Establishing virtual storefronts and conducting immersive virtual events."}
                  {index === 2 && "Developing training programs and educational simulations."}
                  {index === 3 && "Creating customized VR experiences to enhance consumer engagement."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
