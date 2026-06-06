"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 20, suffix: "+", label: "Subjects Offered" },
  { end: 60, suffix: "+", label: "Students Enrolled" },
  { end: 6, suffix: "+", label: "Qualified Teachers" },
  { end: 2, suffix: "+", label: "Awards & Achievements" },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return (
    <span ref={ref} className="tabular-nums text-white">
      {count}
      {suffix}
    </span>
  );
}

export default function AnimatedStats() {
  return (
    <section className="bg-[#111480] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-2">
            <p className="text-5xl lg:text-6xl font-bold text-white">
              <Counter end={s.end} suffix={s.suffix} />
            </p>
            <p className="text-blue-200 text-sm font-medium leading-snug max-w-[120px]">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
