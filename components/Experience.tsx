'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Experience() {
  const sectionRef = useScrollAnimation<HTMLElement>({ type: 'fadeUp', duration: 1 })

  return (
    <section id="experience" className="py-20" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
            Experience & Projects
          </h2>
          <p className="font-mono text-sm text-gray-500 dark:text-gray-400 tracking-wide">
            My learning journey and personal projects
          </p>
        </div>
        
        <div className="bg-white dark:bg-card-dark rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-white/5">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/30">
              <span className="text-3xl">🎓</span>
            </div>
            
            <h3 className="text-2xl font-display text-gray-900 dark:text-white mb-4">
              Currently Building My Foundation
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              As a 4th-year Computer Science student at North South University, I'm focused on building a strong foundation in programming and software development. While I don't have professional work experience yet, I've been actively working on personal projects and honing my skills through coursework and self-directed learning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                <div className="text-2xl mb-3">📚</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Academic Projects</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Completed various coursework projects including web applications, algorithms implementation, and database management systems.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                <div className="text-2xl mb-3">💻</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Personal Projects</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Built several personal projects to practice full-stack development, including this portfolio website and various web applications.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                <div className="text-2xl mb-3">🏆</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Competitions</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Participated in programming competitions and hackathons to challenge myself and learn from other developers.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                <div className="text-2xl mb-3">🚀</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Ready to Contribute</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Eager to start my professional journey and contribute to real-world projects while continuing to learn and grow.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-primary-hover/5 rounded-2xl p-6 border border-primary/10">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Looking for Opportunities
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                I'm actively seeking internship opportunities, entry-level positions, or freelance projects where I can apply my skills, learn from experienced developers, and contribute to meaningful projects. My passion for programming and quick learning ability make me ready to take on new challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}