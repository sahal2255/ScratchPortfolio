import React from 'react';

const reactMiniProjects = [
  {
    title: "React Mini Project 1",
    description: "Description of React Mini Project 1",
    screenshot: "/src/assets/qrcode.png",
  },
  {
    title: "React Mini Project 2",
    description: "Description of React Mini Project 2",
    screenshot: "/src/assets/quizz.png",
  },
  {
    title: "React Mini Project 2",
    description: "Description of React Mini Project 2",
    screenshot: "/src/assets/weather.png",
  },
  {
    title: "React Mini Project 2",
    description: "Description of React Mini Project 2",
    screenshot: "/src/assets/survey.png",
  },
  {
    title: "React Mini Project 2",
    description: "Description of React Mini Project 2",
    screenshot: "/src/assets/brandio.png",
  },
  // Add more projects as needed
];

export default function ReactMini() {
  return (
    <div className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white">React Mini Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reactMiniProjects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-gray-400">{project.description}</p>
              <div className="mt-4 flex justify-center items-center h-48">
                <img src={project.screenshot} alt={project.title} className="w-auto h-full object-contain rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
