import { useEffect, useState } from "react";

const icons = [
  { icon: "fa-brands fa-react",      x: 8,   y: 12, speed: 0.04, size: "text-3xl", color: "text-blue-400/30" },
  { icon: "fa-brands fa-js",         x: 80,  y: 20, speed: 0.06, size: "text-4xl", color: "text-yellow-400/25" },
  { icon: "fa-brands fa-html5",      x: 20,  y: 55, speed: 0.03, size: "text-3xl", color: "text-orange-400/30" },
  { icon: "fa-brands fa-css3-alt",   x: 70,  y: 70, speed: 0.05, size: "text-3xl", color: "text-blue-500/25" },
  { icon: "fa-brands fa-node-js",    x: 50,  y: 10, speed: 0.07, size: "text-3xl", color: "text-green-500/25" },
  { icon: "fa-brands fa-github",     x: 90,  y: 45, speed: 0.04, size: "text-4xl", color: "text-gray-400/25" },
  { icon: "fa-brands fa-vuejs",      x: 35,  y: 80, speed: 0.06, size: "text-3xl", color: "text-green-400/25" },
  { icon: "fa-brands fa-python",     x: 60,  y: 40, speed: 0.03, size: "text-4xl", color: "text-blue-300/25" },
  { icon: "fa-solid fa-database",    x: 15,  y: 35, speed: 0.05, size: "text-2xl", color: "text-purple-400/25" },
  { icon: "fa-brands fa-docker",     x: 75,  y: 88, speed: 0.04, size: "text-3xl", color: "text-blue-400/20" },
  { icon: "fa-solid fa-terminal",    x: 45,  y: 60, speed: 0.06, size: "text-2xl", color: "text-gray-300/20" },
  { icon: "fa-brands fa-figma",      x: 5,   y: 75, speed: 0.05, size: "text-3xl", color: "text-pink-400/25" },
];

export const FloatingIcons = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {icons.map((item, i) => (
        <i
          key={i}
          className={`${item.icon} ${item.size} ${item.color} absolute transition-none`}
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            transform: `translateY(${scrollY * item.speed * (i % 2 === 0 ? -1 : 1)}px) rotate(${scrollY * item.speed * 0.5}deg)`,
          }}
        />
      ))}
    </div>
  );
};
