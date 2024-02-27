import React from "react";
import HeroImage from "../assets/profile_photo.jpg";
import { MdKeyboardArrowRight, MdOpacity } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-custom-bg  ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <div className="flex justify-between items-center">
            <div className="w-fit">
              <img
                src={HeroImage}
                className=" object-cover  rounded-full !z-10 lg:h-20 lg:w-20 md:h-20 md:w-20 vvs:h-14 vvs:w-14 w-12 h-12 hover:scale-[1.05] hover:shadow-custom1 hover:-rotate-12 transition-all duration-300 ease-in-out"
                alt=""
              />
            </div>
            <div className="flex justify-between items-center space-x-2">
              <div className="h-[1px] md:w-14 sm:w-7 vvs:w-5 w-4 bg-custom-yellow-color"></div>
              <p className="text-custom-yellow-color font-medium hover:text-[#EEA1BE] transition-colors duration-300 ease-in-out capitalize vss:text-xl md:text-xl xl:text-2xl text-xs ">
                Hire Me!
              </p>
            </div>
          </div>
          <div className="mt-10 mb-8">
            <h1 className="text-white/70 font-custom_outline text-custom-yellow-color !z-10 2xl:text-[6.5rem] xl:text-[6.2rem] lg:text-[5rem] md:text-[3.5rem] sm:text-[3rem] vvs:text-[2.3rem] text-[2.2rem] tracking-normal xl:leading-[120px] md:leading-[80px] lg:leading-[100px] sm:leading-[80px] vvs:leading-[60px] leading-[40px]">
              Keyur Kadam
            </h1>
            <h2 className="text-custom-yellow-color !z-10  font-Bold font-extrabold  2xl:text-[5.5rem] xl:text-[5rem] lg:text-[3.5rem] md:text-[2.6rem] sm:text-[2.2rem] vvs:text-[1.5rem] text-[1.4rem] tracking-normal 2xl:leading-[120px] lg:leading-[100px] md:leading-[70px] sm:leading-[50px] leading-[33px]">
              <span>I am a </span>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </h2>
          </div>
          <p className="text-custom-yellow-color xl:text-[1.3rem] 2xl:text-[1.5rem] lg:text-base md:text-sm text-xs xl:leading-8 2xl:leading-9 lg:leading-6 leading-5 mb-6 md:mb-0">
            As a frontend developer, my expertise lies in creating seamless and
            intuitive user experiences. I specialize in using cutting-edge
            technologies to produce high-quality web applications. Specifically,
            I have vast knowledge of ReactJS and NodeJS, which allow me to build
            complex and dynamic applications with ease.
          </p>
          {/* <div>
            <button className="group text-custom-yellow-color w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-900 to-yellow-300 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-200">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div> */}
        </div>
        {/* <div>
          <img
            src={HeroImage}
            alt="hero image"
            className=" rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div> */}
      </div>
      <div className="z-[10] flex sm:flex-row flex-col justify-between w-full items-center my-14">
        <div className="icon-wrapper rounded-full fixed  sm:absolute sm:top-[65%] sm:left-[3%] 2xl:h-[6rem] 2xl:w-[6rem] xl:h-[5.6rem] xl:w-[5.6rem] lg:h-[5.2rem] lg:w-[5.2rem] md:h-[4.8rem] md:w-[4.8rem] vvs:h-[4.4rem] vvs:w-[4.4rem] h-[3.5rem] w-[3.5rem]  flex justify-center items-center">
          <a
            href="#"
            className="f w-20 h-15 m-10 text-custom-yellow-color relative animate-border-transform1"
          >
            <HiOutlineMail size={100} />
          </a>
        </div>
        <div className="icon-wrapper rounded-full fixed sm:absolute xl:top-[8.2%] xl:left-[50%] lg:top-[9%] sm:top-[13%] sm:left-[45%] md:top-[11%] md:left-[43%] lg:left-[47%] 2xl:h-[6rem] 2xl:w-[6rem] xl:h-[5.6rem] xl:w-[5.6rem] lg:h-[5.2rem] lg:w-[5.2rem] md:h-[4.8rem] md:w-[4.8rem] vvs:h-[4.4rem] vvs:w-[4.4rem] h-[3.5rem] w-[3.5rem]  flex justify-center items-center">
          <a
            href="#"
            className="f w-20 h-15 m-10 text-custom-yellow-color relative animate-border-transform1"
          >
            <FaLinkedinIn size={100} />
          </a>
        </div>
        <div className="icon-wrapper rounded-full fixed sm:absolute sm:top-[40%] sm:right-[5%]  2xl:h-[6rem] 2xl:w-[6rem] xl:h-[5.6rem] xl:w-[5.6rem] lg:h-[5.2rem] lg:w-[5.2rem] md:h-[4.8rem] md:w-[4.8rem] vvs:h-[4.4rem] vvs:w-[4.4rem] h-[3.5rem] w-[3.5rem]  flex justify-center items-center">
          <a
            href="#"
            className="h w-20 h-15 m-16 text-custom-yellow-color relative animate-border-transform1"
          >
            <FiGithub size={100} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
