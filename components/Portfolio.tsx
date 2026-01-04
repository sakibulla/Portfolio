'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  
  const sectionRef = useScrollAnimation<HTMLElement>({ type: 'fadeUp', duration: 1 })
  const gridRef = useScrollAnimation<HTMLDivElement>({ type: 'stagger', delay: 0.2, staggerDelay: 0.1 })

  const projects = [
    {
      id: 1,
      name: "Xdecor",
      image: "/assets/Xdecor.png",
      category: "Full Stack",
      technologies: ["React", "Vite", "Node.js", "MongoDB", "Firebase", "Express.js"],
      description: "A modern web platform that connects users with professional home and event decorators. Users can explore decoration services, view top decorators, and manage bookings through a secure and responsive web application with Firebase authentication.",
      liveLink: "https://keen-meerkat-3d3a72.netlify.app/",
      githubLink: "https://github.com/sakibulla/AS-11-Client",
      challenges: [
        "Implementing secure Firebase authentication system",
        "Building responsive single-column layout for mobile devices",
        "Managing booking and payment history efficiently"
      ],
      improvements: [
        "Add real-time chat between users and decorators",
        "Implement advanced search and filtering options",
        "Add rating and review system for services"
      ]
    },
    {
      id: 2,
      name: "Artify",
      image: "/assets/Artify.png",
      category: "Frontend and Authentication ",
      technologies: ["React", "Firebase", "MongoDB", "CSS", "React Router"],
      description: "A platform for artists to showcase their artwork, explore others' creations, and interact through likes and favorites. Artists can add, update, and manage their artwork while users can browse and favorite pieces.",
      liveLink: "https://ornate-capybara-053131.netlify.app/",
      githubLink: "https://github.com/sakibulla/PH_AS-10_Client",
      challenges: [
        "Creating an intuitive artwork upload and management system",
        "Implementing like and favorite functionality efficiently",
        "Building responsive gallery layouts for artwork display"
      ],
      improvements: [
        "Add social features like artist following",
        "Implement artwork categorization and tagging",
        "Add commission and marketplace functionality"
      ]
    },
    {
      id: 3,
      name: "GreenNest",
      image: "/assets/GreenNest.png",
      category: "Full Stack",
      technologies: ["React", "Firebase", "Tailwind CSS", "DaisyUI", "React Toastify", "React Router"],
      description: "A plant e-commerce platform with user authentication, plant browsing, detailed plant pages, and consultation booking. Features responsive design, conditional navigation, and comprehensive user management.",
      liveLink: "https://green-nest-6e0f2.web.app/",
      githubLink: "https://github.com/sakibulla/AS-9",
      challenges: [
        "Implementing Firebase authentication with password reset functionality",
        "Building responsive plant catalog with detailed view pages",
        "Creating conditional navigation based on authentication state"
      ],
      improvements: [
        "Add shopping cart and checkout functionality",
        "Implement plant care guides and reminders",
        "Add user reviews and ratings for plants"
      ]
    }
  ]

  const ProjectModal = ({ project, onClose }: { project: typeof projects[0], onClose: () => void }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-card-dark rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-3xl font-display text-gray-900 dark:text-white">
            {project.name}
          </h3>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Image
              src={project.image}
              alt={project.name}
              width={500}
              height={300}
              className="w-full h-64 object-cover rounded-2xl mb-6"
            />
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-primary text-white text-center py-3 rounded-xl font-semibold hover:bg-primary-hover transition-colors"
                >
                  View Live Project
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white text-center py-3 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Project Description
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Challenges Faced
              </h4>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Future Improvements
              </h4>
              <ul className="space-y-2">
                {project.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {improvement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <section id="portfolio" className="py-20" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
            Featured Projects
          </h2>
          <p className="font-mono text-sm text-gray-500 dark:text-gray-400 tracking-wide">
            Showcasing my best work and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={gridRef}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer"
            >
              <div className="bg-white dark:bg-card-dark rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-white/5 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 dark:bg-black/90 text-xs font-medium px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-display text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <button
                    onClick={() => setSelectedProject(project.id)}
                    className="w-full bg-gradient-to-r from-primary to-primary-hover text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={projects.find(p => p.id === selectedProject)!}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  )
}