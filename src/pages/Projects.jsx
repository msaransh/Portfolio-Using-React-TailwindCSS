import React from "react";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full h-full py-10 bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto px-8 py-12  flex flex-col justify-center w-full h-full text-gray-200">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold border-b-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 border-gray-500 pt-1 inline">
            Projects
          </h1>

          {/*Portfolio Website*/}

          <div>
            <h2 className="pt-10 text-xl md:text-3xl font-bold">
              Portfolio Website using ReactJs and Tailwind CSS
            </h2>

            <div className="flex flex-col justify-between items-baseline">
              <h3 className="pt-2 pb-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                07/2023 - 07/2023
              </h3>

              <li className="text-sm md:text-base text-justify">
                Developed this personal portfolio website using technologies
                like ReactJs, Tailwind CSS etc.
              </li>
              <br />
              <a
                className="duration-300 hover:scale-105 group text-white w-fit px-3 py-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-blue-400 cursor-pointer shadow-gray-700 shadow-lg"
                href={" "}
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>

          <div>
            <h2 className="pt-10 text-xl md:text-3xl font-bold">
              Decentralised Password Manager
            </h2>

            <div className="flex flex-col justify-between items-baseline">
              <h3 className="pt-2 pb-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                02/2023 - 05/2023
              </h3>
              <li className="text-sm md:text-base text-justify">
                Used Python and Mathematics to create an Algorithm which can
                encrypt and divide a password into number of shares, and when
                given back majority of those shares, can decrypt and retrieve
                the same password.
              </li>
              <li className="text-sm md:text-base text-justify">
                Learned how Decentralixsation works. 
              </li>
              <li className="text-sm md:text-base text-justify">
                Learned to use Mathematics to make real life Algorithm.
              </li>
              <br />
              {/* <div className="flex flex-row gap-5 ">
                <a
                  className="duration-300 hover:scale-105 group text-white w-fit px-3 py-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-blue-400 cursor-pointer shadow-gray-700 shadow-lg"
                  href={
                    "https://github.com/msaransh/Student-Teacher-Booking-Appointment--System"
                  }
                  target="_blank"
                >
                  GitHub
                </a>
              </div> */}
            </div>
          </div>
          <div>
            <h2 className="pt-10 text-xl md:text-3xl font-bold">
              Student Teacher Booking Appointment System
            </h2>

            <div className="flex flex-col justify-between items-baseline">
              <h3 className="pt-2 pb-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                03/2023 - 03/2023
              </h3>

              <br />
              <div className="flex flex-row gap-5 ">
                <a
                  className="duration-300 hover:scale-105 group text-white w-fit px-3 py-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-blue-400 cursor-pointer shadow-gray-700 shadow-lg"
                  href={
                    "https://github.com/msaransh/Student-Teacher-Booking-Appointment--System"
                  }
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
