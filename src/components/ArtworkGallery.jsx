import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, Sparkles } from 'lucide-react';
import { BohoSunburst, BohoLeaf } from './BohoShapes';

export default function ArtworkGallery() {
  const artworks = [
    { id: 'd1', src: '/images/artworks/d1.jpg', title: 'Nature Expressions 1', desc: 'Exploration through clay and natural pigments.' },
    { id: 'd2', src: '/images/artworks/d2.jpg', title: 'Nature Expressions 2', desc: 'Hands-on discovery in the Atelier studio.' },
    { id: 'd3', src: '/images/artworks/d3.jpg', title: 'Nature Expressions 3', desc: 'Theme-based creative problem solving.' },
    { id: 'd4', src: '/images/artworks/d4.jpg', title: 'Nature Expressions 4', desc: 'Rhythmic patterns inspired by outdoor play.' },
    { id: 'd5', src: '/images/artworks/d5.jpg', title: 'Nature Expressions 5', desc: 'The Hundred Languages of early childhood.' },
    { id: 'd6', src: '/images/artworks/d6.jpg', title: 'Nature Expressions 6', desc: 'Mindful art exploration with honest materials.' },
    { id: 'k1', src: '/images/artworks/k1.jpg', title: 'Village Atelier Work 1', desc: 'Collaborative project work by young crafters.' },
    { id: 'k2', src: '/images/artworks/k2.jpg', title: 'Village Atelier Work 2', desc: 'Observation and documentation of nature.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? artworks.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === artworks.length - 1 ? 0 : prev + 1));
  };

  // Autoplay carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="relative bg-[#FAF7F0] py-16 sm:py-20 border-y border-[#EAE4D7] overflow-hidden my-12">
      
      {/* Background Boho Elements */}
      <div className="absolute top-4 left-4 pointer-events-none">
        <BohoSunburst className="w-24 h-24 text-[#C86A3E]/15" />
      </div>
      <div className="absolute bottom-4 right-4 pointer-events-none">
        <BohoLeaf className="w-32 h-32 text-[#7a9660]/15" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#5e7a45] font-semibold bg-[#7a9660]/15 px-3 py-1 rounded-full">
            Creative Expressions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F291E]">
            Student's Artworks
          </h2>
          <p className="text-sm sm:text-base text-[#4A5548] leading-relaxed">
            In our Atelier studio, children express their ideas through the "Hundred Languages" of art, clay, soil, and natural textures.
          </p>
        </div>

        {/* Slidable Carousel Gallery */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Main Slide Display */}
          <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-[#FAF8F3] border-4 border-white rounded-3xl overflow-hidden shadow-xl group">
            <img
              src={artworks[currentIndex].src}
              alt={artworks[currentIndex].title}
              className="w-full h-full object-cover transition-all duration-700 ease-out"
            />

            {/* Overlay Info */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1F291E]/90 via-[#1F291E]/50 to-transparent p-6 sm:p-8 text-white flex items-end justify-between">
              <div className="space-y-1">
                <span className="text-xs uppercase font-semibold text-[#A4C28A] tracking-wider block">
                  Artwork {currentIndex + 1} of {artworks.length}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold">
                  {artworks[currentIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#D5E3CD] max-w-xl">
                  {artworks[currentIndex].desc}
                </p>
              </div>

              <button
                onClick={() => setSelectedImage(artworks[currentIndex].src)}
                className="p-3 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md transition shadow-md flex-shrink-0"
                title="Expand image"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>

            {/* Prev Button */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white text-[#1F291E] flex items-center justify-center shadow-lg transition-all transform hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white text-[#1F291E] flex items-center justify-center shadow-lg transition-all transform hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots & Thumbnails Strip */}
          <div className="flex items-center justify-center gap-2 mt-6 overflow-x-auto py-2">
            {artworks.map((art, idx) => (
              <button
                key={art.id}
                onClick={() => setCurrentIndex(idx)}
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                  currentIndex === idx
                    ? 'border-[#7a9660] scale-105 shadow-md ring-2 ring-[#7a9660]/30'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={art.src} alt={art.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 bg-white/20 text-white rounded-full hover:bg-white/40 transition"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Artwork preview"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}

    </section>
  );
}
