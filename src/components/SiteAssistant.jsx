import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { departmentLogoImage } from '../assets/images'
import {
  getAssistantReply,
  getPageByPath,
  suggestedPrompts,
} from '../data/siteKnowledge'

const launcherSize = 72
const edgePadding = 12

const getDefaultPosition = (width, height) => ({
  x: Math.max(edgePadding, width - launcherSize - 24),
  y: Math.max(edgePadding, height - launcherSize - 28),
})

const clampPosition = (x, y, width, height) => ({
  x: Math.min(Math.max(edgePadding, x), Math.max(edgePadding, width - launcherSize - edgePadding)),
  y: Math.min(Math.max(edgePadding, y), Math.max(edgePadding, height - launcherSize - edgePadding)),
})

const createWelcomeMessage = (pathname) => {
  const currentPage = getPageByPath(pathname)
  const pageHint = currentPage ? ` You are currently on ${currentPage.title}.` : ''

  return {
    id: 'welcome',
    role: 'assistant',
    text: `I know the content across this website and can help you find pages fast.${pageHint} Ask me about programs, admissions, contact details, alumni, news, or portal access.`,
    actions: currentPage ? [{ label: currentPage.title, path: currentPage.path }] : [],
  }
}

const SiteAssistant = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const launcherRef = useRef(null)
  const panelRef = useRef(null)
  const messagesEndRef = useRef(null)
  const dragRef = useRef(null)
  const ignoreClickRef = useRef(false)
  const positionRef = useRef({ x: edgePadding, y: edgePadding })

  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [viewport, setViewport] = useState({ width: 0, height: 0 })
  const [position, setPosition] = useState({ x: edgePadding, y: edgePadding })
  const [messages, setMessages] = useState([createWelcomeMessage(location.pathname)])

  useEffect(() => {
    positionRef.current = position
  }, [position])

  useEffect(() => {
    setMessages((currentMessages) =>
      currentMessages.length === 1 && currentMessages[0]?.id === 'welcome'
        ? [createWelcomeMessage(location.pathname)]
        : currentMessages
    )
  }, [location.pathname])

  useEffect(() => {
    const syncViewport = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      setViewport({ width, height })

      const savedValue = window.localStorage.getItem('bugema-assistant-position')
      const defaultPosition = getDefaultPosition(width, height)

      if (!savedValue) {
        setPosition((currentPosition) =>
          currentPosition.x === edgePadding && currentPosition.y === edgePadding
            ? defaultPosition
            : clampPosition(currentPosition.x, currentPosition.y, width, height)
        )
        return
      }

      try {
        const parsedPosition = JSON.parse(savedValue)
        setPosition(clampPosition(parsedPosition.x, parsedPosition.y, width, height))
      } catch {
        setPosition(defaultPosition)
      }
    }

    syncViewport()
    window.addEventListener('resize', syncViewport)

    return () => {
      window.removeEventListener('resize', syncViewport)
    }
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isOpen])

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (!dragRef.current) {
        return
      }

      const nextPosition = clampPosition(
        event.clientX - dragRef.current.offsetX,
        event.clientY - dragRef.current.offsetY,
        window.innerWidth,
        window.innerHeight
      )

      if (
        Math.abs(event.clientX - dragRef.current.startX) > 6 ||
        Math.abs(event.clientY - dragRef.current.startY) > 6
      ) {
        dragRef.current.moved = true
      }

      setPosition(nextPosition)
    }

    const handlePointerUp = () => {
      if (!dragRef.current) {
        return
      }

      if (dragRef.current.moved) {
        ignoreClickRef.current = true
        window.setTimeout(() => {
          ignoreClickRef.current = false
        }, 120)
      }

      const nextPosition = clampPosition(
        positionRef.current.x,
        positionRef.current.y,
        window.innerWidth,
        window.innerHeight
      )
      window.localStorage.setItem('bugema-assistant-position', JSON.stringify(nextPosition))
      dragRef.current = null
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
    }
  }, [])

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (
        isOpen &&
        !panelRef.current?.contains(event.target) &&
        !launcherRef.current?.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    window.addEventListener('pointerdown', handlePointerDown)

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isOpen])

  const sendPrompt = (value) => {
    const prompt = value.trim()

    if (!prompt) {
      return
    }

    const reply = getAssistantReply(prompt, location.pathname)

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: `user-${Date.now()}`,
        role: 'user',
        text: prompt,
      },
      {
        id: `assistant-${Date.now() + 1}`,
        role: 'assistant',
        text: reply.text,
        actions: reply.actions,
      },
    ])

    setInput('')
    setIsOpen(true)
  }

  const resetConversation = () => {
    setMessages([createWelcomeMessage(location.pathname)])
  }

  const isMobile = viewport.width > 0 && viewport.width < 640
  const panelWidth = isMobile ? Math.max(280, viewport.width - 24) : 360
  const panelHeight = Math.min(520, Math.max(360, viewport.height - 24))
  const panelLeft = isMobile
    ? edgePadding
    : position.x > viewport.width / 2
      ? Math.max(edgePadding, position.x - panelWidth - 16)
      : Math.min(viewport.width - panelWidth - edgePadding, position.x + launcherSize + 16)
  const panelTop = isMobile
    ? Math.max(edgePadding, viewport.height - panelHeight - 96)
    : Math.min(Math.max(edgePadding, position.y - 280), viewport.height - panelHeight - edgePadding)

  return (
    <>
      <div
        ref={launcherRef}
        className="fixed z-[140]"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        <button
          type="button"
          onPointerDown={(event) => {
            event.preventDefault()
            const rect = event.currentTarget.getBoundingClientRect()
            dragRef.current = {
              offsetX: event.clientX - rect.left,
              offsetY: event.clientY - rect.top,
              startX: event.clientX,
              startY: event.clientY,
              moved: false,
            }
          }}
          onClick={() => {
            if (ignoreClickRef.current) {
              return
            }

            setIsOpen((currentState) => !currentState)
          }}
          className="group relative flex h-[72px] w-[72px] cursor-grab items-center justify-center overflow-hidden rounded-full border-4 border-white bg-primary-900 shadow-[0_18px_40px_rgba(15,53,92,0.32)] transition-transform hover:scale-105 active:cursor-grabbing"
          style={{ touchAction: 'none' }}
          aria-label="Open AI assistant"
        >
          <img
            src={departmentLogoImage}
            alt="Bugema AI Assistant"
            className="h-full w-full object-cover"
            draggable={false}
          />
          <span className="absolute -bottom-1 -right-1 rounded-full bg-accent-500 px-2 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-md">
            AI
          </span>
        </button>
      </div>

      {isOpen && viewport.width > 0 && (
        <div
          ref={panelRef}
          className="fixed z-[139] overflow-hidden rounded-[2rem] border border-primary-200 bg-white shadow-[0_24px_60px_rgba(15,53,92,0.22)]"
          style={{
            width: `${panelWidth}px`,
            maxHeight: `${panelHeight}px`,
            left: `${panelLeft}px`,
            top: `${panelTop}px`,
          }}
        >
          <div className="flex items-center justify-between border-b border-primary-100 bg-primary-900 px-5 py-4 text-white">
            <div>
              <p className="text-lg font-black uppercase tracking-wide">AI Assistant</p>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-200">
                Website Guide
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={resetConversation}
                className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary-100 hover:bg-white/10"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-white/20 p-2 text-primary-100 hover:bg-white/10"
                aria-label="Close assistant"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex h-full max-h-[430px] flex-col">
            <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50 px-4 py-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={message.role === 'user' ? 'flex justify-end' : 'flex justify-start'}
                >
                  <div
                    className={
                      message.role === 'user'
                        ? 'max-w-[85%] rounded-[1.5rem] rounded-br-md bg-primary-900 px-4 py-3 text-sm text-white'
                        : 'max-w-[90%] rounded-[1.5rem] rounded-bl-md bg-white px-4 py-3 text-sm text-primary-900 shadow-sm'
                    }
                  >
                    <p className="leading-relaxed">{message.text}</p>
                    {message.actions?.length ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {message.actions.map((action) => (
                          <button
                            key={`${message.id}-${action.path}`}
                            type="button"
                            onClick={() => {
                              navigate(action.path)
                              setIsOpen(false)
                            }}
                            className="rounded-full bg-primary-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-800 hover:bg-primary-200"
                          >
                            {action.label}
                          </button>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-primary-100 bg-white px-4 py-4">
              <div className="mb-3 flex flex-wrap gap-2">
                {suggestedPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => sendPrompt(prompt)}
                    className="rounded-full border border-primary-200 bg-primary-50 px-3 py-1.5 text-xs font-bold text-primary-800 hover:border-primary-300 hover:bg-primary-100"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  sendPrompt(input)
                }}
                className="flex items-end gap-3"
              >
                <textarea
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  rows={2}
                  placeholder="Ask about this website..."
                  className="min-h-[56px] flex-1 rounded-2xl border border-primary-200 bg-slate-50 px-4 py-3 text-sm text-primary-900 outline-none transition-colors placeholder:text-primary-400 focus:border-accent-500 focus:bg-white"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-accent-500 px-5 text-sm font-black uppercase tracking-wider text-white hover:bg-accent-600"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SiteAssistant
