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
          I am Saransh, a final year B.Tech student in computer science from
          Jaypee University of Information Technology. I have a passion for
          creating captivating digital experiences as a Front-End Developer,
          with a mastery of React.js and a solid grounding in JavaScript, HTML,
          and CSS.
        </p>

        <p className="text-base md:text-xl text-justify pl-1 pr-4 pt-10 leading-loose">
          I have completed two internships in web development and React JS,
          where I contributed to the design and development of responsive and
          user-friendly websites and applications. I also gained exposure to
          cloud computing, AWS, Sonarqube, and CI/CD tools and practices. I am
          eager to learn from industry experts and apply my skills to real-world
          projects that solve problems and create value. My long-term career
          goal is to work with a company that offers challenges and
          opportunities for growth and development.
        </p>
      </div>
    </div>
  );
};

export default About;
