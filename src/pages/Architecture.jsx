import React from 'react';
import ArchitectureGallery from '../components/ArchitectureGallery';
import { Compass, ShieldCheck, Activity, Eye, Quote } from 'lucide-react';

export default function Architecture() {
  return (
    <div className="space-y-16 pb-20 bg-[#FAF7F0] text-[#1F291E]">
      
      {/* 1. Header & Quote Section */}
      <section className="bg-[#FAF7F0] border-b border-[#EAE4D7] py-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs uppercase tracking-widest text-[#5e7a45] font-semibold bg-[#7a9660]/15 px-3 py-1 rounded-full inline-block">
            Spatial Excellence & Campus Design
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1F291E]">
            Architecture
          </h1>

          {/* Frank Lloyd Wright Quote */}
          <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 sm:p-10 max-w-3xl mx-auto shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#7a9660]/15 flex items-center justify-center mx-auto text-[#5e7a45]">
              <Quote className="w-5 h-5" />
            </div>
            <p className="font-serif italic text-2xl sm:text-3xl text-[#1F291E] leading-relaxed">
              "Study nature, love nature, stay close to nature. It will never fail you."
            </p>
            <p className="text-xs font-bold text-[#5e7a45] uppercase tracking-widest">
              — Frank Lloyd Wright
            </p>
          </div>
        </div>
      </section>

      {/* 2. Four Architectural Sections with Images */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section 1: An Experience Under a Living Canopy */}
        <section className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#7a9660]/20 text-[#2C4A2E] rounded-lg flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F291E]">
              An Experience Under a Living Canopy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4 text-base text-[#2D3A2C] leading-relaxed">
              <p>
                We are designing more than a school; we are creating an ecology of spatial excellence. At the heart of our campus is the Roof—a signature, multi-faceted canopy that acts as a protective wing for our "Learning Village". This design creates a low, human-scale environment that feels like a home rather than an institution.
              </p>
              <p>
                We believe that what children grow around, becomes what they carry within. By using honest, natural materials, we ensure children feel a deep sense of belonging and cultural relevance from the moment they arrive.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white bg-[#1F291E] aspect-[4/3]">
                <img
                  src="/images/architecture/campus_canopy.png"
                  alt="Living Canopy Roof"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Safety at Every Step… */}
        <section className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#7a9660]/20 text-[#2C4A2E] rounded-lg flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F291E]">
              Safety at Every Step…
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white bg-[#1F291E] aspect-[4/3]">
                <img
                  src="/images/architecture/a3.jpg"
                  alt="Fluid and Safe Classroom Spaces"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-7 order-1 md:order-2 space-y-4 text-base text-[#2D3A2C] leading-relaxed">
              <p>
                Physical and psychological security is built into the very geometry of our classrooms. Every space is designed to be a protective sanctuary that settles the mind, allowing little learners to feel a deep sense of calm and focus.
              </p>
              <p>
                By removing rigid corridors and fixed "teacher positions," we ensure there is no single point of control. This creates a transparent, fluid flow where children feel safe to explore independently while guides move naturally among them. From the ergonomic furniture to the approachable textures, every surface is engineered to the highest safety standards, allowing children to focus entirely on their natural curiosity.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: …All Around the Loop */}
        <section className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#7a9660]/20 text-[#2C4A2E] rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F291E]">
              …All Around the Loop
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4 text-base text-[#2D3A2C] leading-relaxed">
              <p>
                India currently faces a significant health challenge as the second-largest nation in terms of child obesity. Recognizing that modern childhood is facing a silent crisis of sedentary living, we were intentional in designing a landscape that demands movement.
              </p>
              <p>
                Our MINDFL Loop is a continuous, elliptical pathway that wraps around the campus, providing a naturally protected perimeter where children can run, climb, and balance freely. This pathway integrates over 36 fundamental types of play into the daily rhythm, ensuring that physical activity is never a "break" but a constant, healthy part of learning. Because when the body moves, the mind opens.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white bg-[#1F291E] aspect-[4/3]">
                <img
                  src="/images/architecture/campus_loop.png"
                  alt="MINDFL Outdoor Movement Loop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Design for the Senses */}
        <section className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#7a9660]/20 text-[#2C4A2E] rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F291E]">
              Design for the Senses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white bg-[#1F291E] aspect-[4/3]">
                <img
                  src="/images/architecture/a4.jpg"
                  alt="Design for the Senses and Greenery"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-7 order-1 md:order-2 space-y-4 text-base text-[#2D3A2C] leading-relaxed">
              <p>
                In clinical care, carefully designed lighting improves recovery; we bring that same sensitivity into early learning. Our Human-Centric Lighting aligns the school day with a child’s natural biological clock to regulate mood and focus.
              </p>

              <div className="bg-[#F2EDE2] border border-[#D5CDBF] rounded-2xl p-6 space-y-3">
                <ul className="space-y-3 text-sm text-[#2D3A2C]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#7a9660] font-bold text-lg">•</span>
                    <div>
                      <strong className="font-bold text-[#1F291E]">Spatial Awareness:</strong> Varying ceiling heights act as a tool for children to instinctively understand the volume and rhythm of their world.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7a9660] font-bold text-lg">•</span>
                    <div>
                      <strong className="font-bold text-[#1F291E]">The Power of Greenery:</strong> We have replaced concrete with a lush landscape that increases attention spans and settles the mind.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7a9660] font-bold text-lg">•</span>
                    <div>
                      <strong className="font-bold text-[#1F291E]">A Living Ecosystem:</strong> The sound of water and the visits of birds teach children to co-exist with a vibrant world.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Slidable Carousel Gallery */}
        <ArchitectureGallery />

      </div>

    </div>
  );
}
