'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export type AnimationType = 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'rotate' | 'stagger'

interface UseScrollAnimationOptions {
  type?: AnimationType
  delay?: number
  duration?: number
  threshold?: number
  staggerDelay?: number
}

export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(options: UseScrollAnimationOptions = {}) => {
  const elementRef = useRef<T>(null)
  const {
    type = 'fadeUp',
    delay = 0,
    duration = 0.8,
    threshold = 0.1,
    staggerDelay = 0.1
  } = options

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = element.children
            
            switch (type) {
              case 'fadeUp':
                gsap.fromTo(
                  entry.target,
                  { y: 50, opacity: 0 },
                  { y: 0, opacity: 1, duration, delay, ease: "power3.out" }
                )
                break
              case 'fadeDown':
                gsap.fromTo(
                  entry.target,
                  { y: -50, opacity: 0 },
                  { y: 0, opacity: 1, duration, delay, ease: "power3.out" }
                )
                break
              case 'fadeLeft':
                gsap.fromTo(
                  entry.target,
                  { x: -50, opacity: 0 },
                  { x: 0, opacity: 1, duration, delay, ease: "power3.out" }
                )
                break
              case 'fadeRight':
                gsap.fromTo(
                  entry.target,
                  { x: 50, opacity: 0 },
                  { x: 0, opacity: 1, duration, delay, ease: "power3.out" }
                )
                break
              case 'scale':
                gsap.fromTo(
                  entry.target,
                  { scale: 0.8, opacity: 0 },
                  { scale: 1, opacity: 1, duration, delay, ease: "back.out(1.7)" }
                )
                break
              case 'rotate':
                gsap.fromTo(
                  entry.target,
                  { rotation: 10, opacity: 0 },
                  { rotation: 0, opacity: 1, duration, delay, ease: "power3.out" }
                )
                break
              case 'stagger':
                if (children.length > 0) {
                  gsap.fromTo(
                    children,
                    { y: 30, opacity: 0 },
                    { 
                      y: 0, 
                      opacity: 1, 
                      duration, 
                      delay,
                      stagger: staggerDelay,
                      ease: "power3.out" 
                    }
                  )
                } else {
                  gsap.fromTo(
                    entry.target,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration, delay, ease: "power3.out" }
                  )
                }
                break
            }
          }
        })
      },
      { threshold }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [type, delay, duration, threshold, staggerDelay])

  return elementRef
}