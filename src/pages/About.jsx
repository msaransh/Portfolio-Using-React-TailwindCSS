import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-gray-200 md:h-screen"
    >
      <div className="max-w-screen-lg px-8 pt-24 pb-12 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl md:text-5xl font-bold inline border-b-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 border-gray-500">
            About Me
          </p>
        </div>
        <br />
        <p className="text-base md:text-xl text-justify pl-1 pr-4 pt-10 leading-loose">
          I'm Saransh Mehta, pursuing my final year B.Tech in computer science
          from Jaypee University of Information Technology, Waknaghat, Solan,
          Himachal Pradesh. I have already completed two internship of web
          development and React Js.
        </p>

        <p className="text-base md:text-xl text-justify pl-1 pr-4 pt-10 leading-loose">
          The skills I possess would make me an ideal fit for the role, as I
          have a good academic background and a positive attitude which surely
          helps me fit in different environments. I enjoy working as part of a
          team, but I am equally comfortable working on my own initiative. My
          long-term career goals are to work with a company that offers
          challenges and develops employees, and this internship would help give
          me the knowledge and experience I need to achieve this
        </p>
      </div>
    </div>
  );
};

export default About;
