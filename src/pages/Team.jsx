import React from 'react';
import GoogleFormEmbed from '../components/GoogleFormEmbed';
import { Users, BookOpen, HeartHandshake, Sparkles } from 'lucide-react';

export default function Team() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      
      {/* Section 1: Our Team */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#5e7a45] font-semibold bg-[#7a9660]/15 px-3 py-1 rounded-full">
            Our Educators
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1F291E]">
            Our Team
          </h1>
          <p className="font-serif italic text-2xl text-[#2C4A2E]">
            Our Educators. Our Nature Crafters.
          </p>
        </div>

        {/* 3 Pillars of Our Team */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-2xl p-8 space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#7a9660]/20 text-[#2C4A2E] rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-xs font-bold uppercase tracking-wider text-[#7a9660]">
                WHO THEY ARE
              </h2>
              <h3 className="font-serif text-xl font-bold text-[#1F291E]">
                Present. Observant. Intentional.
              </h3>
              <p className="text-sm text-[#3A4739] leading-relaxed">
                They do more than teach. They notice. Each moment of a child’s day is observed with care, documented with thought, and reflected upon with purpose. At MINDFL, curiosity is not directed—it is gently provoked, extended, and respected. We believe learning happens in a relationship: between child, educator, and the natural world. When these connections are nurtured, growth happens naturally.
              </p>
            </div>
          </div>

          <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-2xl p-8 space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#7a9660]/20 text-[#2C4A2E] rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-xs font-bold uppercase tracking-wider text-[#7a9660]">
                HOW WE PREPARE THEM
              </h2>
              <h3 className="font-serif text-xl font-bold text-[#1F291E]">
                Grounded in practice. Guided by GROW.
              </h3>
              <p className="text-sm text-[#3A4739] leading-relaxed">
                Every educator begins with our GROW orientation — a deep immersion into translating philosophy into the living rhythm of a child’s day. Through ongoing workshops and reflective practice, they refine their craft. They view child development as a journey, play as the highest form of research, and observation as the foundation for all assessment. This is not static training. It evolves just like the children they guide.
              </p>
            </div>
          </div>

          <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-2xl p-8 space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#7a9660]/20 text-[#2C4A2E] rounded-xl flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-xs font-bold uppercase tracking-wider text-[#7a9660]">
                HOW THEY WORK WITH FAMILIES
              </h2>
              <h3 className="font-serif text-xl font-bold text-[#1F291E]">
                The learning village, in rhythm.
              </h3>
              <p className="text-sm text-[#3A4739] leading-relaxed">
                Families are not outside the learning journey, they are the heart of it. Through regular observations and shared insights, our Nature Crafters ensure that the world of MINDFL and the world of home stay in harmony. Because when both worlds move in rhythm, a child doesn’t just grow, they flourish.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Section 2: Join the Learning Village (Recruitment) */}
      <section className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 sm:p-12 shadow-sm space-y-10">
        
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#5e7a45] font-semibold bg-[#7a9660]/15 px-3 py-1 rounded-full">
            Careers & Recruitment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F291E]">
            Join the Learning Village
          </h2>
          <p className="font-serif italic text-2xl text-[#2C4A2E]">
            Become a Nature Crafter.
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto text-base text-[#2D3A2C] leading-relaxed">
          <p className="font-semibold text-lg text-[#1F291E]">
            This is not a typical classroom. At MINDFL, your day begins with observation. We are building a learning village where nature is the teacher, play is the work, and educators don't just instruct—they guide, observe, and respond.
          </p>

          <div className="bg-[#F2EDE2] p-6 rounded-xl border border-[#D8CFBC] space-y-2">
            <h3 className="font-serif text-lg font-bold text-[#2C4A2E]">
              Who You Are :
            </h3>
            <p className="text-sm text-[#3A4739]">
              You belong here if you are patient, present, and deeply curious. We look for those who believe that the greatest lessons are found in the quietest moments of play and who are ready to grow through reflection and intentionality.
            </p>
          </div>

          <div className="bg-[#F2EDE2] p-6 rounded-xl border border-[#D8CFBC] space-y-2">
            <h3 className="font-serif text-lg font-bold text-[#2C4A2E]">
              The Craft
            </h3>
            <p className="text-sm text-[#3A4739]">
              As a Nature Crafter, you will shape meaningful experiences, document the "hidden" moments of learning, and partner closely with families. You won't just follow a curriculum; you will help write the story of a child's journey.
            </p>
          </div>

          <div className="pt-6 text-center space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#1F291E]">
              Apply to Join Us
            </h3>
            <p className="text-sm text-[#4A5548] italic">
              We are always looking for vibrant hearts to join our team. Tell us why this approach speaks to you.
            </p>
          </div>

          {/* Configurable Google Form Component */}
          <GoogleFormEmbed />

        </div>

      </section>

    </div>
  );
}
