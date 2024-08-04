import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const reactMiniProjects = [
  {
    title: "React Mini Project 1",
    description: "Description of React Mini Project 1",
    screenshot: "/src/assets/qrcode.png",
    github: "https://github.com/yourusername/project1",
    live: "https://project1.vercel.app",
  },
  {
    title: "React Mini Project 2",
    description: "Description of React Mini Project 2",
    screenshot: "/src/assets/quizz.png",
    github: "https://github.com/yourusername/project2",
    live: "https://project2.vercel.app",
  },
  {
    title: "React Mini Project 3",
    description: "Description of React Mini Project 3",
    screenshot: "/src/assets/weather.png",
    github: "https://github.com/yourusername/project3",
    live: "https://project3.vercel.app",
  },
  {
    title: "React Mini Project 4",
    description: "Description of React Mini Project 4",
    screenshot: "/src/assets/survey.png",
    github: "https://github.com/yourusername/project4",
    live: "https://project4.vercel.app",
  },
  {
    title: "React Mini Project 5",
    description: "Description of React Mini Project 5",
    screenshot: "/src/assets/brandio.png",
    github: "https://github.com/yourusername/project5",
    live: "https://project5.vercel.app",
  },
  // Add more projects as needed
];

const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ReactMini() {
  return (
    <div className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white">React Mini Projects</h2>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          {reactMiniProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-lg"
              variants={projectVariants}
            >
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-gray-400">{project.description}</p>
              <div className="mt-4 flex justify-center items-center h-48">
                <img src={project.screenshot} alt={project.title} className="w-auto h-full object-contain rounded-lg" />
              </div>
              <div className="mt-4 flex justify-between items-center space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-500 hover:text-blue-700"
                >
                  <FaGithub size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-green-500 hover:text-green-700"
                >
                  <FaExternalLinkAlt size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
