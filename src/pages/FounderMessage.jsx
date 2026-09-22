import React from 'react';
import { Quote } from 'lucide-react';
import { BohoLeaf, BohoSunburst } from '../components/BohoShapes';

export default function FounderMessage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 relative">
      
      {/* Background Shapes */}
      <div className="absolute top-10 right-4 pointer-events-none hidden sm:block">
        <BohoSunburst className="w-28 h-28 text-[#C86A3E]/15" />
      </div>

      {/* Editorial Header */}
      <header className="space-y-6 text-center border-b border-[#E2D9C8] pb-10">
        <span className="text-xs uppercase tracking-widest text-[#5e7a45] font-semibold bg-[#7a9660]/15 px-3 py-1 rounded-full">
          Editorial Letter
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1F291E]">
          Founder’s Message
        </h1>

        <p className="font-serif italic text-xl sm:text-2xl text-[#2C4A2E] leading-relaxed max-w-3xl mx-auto">
          Before classrooms and curricula and screens — there was a child and the world. MINDFL is a return to that original childhood.
        </p>

        {/* Fröbel Header Quote */}
        <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto relative shadow-sm text-left">
          <Quote className="w-8 h-8 text-[#7a9660]/30 absolute top-4 left-4" />
          <p className="font-serif italic text-base sm:text-lg text-[#2D3A2C] leading-relaxed relative z-10 pl-6">
            "Let us learn from our children, let us live with our children: then will the life of our children bring us peace and joy, then we shall begin to grow wise, to be wise."
          </p>
          <p className="text-xs font-semibold text-[#5e7a45] uppercase tracking-wider mt-3 pl-6">
            — Friedrich Fröbel
          </p>
        </div>
      </header>

      {/* Founder Photograph & Letter Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        
        {/* Founder Photograph Display */}
        <div className="md:col-span-4 space-y-4 text-center sticky top-28">
          <div className="relative inline-block">
            {/* Organic Arch Frame */}
            <div className="w-64 sm:w-72 h-80 sm:h-96 rounded-t-[120px] rounded-b-3xl overflow-hidden border-4 border-white shadow-xl bg-[#EAE4D7] mx-auto">
              <img
                src="/images/founder.png"
                alt="Vaikunth Sivashenthan Govindarajan Founder"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-[#7a9660] text-white rounded-full flex items-center justify-center shadow-lg">
              <LeafIcon className="w-6 h-6" />
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-[#1F291E]">
              Vaikunth Sivashenthan Govindarajan
            </h3>
            <p className="text-xs text-[#5e7a45] font-semibold uppercase tracking-wider">
              Founder, MINDFL Early Years
            </p>
          </div>
        </div>

        {/* Main Editorial Letter Text */}
        <div className="md:col-span-8 prose prose-lg max-w-none text-[#2D3A2C] space-y-6 leading-relaxed font-sans text-base sm:text-lg bg-[#FAF8F3] p-8 sm:p-10 rounded-3xl border border-[#E5DFD3] shadow-sm">
          
          <p className="font-serif text-2xl font-bold text-[#1F291E]">
            Dear Families,
          </p>

          <p>
            I recently stood before an art installation titled <em className="font-serif italic text-[#2C4A2E]">Back to Square One</em> — a rigid grid of squares taped onto a cold floor. I watched people step into them and pause, hesitant to cross the lines. It didn't feel like art to me. It felt like the contained reality of modern childhood.
          </p>

          <p>
            In my childhood, intergenerational experience was the only classroom that mattered. Education wasn't delivered to us. We lived it. Today, I look at my niece and see an isolated world that has quietly shrunk. In an effort to protect childhood, we have inadvertently caged it by trading discovery for four walls and screens.
          </p>

          <p className="font-serif italic text-xl text-[#2C4A2E] bg-[#7a9660]/10 p-4 rounded-lg border-l-4 border-[#7a9660]">
            I didn't start MINDFL to build another school. I started it to reclaim the learning village — with intention.
          </p>

          <p>
            I grew up close to nature. That closeness shaped everything I came to believe about childhood. It led me to Friedrich Fröbel, who started and termed the first Kindergarten in 1837. He saw teachers as gardeners and children as plants to be nurtured. He understood the concerns families carry, especially the instinct to shield children from the uncertainty of the natural world. Yet he knew that a child's safety isn't found in avoiding the world, but in learning to care for it:
          </p>

          <blockquote className="my-8 bg-[#F2EDE2] border-l-4 border-[#2C4A2E] p-6 rounded-r-xl italic font-serif text-lg text-[#1F291E] shadow-sm">
            "The child who has cared for another living thing is more easily led to care for his own life. The care of plants will also satisfy his desire to watch living creatures, for he will see birds and butterflies and beetles coming nearby."
            <span className="block not-italic text-xs font-sans uppercase tracking-wider text-[#5e7a45] mt-3 font-semibold">
              — Fröbel, in Lilley, 1967
            </span>
          </blockquote>

          <p>
            By nurturing a seedling or observing a beetle, a child builds the caution and confidence needed to navigate the real world. At MINDFL, we believe a child flourishes best when their entire ecosystem of parents, teachers, wider community, and nature is aligned. We don't just invite families in. We grow alongside them.
          </p>

          <p className="font-serif font-bold text-xl text-[#1F291E]">
            On Fröbel's grave are inscribed these words: "Let us live for our children."
          </p>

          <p>
            MINDFL is our answer to that call and our gift to yours.
          </p>

          <p className="font-serif italic text-xl text-[#2C4A2E]">
            Let's grow it back, together.
          </p>

          <div className="pt-8 border-t border-[#E2D9C8] space-y-2">
            <p className="font-serif text-[#4A5548] italic">Walking this path with you,</p>
            <p className="font-serif text-2xl font-bold text-[#1F291E]">
              Vaikunth Sivashenthan Govindarajan
            </p>
          </div>

        </div>

      </div>

    </article>
  );
}

function LeafIcon(props) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  );
}
