'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaNodeJs, 
  FaGitAlt, 
  FaAws, 
  FaRocket,
  FaMobile,
  FaTools,
  FaDatabase
} from 'react-icons/fa'
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiVercel
} from 'react-icons/si'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend')
  const [mounted, setMounted] = useState(false)
  
  const sectionRef = useScrollAnimation({ type: 'fadeUp', duration: 1 })
  const tabsRef = useScrollAnimation({ type: 'scale', delay: 0.2 })
  const summaryRef = useScrollAnimation({ type: 'fadeUp', delay: 0.3 })

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const skillCategories = {
    Frontend: [
      { name: 'React', level: 90, icon: FaReact },
      { name: 'Next.js', level: 85, icon: SiNextdotjs },
      { name: 'TypeScript', level: 88, icon: SiTypescript },
      { name: 'JavaScript', level: 92, icon: FaJs },
      { name: 'HTML/CSS', level: 95, icon: FaHtml5 },
      { name: 'Tailwind CSS', level: 90, icon: SiTailwindcss }
    ],
    Backend: [
      { name: 'Node.js', level: 85, icon: FaNodeJs },
      { name: 'Express.js', level: 82, icon: SiExpress },
      { name: 'MongoDB', level: 75, icon: SiMongodb },
      { name: 'Database', level: 78, icon: FaDatabase }
    ],
    Tools: [
      { name: 'Git', level: 90, icon: FaGitAlt },
      { name: 'AWS', level: 70, icon: FaAws },
      { name: 'Vercel', level: 85, icon: SiVercel },
      { name: 'VS Code', level: 95, icon: FaTools }
    ]
  }

  const categories = Object.keys(skillCategories)

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <section id="skills" className="py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
              Skills & Expertise
            </h2>
            <p className="font-mono text-sm text-gray-500 dark:text-gray-400 tracking-wide">
              Technologies I work with
            </p>
          </div>
          <div className="animate-pulse">
            <div className="flex justify-center mb-12">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-12 w-80"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-32"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
            Skills & Expertise
          </h2>
          <p className="font-mono text-sm text-gray-500 dark:text-gray-400 tracking-wide">
            Technologies I work with
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12" ref={tabsRef}>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-1 flex gap-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-white/5 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <IconComponent className="text-2xl text-primary" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-sm font-mono text-primary font-bold">
                    {skill.level}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    className="h-full bg-gradient-to-r from-primary to-primary-hover rounded-full"
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Skills Summary */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary-hover/5 rounded-3xl p-8 border border-primary/10" ref={summaryRef}>
          <h3 className="text-2xl font-display text-center mb-6 text-gray-900 dark:text-white">
            What I Bring to the Table
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <FaRocket className="text-3xl mb-3 mx-auto text-primary" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Performance</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Optimized, fast-loading applications with excellent user experience
              </p>
            </div>
            <div>
              <FaMobile className="text-3xl mb-3 mx-auto text-primary" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Responsive</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Mobile-first design approach ensuring compatibility across all devices
              </p>
            </div>
            <div>
              <FaTools className="text-3xl mb-3 mx-auto text-primary" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Maintainable</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Clean, well-documented code following industry best practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}