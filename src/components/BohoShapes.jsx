import React from 'react';

export function BohoArchShape({ className = "w-64 h-80 opacity-15 fill-[#7a9660]" }) {
  return (
    <svg viewBox="0 0 200 250" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M 0,250 L 0,100 A 100,100 0 0,1 200,100 L 200,250 Z" />
    </svg>
  );
}

export function BohoSunburst({ className = "w-32 h-32 text-[#C86A3E]/20" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <circle cx="50" cy="50" r="16" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
        <line
          key={i}
          x1="50"
          y1="50"
          x2={50 + 38 * Math.cos((deg * Math.PI) / 180)}
          y2={50 + 38 * Math.sin((deg * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export function BohoLeaf({ className = "w-24 h-24 text-[#5e7a45]/20" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M 50,90 Q 20,50 50,10 Q 80,50 50,90 Z" />
      <path d="M 50,90 L 50,10" />
      <path d="M 50,70 Q 35,60 30,50" />
      <path d="M 50,50 Q 65,40 70,30" />
      <path d="M 50,30 Q 35,20 30,15" />
    </svg>
  );
}

export function BohoOrganicBlob({ className = "w-72 h-72 fill-[#F2EDE2]/60" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M38.8,-52.3C49.9,-43.7,58.2,-31.8,62.8,-18.2C67.4,-4.6,68.3,10.7,63.1,24.7C57.9,38.7,46.5,51.4,32.8,59.3C19,67.2,2.8,70.3,-12.3,67.8C-27.4,65.3,-41.4,57.1,-52.8,45.3C-64.2,33.5,-73,18.1,-74.6,1.9C-76.2,-14.3,-70.6,-31.3,-59.8,-41.2C-49,-51.1,-33.1,-53.9,-19,-54.8C-4.9,-55.6,7.3,-54.5,38.8,-52.3Z" transform="translate(100 100)" />
    </svg>
  );
}
