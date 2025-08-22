import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ATALPage() {
  const navigate = useNavigate();
  const gotoContactUs = () => {
    navigate("/contact/#contact");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="relative w-full h-full text-white">
      <section className="relative h-screen w-full overflow-hidden rounded-t">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/videos/atalBg.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">ATAL LAB</h1>

          <p className="text-xl py-5 md:text-4xl text-center italic  bg-gradient-to-r from-violet-300 via-violet-500 to-violet-700 bg-clip-text text-transparent ">
            Tinker Today,{" "}
            <span className=" font-extrabold">Lead Tomorrow.</span>
          </p>
          <p className="text-lg md:text-2xl max-w-2xl">
            We offer comprehensive ATL setup services for schools, colleges,
            universities, and innovation hubs, helping you bring the vision of
            hands-on learning and innovation to life.
          </p>
        </div>
      </section>

      {/* Video Background */}

      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/atalBg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10" /> */}

      {/* Content */}
      <div className="relative z-20  ">
        {/* <div className="space-y-8 h-[65vh] md:h-[85vh] flex flex-col justify-center">
          <h1
            className="text-4xl md:text-5xl text-center font-extrabold text-center text-blue-950 font-sarif"
          >
            ATAL LAB
          </h1>
          <h2
            className="text-xl md:text-4xl text-center italic  bg-gradient-to-r from-violet-300 via-violet-500 to-violet-700 bg-clip-text text-transparent  font-bold animate-fadeIn w-fit m-auto"
            // className="text-2xl md:text-3xl text-center italic text-blue-500 animate-fadeIn"
          >
            Tinker Today,{" "}
            <span className=" font-extrabold">Lead Tomorrow.</span>
          </h2>

        
          <p
            className="max-w-4xl mx-auto text-lg md:text-2xl text-center italic text-cyan-100"
            // className="text-lg md:text-2xl max-w-3xl mx-auto text-center leading-relaxed bg-gradient-to-r from-blue-50  to-blue-900 bg-clip-text text-transparent "
          >
            We offer comprehensive ATL setup services for schools, colleges,
            universities, and innovation hubs, helping you bring the vision of
            hands-on learning and innovation to life.
          </p>
        </div> */}

        <section className="gradientBlackTOBlueRotate text-white pt-10 px-5 pb-10 ">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            🚀 Our Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-8  max-w-[100vw] md:max-w-[90vw] lg:max-w-[80vw]  m-auto">
            {/* {capabilities.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </div>
          ))} */}

            {/* Services */}
            <div
              className="bg-gradient-to-r from-blue-700 to-fuchsia-900 p-1  hover:scale-105 transition-transform duration-300 hover:cursor-pointer text-white rounded-xl"
              data-aos="zoom-in"
            >
              <section
                className="bg-black backdrop-blur-sm p-6 rounded-xl max-w-5xl mx-auto h-full"
                data-aos="zoom-in"
              >
                <h3
                  className="text-3xl font-semibold mb-4 bg-gradient-to-r from-blue-600 via-fuchsia-900 to-fuchsia-900 bg-clip-text text-transparent"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  🌟 Our Services Include:
                </h3>
                <ul
                  className="list-disc pl-6 space-y-2 text-base md:text-xl  pl-10 md:pl-14 list-image-[url(./check.png)]"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <li> Complete ATL Setup as per NITI Aayog guidelines</li>
                  <li> Infrastructure Design & Custom Layout Planning</li>
                  <li> Procurement & Installation of ATL Equipment & Tools</li>
                  <li> Faculty Training & Orientation Workshops</li>
                  <li> STEM Curriculum & Activity Planning</li>
                  <li> ATL Event Management & Student Innovation Challenges</li>
                  <li> Post-Setup Support & Maintenance</li>
                </ul>
              </section>
            </div>

            {/* Additional Offers */}
            <div
              className="bg-gradient-to-r from-blue-700 to-fuchsia-900 p-1  hover:scale-105 transition-transform duration-300 hover:cursor-pointer text-white rounded-xl"
              data-aos="zoom-in"
            >
              <section
                className="bg-black backdrop-blur-sm p-6 rounded-xl max-w-5xl mx-auto h-full"
                data-aos="zoom-in"
              >
                <h3
                  className="text-3xl font-semibold mb-4 bg-gradient-to-r from-blue-600 via-fuchsia-900 to-fuchsia-900 bg-clip-text text-transparent"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  🎁 Additional Offers:
                </h3>
                <ul
                  className="list-disc pl-6 space-y-2 text-base md:text-xl pl-10 md:pl-14"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <li> Free 3-month post-installation tech support</li>
                  <li>
                    Teacher certification program in design thinking and
                    innovation
                  </li>
                  <li>
                    {" "}
                    Starter project kits for students with guided tutorials
                  </li>
                  <li> Guest mentorship sessions from industry experts</li>
                  <li>
                    Support in ATL Marathon and national-level innovation
                    competitions
                  </li>
                  <li>
                    {" "}
                    ATL Management Software for easy tracking and reporting
                  </li>
                </ul>
              </section>
            </div>

            {/* Unique Points */}
            <div
              className="bg-gradient-to-r from-blue-700 to-fuchsia-900 p-1  hover:scale-105 transition-transform duration-300 hover:cursor-pointer text-white lg:col-span-2 lg:max-w-[80%] m-auto rounded-xl"
              data-aos="zoom-in"
            >
              <section
                className="bg-black backdrop-blur-sm p-6 rounded-xl max-w-5xl mx-auto h-full "
                data-aos="zoom-in"
              >
                <h3
                  className="text-3xl font-semibold mb-4 bg-gradient-to-r from-blue-600 via-fuchsia-900 to-fuchsia-900 bg-clip-text text-transparent"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  💡 What Makes Us Unique?
                </h3>
                <ul
                  className="list-disc pl-6 space-y-2 text-base md:text-xl pl-10 md:pl-14"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <li> Expertise You Can Trust</li>
                  <li> One-Stop Solution: From hardware to training</li>
                  <li> Student-Centered Design that inspires creativity</li>
                  <li>
                    Quality Assured: Certified tools & AIM recommended equipment{" "}
                  </li>
                  <li> Passion for Innovation: We build futures</li>
                </ul>
              </section>
            </div>
          </div>
        </section>
        {/* Contact */}
        <div
          className="text-center bg-gradient-to-r from-violet-300 via-violet-500 to-violet-700 text-white text-center py-20  cursor-pointer"
          onClick={gotoContactUs}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Lead Tomorrow.
          </h2>
          <h3 className="text-2xl font-bold ">📞 Contact Us Now</h3>
        </div>
      </div>
    </div>
  );
}
