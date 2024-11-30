"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, GitlabIcon as GitHub, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
}

interface ProjectCardProps extends Project {
  isFocused: boolean;
}

const projects: Project[] = [
  {
    title: 'Customer Churn Prediction',
    description: 'Developed a machine learning model to predict customer churn for a telecom company.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    image: '/customers.jpg',
    github: '#',
    demo: '#'
  },
  // ... other projects remain the same
];

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, image, github, demo, isFocused }) => (
  <motion.div
    className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg mx-2 md:mx-4 transition-all duration-300 w-[280px] md:w-[320px]
      ${isFocused ? 'opacity-100 scale-105' : 'opacity-60 scale-90'}`}
  >
    <div className="relative w-full h-40 md:h-48">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 280px, 320px"
      />
    </div>
    <div className="p-4 md:p-6">
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 text-sm md:text-base line-clamp-2">{description}</p>
      <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="bg-blue-600 text-xs md:text-sm text-white px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <a href={github} className="text-blue-500 hover:text-blue-600 inline-flex items-center text-sm md:text-base">
          <GitHub className="h-4 w-4 md:h-5 md:w-5 mr-1" />
          Code
        </a>
        <a href={demo} className="text-blue-500 hover:text-blue-600 inline-flex items-center text-sm md:text-base">
          <ExternalLink className="h-4 w-4 md:h-5 md:w-5 mr-1" />
          Live Demo
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    if (!isAutoplayEnabled) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isAutoplayEnabled]);

  const getVisibleProjects = () => {
    const projectsCopy = [...projects, ...projects, ...projects];
    const startIdx = currentIndex + projects.length;
    return projectsCopy.slice(startIdx - 1, startIdx + 2);
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="relative overflow-hidden"
             onMouseEnter={() => setIsAutoplayEnabled(false)}
             onMouseLeave={() => setIsAutoplayEnabled(true)}>
          <div className="flex justify-center items-center">
            <motion.div 
              className="flex items-center justify-center"
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {getVisibleProjects().map((project, idx) => (
                <ProjectCard
                  key={`${project.title}-${idx}`}
                  {...project}
                  isFocused={idx === 1}
                />
              ))}
            </motion.div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-1.5 md:p-2 rounded-full opacity-75 hover:opacity-100 z-10"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-1.5 md:p-2 rounded-full opacity-75 hover:opacity-100 z-10"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
        </div>

        <div className="flex justify-center mt-4 md:mt-6 gap-1.5 md:gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                currentIndex === index ? 'bg-blue-600' : 'bg-gray-400'
              } transition-colors duration-200`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;