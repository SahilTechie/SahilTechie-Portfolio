import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "MERN Stack Developer Intern",
      company: "Zidio Development.",
      location: "Remote",
      duration: "Feb 2025 - April 2025",
      description: "Led the development of a Task Management Application tailored for enterprise and corporate users. Oversaw a team, ensuring efficient task tracking, collaboration, and project delivery ",
      achievements: [
        "Collaborated with a cross-functional team",
        "Designed and developed the application architecture",
        "Conducted code reviews and implemented best practices"
      ]
    },
    {
      title: "Google Android Developer Intern",
      company: "AICTE-Edu Skills",
      location: "Remote",
      duration: "01/2025 – 03/2025 ",
      description: "Engineered Android applications using Android Studio and Kotlin, focusing on UI/UX design, API integration, and app optimization.",
      achievements: [
        "Created basic UI layouts and navigation following Material Design guidelines.",
        "Integrated simple APIs to fetch and display data within the app.",
        "Practiced debugging and testing to improve app stability and performance."
      ]
    },
    {
      title: "AWS Data Engineering Intern",
      company: "Innovation Hub",
      location: "remove",
      duration: "04/2025 – 06/2025",
      description: "Developed and optimized cloud-based data pipelines and ETL workflows using AWS services, ensuring efficient data ingestion, transformation, and storage performance.",
      achievements: [
        "Built and managed scalable data pipelines using AWS services, enabling efficient data ingestion and transformation. ",
        "Designed ETL workflows for structured and semi-structured data.",
        "Optimized query performance and improved storage efficiency on the cloud by 30%. "
      ]
    },
    {
      title: "Software Development Intern",
      company: "University Research Lab",
      location: "Boston, MA",
      duration: "Jun 2023 - Aug 2023",
      description: "Worked on research projects involving AI and machine learning applications. Developed prototypes and contributed to academic publications.",
      achievements: [
        "Developed ML models with 85% accuracy for data classification",
        "Co-authored research paper on AI applications in public services",
        "Created interactive dashboards for research data visualization"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Internships
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional journey combining technical development with business strategy
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.slice(0, 3).map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center mb-2">
                        <Award className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Key Achievements:
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;