import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroCarousel() {
  const images = [
    '/images/architecture/a1.jpg',
    '/images/architecture/a2.jpg',
    '/images/architecture/a3.jpg',
    '/images/architecture/a4.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={img}
            alt={`MINDFL Campus Architecture ${idx + 1}`}
            className="w-full h-full object-cover scale-105 animate-zoom-bg"
          />
        </div>
      ))}

      {/* Dark & Warm Overlay Gradient for maximum text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1F291E]/80 via-[#1F291E]/65 to-[#1F291E]/90 z-20 backdrop-blur-[2px]" />

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white backdrop-blur-md transition-all hidden sm:flex items-center justify-center"
        aria-label="Previous Hero Background"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white backdrop-blur-md transition-all hidden sm:flex items-center justify-center"
        aria-label="Next Hero Background"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all ${
              currentIndex === idx
                ? 'w-8 bg-[#A4C28A]'
                : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
