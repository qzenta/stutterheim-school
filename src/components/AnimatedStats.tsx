"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 20, suffix: "+", label: "Subjects Offered" },
  { end: 60, suffix: "+", label: "Students Enrolled" },
  { end: 6, suffix: "+", label: "Qualified Teachers" },
  { end: 2, suffix: "+", label: "Awards & Achievements" },
];

function Counter({ end, suffix, trigger }: { end: number; suffix: string; trigger: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!trigger || started.current) return;
    started.current = true;
    const duration = 1600;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };
    requestAnimationFrame(animate);
  }, [trigger, end]);

  return (
    <span className="tabular-nums text-white">
      {count}{suffix}
    </span>
  );
}

export default function AnimatedStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0C0E6B] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-2">
            <p className="text-5xl lg:text-6xl font-bold text-white">
              <Counter end={s.end} suffix={s.suffix} trigger={triggered} />
            </p>
            <p className="text-blue-200 text-sm font-medium leading-snug max-w-[120px]">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
