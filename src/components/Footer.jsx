import React from "react";

const Footer = () => {
  return (
    <div
      name="Footer"
      className="w-full bg-gradient-to-b bg-custom-bg text-custom-yellow-color "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-center">
        <div className="p-12 space-y-4">
        <p className="text-slate-400 text-xs sm:text-sm ">
          Made with React.js and Tailwind CSS
        </p>
        <p className="text-slate-400 text-xs sm:text-sm ">Copyright © 2024 Keyur Kadam</p>
        </div>
          
        
        
      </div>
    </div>
  );
};

export default Footer;
