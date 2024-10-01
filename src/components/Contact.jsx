import React from "react";

const Contact = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b bg-custom-bg text-custom-yellow-color"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          {/* <p className="text-4xl font-bold inline border-b-4 border-gray-500"> */}
          <p className="text-4xl font-bold inline  border-gray-500">
            # Contact Me
          </p>
        </div>
        <div className="space-y-4">
            <p className="text-xl ">
            Want to get in touch?
            </p>
            <p className="text-xl ">
            Feel free to email me at: <a href="mailto:kadamkeyur@gmail.com">kadamkeyur@gmail.com</a>
            </p>
        </div>
        
        
      </div>
    </div>
  );
};

export default Contact;
