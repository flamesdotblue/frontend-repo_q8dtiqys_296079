import React, { useEffect, useRef, useState } from 'react';
import { Users, Building2, BarChart3, Award } from 'lucide-react';

function useCountUp(target, start = 0, duration = 1500) {
  const [value, setValue] = useState(start);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
            const startTime = performance.now();
            const tick = (now) => {
              const progress = Math.min((now - startTime) / duration, 1);
              setValue(Math.floor(start + (target - start) * progress));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, start, duration, started]);

  return [value, ref];
}

const StatCard = ({ icon: Icon, label, value }) => (
  <div className="p-1 rounded-2xl bg-gradient-to-br from-cyan-400 via-violet-500 to-cyan-500 shadow-lg">
    <div className="rounded-xl bg-white/70 backdrop-blur border border-white/60 p-6 flex items-center gap-4">
      <div className="h-12 w-12 rounded-xl bg-white/80 border border-white/60 grid place-items-center text-cyan-600">
        <Icon />
      </div>
      <div>
        <div className="text-3xl font-semibold text-slate-900">
          {value.toLocaleString()}+
        </div>
        <div className="text-slate-600">{label}</div>
      </div>
    </div>
  </div>
);

export default function StatsImpact() {
  const [students, ref1] = useCountUp(10000);
  const [colleges, ref2] = useCountUp(100);
  const [states, ref3] = useCountUp(8);
  const [placed, ref4] = useCountUp(1000);

  return (
    <section className="relative py-16" ref={ref1}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Stats & Impact</h2>
        <p className="text-slate-600 mt-1">Numbers that reflect the journey so far</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6" ref={ref2}>
          <StatCard icon={Users} label="Students Trained" value={students} />
          <StatCard icon={Building2} label="Colleges" value={colleges} />
          <StatCard icon={BarChart3} label="States" value={states} />
          <StatCard icon={Award} label="Students Placed" value={placed} />
        </div>
      </div>
    </section>
  );
}
