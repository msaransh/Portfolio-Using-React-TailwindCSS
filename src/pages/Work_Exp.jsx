import React from "react";

const Work_Exp = () => {
  return (
    <div
      name="experience"
      className="w-full h-full py-10 bg-gradient-to-b from-gray-800 to-black text-gray-200"
    >
      <div className="max-w-screen-lg mx-auto px-8 pt-12 flex flex-col justify-center w-full h-full text-gray-200">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-normal border-b-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 border-gray-500 pt-1 inline">
            Work Experience
          </h1>

          <div>
            <h2 className="pt-10 text-xl md:text-3xl font-bold">
              React JS Intern
            </h2>
            <p className="pt-3 text-base md:text-xl  font-medium leading-relaxed">
              ThinkNEXT Technologies
              <br />
              (Mohali - Punjab)
            </p>
            <div className="flex flex-col justify-between items-baseline">
              <h3 className="pt-2 pb-5 font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                06/2023 - 07/2023
              </h3>
              <li className="text-sm md:text-base pb-2">
              Proficient in React libraries: Redux, Axios, MUI, React Router DOM.
              </li>
              <li className="text-sm md:text-base pb-2">
              Created responsive portfolio website showcasing skills using these libraries.
              </li>
              <li className="text-sm md:text-base pb-2">
              Utilized Git for version control to maintain organized and accessible code.
              </li>
            </div>
          </div>

          <div>
            <h2 className="pt-10 text-xl md:text-3xl font-bold">
              Web Development Intern
            </h2>
            <p className="pt-3 text-base md:text-xl font-medium leading-relaxed">
              TwiLearn EduTech Pvt. Ltd
              <br />
              (Work From Home)
            </p>
            <div className="flex flex-col justify-between items-baseline">
              <h3 className="pt-2 pb-5 font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                2/2023 - 3/2023
              </h3>
              <li className="text-sm md:text-base pb-2">
              Developed industry projects using HTML, CSS, and JavaScript, including a Student-Teacher Booking Appointment System.
              </li>

              <li className="text-sm md:text-base pb-2">
              Collaborated with trainees of the companies to expand skills and knowledge in web development.
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work_Exp;
