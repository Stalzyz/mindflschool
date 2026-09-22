import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from './HeroCarousel';
import { ArrowRight, Shield, Smile, MapPin, Sparkles } from 'lucide-react';

export default function SunHeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / (innerWidth / 2);
    const y = (clientY - innerHeight / 2) / (innerHeight / 2);
    setMousePos({ x, y });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-20 border-b border-[#EAE4D7] overflow-hidden text-white"
    >
      {/* Background Architecture Carousel Slider */}
      <HeroCarousel />

      {/* Floating Glassmorphism Badge Chips */}
      <div className="hero-chip-container hidden md:block">
        <div 
          className="hero-chip chip-1"
          style={{ transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0)` }}
        >
          <Shield className="w-4 h-4 text-[#7a9660]" />
          <span>Nature &amp; Play Village</span>
        </div>

        <div 
          className="hero-chip chip-2"
          style={{ transform: `translate3d(${mousePos.x * -25}px, ${mousePos.y * 25}px, 0)` }}
        >
          <Smile className="w-4 h-4 text-[#e0a83e]" />
          <span>Inquiry-Led Learning</span>
        </div>

        <div 
          className="hero-chip chip-3"
          style={{ transform: `translate3d(${mousePos.x * 18}px, ${mousePos.y * -18}px, 0)` }}
        >
          <MapPin className="w-4 h-4 text-[#b8552d]" />
          <span>Coimbatore, Tamil Nadu</span>
        </div>

        <div 
          className="hero-chip chip-4"
          style={{ transform: `translate3d(${mousePos.x * -22}px, ${mousePos.y * -22}px, 0)` }}
        >
          <Sparkles className="w-4 h-4 text-[#7a9660]" />
          <span>Mindful Early Years</span>
        </div>
      </div>

      {/* Floating Parallax Foreground Botanical SVGs */}
      <div 
        className="hero-float-leaf leaf-l1 absolute z-20 left-[4%] top-[18%]"
        style={{ transform: `translate3d(${mousePos.x * 35}px, ${mousePos.y * 35}px, 0)` }}
      >
        <svg width="80" height="80" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 5 C46 14 50 36 30 55 C10 36 14 14 30 5Z" fill="#A4C28A" opacity="0.75"/>
          <line x1="30" y1="7" x2="30" y2="52" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5"/>
        </svg>
      </div>

      <div 
        className="hero-float-leaf leaf-l2 absolute z-20 right-[5%] top-[24%]"
        style={{ transform: `translate3d(${mousePos.x * -40}px, ${mousePos.y * 30}px, 0)` }}
      >
        <svg width="68" height="68" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 5 C46 14 50 36 30 55 C10 36 14 14 30 5Z" fill="#f0c874" opacity="0.75"/>
          <line x1="30" y1="7" x2="30" y2="52" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5"/>
        </svg>
      </div>

      <div 
        className="hero-float-leaf leaf-l3 absolute z-20 left-[8%] bottom-[16%]"
        style={{ transform: `translate3d(${mousePos.x * 30}px, ${mousePos.y * -30}px, 0)` }}
      >
        <svg width="58" height="58" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 5 C46 14 50 36 30 55 C10 36 14 14 30 5Z" fill="#C86A3E" opacity="0.65"/>
        </svg>
      </div>

      <div 
        className="hero-float-leaf leaf-l4 absolute z-20 right-[8%] bottom-[20%]"
        style={{ transform: `translate3d(${mousePos.x * -35}px, ${mousePos.y * -35}px, 0)` }}
      >
        <svg width="72" height="72" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 5 C46 14 50 36 30 55 C10 36 14 14 30 5Z" fill="#465e33" opacity="0.70"/>
        </svg>
      </div>

      {/* Primary Hero Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-30">
        
        {/* Animated Sun Hero Component */}
        <div 
          className="sun-wrap relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto mb-2 transition-transform duration-200 ease-out cursor-pointer"
          style={{ transform: `translate3d(${mousePos.x * 16}px, ${mousePos.y * 16}px, 0)` }}
        >
          <svg 
            id="sun-rays" 
            className="w-full h-full drop-shadow-lg" 
            viewBox="0 0 300 300" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ animation: 'sunRotate 12s linear infinite', transformOrigin: 'center' }}
          >
            <g stroke="#e0a83e" strokeLinecap="round" strokeWidth="4.5" opacity="0.9">
              <line x1="150" y1="40" x2="150" y2="70"/>
              <line x1="150" y1="230" x2="150" y2="260"/>
              <line x1="40" y1="150" x2="70" y2="150"/>
              <line x1="230" y1="150" x2="260" y2="150"/>
              <line x1="72" y1="72" x2="93" y2="93"/>
              <line x1="207" y1="207" x2="228" y2="228"/>
              <line x1="72" y1="228" x2="93" y2="207"/>
              <line x1="207" y1="93" x2="228" y2="72"/>
              <line x1="105" y1="50" x2="115" y2="76"/>
              <line x1="195" y1="250" x2="185" y2="224"/>
              <line x1="50" y1="105" x2="76" y2="115"/>
              <line x1="250" y1="195" x2="224" y2="185"/>
              <line x1="105" y1="250" x2="115" y2="224"/>
              <line x1="195" y1="50" x2="185" y2="76"/>
              <line x1="50" y1="195" x2="76" y2="185"/>
              <line x1="250" y1="105" x2="224" y2="115"/>
            </g>
            <circle cx="150" cy="150" r="76" fill="#f0c874" stroke="#e0a83e" strokeWidth="3"/>
            <circle cx="130" cy="142" r="4.5" fill="#2b2416" opacity="0.85"/>
            <circle cx="170" cy="142" r="4.5" fill="#2b2416" opacity="0.85"/>
            <path d="M126,164 Q150,182 174,164" stroke="#2b2416" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.85"/>
          </svg>
        </div>

        <div className="space-y-3">
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md text-[#F2EDE2] border border-white/25 rounded-full text-xs font-semibold tracking-widest uppercase shadow-sm">
            Welcome to MINDFL
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-lg">
            A Progressive Learning Village<br />
            <span className="italic font-serif text-[#A4C28A]">for the Early Years</span>
          </h1>
        </div>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#F2EDE2] leading-relaxed drop-shadow-sm font-light">
          A nurturing space in Sivaram Nagar, Coimbatore where curiosity becomes confidence, play becomes purpose, and children grow close to nature.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/about"
            className="px-7 py-3.5 bg-white/90 hover:bg-white text-[#1F291E] font-semibold text-sm rounded-full shadow-lg transition-all transform hover:scale-105"
          >
            Learn More
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#7a9660] hover:bg-[#5e7a45] text-white font-bold text-sm rounded-full shadow-lg transition-all transform hover:scale-105"
          >
            Begin Journey
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Wander on down scroll indicator */}
        <div className="pt-6 flex flex-col items-center gap-2 text-white/80 font-serif italic text-sm">
          <span>wander on down</span>
          <svg 
            width="16" 
            height="24" 
            viewBox="0 0 16 24" 
            fill="none" 
            className="animate-bounce text-[#A4C28A]"
          >
            <path d="M8 1V22M8 22L2 16M8 22L14 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

      </div>
    </section>
  );
}
