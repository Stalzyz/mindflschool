import React from 'react';
import { Users, Clock } from 'lucide-react';

export default function Community() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
      
      <div className="w-16 h-16 bg-[#7a9660]/20 text-[#2C4A2E] rounded-full flex items-center justify-center mx-auto">
        <Users className="w-8 h-8" />
      </div>

      <div className="space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#5e7a45] font-semibold bg-[#7a9660]/15 px-3 py-1 rounded-full">
          Community
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1F291E]">
          Community
        </h1>
      </div>

      <div className="bg-[#FAF8F3] border-2 border-dashed border-[#D5CDBF] rounded-3xl p-10 max-w-xl mx-auto space-y-4">
        <Clock className="w-8 h-8 text-[#7a9660] mx-auto" />
        <h2 className="font-serif text-xl font-bold text-[#1F291E]">
          Community Page
        </h2>
        <p className="text-sm text-[#4A5548] leading-relaxed">
          This page represents the Community section structure specified in the MINDFL documentation. Content for this section is pending release.
        </p>
      </div>

    </div>
  );
}
