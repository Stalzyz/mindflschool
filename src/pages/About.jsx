import React from 'react';
import AdmissionForm from '../components/AdmissionForm';
import { Eye, Target, Heart, Quote, Users, BookOpen, HeartHandshake, Leaf } from 'lucide-react';
import { BohoSunburst } from '../components/BohoShapes';

export default function About() {
  return (
    <div className="space-y-20 pb-20">
      
      {/* Hero Banner / What MINDFL Means */}
      <section className="bg-[#FAF7F0] border-b border-[#EAE4D7] py-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs uppercase tracking-widest text-[#5e7a45] font-semibold bg-[#7a9660]/15 px-3 py-1 rounded-full">
            About MINDFL
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1F291E]">
            What MINDFL Means
          </h1>
          <p className="font-serif italic text-2xl sm:text-3xl text-[#2C4A2E] max-w-3xl mx-auto">
            MINDFL means Mindfulness, being fully present and aware in the moment
          </p>
        </div>
      </section>

      {/* Vision, Mission, Philosophy (PDF Page 4) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Vision Card */}
        <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-2xl p-8 sm:p-10 shadow-sm space-y-4 hover:border-[#7a9660]/40 transition">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#7a9660]/20 text-[#2C4A2E] rounded-xl flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#1F291E]">Vision</h2>
          </div>
          <p className="text-base text-[#2D3A2C] leading-relaxed">
            A world where nature, curiosity, and meaningful experiences nurture a lifelong love for learning, growing children into mindful and compassionate learners.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-2xl p-8 sm:p-10 shadow-sm space-y-4 hover:border-[#7a9660]/40 transition">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#7a9660]/20 text-[#2C4A2E] rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#1F291E]">Mission</h2>
          </div>
          <p className="text-base text-[#2D3A2C] leading-relaxed">
            At MINDFL Early Years, we create a nurturing, nature-integrated learning environment where children explore, play, and discover with curiosity and confidence. Through thoughtful guidance, meaningful experiences, and strong partnerships with families, we support the holistic development of every child, cultivating independence, creativity, empathy, and mindful growth.
          </p>
        </div>

        {/* Philosophy Card */}
        <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-2xl p-8 sm:p-10 shadow-sm space-y-4 hover:border-[#7a9660]/40 transition">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#7a9660]/20 text-[#2C4A2E] rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#1F291E]">Philosophy</h2>
          </div>
          <p className="text-base text-[#2D3A2C] leading-relaxed">
            We believe that every child is a natural-born explorer whose journey begins with a sense of wonder. Our approach is rooted in the timeless truth that it takes a village to raise a child. By reclaiming that village, we provide a sanctuary where the natural world is a co-teacher and families are true partners. We don't just teach, we protect the heartbeat of childhood ensuring every child feels seen, heard, and empowered to grow with empathy and purpose.
          </p>
        </div>

      </section>

      {/* Founder's Message Section (PDF Page 5) */}
      <section id="founders-message" className="bg-[#F2EDE2] py-16 border-y border-[#E2D9C8]">
        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-4 border-b border-[#D8CFBC] pb-8">
            <span className="text-xs uppercase tracking-widest text-[#5e7a45] font-semibold bg-[#7a9660]/15 px-3 py-1 rounded-full">
              Editorial Letter
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F291E]">
              Founder’s Message
            </h2>
            <p className="font-serif italic text-xl text-[#2C4A2E]">
              Before classrooms and curricula and screens — there was a child and the world. MINDFL is a return to that original childhood.
            </p>

            {/* Fröbel Quote */}
            <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto relative shadow-sm mt-4 text-left">
              <Quote className="w-8 h-8 text-[#7a9660]/30 absolute top-4 left-4" />
              <p className="font-serif italic text-base sm:text-lg text-[#2D3A2C] leading-relaxed relative z-10 pl-6">
                "Let us learn from our children, let us live with our children: then will the life of our children bring us peace and joy, then we shall begin to grow wise, to be wise."
              </p>
              <p className="text-xs font-semibold text-[#5e7a45] uppercase tracking-wider mt-3 pl-6">
                — Friedrich Fröbel
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            
            {/* Founder Photograph Space */}
            <div className="md:col-span-4 space-y-3 text-center sticky top-28">
              <div className="w-60 sm:w-64 h-72 sm:h-80 rounded-t-[100px] rounded-b-3xl overflow-hidden border-4 border-white shadow-xl bg-[#EAE4D7] mx-auto">
                <img
                  src="/images/founder.png"
                  alt="Vaikunth Sivashenthan Govindarajan Founder"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1F291E]">
                  Vaikunth Sivashenthan Govindarajan
                </h3>
                <p className="text-xs text-[#5e7a45] font-semibold uppercase tracking-wider">
                  Founder, MINDFL Early Years
                </p>
              </div>
            </div>

            {/* Founder Letter Content */}
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
      </section>

      {/* Our Team Section (PDF Page 6) */}
      <section id="our-team" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#5e7a45] font-semibold bg-[#7a9660]/15 px-3 py-1 rounded-full">
            Our Educators
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F291E]">
            Our Team
          </h2>
          <p className="font-serif italic text-2xl text-[#2C4A2E]">
            Our Educators. Our Nature Crafters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-2xl p-8 space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#7a9660]/20 text-[#2C4A2E] rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-[#7a9660]">
                WHO THEY ARE
              </h3>
              <h4 className="font-serif text-xl font-bold text-[#1F291E]">
                Present. Observant. Intentional.
              </h4>
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
              <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-[#7a9660]">
                HOW WE PREPARE THEM
              </h3>
              <h4 className="font-serif text-xl font-bold text-[#1F291E]">
                Grounded in practice. Guided by GROW.
              </h4>
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
              <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-[#7a9660]">
                HOW THEY WORK WITH FAMILIES
              </h3>
              <h4 className="font-serif text-xl font-bold text-[#1F291E]">
                The learning village, in rhythm.
              </h4>
              <p className="text-sm text-[#3A4739] leading-relaxed">
                Families are not outside the learning journey, they are the heart of it. Through regular observations and shared insights, our Nature Crafters ensure that the world of MINDFL and the world of home stay in harmony. Because when both worlds move in rhythm, a child doesn’t just grow, they flourish.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Join the Learning Village Section (PDF Page 7) */}
      <section id="join-the-learning-village" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
          
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

            {/* Interactive Admission / Recruitment Form */}
            <AdmissionForm />

          </div>

        </div>
      </section>

    </div>
  );
}
