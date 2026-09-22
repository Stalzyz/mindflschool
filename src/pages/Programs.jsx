import React from 'react';
import ArchitectureGallery from '../components/ArchitectureGallery';
import { Compass, ShieldCheck, Activity, Eye, Quote } from 'lucide-react';
import { BohoOrganicBlob, BohoSunburst } from '../components/BohoShapes';

export default function Programs() {
  const programs = [
    {
      name: "Parent–Toddler",
      age: "6 – 24 Months",
      subtitle: "Our Youngest Learners, Our Deepest Care",
      description: "A secure sanctuary where the first seeds of independence are planted. In a calm, plastic-free environment, we use RIE (Resources for Infant Educarers) inspired practices to build trust and respectful attachment. Here, care routines become moments of deep connection, helping families understand and support their child's earliest developmental milestones.",
      rhythms: [
        "The Rhythm: 2-Hour Sessions | 3 Days a Week"
      ]
    },
    {
      name: "Sprouts",
      age: "2 – 3 Years",
      subtitle: "The Leap into Autonomy",
      description: "As children find their voice, we support their growing independence within a nurturing \"Learning Village\" setting. This stage focuses on emotional security and rapid language growth through rhythmic storytelling and natural play. Using materials like wood and clay, children build the self-help skills and confidence needed to navigate their world with ease.",
      rhythms: [
        "The Rhythm: 3-Hour Independent Sessions | 5 Days a Week"
      ]
    },
    {
      name: "Seedlings",
      age: "3 – 4 Years",
      subtitle: "Curiosity Becomes Inquiry",
      description: "Children move from asking \"What?\" to \"How?\", forming friendships and expressing complex ideas. Through theme-based projects and the \"Hundred Languages\" of art and movement, we encourage collaborative problem-solving. Here, creative expression becomes a tool for children to explore and understand the natural world.",
      rhythms: [
        "Independent Pathway: 9:00 am – 12:30 pm",
        "Full Day Pathway: 9:00 am – 4:30 pm"
      ]
    },
    {
      name: "Buds",
      age: "4 – 5 Years",
      subtitle: "Building Meaning and Understanding",
      description: "We bridge the gap between play and structure by introducing the mechanics of learning through real-world contexts. We focus on literacy and numeracy readiness—honoring natural maturity rather than the pressure of rote learning. Through phonics and group discussion, children develop personal responsibility and a love for discovery.",
      rhythms: [
        "Independent Pathway: 9:00 am – 12:30 pm",
        "Full Day Pathway: 9:00 am – 4:30 pm"
      ]
    },
    {
      name: "Blossoms",
      age: "5 – 6 Years",
      subtitle: "Ready for School. Ready for Life.",
      description: "The culmination of the MINDFL journey. We prepare children for a confident transition to primary school by focusing on critical thinking, emotional strength, and self-regulation. Our Blossoms graduate with strong foundations in reading and arithmetic, having developed the capacity for independent thinking and confident self-expression.",
      rhythms: [
        "Independent Pathway: 9:00 am – 12:30 pm",
        "Full Day Pathway: 9:00 am – 4:30 pm"
      ]
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* Page Header & Intro (PDF Pages 16-17) */}
      <section className="bg-[#FAF7F0] border-b border-[#EAE4D7] py-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs uppercase tracking-widest text-[#5e7a45] font-semibold bg-[#7a9660]/15 px-3 py-1 rounded-full">
            Age-Appropriate Learning Pathways
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1F291E]">
            Our Programs
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#2D3A2C] leading-relaxed">
            At MINDFL, our "Learning Village" is a space where children move from the security of home into a world of discovery. We focus on age-appropriate practices, blending the best global pedagogies to honor each child’s natural pace and development. Through relationships with peers, educators, families, and nature, children construct meaning, express ideas, and grow with confidence.
          </p>
        </div>
      </section>

      {/* 5 Program Cards Stack */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {programs.map((prog, idx) => (
          <div key={idx} className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6 hover:border-[#7a9660]/40 transition">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EAE4D7] pb-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#7a9660] block mb-1">
                  STAGE {idx + 1}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F291E]">
                  {prog.name}
                </h2>
                <p className="font-serif italic text-lg text-[#2C4A2E] mt-1">
                  {prog.subtitle}
                </p>
              </div>

              <div className="self-start sm:self-auto bg-[#7a9660] text-white px-5 py-2 rounded-full text-sm font-bold shadow-sm">
                {prog.age}
              </div>
            </div>

            <p className="text-base text-[#2D3A2C] leading-relaxed">
              {prog.description}
            </p>

            <div className="bg-[#F2EDE2] p-5 rounded-2xl border border-[#D5CDBF] space-y-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#5e7a45] block">
                SCHEDULE & PATHWAY
              </span>
              <ul className="space-y-1">
                {prog.rhythms.map((r, rIdx) => (
                  <li key={rIdx} className="text-sm font-medium text-[#1F291E] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7a9660]"></span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </section>

      {/* Architecture Section (PDF Pages 18-19) */}
      <section id="architecture" className="bg-[#F2EDE2] py-16 border-y border-[#E2D9C8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#5e7a45] font-semibold bg-[#7a9660]/15 px-3 py-1 rounded-full">
              Spatial Excellence & Campus Design
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F291E]">
              Architecture
            </h2>

            {/* Frank Lloyd Wright Quote */}
            <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto shadow-sm">
              <p className="font-serif italic text-lg sm:text-xl text-[#2D3A2C]">
                "Study nature, love nature, stay close to nature. It will never fail you."
              </p>
              <p className="text-xs font-semibold text-[#5e7a45] uppercase tracking-wider mt-3">
                — Frank Lloyd Wright
              </p>
            </div>
          </div>

          {/* Architecture Slidable Carousel Image Gallery */}
          <ArchitectureGallery />

          <div className="space-y-10">
            
            {/* An Experience Under a Living Canopy */}
            <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 sm:p-10 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#7a9660]/20 text-[#2C4A2E] rounded-lg flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1F291E]">
                  An Experience Under a Living Canopy
                </h3>
              </div>
              <div className="space-y-4 text-base text-[#2D3A2C] leading-relaxed">
                <p>
                  We are designing more than a school; we are creating an ecology of spatial excellence. At the heart of our campus is the Roof—a signature, multi-faceted canopy that acts as a protective wing for our "Learning Village". This design creates a low, human-scale environment that feels like a home rather than an institution.
                </p>
                <p>
                  We believe that what children grow around, becomes what they carry within. By using honest, natural materials, we ensure children feel a deep sense of belonging and cultural relevance from the moment they arrive.
                </p>
              </div>
            </div>

            {/* Safety at Every Step… */}
            <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 sm:p-10 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#7a9660]/20 text-[#2C4A2E] rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1F291E]">
                  Safety at Every Step…
                </h3>
              </div>
              <div className="space-y-4 text-base text-[#2D3A2C] leading-relaxed">
                <p>
                  Physical and psychological security is built into the very geometry of our classrooms. Every space is designed to be a protective sanctuary that settles the mind, allowing little learners to feel a deep sense of calm and focus.
                </p>
                <p>
                  By removing rigid corridors and fixed "teacher positions," we ensure there is no single point of control. This creates a transparent, fluid flow where children feel safe to explore independently while guides move naturally among them. From the ergonomic furniture to the approachable textures, every surface is engineered to the highest safety standards, allowing children to focus entirely on their natural curiosity.
                </p>
              </div>
            </div>

            {/* …All Around the Loop */}
            <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 sm:p-10 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#7a9660]/20 text-[#2C4A2E] rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1F291E]">
                  …All Around the Loop
                </h3>
              </div>
              <div className="space-y-4 text-base text-[#2D3A2C] leading-relaxed">
                <p>
                  India currently faces a significant health challenge as the second-largest nation in terms of child obesity. Recognizing that modern childhood is facing a silent crisis of sedentary living, we were intentional in designing a landscape that demands movement.
                </p>
                <p>
                  Our MINDFL Loop is a continuous, elliptical pathway that wraps around the campus, providing a naturally protected perimeter where children can run, climb, and balance freely. This pathway integrates over 36 fundamental types of play into the daily rhythm, ensuring that physical activity is never a "break" but a constant, healthy part of learning. Because when the body moves, the mind opens.
                </p>
              </div>
            </div>

            {/* Design for the Senses */}
            <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#7a9660]/20 text-[#2C4A2E] rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1F291E]">
                  Design for the Senses
                </h3>
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
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
