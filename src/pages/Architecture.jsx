import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArchitectureGallery from '../components/ArchitectureGallery';
import { 
  Compass, 
  ShieldCheck, 
  Activity, 
  Eye, 
  Sparkles, 
  Sun, 
  TreePine, 
  Layers, 
  ArrowRight, 
  Check, 
  Quote 
} from 'lucide-react';

export default function Architecture() {
  const [activeMaterial, setActiveMaterial] = useState(0);

  const materials = [
    {
      id: "canopy",
      title: "Living Canopy Roof",
      subtitle: "Protective Shelter & Organic Form",
      image: "/images/architecture/a1.jpg",
      text: "The signature, multi-faceted canopy acts as a protective wing over the entire learning village. Designed with low, human-scale geometry, it creates a cozy, home-like embrace rather than an intimidating institutional monument."
    },
    {
      id: "skylights",
      title: "Round Skylights & Clean Air",
      subtitle: "Natural Illumination & Non-Toxic Finishes",
      image: "/images/architecture/a3.jpg",
      text: "Minimal paint ensures air free of chemical toxicity. Round skylights and circular apertures introduce a calm harmony in form, showering the concourses with soft, diffused sunlight throughout the day."
    },
    {
      id: "terrazzo",
      title: "Warm Wood & Honest Textures",
      subtitle: "Tactile Comfort & Approachable Surfaces",
      image: "/images/architecture/a4.jpg",
      text: "Every piece of furniture and tactile touchpoint is crafted from natural wood with soft, rounded edges. Sourced with care, it remains warm to the eye and approachable to little fingers, never imposing or cold."
    },
    {
      id: "greenery",
      title: "Sensory Greenery & Landscape",
      subtitle: "Living Ecosystem & Outdoor Biodiversity",
      image: "/images/architecture/a2.jpg",
      text: "We replaced sterile concrete with a lush living ecosystem. The gentle sounds of water, rustling leaves, and visiting birds teach children to co-exist with nature while naturally settling overstimulated nervous systems."
    }
  ];

  return (
    <div className="space-y-20 pb-24 bg-[#FAF7F0] text-[#1F291E]">
      
      {/* 1. Hero Banner (Matching HP School Wish Town Noida header style) */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#1F291E] text-white">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/architecture/campus_canopy.png"
            alt="MINDFL Campus Architecture"
            className="w-full h-full object-cover opacity-45 scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F291E] via-[#1F291E]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-radial-vignette opacity-70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 py-20">
          <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-md text-[#D5E3CD] border border-white/20 rounded-full text-xs font-semibold uppercase tracking-widest shadow-sm">
            Ecology of Spatial Excellence
          </span>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Building a School<br />
            <span className="italic font-serif text-[#A4C28A]">An Experience Baked in Nature</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#E3EDE0] leading-relaxed font-light">
            We are designing a remarkable series of learning spaces in Sivaram Nagar, Coimbatore where architectural beauty, sensory calm, and child-led exploration meet in perfect harmony.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#philosophy"
              className="px-7 py-3.5 bg-white text-[#1F291E] hover:bg-[#F2EDE2] font-semibold text-sm rounded-full shadow-lg transition-all transform hover:scale-105"
            >
              Material Philosophy
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#7a9660] hover:bg-[#5e7a45] text-white font-bold text-sm rounded-full shadow-lg transition-all transform hover:scale-105"
            >
              View Gallery
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Intro Section: Experience Baked in Earth & Living Canopy */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Frank Lloyd Wright Quote Banner */}
        <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 sm:p-12 shadow-sm text-center space-y-4 relative overflow-hidden">
          <div className="w-12 h-12 rounded-full bg-[#7a9660]/15 flex items-center justify-center mx-auto text-[#5e7a45]">
            <Quote className="w-6 h-6" />
          </div>
          <p className="font-serif italic text-2xl sm:text-3xl text-[#1F291E] max-w-3xl mx-auto leading-relaxed">
            "Study nature, love nature, stay close to nature. It will never fail you."
          </p>
          <p className="text-xs font-bold text-[#7a9660] uppercase tracking-widest">
            — Frank Lloyd Wright
          </p>
        </div>

        {/* Narrative Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6 space-y-5 text-base text-[#2D3A2C] leading-relaxed">
            <h2 className="font-serif text-3xl font-bold text-[#1F291E]">
              An Experience Under a Living Canopy
            </h2>
            <p>
              We are designing more than a school; we are creating an ecology of spatial excellence. At the heart of our campus is the Roof—a signature, multi-faceted canopy that acts as a protective wing for our "Learning Village". This design creates a low, human-scale environment that feels like a home rather than an institution.
            </p>
            <p>
              We believe that what children grow around, becomes what they carry within. By using honest, natural materials, we ensure children feel a deep sense of belonging and cultural relevance from the moment they arrive.
            </p>
          </div>

          <div className="md:col-span-6 space-y-5 bg-[#F2EDE2] border border-[#D5CDBF] rounded-3xl p-8">
            <h3 className="font-serif text-xl font-bold text-[#1F291E] border-b border-[#D5CDBF] pb-3">
              “An endeavor that fuses early education with natural geometry and material integrity”
            </h3>
            <p className="text-sm text-[#3A4739] leading-relaxed">
              Every curve, aperture, and texture in our Coimbatore campus has been shaped with purpose. Where standard commercial preschools pack children into rigid cubicles, the MINDFL campus offers a generous, fluid sanctuary where light, ventilation, and tactile surfaces actively participate in the pedagogy.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs font-semibold text-[#5e7a45] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#7a9660]"></span>
              <span>Low Human-Scale Architecture • Zero Closed Corridors</span>
            </div>
          </div>
        </div>

      </section>

      {/* 3. A Material Philosophy Grid (Matching HP School 4-Tile Interactive Section) */}
      <section id="philosophy" className="bg-[#F2EDE2] py-20 border-y border-[#E2D9C8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#5e7a45] font-semibold bg-[#7a9660]/15 px-3 py-1 rounded-full inline-block">
              Tactile Integrity
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F291E]">
              A Material Philosophy
            </h2>
            <p className="text-sm sm:text-base text-[#4A5D48]">
              The palette of materials used at MINDFL is raw, honest, and organic. No artificial coatings, no overstimulating synthetic colors—only authentic surfaces that age gracefully.
            </p>
          </div>

          {/* 4-Tile Material Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((mat, idx) => (
              <div 
                key={mat.id}
                onClick={() => setActiveMaterial(idx)}
                className={`bg-[#FAF8F3] border rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer ${
                  activeMaterial === idx ? 'border-[#7a9660] ring-2 ring-[#7a9660]/30 -translate-y-1' : 'border-[#E5DFD3]'
                }`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#1F291E] relative">
                  <img
                    src={mat.image}
                    alt={mat.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#1F291E]/70 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[11px] font-semibold">
                    0{idx + 1}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1F291E]">
                      {mat.title}
                    </h3>
                    <p className="text-xs text-[#5e7a45] font-semibold mt-1">
                      {mat.subtitle}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-[#3A4739] leading-relaxed">
                    {mat.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Two-Column Multi-Image Architectural Stories (Matching HP School's twoColMultiImages) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Story 1: We shape our buildings. Then they shape us. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-bold tracking-wider text-[#7a9660] bg-[#7a9660]/10 px-3 py-1 rounded-full inline-block">
              Sensory Perceptions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F291E] leading-tight">
              “We shape our buildings. Then they shape us.”
            </h2>
            <p className="text-base text-[#2D3A2C] leading-relaxed">
              In aesthetically deprived urban settings, where shopping malls and concrete blocks often become children’s default public spaces, our Coimbatore campus is intentionally designed to be a haven of serenity, stimulation, and clean air.
            </p>
            <p className="text-sm text-[#4A5D48] leading-relaxed">
              Learners develop their sensory perception early, building natural foundations for exploring the arts, sciences, and physical world. They learn what it is to breathe fresh air, play under natural sky illumination, and live in harmony with trees and earth.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#5e7a45] italic">
              — Inspired by architectural philosophy of spatial psychology
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#1F291E] aspect-[4/3]">
              <img
                src="/images/architecture/campus_canopy.png"
                alt="Living Canopy and Skylit Sanctuary"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-[#5e7a45] text-center italic">
              The signature canopy protecting and unifying the indoor and outdoor learning village.
            </p>
          </div>
        </div>

        {/* Story 2: All round safety… (Safety at Every Step) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#1F291E] aspect-[4/3]">
              <img
                src="/images/architecture/a3.jpg"
                alt="Cocoon-like Rounded Classrooms"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-[#5e7a45] text-center italic">
              Sanctuary classrooms engineered with smooth rounded corners to offer psychological and physical security.
            </p>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="text-xs uppercase font-bold tracking-wider text-[#7a9660] bg-[#7a9660]/10 px-3 py-1 rounded-full inline-block">
              Safety at Every Step…
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F291E] leading-tight">
              All Round Safety… Cocooned in Curvature
            </h2>
            <p className="text-base text-[#2D3A2C] leading-relaxed">
              Physical and psychological security is built into the very geometry of our classrooms. The classroom shape features softly rounded corners, cocooning little learners in womb-like spaces that settle the nervous system and nurture deep focus.
            </p>
            <p className="text-sm text-[#4A5D48] leading-relaxed">
              By removing rigid sharp corners and fixed "teacher podiums," there is no single authoritarian point of control. Instead, educators move naturally among children in a transparent, fluid flow where independence flourishes without anxiety.
            </p>
          </div>
        </div>

        {/* Story 3: …Around the School (The MINDFL Loop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-bold tracking-wider text-[#7a9660] bg-[#7a9660]/10 px-3 py-1 rounded-full inline-block">
              …All Around the Loop
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F291E] leading-tight">
              Fluid Movement &amp; The Continuous Play Loop
            </h2>
            <p className="text-base text-[#2D3A2C] leading-relaxed">
              Recognizing that modern childhood faces a quiet crisis of sedentary habits, our landscape is intentionally engineered to demand dynamic, joyful movement.
            </p>
            <p className="text-sm text-[#4A5D48] leading-relaxed">
              Our <strong>MINDFL Loop</strong> is a continuous elliptical pathway that wraps seamlessly around the campus. It provides a protected perimeter where children can run, climb, cycle, and balance freely—integrating over 36 fundamental play types into the everyday rhythm.
            </p>
            <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-2xl p-4 flex items-center gap-3">
              <Activity className="w-5 h-5 text-[#7a9660] flex-shrink-0" />
              <span className="text-xs font-semibold text-[#1F291E]">
                "When the body moves freely, the young mind opens effortlessly."
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#1F291E] aspect-[4/3]">
              <img
                src="/images/architecture/campus_loop.png"
                alt="Outdoor MINDFL Loop"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-[#5e7a45] text-center italic">
              The continuous perimeter loop connecting landscaped outdoor sensory gardens with open studios.
            </p>
          </div>
        </div>

        {/* Story 4: Furniture & Design for the Senses */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#1F291E] aspect-[4/3]">
              <img
                src="/images/architecture/a4.jpg"
                alt="Ergonomic Wooden Furnishings"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-[#5e7a45] text-center italic">
              Hand-finished natural wood furnishings with rounded edges and child-scale proportions.
            </p>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="text-xs uppercase font-bold tracking-wider text-[#7a9660] bg-[#7a9660]/10 px-3 py-1 rounded-full inline-block">
              Design for the Senses
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F291E] leading-tight">
              Ergonomic Woodcraft &amp; Circadian Lighting
            </h2>
            <p className="text-base text-[#2D3A2C] leading-relaxed">
              Curved wooden edges and child-accessible furniture are not accidental choices—they are extensions of our philosophy of respect for young human bodies.
            </p>
            <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-2xl p-5 space-y-3">
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#2D3A2C]">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#7a9660] mt-0.5 flex-shrink-0" />
                  <span><strong>Human-Centric Lighting:</strong> Aligns with the child's natural biological clock to regulate mood and focus.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#7a9660] mt-0.5 flex-shrink-0" />
                  <span><strong>Spatial Volumetric Rhythm:</strong> Varied ceiling heights help children intuitively understand their space.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#7a9660] mt-0.5 flex-shrink-0" />
                  <span><strong>Acoustic Calmness:</strong> Natural textures absorb chaotic echoes, creating a peaceful, contemplative atmosphere.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </section>

      {/* 5. Interactive Architecture Carousel Gallery */}
      <section id="gallery" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ArchitectureGallery />
      </section>

      {/* 6. Campus Visit & Dialogue CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#263e25] to-[#1a2d19] rounded-3xl p-8 sm:p-14 text-white shadow-2xl text-center space-y-6 relative overflow-hidden">
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#A4C28A] font-semibold bg-white/10 px-3 py-1 rounded-full inline-block">
              Experience the Learning Village
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Walk Our Living Campus in Sivaram Nagar
            </h2>
            <p className="text-sm sm:text-base text-[#D5E3CD] leading-relaxed">
              Photos can only capture a glimpse. We warmly invite prospective families to tour our campus, feel the textures of our learning village, and experience our architecture in person.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1F291E] hover:bg-[#F2EDE2] font-bold text-sm rounded-full shadow-lg transition-all transform hover:scale-105"
              >
                <span>Schedule a Campus Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-semibold text-sm rounded-full border border-white/20 transition-all"
              >
                <span>Explore Learning Programs</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
