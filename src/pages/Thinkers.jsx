import React from 'react';
import { Quote } from 'lucide-react';

export default function Thinkers() {
  const thinkers = [
    {
      name: "Friedrich Fröbel",
      dates: "1782–1852",
      role: "FOUNDER OF KINDERGARTEN",
      badge: "FF",
      badgeBg: "bg-[#2C4A2E] text-white",
      description: "Fröbel gave the world \"Kindergarten\" — a garden for children. He believed teachers were gardeners, children were plants to be nurtured, and nature was an essential teacher. Play, he said, was a child's highest form of work. His ideas were considered radical in 1837. They are now considered foundational — and they are the beating heart of everything MINDFL does.",
      quote: "At MINDFL — our nature-based environment builds in children the care for living things."
    },
    {
      name: "Maria Montessori",
      dates: "1870–1952",
      role: "PREPARED ENVIRONMENT",
      badge: "MM",
      badgeBg: "bg-[#1E4234] text-white",
      description: "Montessori believed the environment itself was a teacher. Children chose their own work, moved freely, and mastered real skills with real tools. Children learn best when they are trusted to lead.",
      quote: "At MINDFL — in our G pillar, our natural materials, and in every moment a child chooses what to explore next."
    },
    {
      name: "Rudolf Steiner",
      dates: "1861–1925",
      role: "WALDORF EDUCATION",
      badge: "RS",
      badgeBg: "bg-[#543F19] text-white",
      description: "Steiner understood that childhood has its own rhythm — rushing it does lasting damage. He built unhurried routines around storytelling, seasonal rhythms, and creative play. Wonder is something to be guarded, not consumed.",
      quote: "At MINDFL — in our R pillar, our screen-free environment, and in the morning circle that starts every child's day."
    },
    {
      name: "Loris Malaguzzi",
      dates: "1920–1994",
      role: "REGGIO EMILIA",
      badge: "LM",
      badgeBg: "bg-[#282159] text-white",
      description: "Malaguzzi believed children speak in a hundred languages — movement, art, clay, silence — and that schools systematically silence most of them. He placed observation and documentation at the heart of teaching.",
      quote: "At MINDFL — in our O pillar, our atelier, and in the way our Nature Crafters document each child's day."
    },
    {
      name: "Arnold Gesell",
      dates: "1880–1961",
      role: "GESELL PROGRAM IN EARLY CHILDHOOD",
      badge: "AG",
      badgeBg: "bg-[#542121] text-white",
      description: "Gesell mapped childhood development as a biological process with its own internal clock. Readiness, not age, should determine learning. Pushing a child before they are ready doesn't accelerate them — it creates anxiety.",
      quote: "At MINDFL — in our W pillar, in how we never rush a child, and in our founder's training at the Gesell Program in Early Childhood, Yale University."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#5e7a45] font-semibold bg-[#7a9660]/15 px-3 py-1 rounded-full">
          THE THINKERS BEHIND MINDFL
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1F291E]">
          The Thinkers Behind MINDFL.
        </h1>
        <p className="max-w-3xl mx-auto text-base text-[#3A4739] leading-relaxed">
          MINDFL is not built on one philosophy. It is rooted in the collective wisdom of the greatest minds in childhood education. Here is what they believed — and exactly where you will see their ideas in your child's day.
        </p>
      </div>

      {/* Featured First Thinker: Friedrich Fröbel */}
      <div className="bg-[#FAF8F3] border-2 border-[#7a9660]/40 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-[#EAE4D7] pb-6">
          <div className={`w-16 h-16 rounded-full ${thinkers[0].badgeBg} flex items-center justify-center font-serif font-bold text-xl flex-shrink-0 shadow-md`}>
            {thinkers[0].badge}
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1F291E]">{thinkers[0].name}</h2>
            <p className="text-xs text-[#5e7a45] font-semibold uppercase tracking-wider">
              {thinkers[0].dates} · {thinkers[0].role}
            </p>
          </div>
        </div>

        <p className="text-base text-[#2D3A2C] leading-relaxed">
          {thinkers[0].description}
        </p>

        <div className="bg-[#F2EDE2] border-l-4 border-[#7a9660] p-4 rounded-r-xl italic font-serif text-sm text-[#1F291E]">
          "{thinkers[0].quote}"
        </div>
      </div>

      {/* 2x2 Grid for the Other 4 Thinkers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {thinkers.slice(1).map((thinker, idx) => (
          <div key={idx} className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-2xl p-6 shadow-sm space-y-4 flex flex-col justify-between hover:border-[#7a9660]/40 transition">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-[#EAE4D7] pb-4">
                <div className={`w-12 h-12 rounded-full ${thinker.badgeBg} flex items-center justify-center font-serif font-bold text-base flex-shrink-0 shadow-sm`}>
                  {thinker.badge}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1F291E]">{thinker.name}</h3>
                  <p className="text-[11px] text-[#5e7a45] font-semibold uppercase tracking-wider">
                    {thinker.dates} · {thinker.role}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#3A4739] leading-relaxed">
                {thinker.description}
              </p>
            </div>

            <div className="bg-[#F2EDE2] border-l-4 border-[#7a9660] p-3 rounded-r-lg italic font-serif text-xs text-[#1F291E] mt-auto">
              "{thinker.quote}"
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
