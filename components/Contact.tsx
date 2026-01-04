'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // EmailJS configuration - you'll need to replace these with your actual values
  // const EMAILJS_SERVICE_ID = 'service_portfolio' // Replace with your service ID
  // const EMAILJS_TEMPLATE_ID = 'template_portfolio' // Replace with your template ID  
  // const EMAILJS_PUBLIC_KEY = 'your_public_key_here' // Replace with your public key

  const sectionRef = useScrollAnimation<HTMLElement>({ type: 'fadeUp', duration: 1 })
  const infoRef = useScrollAnimation<HTMLDivElement>({ type: 'fadeLeft', delay: 0.2 })
  const formRef = useScrollAnimation<HTMLDivElement>({ type: 'fadeRight', delay: 0.3 })

  const contactInfo = [
    {
      type: 'Email',
      value: 'hasanfahmidul2002@gmail.com',
      icon: FaEnvelope,
      href: 'mailto:hasanfahmidul2002@gmail.com'
    },
    {
      type: 'Phone',
      value: '+8801726414486',
      icon: FaPhone,
      href: 'tel:+8801726414486'
    },
    {
      type: 'WhatsApp',
      value: '+8801726414486',
      icon: FaWhatsapp,
      href: 'https://wa.me/8801726414486'
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const submitData = new FormData()
      submitData.append('access_key', 'd55bb6e3-8870-43aa-b167-6149f589f655') // Web3Forms access key
      submitData.append('name', formData.name)
      submitData.append('email', formData.email)
      submitData.append('message', formData.message)
      submitData.append('from_name', 'Portfolio Contact Form')
      submitData.append('subject', `New message from ${formData.name}`)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submitData
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Form submission failed')
      }
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
            Get In Touch
          </h2>
          <p className="font-mono text-sm text-gray-500 dark:text-gray-400 tracking-wide">
            Let's discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div ref={infoRef}>
            <h3 className="text-2xl font-display text-gray-900 dark:text-white mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center p-4 bg-white dark:bg-card-dark rounded-2xl shadow-lg border border-gray-100 dark:border-white/5 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl mr-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {contact.type}
                      </p>
                      <p className="text-gray-900 dark:text-white font-semibold">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-primary-hover/5 rounded-2xl border border-primary/10">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Let's Work Together!
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef}>
            {/* Hidden form for Netlify */}
            <form name="contact" netlify="true" hidden>
              <input type="text" name="name" />
              <input type="email" name="email" />
              <textarea name="message"></textarea>
            </form>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-500 hover:bg-green-600'
                    : submitStatus === 'error'
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'bg-gradient-to-r from-primary to-primary-hover hover:shadow-lg hover:shadow-primary/25'
                } text-white`}
              >
                {isSubmitting
                  ? 'Sending Message...'
                  : submitStatus === 'success'
                  ? 'Message Sent Successfully! ✓'
                  : submitStatus === 'error'
                  ? 'Send Failed - Try Again'
                  : 'Send Message'
                }
              </motion.button>
              
              {submitStatus === 'success' && (
                <div className="text-center text-sm text-green-600 dark:text-green-400 mt-2">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="text-center text-sm text-red-600 dark:text-red-400 mt-2">
                  Failed to send message. Please try again or contact me directly at hasanfahmidul2002@gmail.com
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}