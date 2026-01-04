import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Portfolio from '@/components/Portfolio'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Home() {
  return (
    <>
      {/* Animated Background Effects */}
      <AnimatedBackground />

      <Navigation />
      
      <main className="relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <Hero />
          <About />
          <Skills />
          <Education />
          <Portfolio />
          <Experience />
          <Contact />
        </div>
      </main>
      
      <Footer />
    </>
  )
}