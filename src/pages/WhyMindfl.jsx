import React from 'react';
import GrowTable from '../components/GrowTable';
import VideoCard from '../components/VideoCard';
import { Quote, Sparkles, BookOpen } from 'lucide-react';

export default function WhyMindfl() {
  const uniqueOfferings = [
    {
      title: "Versatile Pedagogical Support",
      description: "Small group learning designed for deeper engagement, individual attention, and personalized developmental support.",
      img: "/images/offering_versatile.png"
    },
    {
      title: "Talking Chairs",
      description: "A dedicated conflict-resolution space where children learn empathy, listening, and peaceful communication.",
      img: "/images/offering_talking_chairs.png"
    },
    {
      title: "Outdoor Learning",
      description: "An outdoor learning programme through the MINDFL Loop where movement, nature, and exploration become part of everyday learning.",
      img: "/images/offering_outdoor.png"
    },
    {
      title: "Farm School",
      description: "Nature as a teacher through hands-on gardening, harvesting, sensory play, and real-life environmental learning.",
      img: "/images/offering_farm_school.png"
    },
    {
      title: "Unique Wellness Experiences",
      description: "Mindful activities, movement, rhythm, and sensory experiences that support emotional, physical, and mental wellbeing.",
      img: "/images/offering_farm_school.png"
    },
    {
      title: "Goodbye Windows",
      description: "A gentle transition ritual that helps children move from home to school with comfort, confidence, and emotional security",
      img: "/images/offering_goodbye_windows.png"
    }
  ];

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

  const videos = [
    {
      category: "Fröbel",
      title: "Froebel's Kindergarten: The Origins of Early Childhood Education",
      subcategory: "Sprouts",
      youtubeUrl: "https://www.youtube.com/watch?v=lieFOzjLHM8"
    },
    {
      category: "Montessori",
      title: "Montessori School Education",
      subcategory: "Sprouts",
      youtubeUrl: "https://www.youtube.com/watch?v=UzmvtVAuuyI"
    },
    {
      category: "Waldorf",
      title: "Waldorf School Education",
      subcategory: "Sprouts",
      youtubeUrl: "https://www.youtube.com/watch?v=BkrgkslnD9g"
    },
    {
      category: "Reggio Emilia",
      title: "Reggio Emilia Education",
      subcategory: "Sprouts",
      youtubeUrl: "https://www.youtube.com/watch?v=7n2hCebmT4c"
    },
    {
      category: "Gesell",
      title: "Gesell: Who We Are",
      subcategory: "Gesell Program in Early Childhood",
      youtubeUrl: "https://www.youtube.com/watch?v=zjH9nFdQLVg"
    },
    {
      category: "Early Years",
      title: "Serve & Return Interaction Shapes Brain Circuitry",
      subcategory: "Center on the Developing Child at Harvard University",
      youtubeUrl: "https://www.youtube.com/watch?v=m_5u8-QSh6A"
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* Hero Header & GROW Framework (PDF Pages 8-9) */}
      <section className="bg-[#FAF7F0] border-b border-[#EAE4D7] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          <span className="text-xs uppercase tracking-widest text-[#5e7a45] font-semibold bg-[#7a9660]/15 px-3 py-1 rounded-full">
            The MINDFL Curriculum
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1F291E]">
            The GROW Framework
          </h1>
          <p className="font-serif italic text-2xl text-[#2C4A2E]">
            Where Global Wisdom Meets Natural Potential
          </p>
          <p className="max-w-3xl mx-auto text-base text-[#2D3A2C] leading-relaxed">
            At MINDFL, we move beyond the traditional classroom. We believe children are naturally curious explorers, not passive recipients of information. Our role is to guide, observe, and support their journey through an intentional, child-centric environment.
          </p>

          <div className="pt-4">
            <h2 className="font-serif text-2xl font-bold text-[#1F291E] mb-6">
              The Four Pillars of Our Pedagogy
            </h2>
            <GrowTable />
          </div>
        </div>
      </section>

      {/* Founder Yale Quote Section (PDF Page 9) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-5 flex justify-center">
              <img
                src="/images/founder_yale.jpg"
                alt="Vaikunth Sivashenthan Govindarajan Founder at Yale Child Study Center"
                className="rounded-2xl shadow-md max-h-[400px] object-cover border-4 border-white"
              />
            </div>

            <div className="md:col-span-7 space-y-6">
              <blockquote className="font-serif italic text-xl text-[#1F291E] leading-relaxed border-l-4 border-[#7a9660] pl-6 py-2">
                "At MINDFL, we respect each child’s readiness and support their growth at the right time."
                <span className="block not-italic text-sm font-sans font-semibold text-[#5e7a45] mt-3 uppercase tracking-wider">
                  — Vaikunth Sivashenthan Govindarajan, Founder
                </span>
                <span className="block not-italic text-xs font-sans text-[#7a9660]">
                  Gesell Program, Yale Child Study Center, USA
                </span>
              </blockquote>

              <div className="space-y-4 text-sm sm:text-base text-[#2D3A2C] leading-relaxed border-t border-[#EAE4D7] pt-6">
                <p className="font-serif font-bold text-lg text-[#1F291E]">
                  We are architecting a new standard for the formative years.
                </p>
                <p>
                  At MINDFL, we strive to be a champion of early childhood education. We believe learning unfolds naturally through rhythm, nature, and meaningful relationships. Rooted in global wisdom and the spirit of the learning village, MINDFL is a living environment dedicated to nurturing children into confident, compassionate, and capable human beings.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Unique Offerings Section (PDF Pages 9-12) */}
      <section id="our-unique-offerings" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#5e7a45] font-semibold bg-[#7a9660]/15 px-3 py-1 rounded-full">
            Thoughtfully Designed
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F291E]">
            Our Unique Offerings
          </h2>
          <p className="font-serif italic text-2xl text-[#2C4A2E]">
            Thoughtfully Designed for Childhood
          </p>
          <p className="text-sm text-[#4A5548] leading-relaxed">
            At MINDFL, every experience is intentional—created to support confidence, curiosity, emotional security, and meaningful learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uniqueOfferings.map((offering, idx) => (
            <div key={idx} className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-2xl p-6 shadow-sm flex flex-col items-center text-center space-y-4 hover:border-[#7a9660]/40 transition">
              <div className="w-36 h-36 bg-[#EAE3D2] rounded-full p-3 flex items-center justify-center overflow-hidden border-2 border-[#D5CDBF]">
                <img src={offering.img} alt={offering.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1F291E] border-b border-[#EAE4D7] pb-2 w-full">
                {offering.title}
              </h3>
              <p className="text-xs text-[#3A4739] leading-relaxed flex-grow">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why the Early Years Matter (PDF Page 12) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1F291E] text-white rounded-3xl p-8 sm:p-14 space-y-10 shadow-xl">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#E5E8DF]">
              Why the Early Years Matter.
            </h2>
            <p className="text-sm sm:text-base text-[#B3C4B0] leading-relaxed">
              The first six years are not preparation for learning. They are the most intense period of learning that will ever occur. What happens here — the relationships, the environments, the freedom to explore — shapes the architecture of everything that follows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#344733]">
            <div className="bg-[#F8F6F0] text-[#1F291E] p-6 rounded-2xl text-center space-y-3 shadow-md">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#2C4A2E] block">
                80%
              </span>
              <p className="text-sm font-semibold text-[#1F291E] leading-snug">
                of all neural connections form by age 3
              </p>
              <p className="text-[11px] italic font-serif text-[#5e7a45]">
                Harvard Center on the Developing Child
              </p>
            </div>

            <div className="bg-[#F8F6F0] text-[#1F291E] p-6 rounded-2xl text-center space-y-3 shadow-md">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#2C4A2E] block">
                700
              </span>
              <p className="text-sm font-semibold text-[#1F291E] leading-snug">
                new neural connections per second in early childhood
              </p>
              <p className="text-[11px] italic font-serif text-[#5e7a45]">
                Harvard Center on the Developing Child
              </p>
            </div>

            <div className="bg-[#F8F6F0] text-[#1F291E] p-6 rounded-2xl text-center space-y-3 shadow-md">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#2C4A2E] block">
                90%
              </span>
              <p className="text-sm font-semibold text-[#1F291E] leading-snug">
                of brain development complete by age 5
              </p>
              <p className="text-[11px] italic font-serif text-[#5e7a45]">
                Zero to Three · National Institutes of Health, USA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thinkers Behind MINDFL Section (PDF Page 13) */}
      <section id="thinkers-behind-mindfl" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#5e7a45] font-semibold bg-[#7a9660]/15 px-3 py-1 rounded-full">
            THE THINKERS BEHIND MINDFL
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F291E]">
            The Thinkers Behind MINDFL.
          </h2>
          <p className="max-w-3xl mx-auto text-base text-[#3A4739] leading-relaxed">
            MINDFL is not built on one philosophy. It is rooted in the collective wisdom of the greatest minds in childhood education. Here is what they believed — and exactly where you will see their ideas in your child's day.
          </p>
        </div>

        {/* Friedrich Fröbel Featured */}
        <div className="bg-[#FAF8F3] border-2 border-[#7a9660]/40 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-[#EAE4D7] pb-6">
            <div className={`w-16 h-16 rounded-full ${thinkers[0].badgeBg} flex items-center justify-center font-serif font-bold text-xl flex-shrink-0 shadow-md`}>
              {thinkers[0].badge}
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#1F291E]">{thinkers[0].name}</h3>
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

        {/* Other 4 Thinkers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {thinkers.slice(1).map((thinker, idx) => (
            <div key={idx} className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-2xl p-6 shadow-sm space-y-4 flex flex-col justify-between hover:border-[#7a9660]/40 transition">
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-[#EAE4D7] pb-4">
                  <div className={`w-12 h-12 rounded-full ${thinker.badgeBg} flex items-center justify-center font-serif font-bold text-base flex-shrink-0 shadow-sm`}>
                    {thinker.badge}
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#1F291E]">{thinker.name}</h4>
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
      </section>

      {/* Watch & Learn Section (PDF Pages 14-15) */}
      <section id="watch-and-learn" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 text-center space-y-4 shadow-sm">
          <span className="text-xs uppercase tracking-widest text-[#5e7a45] font-semibold bg-[#7a9660]/15 px-3 py-1 rounded-full">
            THE COMMON THREAD
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#1F291E]">
            Different philosophies. One belief.
          </h2>
          <p className="max-w-2xl mx-auto text-base text-[#2D3A2C] leading-relaxed">
            Different centuries, different classrooms — but one root beneath all: <strong className="font-semibold text-[#1F291E]">the child already knows how to grow</strong>. The adult's role is not to direct that growth, but to trust it.
          </p>
        </div>

        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#5e7a45] font-semibold">
              HEAR IT FROM THE EXPERTS
            </span>
            <h3 className="font-serif text-3xl font-bold text-[#1F291E]">
              Watch & Learn
            </h3>
            <p className="text-sm text-[#4A5548] font-serif italic max-w-xl mx-auto">
              Six short films that bring the thinking behind MINDFL to life. Each one is worth 10 minutes of any parent's time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((vid, idx) => (
              <VideoCard key={idx} {...vid} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
