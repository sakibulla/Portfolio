'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const footerRef = useScrollAnimation<HTMLElement>({ type: 'fadeUp', duration: 1 })
  const contentRef = useScrollAnimation<HTMLDivElement>({ type: 'stagger', delay: 0.2, staggerDelay: 0.1 })
  
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/sakibulla', icon: FaGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/md-fahmidul-hasan', icon: FaLinkedin },
    { name: 'Twitter', url: 'https://x.com/HasanFahmid1', icon: FaTwitter },
    { name: 'Email', url: 'mailto:hasanfahmidul2002@gmail.com', icon: FaEnvelope }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800" ref={footerRef}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={contentRef}>
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center border border-primary/30 mr-3">
                <span className="font-display font-bold text-lg text-primary">F</span>
              </div>
              <span className="text-xl font-display text-gray-900 dark:text-white">
                Md. Fahmidul Hasan
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
              4th-year Computer Science student passionate about full-stack development and creating amazing digital experiences. 
              Ready to start my professional journey and contribute to meaningful projects!
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-lg hover:border-primary hover:text-primary transition-all duration-300 shadow-sm hover:shadow-md"
                    title={social.name}
                  >
                    <IconComponent className="w-4 h-4" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <FaEnvelope className="mr-2 w-4 h-4" />
                <a href="mailto:hasanfahmidul2002@gmail.com" className="hover:text-primary transition-colors">
                  hasanfahmidul2002@gmail.com
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <FaPhone className="mr-2 w-4 h-4" />
                <a href="tel:+8801726414486" className="hover:text-primary transition-colors">
                  +8801726414486
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <FaMapMarkerAlt className="mr-2 w-4 h-4" />
                <span>Mirpur, Dhaka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {currentYear} Md. Fahmidul Hasan. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}