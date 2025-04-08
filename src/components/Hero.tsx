import React from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import Profile from "../assets/progile.jpg";
// import { Button } from "../components/ui/button";


const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="text-center md:text-left md:w-1/2">
          <p className="text-xl md:text-2xl font-medium mb-2">Hi 👋, I'm Victor</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-purple-500">
            Frontend Developer & More
          </h1>
          <p className="text-base md:text-lg mb-6">
            I specialize in building modern, responsive, and user-friendly web interfaces.
            I'm also a writer, pastor, and change management consultant. With a passion for clean code,
            spiritual impact, and organizational growth, I create solutions that connect vision with action.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <a href="#" className="text-white hover:text-purple-500"><FaGithub size={24} /></a>
            <a href="#" className="text-white hover:text-purple-500"><FaLinkedin size={24} /></a>
            <a href="#" className="text-white hover:text-purple-500"><FaYoutube size={24} /></a>
          </div>
          {/* <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full">
            Contact Me
          </Button> */}
        </div>

        {/* Right Side Image */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={Profile}
            alt="Victor Joseph"
            className="w-72 h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 w-full max-w-4xl bg-gradient-to-r from-purple-900 to-purple-700 p-6 rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-2xl font-bold">6+</p>
          <p className="text-sm">Years Of Experience</p>
        </div>
        <div>
          <p className="text-2xl font-bold">50+</p>
          <p className="text-sm">Completed Projects</p>
        </div>
        <div>
          <p className="text-2xl font-bold">12 🏆</p>
          <p className="text-sm">Awards</p>
        </div>
        <div>
          <p className="text-2xl font-bold">32+</p>
          <p className="text-sm">Clients Worldwide</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
