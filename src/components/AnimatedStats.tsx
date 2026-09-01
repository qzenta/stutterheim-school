"use client";

import { useEffect, useRef, useState } from "react";
import { BookOpen, Users, GraduationCap, Award } from "lucide-react";

const stats = [
  { end: 20, suffix: "+", label: "Subjects Offered", blurb: "Languages, Sciences, Commerce, Humanities, Arts & Technology.", icon: BookOpen },
  { end: 60, suffix: "+", label: "Students Enrolled", blurb: "A close-knit school community from Grade R to Grade 9.", icon: Users },
  { end: 6, suffix: "+", label: "Qualified Teachers", blurb: "Experienced, dedicated educators across every phase.", icon: GraduationCap },
  { end: 2, suffix: "+", label: "Awards & Achievements", blurb: "Recognised for academic and extracurricular excellence.", icon: Award },
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
    <span className="tabular-nums">
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
    <section ref={sectionRef} className="bg-[#0C0E6B] py-12 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s) => (
          <div key={s.label} className="flip-card h-40 cursor-pointer">
            <div className="flip-card-inner">
              {/* Front — the number */}
              <div className="flip-card-front bg-white/10 border border-white/15 p-5 flex flex-col items-center justify-center text-center">
                <s.icon className="w-6 h-6 text-blue-300 mb-2" />
                <p className="text-3xl sm:text-4xl font-bold text-white leading-none mb-1.5">
                  <Counter end={s.end} suffix={s.suffix} trigger={triggered} />
                </p>
                <p className="text-blue-200 text-xs font-medium leading-snug">{s.label}</p>
              </div>
              {/* Back — the blurb */}
              <div className="flip-card-back bg-white p-5 flex flex-col items-center justify-center text-center shadow-lg">
                <s.icon className="w-6 h-6 text-[#0C0E6B] mb-2" />
                <p className="text-[#0C0E6B] text-xs font-semibold leading-relaxed">{s.blurb}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
