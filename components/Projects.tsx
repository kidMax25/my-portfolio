"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitlabIcon as GitHub, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

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
    image: '/customers.jpg?height=200&width=300',
    github: '#',
    demo: '#'
  },
  {
    title: 'Interactive Sales Dashboard',
    description: 'Created an interactive sales dashboard using Power BI for a retail client with real-time KPI tracking.',
    tags: ['Power BI', 'DAX', 'SQL', 'Data Modeling'],
    image: '/dashboard2.jpg?height=200&width=300',
    github: '#',
    demo: '#'
  },
  {
    title: 'NLP Sentiment Analysis',
    description: 'Built a sentiment analysis model for social media comments using advanced NLP techniques.',
    tags: ['Python', 'NLTK', 'TensorFlow', 'Keras'],
    image: '/sentimental.jpg?height=200&width=300',
    github: '#',
    demo: '#'
  },
  {
    title: 'Shiny Sales Forecasting',
    description: 'Interactive R Shiny dashboard for sales forecasting with multiple prediction models.',
    tags: ['R', 'Shiny', 'tidyverse', 'prophet'],
    image: '/forecast.jpg?height=200&width=300',
    github: '#',
    demo: '#'
  },
  {
    title: 'Database Optimization',
    description: 'Optimized database queries and schema design for a large e-commerce platform.',
    tags: ['SQL', 'PostgreSQL', 'Database Design'],
    image: '/database.jpg?height=200&width=300',
    github: '#',
    demo: '#'
  },
  {
    title: 'Network Graph Analysis',
    description: 'Social network analysis using R to identify key influencers and community structures.',
    tags: ['R', 'igraph', 'ggraph', 'Network Analysis'],
    image: '/network.jpg?height=200&width=300',
    github: '#',
    demo: '#'
  }
];

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, image, github, demo, isFocused }) => (
  <motion.div
    className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg mx-4 transition-all duration-300
      ${isFocused ? 'opacity-100 scale-105' : 'opacity-60 scale-90'}`}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="bg-blue-600 text-sm text-white px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <a href={github} className="text-blue-500 hover:text-blue-600 inline-flex items-center">
          <GitHub className="h-5 w-5 mr-1" />
          Code
        </a>
        <a href={demo} className="text-blue-500 hover:text-blue-600 inline-flex items-center">
          <ExternalLink className="h-5 w-5 mr-1" />
          Live Demo
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleProjects = () => {
    const projectsCopy = [...projects, ...projects, ...projects]; // Triple the array to handle wrapping
    const startIdx = currentIndex + projects.length; // Start from the middle array
    return projectsCopy.slice(startIdx - 1, startIdx + 2);
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="relative overflow-hidden">
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full opacity-75 hover:opacity-100 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full opacity-75 hover:opacity-100 z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
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