'use client'

import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { FaAws, FaCode } from 'react-icons/fa'

export default function Education() {
  const sectionRef = useScrollAnimation<HTMLElement>({ type: 'fadeUp', duration: 1 })
  const timelineRef = useScrollAnimation<HTMLDivElement>({ type: 'stagger', delay: 0.2, staggerDelay: 0.2 })
  const certificationsRef = useScrollAnimation<HTMLDivElement>({ type: 'stagger', delay: 0.3, staggerDelay: 0.1 })

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "North South University",
      period: "2022 - 2026",
      description: "Currently pursuing my undergraduate degree in Computer Science with a focus on software engineering, algorithms, and web development. Maintaining strong academic performance while building practical programming skills.",
      achievements: [
        "Current CGPA: 3.49/4.0",
        "Active participant in programming competitions",
        "Member of Computer Science Club",
        "Completed multiple personal projects"
      ],
      gpa: "3.49/4.0"
    }
  ]

  const certifications = [
    {
      name: "AWS Academy Graduate - Cloud Foundations - Training Badge",
      issuer: "Amazon Web Services (AWS)",
      year: "2025",
      icon: FaAws
    },
    {
      name: "SCIC Programming Hero",
      issuer: "Programming Hero",
      year: "2025",
      icon: FaCode
    }
  ]

  return (
    <section id="education" className="py-20" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
            Education
          </h2>
          <p className="font-mono text-sm text-gray-500 dark:text-gray-400 tracking-wide">
            My academic background and certifications
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16" ref={timelineRef}>
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-card-dark rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-white/5 hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Timeline dot */}
              <div className="absolute -left-4 top-8 w-8 h-8 bg-primary rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
              
              <div className="ml-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-display text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-semibold mb-1">{edu.institution}</p>
                    {edu.gpa && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        GPA: {edu.gpa}
                      </p>
                    )}
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-mono text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
                    {edu.period}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {edu.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-display text-center mb-8 text-gray-900 dark:text-white">
            Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto" ref={certificationsRef}>
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-white/5 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <IconComponent className="text-4xl mb-4 mx-auto text-primary" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-primary font-medium mb-1">{cert.issuer}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{cert.year}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}