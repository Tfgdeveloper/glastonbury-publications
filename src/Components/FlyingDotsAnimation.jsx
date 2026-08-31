// FlyingDotsAnimation.js
import React, { useEffect, useRef } from 'react';
import '/src/FlyingDotsAnimation.css'; // We'll create this CSS file next

const FlyingDotsAnimation = () => {
  const containerRef = useRef(null);
  const numDots = 50; // Number of dots to animate

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();

      for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('flying-dot');
        dot.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`; // Random vibrant color
        dot.style.width = `${Math.random() * 4 + 2}px`; // Random size between 2px and 6px
        dot.style.height = dot.style.width;
        dot.style.left = `${Math.random() * containerRect.width}px`;
        dot.style.top = `${Math.random() * containerRect.height}px`;

        // Set a random animation duration and delay for variety
        dot.style.animationDuration = `${Math.random() * 5 + 5}s`; // 5 to 10 seconds
        dot.style.animationDelay = `${Math.random() * 5}s`; // 0 to 5 seconds delay

        container.appendChild(dot);
      }
    }
  }, []);

  return (
    <div className="animation-container" ref={containerRef}>
      
    </div>
  );
};

export default FlyingDotsAnimation;