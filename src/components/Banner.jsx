import React from "react";
import HeroImage from "../assets/hero.webp";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="section" name="banner">
      <div className="container mx-auto bg-black text-white w-full h-screen">
        <div>
          <div className="mb-6 text-[36px] lg:text-[60px] uppercase leading-[1]">
            <h1 className="text-white">
              KEYUR <span>KADAM</span>
            </h1>
            <div>
              <span className="text-white mr-4">I am a </span>
              <TypeAnimation
                sequence={["Full Stack Developer", 2000, "Youtuber", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
          </div>
          <p>
            I have 4+ year of experience building and designing software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, etc.
          </p>
          <div>
            <img src={HeroImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
