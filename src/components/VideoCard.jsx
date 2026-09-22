import React, { useState } from 'react';
import { Play } from 'lucide-react';

export default function VideoCard({ category, title, subcategory, youtubeUrl, note }) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract YouTube Video ID
  const getEmbedUrl = (url) => {
    try {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
      if (match && match[2].length === 11) {
        return `https://www.youtube.com/embed/${match[2]}?autoplay=1`;
      }
    } catch (e) {
      // Fallback
    }
    return url;
  };

  const getThumbnailUrl = (url) => {
    try {
      const match = url.match(/(?:v=|\/)([\w-]{11})/);
      if (match && match[1]) {
        return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
      }
    } catch (e) {}
    return null;
  };

  const videoId = youtubeUrl ? youtubeUrl.match(/(?:v=|\/)([\w-]{11})/)?.[1] : null;
  const thumbUrl = getThumbnailUrl(youtubeUrl);

  const categoryColors = {
    'Fröbel': 'bg-[#D2E0BF] text-[#2C4A2E]',
    'Montessori': 'bg-[#BCE0D1] text-[#1E4234]',
    'Waldorf': 'bg-[#EBDAB7] text-[#543F19]',
    'Reggio Emilia': 'bg-[#D2CDF0] text-[#282159]',
    'Gesell': 'bg-[#ECC3C3] text-[#542121]',
    'Early Years': 'bg-[#BCCEE3] text-[#1E334D]',
  };

  const badgeColor = categoryColors[category] || 'bg-[#7a9660]/20 text-[#3a5238]';

  return (
    <div className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full">
      {/* Video Container */}
      <div className="relative aspect-video bg-[#1F291E] overflow-hidden group">
        {isPlaying ? (
          <iframe
            src={getEmbedUrl(youtubeUrl)}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="relative w-full h-full flex items-center justify-center cursor-pointer" onClick={() => setIsPlaying(true)}>
            {thumbUrl ? (
              <img
                src={thumbUrl}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
            ) : (
              <div className="w-full h-full bg-[#2D3A2C] flex items-center justify-center" />
            )}
            
            {/* Category Tag Overlay */}
            <div className="absolute top-3 left-3">
              <span className={`px-2.5 py-1 text-xs font-bold rounded-full shadow-sm ${badgeColor}`}>
                {category}
              </span>
            </div>

            {/* Play Button */}
            <div className="absolute w-14 h-14 rounded-full bg-[#7a9660] text-white flex items-center justify-center shadow-lg group-hover:bg-[#5e7a45] group-hover:scale-110 transition-all duration-300">
              <Play className="w-6 h-6 fill-current ml-0.5" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-3">
        <div>
          <h3 className="font-serif text-lg font-bold text-[#1F291E] leading-snug">
            {title}
          </h3>
          {subcategory && (
            <p className="text-xs text-[#5e7a45] font-medium mt-1">
              {subcategory}
            </p>
          )}
        </div>

        <div className="pt-2 border-t border-[#EAE4D7] flex items-center justify-between text-xs">
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7a9660] hover:text-[#5e7a45] font-semibold break-all text-[11px]"
          >
            {youtubeUrl}
          </a>
        </div>
      </div>
    </div>
  );
}
