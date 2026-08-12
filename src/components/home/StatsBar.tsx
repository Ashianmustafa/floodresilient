"use client";

import { useEffect, useRef, useState } from "react";

const statsData = [
  { label: "Treatment Groups", value: 4, suffix: "", color: "text-blue-300" },
  { label: "Flood–Dry Cycles", value: 10, suffix: "", color: "text-teal-300" },
  { label: "KPIs Measured", value: 6, suffix: "", color: "text-blue-200" },
  { label: "Research Objectives", value: 4, suffix: "", color: "text-teal-200" },
  { label: "Primary Reference", value: 1, suffix: "", color: "text-white" },
];

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsBar() {
  return (
    <section className="bg-slate-900 py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {statsData.map((stat, i) => (
            <div key={i} className="text-center group">
              <div
                className={`font-jakarta font-bold text-4xl sm:text-5xl mb-1 transition-transform group-hover:scale-110 ${stat.color}`}
              >
                <AnimatedCounter target={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-gray-400 text-xs font-medium tracking-wide uppercase leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
