import React from 'react';

export default function GrowTable() {
  const pillars = [
    {
      pillar: 'G — Guided',
      philosophy: 'Montessori',
      experience: 'Purposeful Independence. We replace worksheets with a "Prepared Environment." Using real tools and natural materials, children master concepts through hands-on discovery.'
    },
    {
      pillar: 'R — Rhythmic',
      philosophy: 'Waldorf',
      experience: 'The Joy of Slow. A calm, media-free daily flow that protects the wonder of childhood. Through storytelling and nature, we create a predictable, unhurried routine.'
    },
    {
      pillar: 'O — Observational',
      philosophy: 'Reggio Emilia',
      experience: 'The Hundred Languages. We view children as researchers. By observing their unique interests, we turn to a simple "Why?" into a deep exploration.'
    },
    {
      pillar: 'W — Whole-Child',
      philosophy: 'Gesell',
      experience: 'Developmental Readiness. We align learning with biological maturity, not age. By removing the pressure of acceleration, we build genuine confidence and wellbeing.'
    }
  ];

  return (
    <div className="w-full my-8">
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-[#D5CDBF] shadow-sm bg-[#FAF8F3]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#EAE3D2] border-b border-[#D5CDBF]">
              <th className="py-4 px-6 font-serif text-lg font-bold text-[#1F291E] w-1/4">Pillar</th>
              <th className="py-4 px-6 font-serif text-lg font-bold text-[#1F291E] w-1/4">Philosophy</th>
              <th className="py-4 px-6 font-serif text-lg font-bold text-[#1F291E] w-1/2">The Experience</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EAE3D2]">
            {pillars.map((item, index) => (
              <tr key={index} className="hover:bg-[#F2ECE0] transition-colors">
                <td className="py-5 px-6 font-serif font-bold text-[#2C4A2E] align-top text-base">
                  {item.pillar}
                </td>
                <td className="py-5 px-6 font-serif italic text-[#3A5238] align-top text-base">
                  {item.philosophy}
                </td>
                <td className="py-5 px-6 text-[#2D3A2C] text-sm leading-relaxed align-top">
                  {item.experience}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Responsive Card Stack View */}
      <div className="md:hidden space-y-4">
        {pillars.map((item, index) => (
          <div key={index} className="bg-[#FAF8F3] border border-[#D5CDBF] rounded-xl p-5 shadow-sm space-y-2">
            <div className="flex items-center justify-between border-b border-[#EAE3D2] pb-2">
              <span className="font-serif font-bold text-[#2C4A2E] text-base">{item.pillar}</span>
              <span className="font-serif italic text-[#5e7a45] text-sm bg-[#7a9660]/10 px-2.5 py-0.5 rounded-full">
                {item.philosophy}
              </span>
            </div>
            <div>
              <p className="text-xs text-[#2D3A2C] leading-relaxed pt-1">
                {item.experience}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
