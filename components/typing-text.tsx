'use client'

import { useEffect, useState } from 'react'

interface TypingTextProps {
  text: string
  speed?: number
  className?: string
  onComplete?: () => void
}

export default function TypingText({
  text,
  speed = 50,
  className = '',
  onComplete,
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    if (displayedText.length === text.length) {
      setIsComplete(true)
      onComplete?.()
      return
    }

    const timer = setTimeout(() => {
      setDisplayedText(text.slice(0, displayedText.length + 1))
    }, speed)

    return () => clearTimeout(timer)
  }, [displayedText, text, speed, onComplete])

  useEffect(() => {
    if (isComplete) return

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [isComplete])

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && (
        <span
          className={`inline-block w-0.5 h-full bg-white ml-1 transition-opacity duration-200 ${
            cursorVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ marginLeft: '2px' }}
        />
      )}
    </span>
  )
}
