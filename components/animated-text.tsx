'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { ReactNode } from 'react'

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  duration?: 'fast' | 'normal' | 'slow'
  delay?: number
  threshold?: number
}

export function AnimatedHeading({
  children,
  className = '',
  duration = 'normal',
  delay = 0,
  threshold = 0.1,
}: AnimatedTextProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold })

  const durationMap = {
    fast: 'duration-600',
    normal: 'duration-900',
    slow: 'duration-1200',
  }

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${durationMap[duration]} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export function AnimatedSubheading({
  children,
  className = '',
  duration = 'normal',
  delay = 100,
  threshold = 0.1,
}: AnimatedTextProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold })

  const durationMap = {
    fast: 'duration-600',
    normal: 'duration-900',
    slow: 'duration-1200',
  }

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${durationMap[duration]} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export function AnimatedParagraph({
  children,
  className = '',
  duration = 'normal',
  delay = 200,
  threshold = 0.1,
}: AnimatedTextProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold })

  const durationMap = {
    fast: 'duration-600',
    normal: 'duration-900',
    slow: 'duration-1200',
  }

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${durationMap[duration]} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export function AnimatedText({
  children,
  className = '',
  duration = 'normal',
  delay = 0,
  threshold = 0.1,
}: AnimatedTextProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold })

  const durationMap = {
    fast: 'duration-600',
    normal: 'duration-900',
    slow: 'duration-1200',
  }

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${durationMap[duration]} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
