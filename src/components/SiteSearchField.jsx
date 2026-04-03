import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { searchSite } from '../data/siteKnowledge'

const SiteSearchField = ({ mobile = false, onAfterNavigate = () => {} }) => {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  const results = query.trim() ? searchSite(query, mobile ? 4 : 5) : []

  useEffect(() => {
    setQuery('')
    setIsOpen(false)
  }, [location.pathname, location.search])

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!wrapperRef.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }

    window.addEventListener('pointerdown', handlePointerDown)

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [])

  const goToSearchPage = () => {
    const trimmedQuery = query.trim()

    if (!trimmedQuery) {
      return
    }

    navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`)
    onAfterNavigate()
    setIsOpen(false)
  }

  const goToResult = (path) => {
    navigate(path)
    onAfterNavigate()
    setIsOpen(false)
  }

  return (
    <div ref={wrapperRef} className="relative">
      <form
        onSubmit={(event) => {
          event.preventDefault()
          goToSearchPage()
        }}
      >
        <input
          type="search"
          placeholder={mobile ? 'Search website...' : 'Search website'}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setIsOpen(false)
            }
          }}
          className={
            mobile
              ? 'w-full pl-10 pr-12 py-3 bg-white border border-slate-200 rounded-lg text-primary-900 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-500 shadow-sm'
              : 'w-48 xl:w-64 pl-10 pr-12 py-2 bg-white border border-slate-200 rounded-full text-sm text-primary-900 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all shadow-sm'
          }
          aria-label="Search the website"
        />
        <svg
          className={mobile ? 'absolute left-3 top-3.5 text-primary-400 w-5 h-5' : 'absolute left-3 top-2.5 text-primary-400 w-4 h-4'}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <button
          type="submit"
          className={
            mobile
              ? 'absolute right-2 top-2 inline-flex items-center justify-center rounded-md bg-primary-900 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-primary-800 transition-colors'
              : 'absolute right-1.5 top-1.5 inline-flex items-center justify-center rounded-full bg-primary-900 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white hover:bg-primary-800 transition-colors'
          }
        >
          Go
        </button>
      </form>

      {isOpen && query.trim() && (
        <div className="absolute left-0 right-0 z-[120] mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,53,92,0.16)]">
          {results.length ? (
            <>
              <div className="border-b border-slate-100 px-4 py-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-500">
                  Search Results
                </p>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {results.map((result) => (
                  <button
                    key={result.path}
                    type="button"
                    onClick={() => goToResult(result.path)}
                    className="flex w-full flex-col gap-1 border-b border-slate-100 px-4 py-3 text-left transition-colors last:border-b-0 hover:bg-primary-50"
                  >
                    <span className="text-sm font-bold text-primary-900">{result.title}</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent-600">
                      {result.path}
                    </span>
                    <span className="text-sm text-primary-700">{result.snippet}</span>
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={goToSearchPage}
                className="w-full bg-slate-50 px-4 py-3 text-left text-sm font-bold text-primary-900 transition-colors hover:bg-primary-100"
              >
                View all results for "{query.trim()}"
              </button>
            </>
          ) : (
            <div className="px-4 py-4">
              <p className="text-sm font-semibold text-primary-900">No quick matches found.</p>
              <button
                type="button"
                onClick={goToSearchPage}
                className="mt-2 text-sm font-bold text-accent-600 hover:text-accent-700"
              >
                Search the full website for "{query.trim()}"
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SiteSearchField
