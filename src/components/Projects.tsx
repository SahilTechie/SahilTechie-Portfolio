import React from 'react';
import { ExternalLink, Github, Bot, Shield, CheckSquare, Gamepad2 } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "DevDetective 🔍",
      description: "A sleek and responsive GitHub profile detective web app that fetches and displays user profile information using GitHub's public API.",
      image: "/public/Dev.png",
      technologies: ["HTML", "CSS", "JAVASCRIPT", "TAILWIND", "GitHub REST API"],
      github: "https://github.com/SahilTechie",
      demo: "https://lrc9s5.csb.app/",
      icon: Shield
    },
    {
      title: "Authn-Authz",
      description: "A modern, secure authentication system built with React.js, Node.js, and MongoDB. Features include user registration, login, JWT authentication, and a simple UI.",
      technologies: ["HTML", "CSS", "JAVASCRIPT", "RENDER"],
      image: "/public/auth.png",
      github: "https://github.com/SahilTechie",
      demo: "https://authn-authz.onrender.com",
      icon: Bot
    },
    {
      title: "Discord Landing Page Clone",
      description: "A responsive and visually accurate clone of Discord’s official landing page. Designed to replicate its layout, style, and interactive elements closely.",
      image: "/public/Discord.png",
      technologies: ["HTML", "CSS", "JAVASCRIP", "TAILWIND"],
      github: "https://github.com/SahilTechie",
      demo: "https://discordclonep5.netlify.app/",
      icon: CheckSquare
    },
    {
      title: "Smart Web Bot 🤖",
      description: "An interactive web bot that provides quick answers to user queries using the Giphy API for GIF responses.",
      image: "/public/SmartWebBot.png",
      technologies: ["REACT", " Tailwind CSS", "Axios", "Giphy API", "Git & GitHub"],
      github: "https://github.com/SahilTechie",
      demo: "https://smart-web-bot.vercel.app/",
      icon: Gamepad2
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my best work in web development, AI integration, and game development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-lg flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;