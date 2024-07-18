// MainProject.js
import React from 'react';

const project = {
  title: "Main Project",
  description: "This is a detailed description of the main project. It showcases the features and functionalities implemented.",
  video: "/path/to/project-video.mp4",
  screenshot: "/path/to/project-screenshot.jpg",
};

export default function MainProject() {
  return (
    <div className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white">{project.title}</h2>
          <p className="mt-4 text-lg text-gray-400">
            {project.description}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <video controls className="w-full h-auto rounded-lg">
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={project.screenshot} alt={project.title} className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
