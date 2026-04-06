import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { NAV_LINKS, SERVICIOS_LINKS } from '../../lib/Constants'
import { useScrollToSection } from '../../hooks/useScrollToSection'
import logo from '../../assets/logo.svg'
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const navigate = useNavigate()
  const { scrollTo } = useScrollToSection()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuOpen) return
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }, [location.pathname])

  const handleNavClick = (sectionId: string, href: string) => {
    if (sectionId === 'footer') {
      if (!isHome) {
        navigate('/#footer-scroll')
        setTimeout(() => {
          const el = document.getElementById('footer')
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 500)
      } else {
        const el = document.getElementById('footer')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else if (isHome) {
      scrollTo(sectionId)
    } else {
      navigate(href)
    }
    setMenuOpen(false)
  }

  const handleServiceClick = (href: string) => {
    navigate(href)
    setMenuOpen(false)
    setDropdownOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Clases dinámicas según estado de scroll
  const isLight = scrolled || menuOpen
  const linkClass = isLight
    ? 'text-[#5A9A2E] hover:text-[#3d6e1e]'
    : 'text-white/80 hover:text-[#7DC242]'
  const hamburgerClass = isLight ? 'text-[#5A9A2E]' : 'text-white/80 hover:text-[#7DC242]'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isLight
          ? 'bg-white shadow-md shadow-black/8 border-b border-gray-100'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => isHome && scrollTo('hero')}
          >
            
            <div className="flex flex-col leading-none">
              <img src={logo} alt="Logo ECOAFA" className="w-45 h-25 object-contain" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">

            {/* Servicios Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1 px-4 py-2 font-medium text-sm uppercase tracking-wider transition-colors duration-300 ${linkClass}`}
              >
                Servicios
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-64 transition-all duration-300 origin-top ${
                  dropdownOpen
                    ? 'opacity-100 scale-y-100 translate-y-0'
                    : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className={`border rounded-xl overflow-hidden shadow-2xl ${
                  isLight
                    ? 'bg-white border-gray-100 shadow-black/10'
                    : 'bg-black/90 backdrop-blur-xl border-white/10 shadow-black/50'
                }`}>
                  {SERVICIOS_LINKS.map((s, i) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      onClick={() => handleServiceClick(s.href)}
                      className={`flex items-center gap-3 px-5 py-3.5 text-sm transition-all duration-200 group ${
                        i !== SERVICIOS_LINKS.length - 1
                          ? isLight ? 'border-b border-gray-50' : 'border-b border-white/5'
                          : ''
                      } ${
                        isLight
                          ? 'text-[#5A9A2E] hover:text-[#3d6e1e] hover:bg-gray-50'
                          : 'text-white/70 hover:text-[#7DC242] hover:bg-white/5'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] group-hover:bg-[#7DC242] transition-colors duration-200 flex-shrink-0" />
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Nav Links */}
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.sectionId, link.href)}
                className={`px-4 py-2 font-medium text-sm uppercase tracking-wider transition-colors duration-300 relative group ${linkClass}`}
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-[#7DC242] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            ))}

            
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 transition-colors ${hamburgerClass}`}
            aria-label="Menú"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-400 overflow-hidden ${
            menuOpen ? 'max-h-[600px] opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`border-t pt-4 space-y-1 ${isLight ? 'border-gray-100' : 'border-white/10'}`}>
            <div>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 font-medium text-sm uppercase tracking-wider ${linkClass}`}
              >
                Servicios
                <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div className="pl-8 space-y-1 mt-1">
                  {SERVICIOS_LINKS.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      onClick={() => handleServiceClick(s.href)}
                      className={`flex items-center gap-2 py-2 text-sm transition-colors ${
                        isLight ? 'text-[#5A9A2E]/70 hover:text-[#3d6e1e]' : 'text-white/60 hover:text-[#7DC242]'
                      }`}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#00AEEF]" />
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.sectionId, link.href)}
                className={`w-full text-left px-4 py-3 font-medium text-sm uppercase tracking-wider transition-colors ${linkClass}`}
              >
                {link.label}
              </button>
            ))}

          </div>
        </div>
      </nav>
    </header>
  )
}