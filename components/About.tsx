'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const sectionRef = useScrollAnimation({ type: 'fadeUp', duration: 1 })
  const contentRef = useScrollAnimation({ type: 'stagger', delay: 0.2, staggerDelay: 0.15 })

  return (
    <section id="about" className="py-20" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
            About Me
          </h2>
          <p className="font-mono text-sm text-gray-500 dark:text-gray-400 tracking-wide">
            4th year Computer Science student & aspiring developer
          </p>
        </div>

        <div className="bg-white dark:bg-card-dark rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-white/5" ref={contentRef}>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div>
              <h3 className="text-2xl font-display text-gray-900 dark:text-white mb-6">
                My Programming Journey
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm currently in my 4th year at university, pursuing my degree in Computer Science, and I can honestly say that programming has become more than just my field of study—it's my passion. My journey began during my first year when I wrote my first "Hello World" program. What started as a simple assignment quickly turned into late-night coding sessions, driven by curiosity and the thrill of solving problems through code.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                One thing that sets me apart is my ability to learn quickly and adapt to new technologies. Whether it's mastering a new programming language, understanding complex algorithms, or diving into the latest frameworks, I have this natural drive to absorb knowledge rapidly. My professors often comment on how I grasp concepts that typically take others weeks to understand. This fast learning ability has allowed me to explore various areas of programming, from web development to data structures and algorithms.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-display text-gray-900 dark:text-white mb-6 mt-10">
                What I Love About Programming
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm particularly passionate about full-stack web development. There's something incredibly satisfying about building an application from the ground up—designing the user interface, implementing the backend logic, and seeing everything come together as a cohesive product. I love the problem-solving aspect of programming; every bug is a puzzle waiting to be solved, and every new feature is an opportunity to think creatively.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                What excites me most is building projects that can make a real difference. During my university years, I've worked on various personal projects, from simple web applications to more complex systems. Each project teaches me something new and fuels my passion even more. I'm always eager to learn the latest technologies and best practices, constantly pushing myself to write cleaner, more efficient code.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                While I don't have professional experience yet, I'm incredibly motivated to start my career and apply everything I've learned in a real-world environment. I believe my enthusiasm, quick learning ability, and dedication to continuous improvement make up for my lack of professional experience. I'm ready to contribute, learn from experienced developers, and grow as a programmer.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-display text-gray-900 dark:text-white mb-6 mt-10">
                Beyond the Code
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                When I'm not immersed in code, I enjoy staying active and exploring different interests. I'm a big fan of football (soccer) and love both playing and watching matches. There's something about the strategy and teamwork in football that resonates with my programming mindset—both require planning, execution, and the ability to adapt quickly when things don't go as expected.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I also enjoy reading tech blogs and staying updated with the latest trends in the programming world. Whether it's a new JavaScript framework, an innovative approach to problem-solving, or industry insights, I'm always eager to learn. I spend time on platforms like GitHub, exploring open-source projects and learning from other developers' code.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Gaming is another passion of mine—not just for entertainment, but because it gives me insights into user experience and interface design. Playing different games helps me understand what makes software engaging and user-friendly, which I try to apply to my own projects.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm someone who believes in continuous learning and growth. Every day is an opportunity to become a better programmer and a better person. I'm excited about the future and can't wait to start my professional journey, contribute to meaningful projects, and work alongside experienced developers who can help me grow even further.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}