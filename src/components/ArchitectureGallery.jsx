import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, Compass } from 'lucide-react';

export default function ArchitectureGallery() {
  const images = [
    { src: '/images/architecture/a1.jpg', title: 'Signature Living Canopy Roof', desc: 'A multi-faceted canopy providing a low, human-scale sanctuary.' },
    { src: '/images/architecture/a2.jpg', title: 'The MINDFL Loop Pathway', desc: 'Continuous elliptical outdoor perimeter integrating over 36 play types.' },
    { src: '/images/architecture/a3.jpg', title: 'Fluid Studio Architecture', desc: 'Corridor-free spaces engineered with natural ergonomic materials.' },
    { src: '/images/architecture/a4.jpg', title: 'Lush Ecology & Greenery', desc: 'Nature-integrated landscape settled with human-centric lighting.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full my-10 space-y-6">
      
      {/* Title */}
      <div className="flex items-center gap-3 border-b border-[#E2D9C8] pb-4">
        <div className="w-10 h-10 bg-[#7a9660]/20 text-[#2C4A2E] rounded-lg flex items-center justify-center">
          <Compass className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-serif text-2xl font-bold text-[#1F291E]">
            Campus & Architecture Gallery
          </h3>
          <p className="text-xs text-[#5e7a45] font-medium">
            Explore our human-scale campus and fluid outdoor learning landscape.
          </p>
        </div>
      </div>

      {/* Slidable Carousel */}
      <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-[#1F291E] rounded-3xl overflow-hidden shadow-xl group border-4 border-white">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          className="w-full h-full object-cover transition-all duration-700 ease-out"
        />

        {/* Caption Overlay */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1F291E]/95 via-[#1F291E]/60 to-transparent p-6 sm:p-8 text-white flex items-end justify-between">
          <div className="space-y-1">
            <span className="text-xs uppercase font-semibold text-[#A4C28A] tracking-wider block">
              Campus View {currentIndex + 1} of {images.length}
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold">
              {images[currentIndex].title}
            </h4>
            <p className="text-xs sm:text-sm text-[#D5E3CD]">
              {images[currentIndex].desc}
            </p>
          </div>

          <button
            onClick={() => setSelectedImage(images[currentIndex].src)}
            className="p-3 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md transition shadow-md flex-shrink-0"
            title="Expand view"
          >
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-[#1F291E] flex items-center justify-center shadow-lg transition-all transform hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-[#1F291E] flex items-center justify-center shadow-lg transition-all transform hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center items-center gap-2 pt-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === idx ? 'bg-[#7a9660] w-8' : 'bg-[#D5CDBF] hover:bg-[#7a9660]/60'
            }`}
          />
        ))}
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
            alt="Architecture view"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}

    </div>
  );
}
