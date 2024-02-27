import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const socialLinks = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      url: "https://www.linkedin.com/in/keyur-kadam-09a31216b/",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      url: "https://github.com/keyurkadam",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      url: "mailto:kadamkeyur@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsPersonLinesFill size={30} />
        </>
      ),
      url: "../src/assets/Keyur Kadam.pdf",
      download: false,
    },
  ];

  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        {socialLinks.map(({ id, child, url, download }) => (
          <li
            key={id}
            className="flex justify-between items-center w-40 h-14 px-4 bg-custom-yellow-color text-custom-bg ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300"
          >
            <a
              href={url}
              className="flex  justify-between items-center w-full text-white"
              download={download}
              target="_blank"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
