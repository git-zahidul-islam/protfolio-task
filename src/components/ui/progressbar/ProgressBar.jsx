import React from 'react';

const ProgressBar = ({ title, progress, color = '#FD6F00', bgColor = '#EDECEC' }) => {
  const transitionDuration = '7s'; // Ensure the same duration is used for both elements

  return (
    <div className="space-y-2">
      <p className="text-xl font-semibold">{title}</p>
      <div className="relative w-full rounded-full h-3" style={{ backgroundColor: bgColor }}>
        {/* Progress bar */}
        <div
          className="h-3 rounded-full transition-all"
          style={{
            width: progress,
            backgroundColor: color,
            transitionDuration: transitionDuration, // Ensure smooth transition
          }}
        ></div>

        {/* Circle indicator */}
        <div
          className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 transition-all"
          style={{
            borderColor: color,
            backgroundColor: bgColor,
            left: `calc(${progress} - 12px)`, // Adjust circle position
            transitionDuration: transitionDuration, // Match progress bar's duration
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
