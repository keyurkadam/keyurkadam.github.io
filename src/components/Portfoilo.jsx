import React from "react";
import p1 from "../assets/works/weather-app.png";

const Portfoilo = () => {

  const projects = [
    // {
    //   title: "Rustic Markup Language",
    //   description: "A lightweight markup language for writing general purpose documents.",
    //   tags: ["Markup", "Documentation", "Rust"]
    // },
    // {
    //   title: "PDFx",
    //   description: "A library providing a number of methods for programmatically manipulating PDF files.",
    //   tags: ["PDF", "Library", "Go"]
    // },
    // {
    //   title: "FicGo",
    //   description: "An open-source application written in Go, with some Flutter, for downloading fanfiction.",
    //   tags: ["Go", "Flutter", "Fanfiction"]
    // },
    // {
    //   title: "SVG Music Visualizer",
    //   description: "An SVG-based music visualizer with customizable animations.",
    //   tags: ["SVG", "Music", "Visualization"]
    // },
    // {
    //   title: "SVG Music Visualizer",
    //   description: "An SVG-based music visualizer with customizable animations.",
    //   tags: ["SVG", "Music", "Visualization"]
    // },
    // {
    //   title: "SVG Music Visualizer",
    //   description: "An SVG-based music visualizer with customizable animations.",
    //   tags: ["SVG", "Music", "Visualization"]
    // },
    

    {
      "title": "Chat Application",
      "description": "A real-time chat application allowing users to communicate through text messages in individual or group chats.",
      "tags": ["React.js", "Node.js", "WebSocket", "Tailwind CSS", "MongoDB"],
      "link": "https://github.com/keyurkadam/mern-websocket-chat-app"
    },
    {
      "title": "Weather Application",
      "description": "A weather app that provides real-time weather updates, forecasts, and alerts for different locations.",
      "tags": ["React.js", "Javascript", "CSS"],
      "link": "https://github.com/keyurkadam/weather-app"
    },
    {
      "title": "ESignature Application",
      "description": "A simple and secure electronic signature application that allows users to sign documents quickly and easily.",
      "tags": ["HTML", "Javascript", "CSS"],
      "link": "https://github.com/keyurkadam/ESignature-Application"
    },
    {
      "title": "Web Scraping with Python",
      "description": "A Python project designed to scrape web data, automate extraction, and provide structured results.",
      "tags": ["Python"],
      "link": "https://github.com/keyurkadam/web-scraping-python"
    },
    {
      "title": "keyurkadam.io",
      "description": "This website!",
      "tags": ["React.js", "Javascript", "Tailwind CSS"],
      "link": "https://github.com/keyurkadam/keyurkadam.io"
    }
  ]



  return (
    <div
      name="skills"
      className="w-full  bg-custom-bg text-custom-yellow-color"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          {/* <div class="underline2"></div> */}
          <p className="text-4xl font-bold inline  border-gray-500">
            {/* <p className="text-4xl font-bold inline  items-center justify-center"> */}
            # Projects
          </p>
        </div>

        {/* <div className="flex flex-wrap gap-4 mb-4 justify-center">
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
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
           <a key={index} href={project.link} className="bg-gray-800 border-gray-700 block rounded-lg border-2 overflow-hidden transition-transform transform hover:scale-105"
           target="_blank" 
           rel="noopener noreferrer">
              <div className="p-4">
                <h2 className="text-xl font-semibold">{project.title}</h2>
              </div>
              <div className="p-4">
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-semibold rounded-full text-white border-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfoilo;
