import React, { useState, useEffect } from 'react';
import { Award, ExternalLink, Calendar, Building2, ChevronLeft, ChevronRight } from 'lucide-react';

const Certificates: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const certificates = [
    {
      title: "Web Development Certification",
      issuer: "Zidio Development",
      date: "Feb-April 2025",
      description: "Comprehensive course covering React, Node.js, MongoDB, and modern web development practices.",
      image: "/zidio.png",
      skills: ["React.js", "Node.js", "MongoDB", "Express.js"],
      verificationUrl: "/certificates/Zidio_Completion_Certificate.pdf",
      icon: Building2
    },
    {
      title: "AWS Cloud Computing Certification",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Cloud computing fundamentals, AWS services, and cloud architecture best practices.",
      image: "/aws.png",
      skills: ["AWS", "Cloud Computing", "EC2", "S3"],
      verificationUrl: "/certificates/SAHIL_MALLELWAR AWS.pdf",
      icon: Award
    },
    {
      title: "Google Developer Certification",
      issuer: "Google",
      date: "2024",
      description: "Google technologies, development practices, and modern web/mobile development frameworks.",
      image: "/google.png",
      skills: ["Google APIs", "Android", "Web Development", "Mobile"],
      verificationUrl: "/certificates/SAHIL_MALLELWAR Google.pdf",
      icon: Building2
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % certificates.length);
      }, 4000); // Change slide every 4 seconds
      
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, certificates.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certificates.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certificates.length) % certificates.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };



  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        {/* Certificates Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop View - Show all 3 certificates */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group transform ${
                  index === 0 ? 'animate-slide-in-left' : 
                  index === 1 ? 'animate-slide-in-up' : 
                  'animate-slide-in-right'
                }`}
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'both'
                }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className="relative overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center transition-all duration-500 group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-800/40 dark:group-hover:to-purple-800/40">
                    {certificate.image ? (
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <certificate.icon className="w-16 h-16 text-blue-600 dark:text-blue-400 transition-all duration-500 group-hover:scale-125 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 transform transition-all duration-500 group-hover:scale-110">
                    <div className="w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-lg flex items-center justify-center shadow-lg backdrop-blur-sm">
                      <certificate.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {certificate.title}
                  </h3>
                  
                  <div className="flex items-center mb-3 text-gray-600 dark:text-gray-400">
                    <Building2 className="w-4 h-4 mr-2" />
                    <span className="font-medium">{certificate.issuer}</span>
                  </div>

                  <div className="flex items-center mb-4 text-gray-500 dark:text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{certificate.date}</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {certificate.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {certificate.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium transform hover:scale-105 transition-transform duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={certificate.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
                    >
                      <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                      <span>View Certificate</span>
                    </a>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-500 transition-all duration-300 hover:shadow-lg hover:scale-105 transform">
                      <Award className="w-4 h-4 transition-transform duration-300 hover:rotate-12" />
                      <span>Verified</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet View - Carousel */}
          <div className="lg:hidden relative">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {certificates.map((certificate, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                      <div className="relative overflow-hidden">
                        <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center transition-all duration-500 group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-800/40 dark:group-hover:to-purple-800/40">
                          {certificate.image ? (
                            <img
                              src={certificate.image}
                              alt={certificate.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                          ) : (
                            <certificate.icon className="w-16 h-16 text-blue-600 dark:text-blue-400 transition-all duration-500 group-hover:scale-125 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                          )}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute top-4 left-4 transform transition-all duration-500 group-hover:scale-110">
                          <div className="w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-lg flex items-center justify-center shadow-lg backdrop-blur-sm">
                            <certificate.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                          {certificate.title}
                        </h3>
                        
                        <div className="flex items-center mb-3 text-gray-600 dark:text-gray-400">
                          <Building2 className="w-4 h-4 mr-2" />
                          <span className="font-medium">{certificate.issuer}</span>
                        </div>

                        <div className="flex items-center mb-4 text-gray-500 dark:text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm">{certificate.date}</span>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {certificate.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {certificate.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium transform hover:scale-105 transition-transform duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex space-x-4">
                          <a
                            href={certificate.verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
                          >
                            <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                            <span>View Certificate</span>
                          </a>
                          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-500 transition-all duration-300 hover:shadow-lg hover:scale-105 transform">
                            <Award className="w-4 h-4 transition-transform duration-300 hover:rotate-12" />
                            <span>Verified</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-blue-600 dark:bg-blue-400 scale-125'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
