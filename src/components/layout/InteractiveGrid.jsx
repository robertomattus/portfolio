import { useEffect, useState } from "react";

const InteractiveGrid = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 }); // Out of view initially
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.pageX, y: e.pageY });
      setIsIdle(false);
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsIdle(true);
      }, 1000);
    };

    // Solo en desktop para mejor performance
    if (window.matchMedia("(hover: hover)").matches) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-[-1] bg-[var(--color-background)] overflow-hidden">
      {/* ── Base grid (puntos sutiles) ── */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundImage:
            "radial-gradient(circle, #cccccc 1px, transparent 1px)",
          backgroundSize: "12px 12px",
          opacity: 0.6,
        }}
      />

      {/* ── Interactive grid (puntos más oscuros que siguen el mouse) ── */}
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-in-out"
        style={{
          backgroundImage:
            "radial-gradient(circle, #888888 1.5px, transparent 1.5px)",
          backgroundSize: "12px 12px",
          opacity: isIdle ? 0 : 0.9,
          maskImage: `radial-gradient(120px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(120px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
        }}
      />
    </div>
  );
};

export default InteractiveGrid;
