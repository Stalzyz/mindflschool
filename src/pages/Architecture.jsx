import React from 'react';
import { Quote, Compass, ShieldCheck, Activity, Eye } from 'lucide-react';

export default function Architecture() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <header className="text-center space-y-6">
        <span className="text-xs uppercase tracking-widest text-[#5e7a45] font-semibold bg-[#7a9660]/15 px-3 py-1 rounded-full">
          Ecology of Spatial Excellence
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1F291E]">
          Architecture
        </h1>

        {/* Frank Lloyd Wright Quote */}
        <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto shadow-sm">
          <p className="font-serif italic text-lg sm:text-xl text-[#2D3A2C]">
            "Study nature, love nature, stay close to nature. It will never fail you."
          </p>
          <p className="text-xs font-semibold text-[#5e7a45] uppercase tracking-wider mt-3">
            — Frank Lloyd Wright
          </p>
        </div>
      </header>

      {/* 4 Architectural Sections */}
      <div className="space-y-12">
        
        {/* Section 1: An Experience Under a Living Canopy */}
        <section className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 sm:p-10 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#7a9660]/20 text-[#2C4A2E] rounded-lg flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#1F291E]">
              An Experience Under a Living Canopy
            </h2>
          </div>
          <div className="space-y-4 text-base text-[#2D3A2C] leading-relaxed">
            <p>
              We are designing more than a school; we are creating an ecology of spatial excellence. At the heart of our campus is the Roof—a signature, multi-faceted canopy that acts as a protective wing for our "Learning Village". This design creates a low, human-scale environment that feels like a home rather than an institution.
            </p>
            <p>
              We believe that what children grow around, becomes what they carry within. By using honest, natural materials, we ensure children feel a deep sense of belonging and cultural relevance from the moment they arrive.
            </p>
          </div>
        </section>

        {/* Section 2: Safety at Every Step… */}
        <section className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 sm:p-10 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#7a9660]/20 text-[#2C4A2E] rounded-lg flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#1F291E]">
              Safety at Every Step…
            </h2>
          </div>
          <div className="space-y-4 text-base text-[#2D3A2C] leading-relaxed">
            <p>
              Physical and psychological security is built into the very geometry of our classrooms. Every space is designed to be a protective sanctuary that settles the mind, allowing little learners to feel a deep sense of calm and focus.
            </p>
            <p>
              By removing rigid corridors and fixed "teacher positions," we ensure there is no single point of control. This creates a transparent, fluid flow where children feel safe to explore independently while guides move naturally among them. From the ergonomic furniture to the approachable textures, every surface is engineered to the highest safety standards, allowing children to focus entirely on their natural curiosity.
            </p>
          </div>
        </section>

        {/* Section 3: …All Around the Loop */}
        <section className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 sm:p-10 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#7a9660]/20 text-[#2C4A2E] rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#1F291E]">
              …All Around the Loop
            </h2>
          </div>
          <div className="space-y-4 text-base text-[#2D3A2C] leading-relaxed">
            <p>
              India currently faces a significant health challenge as the second-largest nation in terms of child obesity. Recognizing that modern childhood is facing a silent crisis of sedentary living, we were intentional in designing a landscape that demands movement.
            </p>
            <p>
              Our MINDFL Loop is a continuous, elliptical pathway that wraps around the campus, providing a naturally protected perimeter where children can run, climb, and balance freely. This pathway integrates over 36 fundamental types of play into the daily rhythm, ensuring that physical activity is never a "break" but a constant, healthy part of learning. Because when the body moves, the mind opens.
            </p>
          </div>
        </section>

        {/* Section 4: Design for the Senses */}
        <section className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#7a9660]/20 text-[#2C4A2E] rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#1F291E]">
              Design for the Senses
            </h2>
          </div>
          <p className="text-base text-[#2D3A2C] leading-relaxed">
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
        </section>

      </div>

    </div>
  );
}
