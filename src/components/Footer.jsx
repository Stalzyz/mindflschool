import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, MapPin, Mail, Clock, ArrowRight, Heart } from 'lucide-react';
import { BohoSunburst, BohoArchShape } from './BohoShapes';

export default function Footer() {
  return (
    <footer className="relative bg-[#1F291E] text-[#E5E8DF] pt-16 pb-12 border-t border-[#344733] overflow-hidden">
      
      {/* Background Boho Elements */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-10">
        <BohoArchShape className="w-80 h-96 fill-[#7a9660]" />
      </div>
      <div className="absolute bottom-4 left-4 pointer-events-none opacity-10">
        <BohoSunburst className="w-36 h-36 text-[#C86A3E]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#344733]">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#7a9660] flex items-center justify-center text-white shadow-md">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block leading-none">
                  MINDFL
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#A4C28A] font-sans font-semibold block mt-1">
                  Early Years
                </span>
              </div>
            </div>

            <p className="text-[#A8B8A5] text-xs sm:text-sm leading-relaxed font-serif italic max-w-sm">
              "A PROGRESSIVE LEARNING VILLAGE FOR THE EARLY YEARS IN SIVARAM NAGAR, COIMBATORE"
            </p>

            <div className="space-y-2 text-xs text-[#8A9C86] pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#A4C28A] flex-shrink-0" />
                <span>Sivaram Nagar, Coimbatore, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#A4C28A] flex-shrink-0" />
                <span>Expression of Interest & Admission Enquiries</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (5 Major Pages) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-sans uppercase text-[#A4C28A] tracking-wider font-semibold text-xs border-b border-[#344733] pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#C4D4BF]">
              <li>
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5">
                  <span className="text-[#7a9660]">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition flex items-center gap-1.5">
                  <span className="text-[#7a9660]">›</span> About Us & Founder's Message
                </Link>
              </li>
              <li>
                <Link to="/why-mindfl" className="hover:text-white transition flex items-center gap-1.5">
                  <span className="text-[#7a9660]">›</span> Why MINDFL & Thinkers
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-white transition flex items-center gap-1.5">
                  <span className="text-[#7a9660]">›</span> Our Programs & Architecture
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition flex items-center gap-1.5">
                  <span className="text-[#7a9660]">›</span> Contact & Admissions Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Learning Village Rhythms */}
          <div className="md:col-span-5 space-y-4 bg-[#263725] p-6 rounded-2xl border border-[#3A4E39]">
            <h4 className="font-serif text-base text-white font-semibold flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#A4C28A]" />
              Learning Rhythms & Pathways
            </h4>

            <ul className="space-y-2 text-xs text-[#A8B8A5]">
              <li className="flex justify-between border-b border-[#3A4E39] pb-1">
                <span>Parent–Toddler (6–24M)</span>
                <span className="text-white font-medium">2-Hr / 3 Days/Wk</span>
              </li>
              <li className="flex justify-between border-b border-[#3A4E39] pb-1">
                <span>Sprouts (2–3 Years)</span>
                <span className="text-white font-medium">3-Hr / 5 Days/Wk</span>
              </li>
              <li className="flex justify-between border-b border-[#3A4E39] pb-1">
                <span>Seedlings, Buds & Blossoms</span>
                <span className="text-white font-medium">Independent / Full Day</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#7a9660] hover:bg-[#5e7a45] text-white text-xs font-semibold rounded-full shadow transition"
              >
                Submit Expression of Interest
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#758872] gap-4">
          <p>© MINDFL Early Years. All rights reserved.</p>
          <p className="font-serif italic text-[#95A892] flex items-center gap-1">
            <span>Rooted in Nature . Guided by Research .</span>
            <Heart className="w-3 h-3 text-[#C86A3E] fill-current ml-1" />
          </p>
        </div>

      </div>
    </footer>
  );
}
