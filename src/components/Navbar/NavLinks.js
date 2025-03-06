import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <>
      <HashLink
        className={`px-4 font-extrabold text-gray-500 font-mono border 
              transition-all duration-300 ease-in-out rounded-2xl py-2
              hover:bg-gradient-to-r hover:from-purple-700 hover:via-white hover:to-violet-800 
              bg-clip-text hover:text-transparent hover:shadow-lg hover:shadow-purple-500/50
              ${
                activeLink === "/#about"
                  ? "border-gray-800"
                  : "border-transparent"
              }`}
        smooth
        to="/#"
        onClick={() => setActiveLink("/#")}
      >
        Home
      </HashLink>

      <HashLink
        className={`px-4 font-extrabold text-gray-500 font-mono border 
              transition-all duration-300 ease-in-out rounded-2xl py-2
              hover:bg-gradient-to-r hover:from-purple-700 hover:via-white hover:to-violet-800 
              bg-clip-text hover:text-transparent hover:shadow-lg hover:shadow-purple-500/50
              ${
                activeLink === "/#about"
                  ? "border-gray-800"
                  : "border-transparent"
              }`}
        smooth
        to="/#about"
        onClick={() => setActiveLink("/#about")}
      >
        About
      </HashLink>

      <HashLink
        className={`px-4 font-extrabold text-gray-500 font-mono border 
              transition-all duration-300 ease-in-out rounded-2xl py-2
              hover:bg-gradient-to-r hover:from-purple-700 hover:via-white hover:to-violet-800 
              bg-clip-text hover:text-transparent hover:shadow-lg hover:shadow-purple-500/50
              ${
                activeLink === "/#services"
                  ? "border-gray-800"
                  : "border-transparent"
              }`}
        smooth
        to="/#services"
        onClick={() => setActiveLink("/#services")}
      >
        Services
      </HashLink>

      <HashLink
        className={`px-4 font-extrabold text-gray-500 font-mono border 
              transition-all duration-300 ease-in-out rounded-2xl py-2
              hover:bg-gradient-to-r hover:from-purple-700 hover:via-white hover:to-violet-800 
              bg-clip-text hover:text-transparent hover:shadow-lg hover:shadow-purple-500/50
              ${
                activeLink === "/contact#contact"
                  ? "border-gray-800"
                  : "border-transparent"
              }`}
        smooth
        to="/contact#contact"
        onClick={() => setActiveLink("/contact#contact")}
      >
        Contact Us
      </HashLink>
    </>
  );
};

export default NavLinks;
