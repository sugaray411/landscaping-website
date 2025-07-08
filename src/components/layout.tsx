import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const smoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleNavClick = (path: string, elementId?: string) => {
    setMobileMenuOpen(false)
    if (elementId && location.pathname === '/') {
      smoothScroll(elementId)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Header */}
      <div className="bg-green-800 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <a href="mailto:edwingrivera21@hotmail.com" className="hover:text-green-300">
                📧 edwingrivera21@hotmail.com
              </a>
              <a href="https://maps.app.goo.gl/Pne4BxoercNeAxL67" className="hover:text-green-300">
                📍 Bowie, Maryland
              </a>
              <a href="https://www.facebook.com/RiverasLandscapingLLC.MD/" className="hover:text-green-300">
                📘 Riveras Landscaping LLC
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:(301) 828-0207" className="text-lg font-bold">(301) 828-0207</a>
              <button
                onClick={() => location.pathname === '/' ? smoothScroll('contact') : null}
                className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition-colors"
              >
                {location.pathname === '/' ? (
                  <span onClick={() => smoothScroll('contact')}>Reach Out Today</span>
                ) : (
                  <Link to="/#contact">Reach Out Today</Link>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">HOME</Link>
              <Link to="/lawn-care" className="text-gray-700 hover:text-green-600 font-medium transition-colors">LAWN CARE</Link>
              <Link to="/landscaping" className="text-gray-700 hover:text-green-600 font-medium transition-colors">LANDSCAPING</Link>
              <Link to="/tree-services" className="text-gray-700 hover:text-green-600 font-medium transition-colors">TREE SERVICES</Link>
              {location.pathname === '/' ? (
                <button
                  onClick={() => smoothScroll('portfolio')}
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                >
                  PORTFOLIO
                </button>
              ) : (
                <Link to="/#portfolio" className="text-gray-700 hover:text-green-600 font-medium transition-colors">PORTFOLIO</Link>
              )}
              {location.pathname === '/' ? (
                <button
                  onClick={() => smoothScroll('contact')}
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                >
                  CONTACT
                </button>
              ) : (
                <Link to="/#contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">CONTACT</Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-4 border-t border-gray-200">
              <Link
                to="/"
                className="block text-gray-700 hover:text-green-600 font-medium transition-colors"
                onClick={() => handleNavClick('/')}
              >
                HOME
              </Link>
              <Link
                to="/lawn-care"
                className="block text-gray-700 hover:text-green-600 font-medium transition-colors"
                onClick={() => handleNavClick('/lawn-care')}
              >
              
                LANDSCAPING
              </Link>
              <Link
                to="/tree-services"
                className="block text-gray-700 hover:text-green-600 font-medium transition-colors"
                onClick={() => handleNavClick('/tree-services')}
              >
                  LAWN CARE
              </Link>
              <Link
                to="/landscaping"
                className="block text-gray-700 hover:text-green-600 font-medium transition-colors"
                onClick={() => handleNavClick('/landscaping')}
              >
                TREE SERVICES
              </Link>
              {location.pathname === '/' ? (
                <button
                  onClick={() => {
                    handleNavClick('/', 'portfolio')
                    smoothScroll('portfolio')
                  }}
                  className="block text-gray-700 hover:text-green-600 font-medium transition-colors w-full text-left"
                >
                  PORTFOLIO
                </button>
              ) : (
                <Link
                  to="/#portfolio"
                  className="block text-gray-700 hover:text-green-600 font-medium transition-colors"
                  onClick={() => handleNavClick('/#portfolio')}
                >
                  PORTFOLIO
                </Link>
              )}
              {location.pathname === '/' ? (
                <button
                  onClick={() => {
                    handleNavClick('/', 'contact')
                    smoothScroll('contact')
                  }}
                  className="block text-gray-700 hover:text-green-600 font-medium transition-colors w-full text-left"
                >
                  CONTACT
                </button>
              ) : (
                <Link
                  to="/#contact"
                  className="block text-gray-700 hover:text-green-600 font-medium transition-colors"
                  onClick={() => handleNavClick('/#contact')}
                >
                  CONTACT
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Main Menu */}
            <div>
            <img src="https://ext.same-assets.com/916247137/1111513349.png" alt="Rivera Landscaping LLC" className="h-16 mb-6" />
              <h3 className="text-lg font-bold mb-4">MAIN MENU</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-green-400 transition-colors">🏠 HOME</Link></li>
                <li><Link to="/lawn-care" className="hover:text-green-400 transition-colors">🌱 LAWN CARE</Link></li>
                <li><Link to="/landscaping" className="hover:text-green-400 transition-colors">🌿 LANDSCAPE</Link></li>
                <li><Link to="/tree-services" className="hover:text-green-400 transition-colors">🌳 TREE SERVICES</Link></li>
                <li>
                  {location.pathname === '/' ? (
                    <button onClick={() => smoothScroll('portfolio')} className="hover:text-green-400 transition-colors">
                      📷 OUR PORTFOLIO
                    </button>
                  ) : (
                    <Link to="/#portfolio" className="hover:text-green-400 transition-colors">📷 OUR PORTFOLIO</Link>
                  )}
                </li>
                <li>
                  {location.pathname === '/' ? (
                    <button onClick={() => smoothScroll('contact')} className="hover:text-green-400 transition-colors">
                      📞 CONTACT
                    </button>
                  ) : (
                    <Link to="/#contact" className="hover:text-green-400 transition-colors">📞 CONTACT</Link>
                  )}
                </li>
              </ul>
            </div>

            {/* General Services */}
            <div>
              <h3 className="text-lg font-bold mb-4">GENERAL SERVICES</h3>
              <ul className="space-y-2">
                <li className="flex items-center">🍂 Mulching</li>
                <li className="flex items-center">🌸 Flower Bed</li>
                <li className="flex items-center">🧹 Yard Cleanup</li>
                <li className="flex items-center">🪓 Tree Removal</li>
                <li className="flex items-center">✂️ Tree Trimming</li>
                <li className="flex items-center">🌱 Lawn Maintenance</li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-lg font-bold mb-4">CONTACT DETAILS</h3>
              <ul className="space-y-2">
                <li><a href="tel:(301) 828-0207" className="hover:text-green-400 transition-colors">📞 (301) 828-0207</a></li>
                <li><a href="https://www.facebook.com/RiverasLandscapingLLC.MD/" className="hover:text-green-400 transition-colors">📘 Riveras Landscaping LLC</a></li>
                <li><a href="mailto:edwingrivera21@hotmail.com" className="hover:text-green-400 transition-colors">📧 edwingrivera21@hotmail.com</a></li>
                <li><a href="https://maps.app.goo.gl/Pne4BxoercNeAxL67" className="hover:text-green-400 transition-colors">📍 Bowie, Maryland</a></li>
                <li className="flex items-center">🕒 Mon - Fri: 7:00AM to 7:00PM<br />Saturday: 8:00AM to 3:00PM</li>
              </ul>
            </div>

            {/* Additional Info */}
            <div>
              <p className="text-sm text-gray-400 mb-4">
                2024 Copyright <strong>RIVERAS LANDSCAPING LLC.</strong> All Rights Reserved.
              </p>
              <p className="text-sm text-gray-400">
                Design by <strong>GOLDEN DIGITAL SOLUTIONS.</strong>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Call Now Button (Fixed) */}
      <a
        href="tel:(301) 828-0207"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg transition-colors z-50"
      >
        📞 Call Now
      </a>
    </div>
  )
}
