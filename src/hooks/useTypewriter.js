import { useState, useEffect } from 'react'

const useTypewriter = (phrases, speed = 100, deleteSpeed = 50, pauseDuration = 2000) => {
  const [displayText, setDisplayText] = useState('')
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]

    const handleTyping = () => {
      if (isPaused) {
        const timeout = setTimeout(() => {
          setIsPaused(false)
          setIsDeleting(true)
        }, pauseDuration)
        return () => clearTimeout(timeout)
      }

      if (isDeleting) {
        if (displayText.length > 0) {
          const timeout = setTimeout(() => {
            setDisplayText(prev => prev.slice(0, -1))
          }, deleteSpeed)
          return () => clearTimeout(timeout)
        } else {
          setIsDeleting(false)
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
          setCurrentCharIndex(0)
        }
      } else {
        if (currentCharIndex < currentPhrase.length) {
          const timeout = setTimeout(() => {
            setDisplayText(prev => prev + currentPhrase[currentCharIndex])
            setCurrentCharIndex(prev => prev + 1)
          }, speed)
          return () => clearTimeout(timeout)
        } else {
          setIsPaused(true)
        }
      }
    }

    handleTyping()
  }, [displayText, currentPhraseIndex, currentCharIndex, isDeleting, isPaused, phrases, speed, deleteSpeed, pauseDuration])

  return displayText
}

export default useTypewriter
