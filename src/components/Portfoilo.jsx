import React from "react";
import p1 from "../assets/works/weather-app.png";

const Portfoilo = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-custom-bg text-custom-yellow-color"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-center">
        <div className="pb-8 relative">
          {/* <div class="underline2"></div> */}
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {/* <p className="text-4xl font-bold inline  items-center justify-center"> */}
            Skills
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-4 justify-center">
          <div class="space-y-4">
            <div class="flex">
              <div class="w-1/2">
                <img
                  src={p1}
                  alt="Description of Image 1"
                  class="w-full h-auto"
                />
              </div>
              <div class="w-1/2 p-4">
                <h2 class="text-xl font-bold mb-2">Weather Application</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero.
                </p>
              </div>
            </div>

            <div class="flex flex-row-reverse">
              <div class="w-1/2">
                <img
                  src={p1}
                  alt="Description of Image 2"
                  class="w-full h-auto"
                />
              </div>
              <div class="w-1/2 p-4">
                <h2 class="text-xl font-bold mb-2">Title 2</h2>
                <p>
                  Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
                  elementum imperdiet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfoilo;
