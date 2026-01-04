'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

export default function AnimatedBackground() {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!particlesRef.current) return

    // Create floating particles
    const particles = Array.from({ length: 20 }, (_, i) => {
      const particle = document.createElement('div')
      particle.className = 'absolute w-1 h-1 bg-primary/20 rounded-full'
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particlesRef.current?.appendChild(particle)

      // Animate particles
      gsap.to(particle, {
        y: -100,
        x: Math.random() * 200 - 100,
        opacity: 0,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        delay: Math.random() * 2,
        ease: "power1.out"
      })

      return particle
    })

    return () => {
      particles.forEach(particle => particle.remove())
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated gradient backgrounds */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[500px] bg-glow-purple opacity-80 dark:opacity-100"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 w-[80%] h-[400px] bg-glow-bottom opacity-60 dark:opacity-80"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating particles container */}
      <div ref={particlesRef} className="absolute inset-0" />

      {/* Animated mesh gradient */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}