'use client'

import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function ClientLogos() {
  const sectionRef = useScrollAnimation<HTMLElement>({ type: 'fadeUp', duration: 1 })
  const logosRef = useScrollAnimation<HTMLDivElement>({ type: 'stagger', delay: 0.2, staggerDelay: 0.1 })

  return (
    <section className="w-full mb-24 overflow-hidden mask-linear-fade" ref={sectionRef}>
      <div className="flex justify-between items-center gap-6 opacity-60 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0" ref={logosRef}>
        <div className="flex items-center gap-2 text-gray-800 dark:text-gray-300 font-bold text-sm">
          <span className="material-icons-outlined text-lg">inventory_2</span> Product.
        </div>
        <div className="flex items-center gap-2 text-gray-800 dark:text-gray-300 font-bold text-sm">
          <span className="material-icons-outlined text-lg">pentagon</span> Penta
        </div>
        <div className="flex items-center gap-2 text-gray-800 dark:text-gray-300 font-bold text-sm">
          <span className="material-icons-outlined text-lg">home</span> Homey
        </div>
        <div className="flex items-center gap-2 text-gray-800 dark:text-gray-300 font-bold text-sm">
          <span className="material-icons-outlined text-lg">hub</span> Network
        </div>
      </div>
    </section>
  )
}