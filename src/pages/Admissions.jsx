import React from 'react';
import { Compass, Calendar, HeartHandshake, FileCheck, Clock } from 'lucide-react';

export default function Admissions() {
  const stages = [
    {
      num: 1,
      title: "The Digital Inquiry",
      description: "Your journey begins with a moment of curiosity. Share your details through our Expression of Interest form. This simple first step allows us to understand your family's needs and aspirations.",
      icon: FileCheck
    },
    {
      num: 2,
      title: "The Landscape Dialogue & Tour",
      description: "We invite both parents to step into our campus for an immersive walkthrough. Rather than a formal interview, this is a Landscape Dialogue. We will explore our studios together, discuss the GROW Framework, and visualize how your child will navigate our fluid architecture.",
      icon: Compass
    },
    {
      num: 3,
      title: "The Child Observation & Play Session",
      description: "At MINDFL, we don't \"screen\" children; we observe them. We host a gentle play session where your child can explore our Authentic Materials while our educators observe their natural curiosities and social cues. This ensures our environment is the perfect \"third teacher\" for their current developmental stage.",
      icon: Calendar
    },
    {
      num: 4,
      title: "Parents as Partners",
      description: "At MINDFL, enrollment is the beginning of a lifelong partnership. We work hand-in-hand with you to ensure a Rhythmic Transition from home to school. Through regular developmental dialogues and collaborative goal-setting, we ensure that your child’s growth is supported consistently across both worlds.",
      icon: HeartHandshake
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#5e7a45] font-semibold bg-[#7a9660]/15 px-3 py-1 rounded-full">
          Admission Process
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1F291E]">
          The Journey to MINDFL
        </h1>
        <p className="font-serif italic text-2xl text-[#2C4A2E]">
          A Thoughtful Path to Joining our Community
        </p>
        <p className="max-w-3xl mx-auto text-base text-[#2D3A2C] leading-relaxed">
          Choosing an early years environment is a milestone for your family. At MINDFL, our admission process is not a series of tests, but a gentle unfolding, a chance for us to understand your child’s unique rhythm and for you to experience our Learning Landscape firsthand.
        </p>
      </div>

      {/* 4 Stages of Connection Stack */}
      <div className="space-y-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F291E] text-center">
          The Four Stages of Connection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stages.map((stg) => {
            const IconComponent = stg.icon;
            return (
              <div key={stg.num} className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 shadow-sm space-y-4 flex flex-col justify-between hover:border-[#7a9660]/40 transition">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-[#7a9660]/20 text-[#2C4A2E] rounded-2xl flex items-center justify-center font-serif font-bold text-xl">
                      {stg.num}
                    </div>
                    <IconComponent className="w-6 h-6 text-[#7a9660]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1F291E]">
                    {stg.title}
                  </h3>
                  <p className="text-sm text-[#3A4739] leading-relaxed">
                    {stg.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Exact PDF "Coming Soon" note banner */}
      <div className="bg-[#F2EDE2] border-2 border-dashed border-[#7a9660]/40 rounded-2xl p-6 text-center space-y-2">
        <div className="inline-flex items-center gap-2 text-[#5e7a45] text-xs font-bold uppercase tracking-wider">
          <Clock className="w-4 h-4" />
          Status Update
        </div>
        <p className="font-serif italic text-lg text-[#1F291E] font-semibold">
          Admission Form - Parent Testimonial- Coming Soon
        </p>
      </div>

    </div>
  );
}
