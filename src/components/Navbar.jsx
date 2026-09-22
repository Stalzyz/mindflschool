import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Why MINDFL', path: '/why-mindfl' },
    { name: 'Our Programs', path: '/programs' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#F8F6F0]/95 backdrop-blur-md border-b border-[#E5E0D3] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#7a9660]/10 border border-[#7a9660]/30 flex items-center justify-center text-[#5e7a45] group-hover:bg-[#7a9660] group-hover:text-white transition-all duration-300">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#1F291E] block leading-none">
                MINDFL
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#5e7a45] font-semibold block mt-1">
                Early Years
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - 5 Major Pages */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  isActive(link.path)
                    ? 'bg-[#7a9660] text-white font-semibold shadow-sm'
                    : 'text-[#3A4739] hover:text-[#1F291E] hover:bg-[#EAE4D7]'
                }`}
              >
                {link.name}
              </Link>
            ))}
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
        <div className="md:hidden bg-[#F8F6F0] border-b border-[#E5E0D3] px-4 pt-2 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => (
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
          ))}
        </div>
      )}
    </header>
  );
}
