import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SunHeroSection from '../components/SunHeroSection';
import VineDivider from '../components/VineDivider';
import ArtworkGallery from '../components/ArtworkGallery';

export default function Home() {
  return (
    <div className="space-y-16 pb-20">
      
      {/* Sun Animation Hero Section with Background Carousel & Floating Badge Chips & Parallax Leaves */}
      <SunHeroSection />

      {/* Animated Line Divider */}
      <VineDivider />

      {/* 3 Nature Poems & Visuals Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Soil & Seed */}
          <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 flex flex-col justify-between items-center text-center shadow-sm section-card-anim">
            <div className="space-y-4 w-full">
              <div className="font-serif italic text-base text-[#4D594C] space-y-1 py-4 border-b border-[#EAE4D7]">
                <p>hands in soil</p>
                <p>seed goes in</p>
                <p>water, wait</p>
                <p>it grows</p>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1F291E] uppercase tracking-wide">
                Nature is our Third Teacher
              </h3>
            </div>
            <div className="mt-6 transform hover:scale-110 transition-transform duration-500">
              <img src="/images/flower_icon.png" alt="Flower visual" className="h-28 object-contain mx-auto" />
            </div>
          </div>

          {/* Indoor & Outdoor */}
          <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 flex flex-col justify-between items-center text-center shadow-sm section-card-anim">
            <div className="space-y-4 w-full">
              <div className="font-serif italic text-base text-[#4D594C] space-y-1 py-4 border-b border-[#EAE4D7]">
                <p>in and out</p>
                <p>light to shade</p>
                <p>rest, move</p>
                <p>move again</p>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1F291E] uppercase tracking-wide">
                FLUID INDOOR AND OUTDOOR SPACES
              </h3>
            </div>
            <div className="mt-6 transform hover:scale-110 transition-transform duration-500">
              <img src="/images/butterfly_icon.png" alt="Butterfly visual" className="h-28 object-contain mx-auto" />
            </div>
          </div>

          {/* Observant Fish */}
          <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 flex flex-col justify-between items-center text-center shadow-sm section-card-anim">
            <div className="space-y-4 w-full">
              <div className="font-serif italic text-base text-[#4D594C] space-y-1 py-4 border-b border-[#EAE4D7]">
                <p>still at first</p>
                <p>watching close</p>
                <p>a small move</p>
                <p>then another</p>
                <p className="text-xs text-[#7a9660] font-sans font-medium mt-1">(Being observant like a fish)</p>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1F291E] uppercase tracking-wide">
                Progressive Learning Opportunities
              </h3>
            </div>
            <div className="mt-6 transform hover:scale-110 transition-transform duration-500">
              <img src="/images/fish_icon.png" alt="Fish visual" className="h-28 object-contain mx-auto" />
            </div>
          </div>

        </div>
      </section>

      {/* Animated Line Divider */}
      <VineDivider flipped={true} />

      {/* GROW Oval Graphic & Program Overview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <div className="space-y-2">
          <p className="font-serif text-2xl font-bold text-[#2C4A2E] tracking-tight">
            Rooted in Nature . Guided by Research .
          </p>
        </div>

        {/* Styled Oval Card */}
        <div className="bg-gradient-to-b from-[#EBF2E6] to-[#DEE8D7] border-2 border-[#A3BF91] rounded-[50px] sm:rounded-[100px] p-8 sm:p-14 shadow-md max-w-4xl mx-auto space-y-6 section-card-anim">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F291E]">
            How We TEACH & How we GROW
          </h3>

          <p className="text-sm sm:text-base text-[#2E3D2D] leading-relaxed max-w-2xl mx-auto">
            Learning is a collective act. We see every child as innately curious and capable. Our role is to protect that curiosity. Informed by <strong className="font-semibold text-[#1F291E]">Gesell Developmental Science (Yale Child Study Center, USA)</strong>, we honor each child's unique rhythm by ensuring they are never rushed, but always ready. In our learning village, children don't just learn skills <em className="font-serif text-[#2C4A2E]">they learn how to learn</em>. We ensure they graduate meaningfully engaged with the world around them.
          </p>

          <p className="font-serif text-lg font-bold text-[#2C4A2E]">
            This is how we GROW together.
          </p>

          <div>
            <Link
              to="/why-mindfl"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2C4A2E] hover:bg-[#1D321F] text-white text-sm font-semibold rounded-full shadow transition transform hover:scale-105"
            >
              [ See our GROW approach in action ]
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <p className="text-base font-semibold text-[#3A4739]">
            Our GROW approach is not just play, it is a purposeful pedagogical framework.
          </p>

          <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-2xl p-6 text-left space-y-3 section-card-anim">
            <h4 className="font-serif text-lg font-bold text-[#1F291E] border-b border-[#EAE4D7] pb-2">
              Our Program:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#2D3A2C]">
              <li className="flex items-start gap-2">
                <span className="text-[#7a9660] font-bold">•</span>
                <div>
                  <strong className="block font-semibold">Parent–Toddler Program</strong>
                  <span className="text-xs text-[#5e7a45] italic">6 months – 24 months</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7a9660] font-bold">•</span>
                <div>
                  <strong className="block font-semibold">Sprouts</strong>
                  <span className="text-xs text-[#5e7a45] italic">2 – 3 years</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7a9660] font-bold">•</span>
                <div>
                  <strong className="block font-semibold">Seedlings</strong>
                  <span className="text-xs text-[#5e7a45] italic">3 – 4 years</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7a9660] font-bold">•</span>
                <div>
                  <strong className="block font-semibold">Buds</strong>
                  <span className="text-xs text-[#5e7a45] italic">4 – 5 years</span>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:col-span-2">
                <span className="text-[#7a9660] font-bold">•</span>
                <div>
                  <strong className="block font-semibold">Blossoms</strong>
                  <span className="text-xs text-[#5e7a45] italic">5 – 6 years</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The MINDFL Difference */}
      <section className="bg-[#F2EDE2] py-16 border-y border-[#E2D9C8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-2">
            <h2 className="font-serif text-3xl font-bold text-[#1F291E]">
              The MINDFL Difference:
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {[
              "Age-Appropriate Learning",
              "The MINDFL Loop",
              "Fluid Nature-First Spaces",
              "The Village Partnership",
              "Learning How to Learn",
              "Eco-Conscious Living"
            ].map((pillar, idx) => (
              <div key={idx} className="bg-[#FAF8F3] p-5 rounded-xl border border-[#D5CDBF] shadow-sm flex items-center justify-center font-serif text-base font-semibold text-[#2C4A2E] section-card-anim">
                {pillar}
              </div>
            ))}
          </div>

          {/* Founder Quote */}
          <div className="bg-[#FAF8F3] p-8 rounded-2xl border-l-4 border-[#7a9660] shadow-sm max-w-4xl mx-auto text-center space-y-3 section-card-anim">
            <p className="font-serif italic text-lg sm:text-xl text-[#2D3A2C] leading-relaxed">
              "Before classrooms and curricula and screens — there was a child and the world. MINDFL is a return to that original childhood."
            </p>
            <p className="text-xs uppercase tracking-wider font-semibold text-[#5e7a45]">
              — Vaikunth Sivashenthan Govindarajan, Founder
            </p>
          </div>

        </div>
      </section>

      {/* Strong Foundations */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F291E]">
            Strong foundations for a better future
          </h2>
          <p className="text-base text-[#4A5548] font-serif italic">
            Learn how we help children develop into confident, compassionate, and creative problem-solvers.
          </p>
        </div>

        {/* 3 Foundation Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-2xl p-6 space-y-4 text-center section-card-anim">
            <div className="w-20 h-20 bg-[#7a9660]/20 rounded-full flex items-center justify-center mx-auto text-[#2C4A2E] font-serif font-bold text-xl">
              1
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2C4A2E]">Curious Children</h3>
            <p className="text-xs text-[#3A4739] leading-relaxed">
              We believe children are competent learners capable of engaging fully with the ideas and the world around them. Children learn to develop and grow to their fullest potential in an environment that is emotionally secure, socially complex, and educationally challenging.
            </p>
          </div>

          <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-2xl p-6 space-y-4 text-center section-card-anim">
            <div className="w-20 h-20 bg-[#7a9660]/20 rounded-full flex items-center justify-center mx-auto text-[#2C4A2E] font-serif font-bold text-xl">
              2
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2C4A2E]">Intentional Teachers</h3>
            <p className="text-xs text-[#3A4739] leading-relaxed">
              Teachers have the ability to make a difference in each child's experience. Our teachers implement daily practices that are intentional in promoting cognitive and social strategies. These skills support the development of confidence, empathy, and creativity in young children.
            </p>
          </div>

          <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-2xl p-6 space-y-4 text-center section-card-anim">
            <div className="w-20 h-20 bg-[#7a9660]/20 rounded-full flex items-center justify-center mx-auto text-[#2C4A2E] font-serif font-bold text-xl">
              3
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2C4A2E]">Partners with Parents</h3>
            <p className="text-xs text-[#3A4739] leading-relaxed">
              When parents are actively involved in their preschooler's early childhood educational experience, not only do the children benefit greatly, but teachers do as well. Our partnerships with parents contribute to a vibrant community.
            </p>
          </div>

        </div>

      </section>

      {/* Slidable Artwork Gallery */}
      <ArtworkGallery />

      {/* Join Our Community Callout Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2C4A2E] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl relative overflow-hidden section-card-anim">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Join Our Community
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base text-[#D5E3CD] leading-relaxed">
            Whether you're ready to enroll your child, interested in joining our team of passionate educators, or looking to support our mission, there's a place for you at Growing Place. Together, we're building something beautiful—a community where children flourish, families connect, and learning never stops.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FAF8F3] hover:bg-white text-[#2C4A2E] text-sm font-bold rounded-full shadow transition transform hover:scale-105"
            >
              START YOUR APPLICATION
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
