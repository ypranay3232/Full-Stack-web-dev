import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorDotOutline = useRef(null);
  const cursorDot = useRef(null);
  const requestRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (event) => {
      mousePosition.current.x = event.clientX;
      mousePosition.current.y = event.clientY;
      
      // Update dot instantly
      if (cursorDot.current) {
        cursorDot.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      // Smooth interpolation for the outline
      cursorPosition.current.x += (mousePosition.current.x - cursorPosition.current.x) * 0.15;
      cursorPosition.current.y += (mousePosition.current.y - cursorPosition.current.y) * 0.15;

      if (cursorDotOutline.current) {
        cursorDotOutline.current.style.transform = `translate3d(${cursorPosition.current.x}px, ${cursorPosition.current.y}px, 0)`;
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      {/* Outer trailing circle */}
      <div 
        ref={cursorDotOutline}
        className="pointer-events-none fixed top-0 left-0 z-999 h-8 w-8 -ml-4 -mt-4 rounded-full border border-gray-900 dark:border-white opacity-50" 
      />
      {/* Inner precise dot */}
      <div 
        ref={cursorDot}
        className="pointer-events-none fixed top-0 left-0 z-999 h-2 w-2 -ml-1 -mt-1 rounded-full bg-gray-900 dark:bg-white" 
      />
    </>
  );
};

export default CustomCursor;
