'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'

export default function Hero() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/sakibulla', icon: FaGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/md-fahmidul-hasan', icon: FaLinkedin },
    { name: 'Twitter', url: 'https://x.com/HasanFahmid1', icon: FaTwitter },
    { name: 'Facebook', url: 'https://www.facebook.com/Sakibfahmid002', icon: FaFacebook }
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-20 pb-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center w-full mb-16"
      >
        {/* Profile Image */}
        <div className="relative mb-8 group cursor-pointer">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary/40 to-transparent blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
            <Image
              src="/profile.png"
              alt="Md. Fahmidul Hasan"
              width={160}
              height={160}
              priority
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Availability Badge */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white dark:bg-[#1a1a1e] border border-gray-200 dark:border-white/10 px-3 py-1.5 rounded-full shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-[10px] uppercase tracking-wider font-mono text-gray-600 dark:text-gray-300">
              Seeking Opportunities
            </span>
          </div>
        </div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-display text-center mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-200 dark:to-gray-500"
        >
          Md. Fahmidul Hasan
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-mono text-lg text-center text-primary tracking-wide mb-8"
        >
        Full Stack Developer
        </motion.p>

        {/* Resume Download Button */}
        <motion.a
          href="/assets/Fahmidul-Hasan-Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-primary to-primary-hover text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 mb-8"
        >
          Download Resume
        </motion.a>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-4"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-xl hover:border-primary hover:text-primary transition-all duration-300 shadow-lg"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
