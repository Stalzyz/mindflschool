import React from 'react';

export default function VineDivider({ flipped = false, className = '' }) {
  const pathD = flipped
    ? 'M1080,30 C930,-10 830,70 680,30 C530,-10 430,70 280,30 C180,5 130,50 0,25'
    : 'M0,30 C150,-10 250,70 400,30 C550,-10 650,70 800,30 C900,5 950,50 1080,25';

  return (
    <div className={`w-full overflow-hidden py-4 ${className}`}>
      <svg className="vine-divider" viewBox="0 0 1080 60" xmlns="http://www.w3.org/2000/svg">
        <path className="vine-path" d={pathD} />
      </svg>
    </div>
  );
}
