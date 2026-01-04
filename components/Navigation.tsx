'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState('Home')
  const logoRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // GSAP animations for logo on mount
    if (logoRef.current) {
      gsap.fromTo(logoRef.current, 
        { 
          scale: 0,
          rotation: -180,
          opacity: 0 
        },
        { 
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
          delay: 0.2
        }
      )
    }

    // GSAP stagger animation for nav items
    gsap.fromTo('.nav-item',
      { y: -30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.5
      }
    )
  }, [])

  const handleLogoHover = () => {
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        scale: 1.1,
        rotation: 360,
        duration: 0.6,
        ease: "power2.out"
      })
    }
  }

  const handleLogoLeave = () => {
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: "power2.out"
      })
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    
    // GSAP animation for menu button
    if (menuButtonRef.current) {
      gsap.to(menuButtonRef.current, {
        rotation: isMenuOpen ? 0 : 180,
        scale: isMenuOpen ? 1 : 1.1,
        duration: 0.3,
        ease: "power2.out"
      })
    }
  }

  return (
    <>
      <motion.nav 
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'backdrop-blur-xl bg-background-light/90 dark:bg-background-dark/90 border-b border-gray-200/20 dark:border-white/10 shadow-2xl shadow-black/5' 
            : 'backdrop-blur-md bg-background-light/80 dark:bg-background-dark/80 border-b border-transparent dark:border-white/5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div 
              ref={logoRef}
              className="relative w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center border border-primary/30 mr-2 cursor-pointer overflow-hidden group"
              onMouseEnter={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="font-display font-bold text-xl text-primary relative z-10 group-hover:text-white transition-colors duration-300">F</span>
              <div className="absolute inset-0 rounded-xl bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="nav-item relative px-4 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  className={`relative text-xs font-mono uppercase tracking-widest transition-all duration-300 cursor-pointer group ${
                    activeItem === item.name 
                      ? 'text-primary font-bold' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-primary'
                  }`}
                  href={item.href}
                  onClick={() => setActiveItem(item.name)}
                >
                  {item.name}
                  
                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-primary-hover"
                    initial={{ width: 0 }}
                    animate={{ width: activeItem === item.name ? '100%' : 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
                </a>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Button */}
          <motion.a 
            className="bg-gradient-to-r from-primary to-primary-hover text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:shadow-xl hidden sm:block relative overflow-hidden group"
            href="#"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="relative z-10">Hire Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-hover to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.a>
          
          {/* Mobile Menu Button */}
          <motion.button 
            ref={menuButtonRef}
            className="md:hidden relative w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-colors duration-300"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span 
              className="material-icons-outlined text-lg"
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? 'close' : 'menu'}
            </motion.span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-card-dark border-l border-gray-200 dark:border-white/10 shadow-2xl"
            >
              <div className="p-6 pt-24">
                <div className="space-y-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <a
                        href={item.href}
                        className="block text-lg font-mono text-gray-900 dark:text-white hover:text-primary transition-colors duration-300 py-3 border-b border-gray-100 dark:border-white/5"
                        onClick={() => {
                          setActiveItem(item.name)
                          setIsMenuOpen(false)
                        }}
                      >
                        {item.name}
                      </a>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="pt-6"
                  >
                    <a
                      href="#"
                      className="block w-full bg-gradient-to-r from-primary to-primary-hover text-white text-center px-6 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                    >
                      Hire Me
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}