import React from 'react';
import { Code, Database, Globe, Users, TrendingUp, DollarSign } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Java", level: 88 },
        { name: "C++", level: 82 },
        { name: "C", level: 80 }
      ]
    },
    {
      title: "Core Computer Science",
      icon: Database,
      skills: [
        { name: "Data Structures & Algorithms", level: 85 },
        { name: "Computer Networks", level: 75 },
        { name: "Operating Systems", level: 80 },
        { name: "Database Management", level: 82 },
        { name: "Software Engineering", level: 78 }
      ]
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "React.js", level: 95 },
        { name: "HTML5/CSS3", level: 92 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Next.js", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: Code,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 80 }
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Leadership", level: 90 },
        { name: "Communication", level: 92 },
        { name: "Problem Solving", level: 88 },
        { name: "Time Management", level: 85 },
        { name: "Critical Thinking", level: 87 }
      ]
    },
     {
      title: "Tools & Technologies",
      icon: Code,
      skills: [
        { name: "Git/GitHub", level: 92 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 78 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 }
      ]
    },

    {
      title: "Business Development",
      icon: TrendingUp,
      skills: [
        { name: "Project Management", level: 90 },
        { name: "Strategic Planning", level: 85 },
        { name: "Market Analysis", level: 82 },
        { name: "Team Leadership", level: 88 },
        { name: "Stakeholder Management", level: 85 }
      ]
    },
    {
      title: "Forex Trading",
      icon: DollarSign,
      skills: [
        { name: "Technical Analysis", level: 85 },
        { name: "Risk Management", level: 88 },
        { name: "Market Research", level: 82 },
        { name: "Trading Psychology", level: 80 },
        { name: "Chart Patterns", level: 83 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive technical skills combined with business acumen and project management expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {[
              { name: "MongoDB", color: "from-blue-400 to-blue-600" },
              { name: "Express", color: "from-green-400 to-green-600" },
              { name: "React.js", color: "from-green-500 to-green-700" },
              { name: "Node.js", color: "from-gray-400 to-gray-600" },
              { name: "TailwindCSS", color: "from-teal-400 to-teal-600" },
              { name: "Git", color: "from-blue-500 to-blue-700" },
              { name: "Docker", color: "from-yellow-400 to-yellow-600" },
              { name: "AWS", color: "from-orange-400 to-orange-600" },
              { name: "Kotlin", color: "from-red-400 to-red-600" },
              { name: "C", color: "from-blue-400 to-cyan-500" },
              { name: "Java", color: "from-gray-700 to-gray-900" },
              { name: "Python", color: "from-blue-600 to-indigo-600" }
            ].map((tech, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${tech.color} p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 group-hover:rotate-3`}>
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 text-center">
                    <span className="text-gray-800 dark:text-gray-200 font-bold text-sm">
                      {tech.name}
                    </span>
                  </div>
                  </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%]"></div>
              </div>
            ))}
          </div>
          
          {/* Additional decorative elements */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;