import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { departmentLogoImage } from '../assets/images'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/programs', label: 'Programs' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/alumni', label: 'Alumni' },
    { path: '/dashboard', label: 'Student Portal' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-slate-50 text-primary-900 shadow-sm sticky top-0 z-50 border-b border-slate-200" role="navigation" aria-label="Primary navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center relative w-24 sm:w-32 transition-all">
            <Link to="/" className="group absolute top-1 sm:-top-1 z-[90]">
              <img 
                src={departmentLogoImage} 
                alt="Bugema University logo" 
                className="h-24 w-24 sm:h-32 sm:w-32 rounded-full border-4 border-white shadow-[0_10px_25px_rgba(15,53,92,0.2)] bg-white object-contain transition-transform group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 ml-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-primary-900 ${isActive(link.path) ? 'active' : ''}`}
                aria-current={isActive(link.path) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4 ml-auto">
            {/* Search */}
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-40 xl:w-56 pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-primary-900 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all shadow-sm"
                aria-label="Search"
              />
              <svg className="absolute left-3 top-2.5 text-primary-400 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {/* CTA Buttons */}
            <Link 
              to="/login" 
              className={`text-primary-900 font-bold uppercase tracking-wider text-xs px-5 py-2.5 rounded-full border-2 border-primary-400 shadow-[0_0_15px_rgba(92,142,194,0.4)] hover:shadow-[0_0_20px_rgba(58,113,170,0.8)] hover:border-primary-500 hover:bg-primary-50 transition-all ${isActive('/login') ? 'bg-primary-100 border-primary-500 shadow-[0_0_15px_rgba(58,113,170,0.8)]' : ''}`}
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className={`bg-primary-900 text-white font-bold uppercase tracking-widest text-xs px-6 py-2.5 rounded-full border-2 border-primary-500 shadow-[0_0_15px_rgba(58,113,170,0.6)] hover:shadow-[0_0_25px_rgba(58,113,170,0.9)] hover:-translate-y-0.5 hover:bg-primary-800 transition-all whitespace-nowrap`}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-900 hover:text-accent-500 focus:outline-none transition-colors p-2"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-50 shadow-xl absolute top-20 left-0 w-full border-b border-slate-200">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block text-center nav-link text-primary-900 ${isActive(link.path) ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="pt-4 pb-3 mt-4 border-t border-slate-200">
                <div className="px-2">
                  <div className="relative">
                    <input
                      type="search"
                      placeholder="Search website..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-lg text-primary-900 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-500 shadow-sm"
                      aria-label="Search"
                    />
                    <svg className="absolute left-3 top-3.5 text-primary-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4 px-2">
                  <Link
                    to="/login"
                    className={`block w-full text-center text-primary-900 font-bold uppercase tracking-widest text-xs px-6 py-3.5 rounded-full border-2 border-primary-400 shadow-[0_0_15px_rgba(92,142,194,0.4)] hover:border-primary-500 hover:shadow-[0_0_20px_rgba(58,113,170,0.8)] hover:bg-primary-50 transition-all ${isActive('/login') ? 'bg-primary-100 border-primary-500 shadow-[0_0_15px_rgba(58,113,170,0.8)]' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Portal Login
                  </Link>
                  <Link
                    to="/register"
                    className={`block w-full text-center bg-primary-900 text-white font-bold uppercase tracking-widest text-xs px-6 py-3.5 rounded-full border-2 border-primary-500 shadow-[0_0_15px_rgba(58,113,170,0.6)] hover:shadow-[0_0_25px_rgba(58,113,170,0.9)] hover:bg-primary-800 transition-all`}
                    onClick={() => setIsOpen(false)}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
