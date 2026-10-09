import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [programsDropdown, setProgramsDropdown] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const stages = [
    { name: 'All Programs Overview', path: '/programs', desc: 'Holistic early childhood pathways' },
    { name: 'Stage 1: Parent–Toddler', path: '/programs#stage-1', age: '6 – 24 Months', desc: 'Sanctuary & respectful attachment' },
    { name: 'Stage 2: Sprouts', path: '/programs#stage-2', age: '2 – 3 Years', desc: 'The leap into autonomy' },
    { name: 'Stage 3: Seedlings', path: '/programs#stage-3', age: '3 – 4 Years', desc: 'Curiosity becomes inquiry (From 8:30 AM)' },
    { name: 'Stage 4: Buds', path: '/programs#stage-4', age: '4 – 5 Years', desc: 'Building meaning & phonics (From 8:30 AM)' },
    { name: 'Stage 5: Blossoms', path: '/programs#stage-5', age: '5 – 6 Years', desc: 'Ready for school & life (From 8:30 AM)' },
  ];

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Why MINDFL', path: '/why-mindfl' },
    { name: 'Our Programs', path: '/programs', isDropdown: true },
    { name: 'Architecture', path: '/architecture' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProgramsDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setProgramsDropdown(false);
    setMobileProgramsOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className="sticky top-0 z-50 bg-[#F8F6F0]/95 backdrop-blur-md border-b border-[#E5E0D3] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/mindfl_logo.png" 
              alt="MINDFL Early Years" 
              className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {mainLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div
                    key={link.name}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setProgramsDropdown(true)}
                    onMouseLeave={() => setProgramsDropdown(false)}
                  >
                    <div className="flex items-center">
                      <Link
                        to={link.path}
                        className={`px-3.5 py-2 text-sm font-medium rounded-l-full transition-all flex items-center gap-1 ${
                          isActive(link.path)
                            ? 'bg-[#7a9660] text-white font-semibold shadow-sm'
                            : 'text-[#3A4739] hover:text-[#1F291E] hover:bg-[#EAE4D7]'
                        }`}
                      >
                        {link.name}
                      </Link>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setProgramsDropdown(!programsDropdown);
                        }}
                        aria-label="Toggle Programs Dropdown"
                        className={`py-2 pr-3 pl-1 text-sm rounded-r-full transition-all ${
                          isActive(link.path)
                            ? 'bg-[#7a9660] text-white'
                            : 'text-[#3A4739] hover:text-[#1F291E] hover:bg-[#EAE4D7]'
                        }`}
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${programsDropdown ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {/* Dropdown Menu */}
                    {programsDropdown && (
                      <div className="absolute top-full left-0 mt-1 w-80 bg-[#FAF8F3] border border-[#E2D9C8] rounded-2xl shadow-xl py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="px-3 py-1.5 border-b border-[#EAE4D7] mb-1.5">
                          <span className="text-[11px] uppercase font-bold tracking-wider text-[#7a9660]">
                            Stages of Programs
                          </span>
                        </div>
                        {stages.map((stage, idx) => (
                          <Link
                            key={idx}
                            to={stage.path}
                            onClick={() => setProgramsDropdown(false)}
                            className="block px-3 py-2 rounded-xl hover:bg-[#EAE4D7] transition-colors group"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs sm:text-sm font-semibold text-[#1F291E] group-hover:text-[#2C4A2E]">
                                {stage.name}
                              </span>
                              {stage.age && (
                                <span className="text-[10px] font-medium bg-[#7a9660]/15 text-[#466632] px-2 py-0.5 rounded-full">
                                  {stage.age}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-[#556953] truncate mt-0.5">
                              {stage.desc}
                            </p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all ${
                    isActive(link.path)
                      ? 'bg-[#7a9660] text-white font-semibold shadow-sm'
                      : 'text-[#3A4739] hover:text-[#1F291E] hover:bg-[#EAE4D7]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-[#3a5238] hover:bg-[#EAE4D7] focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#F8F6F0] border-b border-[#E5E0D3] px-4 pt-2 pb-6 space-y-2 shadow-lg max-h-[85vh] overflow-y-auto">
          {mainLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div key={link.name} className="space-y-1">
                  <div className="flex items-center justify-between bg-[#EFE9DC] rounded-xl px-4 py-2.5">
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-semibold text-[#1F291E]"
                    >
                      {link.name}
                    </Link>
                    <button
                      onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                      className="p-1 text-[#3a5238]"
                      aria-label="Toggle stages submenu"
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform ${mobileProgramsOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {mobileProgramsOpen && (
                    <div className="pl-3 space-y-1 pt-1 border-l-2 border-[#7a9660]/40 ml-2">
                      {stages.map((stage, sIdx) => (
                        <Link
                          key={sIdx}
                          to={stage.path}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileProgramsOpen(false);
                          }}
                          className="block px-3 py-2 text-xs sm:text-sm font-medium rounded-lg text-[#2D3A2C] hover:bg-[#E2D9C8]"
                        >
                          <div className="font-semibold text-[#1F291E]">{stage.name}</div>
                          <div className="text-[11px] text-[#556953]">{stage.desc}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                  isActive(link.path)
                    ? 'bg-[#7a9660] text-white font-semibold'
                    : 'text-[#3a5238] hover:bg-[#EAE4D7]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
