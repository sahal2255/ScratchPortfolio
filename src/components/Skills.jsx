import React from 'react';
import { SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiMongodb, SiReact, SiTailwindcss, SiFigma, SiRedux } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa'; // Corrected import for FaNodeJs

export default function Skills() {
  return (
    <div className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white">My Skills</h2>
          <p className="mt-4 text-lg text-gray-400">
            Here are some technologies I work with:
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-12">
          <SkillIcon icon={<SiHtml5 size={64} color="#E34F26" />} name="HTML5" />
          <SkillIcon icon={<SiCss3 size={64} color="#1572B6" />} name="CSS3" />
          <SkillIcon icon={<SiBootstrap size={64} color="#7952B3" />} name="Bootstrap" />
          <SkillIcon icon={<SiJavascript size={64} color="#F7DF1E" />} name="JavaScript" />
          <SkillIcon icon={<SiMongodb size={64} color="#4DB33D" />} name="MongoDB" />
          <SkillIcon icon={<SiReact size={64} color="#61DAFB" />} name="React" />
          <SkillIcon icon={<SiTailwindcss size={64} color="#38B2AC" />} name="Tailwind CSS" />
          <SkillIcon icon={<SiFigma size={64} color="#F24E1E" />} name="Figma" />
          <SkillIcon icon={<SiRedux size={64} color="#764ABC" />} name="Redux" />
          <SkillIcon icon={<FaNodeJs size={64} color="#68A063" />} name="Node.js" />
        </div>
      </div>
    </div>
  );
}

const SkillIcon = ({ icon, name }) => (
  <div className="flex items-center">
    <div className="mr-2">{icon}</div>
    <span className="text-lg text-white">{name}</span>
  </div>
);
