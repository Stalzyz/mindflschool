import React from 'react';
import VideoCard from '../components/VideoCard';

export default function WatchAndLearn() {
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Banner / Header */}
      <section className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-sm">
        <span className="text-xs uppercase tracking-widest text-[#5e7a45] font-semibold bg-[#7a9660]/15 px-3 py-1 rounded-full">
          THE COMMON THREAD
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F291E]">
          Different philosophies. One belief.
        </h1>
        <p className="max-w-2xl mx-auto text-base text-[#2D3A2C] leading-relaxed">
          Different centuries, different classrooms — but one root beneath all: <strong className="font-semibold text-[#1F291E]">the child already knows how to grow</strong>. The adult's role is not to direct that growth, but to trust it.
        </p>
      </section>

      {/* Videos Section */}
      <section className="space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#5e7a45] font-semibold">
            HEAR IT FROM THE EXPERTS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F291E]">
            Watch & Learn
          </h2>
          <p className="text-base text-[#4A5548] font-serif italic max-w-xl mx-auto">
            Six short films that bring the thinking behind MINDFL to life. Each one is worth 10 minutes of any parent's time.
          </p>
        </div>

        {/* 6 Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((vid, idx) => (
            <VideoCard key={idx} {...vid} />
          ))}
        </div>
      </section>

    </div>
  );
}
