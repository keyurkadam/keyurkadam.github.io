import React from "react";
import reactImage from "../assets/logos/reactjs.png";
import htmlImage from "../assets/logos/html.png";
import cssImage from "../assets/logos/css.png";
import nodeImage from "../assets/logos/nodejs.png";
import mysqlImage from "../assets/logos/mysql.png";
import mongoImage from "../assets/logos/mongodb.png";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaLaravel,
  FaPhp,
  FaPython,
} from "react-icons/fa";
import { SiMysql, SiMongodb, SiCraftcms, SiCodeigniter } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";

const Skills = () => {
  const skillsList = [
    {
      id: "1",
      name: "ReactJs",
      icon: <FaReact size={75} className="mx-auto mb-4" />,
      level: "90%",
    },
    {
      id: "2",
      name: "HTML",
      icon: <FaHtml5 size={75} className="mx-auto mb-4" />,
      level: "90%",
    },
    {
      id: "3",
      name: "CSS",
      icon: <FaCss3Alt size={75} className="mx-auto mb-4" />,
      level: "90%",
    },
    {
      id: "4",
      name: "NodeJs",
      icon: <FaNode size={75} className="mx-auto mb-4" />,
      level: "90%",
    },
    {
      id: "5",
      name: "MySQL",
      icon: <SiMysql size={75} className="mx-auto mb-4" />,
      level: "90%",
    },
    {
      id: "6",
      name: "MongoDB",
      icon: <SiMongodb size={75} className="mx-auto mb-4" />,
      level: "90%",
    },
    {
      id: "7",
      name: "GitHub",
      icon: <IoLogoGithub size={75} className="mx-auto mb-4" />,
      level: "90%",
    },
    {
      id: "8",
      name: "Laravel",
      icon: <FaLaravel size={75} className="mx-auto mb-4" />,
      level: "90%",
    },
    {
      id: "9",
      name: "Codeigniter",
      icon: <SiCodeigniter size={75} className="mx-auto mb-4" />,
      level: "90%",
    },
    {
      id: "10",
      name: "PHP",
      icon: <FaPhp size={75} className="mx-auto mb-4" />,
      level: "90%",
    },
    {
      id: "11",
      name: "Craft CMS",
      icon: <SiCraftcms size={75} className="mx-auto mb-4" />,
      level: "90%",
    },
    {
      id: "12",
      name: "Python",
      icon: <FaPython size={75} className="mx-auto mb-4" />,
      level: "90%",
    },
  ];

  return (
    <div
      name="skills"
      className="w-full h-screen bg-custom-bg text-custom-yellow-color"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-4 justify-center">
          {skillsList.map(({ id, name, icon }) => (
            <div
              key={id}
              className="w-56 p-6 rounded-lg shadow-lg hover:bg-custom-yellow-color hover:text-custom-bg transition-colors duration-300 border-2"
            >
              {icon}
              <h2 className="text-2xl font-semibold text-center text-gray-700 mb-2">
                {name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
