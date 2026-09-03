import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [isTouch, setIsTouch] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isViewHover, setIsViewHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const pos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    // Check touch devices
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      pos.current.targetX = e.clientX;
      pos.current.targetY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);

    // Smooth animation loop for ring
    let animationFrameId: number;
    const updateRing = () => {
      const ease = 0.15;
      pos.current.x += (pos.current.targetX - pos.current.x) * ease;
      pos.current.y += (pos.current.targetY - pos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(updateRing);
    };
    animationFrameId = requestAnimationFrame(updateRing);

    // Global delegate hover detection
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isViewElem = target.closest(
        '[data-cursor-view], .signature-card, .gallery-item, .about-image-wrapper'
      );
      if (isViewElem) {
        setIsViewHover(true);
        setIsHovered(true);
        return;
      }
      setIsViewHover(false);

      const isInteractive = target.closest(
        'a, button, input, select, textarea, [role="button"], [role="tab"], .menu-item'
      );
      if (isInteractive) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Center pinpoint */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-[#d4a853] rounded-full pointer-events-none z-[10000] transition-opacity duration-300"
      />

      {/* Floating magnetic ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center transition-all duration-300 ease-out ${
          isViewHover
            ? 'w-16 h-16 -ml-8 -mt-8 bg-[#0a1a1a]/85 border border-[#d4a853] backdrop-blur-xs'
            : isHovered
            ? 'w-14 h-14 -ml-7 -mt-7 bg-[#d4a853]/10 border border-[#d4a853]'
            : isClicked
            ? 'w-6 h-6 -ml-3 -mt-3 border border-[#d4a853]/80 bg-[#d4a853]/20'
            : 'w-8 h-8 -ml-4 -mt-4 border border-[#d4a853]/45'
        }`}
      >
        {isViewHover && (
          <span className="text-[8px] font-bold tracking-[0.2em] text-[#e8c87a] font-accent uppercase">
            VIEW
          </span>
        )}
      </div>
    </>
  );
};
