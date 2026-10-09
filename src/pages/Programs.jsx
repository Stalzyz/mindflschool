import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Clock, ArrowRight, Compass } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      id: "stage-1",
      stage: 1,
      name: "Parent–Toddler",
      age: "6 – 24 Months",
      subtitle: "Our Youngest Learners, Our Deepest Care",
      description: "A secure sanctuary where the first seeds of independence are planted. In a calm, plastic-free environment, we use RIE (Resources for Infant Educarers) inspired practices to build trust and respectful attachment. Here, care routines become moments of deep connection, helping families understand and support their child's earliest developmental milestones.",
      rhythms: [
        "The Rhythm: 2-Hour Sessions | 3 Days a Week"
      ]
    },
    {
      id: "stage-2",
      stage: 2,
      name: "Sprouts",
      age: "2 – 3 Years",
      subtitle: "The Leap into Autonomy",
      description: "As children find their voice, we support their growing independence within a nurturing \"Learning Village\" setting. This stage focuses on emotional security and rapid language growth through rhythmic storytelling and natural play. Using materials like wood and clay, children build the self-help skills and confidence needed to navigate their world with ease.",
      rhythms: [
        "The Rhythm: 3-Hour Independent Sessions | 5 Days a Week"
      ]
    },
    {
      id: "stage-3",
      stage: 3,
      name: "Seedlings",
      age: "3 – 4 Years",
      subtitle: "Curiosity Becomes Inquiry",
      description: "Children move from asking \"What?\" to \"How?\", forming friendships and expressing complex ideas. Through theme-based projects and the \"Hundred Languages\" of art and movement, we encourage collaborative problem-solving. Here, creative expression becomes a tool for children to explore and understand the natural world.",
      rhythms: [
        "Independent Pathway: 8:30 am – 12:30 pm",
        "Full Day Pathway: 8:30 am – 4:30 pm"
      ]
    },
    {
      id: "stage-4",
      stage: 4,
      name: "Buds",
      age: "4 – 5 Years",
      subtitle: "Building Meaning and Understanding",
      description: "We bridge the gap between play and structure by introducing the mechanics of learning through real-world contexts. We focus on literacy and numeracy readiness—honoring natural maturity rather than the pressure of rote learning. Through phonics and group discussion, children develop personal responsibility and a love for discovery.",
      rhythms: [
        "Independent Pathway: 8:30 am – 12:30 pm",
        "Full Day Pathway: 8:30 am – 4:30 pm"
      ]
    },
    {
      id: "stage-5",
      stage: 5,
      name: "Blossoms",
      age: "5 – 6 Years",
      subtitle: "Ready for School. Ready for Life.",
      description: "The culmination of the MINDFL journey. We prepare children for a confident transition to primary school by focusing on critical thinking, emotional strength, and self-regulation. Our Blossoms graduate with strong foundations in reading and arithmetic, having developed the capacity for independent thinking and confident self-expression.",
      rhythms: [
        "Independent Pathway: 8:30 am – 12:30 pm",
        "Full Day Pathway: 8:30 am – 4:30 pm"
      ]
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* Page Header & Intro (PDF Pages 16-17) */}
      <section className="bg-[#FAF7F0] border-b border-[#EAE4D7] py-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs uppercase tracking-widest text-[#5e7a45] font-semibold bg-[#7a9660]/15 px-3 py-1 rounded-full inline-block">
            Age-Appropriate Learning Pathways
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1F291E]">
            Our Programs
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#2D3A2C] leading-relaxed font-normal">
            At MINDFL, our "Learning Village" is a space where children move from the security of home into a world of discovery. We focus on age-appropriate practices, blending the best global pedagogies to honor each child’s natural pace and development. Through relationships with peers, educators, families, and nature, children construct meaning, express ideas, and grow with confidence.
          </p>

          {/* Quick Stage Jump Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {programs.map((prog) => (
              <a
                key={prog.id}
                href={`#${prog.id}`}
                className="px-4 py-2 bg-white hover:bg-[#7a9660] hover:text-white text-[#2C4A2E] text-xs sm:text-sm font-semibold rounded-full border border-[#D5CDBF] transition-all shadow-sm hover:shadow"
              >
                Stage {prog.stage}: {prog.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Program Cards Stack */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {programs.map((prog) => (
          <div
            key={prog.id}
            id={prog.id}
            className="scroll-mt-28 bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6 hover:border-[#7a9660]/40 transition"
          >
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EAE4D7] pb-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#7a9660] block mb-1">
                  STAGE {prog.stage}
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
              <span className="text-xs uppercase tracking-wider font-semibold text-[#5e7a45] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                SCHEDULE &amp; PATHWAY
              </span>
              <ul className="space-y-1.5 pt-1">
                {prog.rhythms.map((r, rIdx) => (
                  <li key={rIdx} className="text-sm font-medium text-[#1F291E] flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#7a9660] flex-shrink-0"></span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </section>

      {/* Architecture Link Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#243522] to-[#3a5238] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#A4C28A] font-semibold bg-white/10 px-3 py-1 rounded-full inline-block">
              Ecology of Spatial Excellence
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Campus Architecture &amp; Spatial Design
            </h3>
            <p className="text-sm sm:text-base text-[#D5E3CD] max-w-xl">
              Discover how our living canopy, continuous outdoor play loop, and human-centric natural materials create a sanctuary for learning.
            </p>
          </div>
          <Link
            to="/architecture"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1F291E] font-bold text-sm rounded-full shadow-lg hover:bg-[#F2EDE2] transition-all transform hover:scale-105 flex-shrink-0"
          >
            <Compass className="w-4 h-4 text-[#7a9660]" />
            <span>Explore Campus Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="font-serif text-2xl font-bold text-[#1F291E]">
          Ready to Begin Your Child's Journey?
        </h3>
        <p className="text-sm text-[#4A5D48] max-w-lg mx-auto">
          Admissions are open across all stages. Schedule a school tour or submit an Expression of Interest today.
        </p>
        <div className="pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#7a9660] hover:bg-[#5e7a45] text-white font-bold text-sm rounded-full shadow transition"
          >
            <span>Apply for Admission</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
