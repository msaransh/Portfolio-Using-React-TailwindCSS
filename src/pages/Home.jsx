import React from "react";
// import HeroImage from "../images/HeroImage.png";
import personal from "../images/personal.png";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg h-screen md:grid md:grid-cols-2 flex flex-col md:gap-28 mx-auto pt-16 px-8 md:px-4 pb-6 items-center">
        <>
          <div>
            <h1 className="pt-6 pb-4 text-4xl font-bold text-white">
              I'm Saransh
            </h1>
            <div className="text-5xl py-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
              AWS Cloud Devops Engineer
            </div>
            <p className="sm:text-lg text-justify text-gray-500 py-8 max-w-md">
              I have 2 years of experience building and designing website.And I
              also gained exposure to cloud computing, AWS, Sonarqube, and CI/CD
              tools and practices.
            </p>
            <div>
              <a
                href="https://drive.google.com/file/d/11eyTLBgYrKV_qpNc7lJo-Fn2bqdEvJQi/view?usp=drive_link"
                target="_blank"
                className="group text-white w-fit px-4 py-2 my-1 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-blue-400 cursor-pointer shadow-gray-700 shadow-lg duration-300 hover:scale-105 "
              >
                Resume
              </a>
            </div>
          </div>
        </>

        <div>
          <img
            src={personal}
            alt="my profile"
            className="h-auto w-full shadow-gray-600 shadow-lg rounded-2xl mx-auto my-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
