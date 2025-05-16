import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const servicesLinks = [
  { label: "WEB & SaaS Development", path: "/services/webdev" },
  { label: "SEO & Digital Marketting", path: "/services/seo" },
  { label: "Internet of Things(IOT)", path: "/services/iot" },
  { label: "AR & VR Development", path: "/services/arvr" },
  { label: "Metaverse", path: "/services/metaverse" },
];

const NavLinks = () => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <div className="relative ">
      <HashLink
        className={`px-4 font-extrabold text-gray-500 font-mono border 
          transition-all duration-300 ease-in-out rounded-2xl py-2
          hover:bg-gradient-to-r hover:from-purple-700 hover:via-white hover:to-violet-800 
          bg-clip-text hover:text-transparent hover:shadow-lg hover:shadow-purple-500/50
          ${activeLink === "/#" ? "border-gray-800" : "border-transparent"}`}
        smooth
        to="/#"
        onClick={() => setActiveLink("/#")}
      >
        Home
      </HashLink>

      {/* About */}
      <HashLink
        className={`px-4 font-extrabold text-gray-500 font-mono border 
          transition-all duration-300 ease-in-out rounded-2xl py-2
          hover:bg-gradient-to-r hover:from-purple-700 hover:via-white hover:to-violet-800 
          bg-clip-text hover:text-transparent hover:shadow-lg hover:shadow-purple-500/50
          ${
            activeLink === "/#about" ? "border-gray-800" : "border-transparent"
          }`}
        smooth
        to="/#about"
        onClick={() => setActiveLink("/#about")}
      >
        About
      </HashLink>

      {/* Services Dropdown */}
      <div className="relative group inline">
        <button
          className={`px-4 group font-extrabold  text-gray-500 font-mono border transition-all duration-300 ease-in-out rounded-2xl py-2 hover:bg-gradient-to-r hover:from-purple-700 hover:via-white hover:to-violet-800 bg-clip-text hover:text-transparent hover:shadow-lg hover:shadow-purple-500/50
            ${
              activeLink.startsWith("/services")
                ? "border-gray-800"
                : "border-transparent"
            }`}
        >
          Services
        </button>

        <div className="absolute hidden group-hover:block top-full left-0 mt-2 w-60 bg-black text-left shadow-lg rounded border-gray-300 z-50">
          {servicesLinks.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              onClick={() => setActiveLink(service.path)}
              className="block px-4 text-white hover:bg-violet-800 hover:rounded hover:font-bold  hover:scale-105 transition-all duration-300 ease-in-out"
            >
              {service.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Contact */}
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
    </div>
  );
};

export default NavLinks;
