import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Your Portfolio
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              MERN Stack Developer & Business Development Enthusiast passionate about creating innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/SahilTechie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sahil-mallelwar-439082325" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:smallelw@gitam.in"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  About Me
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  Experience
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h3>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-400">
                Vizag, AP, INDIA
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                smallelw@gitam.in
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                +91 (876) 751-0876
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
              <span className="mr-2">🎓</span>
              © 2022-2026 Sahil Mallelwar | B.Tech CSBS @ GITAM University
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center mt-2 md:mt-0">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> and lots of coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;