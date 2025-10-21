// src/components/Navbar.jsx
import { Menu, X, Code, ChevronRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { scrollToSection } from "../lib/actions";
import { useActiveSection } from "../lib/hooks";
import logo from "../assets/XU.png"; // Import your logo from assets

const sections = ["home", "services", "about", "our clients", "FAQ", "contact"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const active = useActiveSection(sections);

  // Disable background scrolling when sidebar is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleLinkClick = (section) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-white/20 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center space-x-1">
              <div className="w-20 h-20 bg-transperent">
                <img 
                  src={logo} 
                  alt="Xpertuse Logo" 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Xpertuse
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {sections.map((s) => (
                <button
                  key={s}
                  onClick={() => scrollToSection(s)}
                  className={`capitalize font-medium transition-all duration-300 hover:text-blue-600 relative group ${
                    active === s ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  {s}
                  {/* Animated underline */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                    active === s ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/25"
              >
                Get Quote
              </button>
            </div>

            {/* Enhanced Mobile Hamburger */}
            <button 
              className="md:hidden relative p-2 z-[60] group" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative flex items-center justify-center">
                {/* Animated hamburger lines */}
                <div className={`absolute h-0.5 w-6 bg-gray-700 transition-all duration-300 ease-in-out ${
                  isMenuOpen 
                    ? 'rotate-45 bg-white' 
                    : 'translate-y-[-8px]'
                }`} />
                <div className={`absolute h-0.5 w-6 bg-gray-700 transition-all duration-300 ease-in-out ${
                  isMenuOpen 
                    ? 'opacity-0 bg-white' 
                    : 'opacity-100'
                }`} />
                <div className={`absolute h-0.5 w-6 bg-gray-700 transition-all duration-300 ease-in-out ${
                  isMenuOpen 
                    ? '-rotate-45 bg-white' 
                    : 'translate-y-[8px]'
                }`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Backdrop Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Right Sliding Sidebar - Matching Navbar Style */}
      <div className={`
        fixed top-0 right-0 h-full w-80 z-50 md:hidden
        transform transition-all duration-500 ease-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Glass-morphism Sidebar Background - Matching Navbar */}
        <div className="h-full bg-white/90 backdrop-blur-xl border-l border-white/30 shadow-2xl">
          {/* Sidebar Content */}
          <div className="flex flex-col h-full">
            
            {/* Header Section */}
            <div className="pt-20 pb-6 px-6 bg-gradient-to-br from-blue-50/50 to-purple-50/50 border-b border-white/20">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Navigation
                </span>
              </div>
              <p className="text-xs text-gray-600">Explore our services</p>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 py-6 px-4 space-y-2">
              {sections.map((section, index) => {
                const delay = `${index * 100}ms`;
                
                return (
                  <div
                    key={section}
                    style={{ 
                      animationDelay: delay,
                      transitionDelay: isMenuOpen ? delay : '0ms'
                    }}
                    className={`
                      transform transition-all duration-500 ease-out
                      ${isMenuOpen 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-8 opacity-0'
                      }
                    `}
                  >
                    <button
                      onClick={() => handleLinkClick(section)}
                      className={`
                        group relative w-full text-left p-4 rounded-xl
                        transition-all duration-300 ease-out
                        hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50
                        transform hover:scale-[1.02] hover:shadow-md
                        ${active === section 
                          ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 shadow-sm' 
                          : 'text-gray-700 hover:text-blue-600'
                        }
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <span className="capitalize font-medium text-base">
                          {section}
                        </span>
                        <ChevronRight className={`w-4 h-4 transition-all duration-300 ${
                          active === section 
                            ? 'text-blue-600 translate-x-1' 
                            : 'text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1'
                        }`} />
                      </div>
                      
                      {/* Active indicator */}
                      {active === section && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-r-full" />
                      )}
                    </button>
                  </div>
                );
              })}

              {/* Special CTA Button */}
              <div
                style={{ 
                  animationDelay: `${sections.length * 100}ms`,
                  transitionDelay: isMenuOpen ? `${sections.length * 100}ms` : '0ms'
                }}
                className={`
                  transform transition-all duration-500 ease-out mt-6
                  ${isMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-8 opacity-0'
                  }
                `}
              >
                <button
                  onClick={() => handleLinkClick("contact")}
                  className="
                    group relative w-full p-4 rounded-xl
                    bg-gradient-to-r from-blue-600 to-purple-600
                    text-white font-semibold text-center
                    transform transition-all duration-300
                    hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25
                    active:scale-[0.98]
                  "
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Quote
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="p-6 border-t border-white/20 bg-gradient-to-br from-gray-50/50 to-blue-50/50">
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-2">
                  Swipe right or tap outside to close
                </p>
                <div className="flex items-center justify-center space-x-1">
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
