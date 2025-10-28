import React, { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Filter, Image } from 'lucide-react';

const sampleNodes = [
  {
    id: 1,
    year: 2024,
    state: 'Telangana',
    college: 'JNTU Hyderabad',
    title: 'AI & Cybersecurity Bootcamp',
    highlights: ['Hands-on ML', 'Threat Modeling', 'CTF mini challenge'],
    media: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 2,
    year: 2023,
    state: 'Andhra Pradesh',
    college: 'SRKR Engineering College',
    title: 'Full-Stack with DevOps',
    highlights: ['Docker 101', 'API Security', 'CI/CD basics'],
    media: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 3,
    year: 2022,
    state: 'Karnataka',
    college: 'PES University',
    title: 'Quantum Computing Primer',
    highlights: ['Qubits & Gates', 'Quantum Supremacy', 'IBM Q Experience'],
    media: [
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    ],
  },
];

function Carousel({ images }) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <div className="relative">
      <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/60 bg-white/70 backdrop-blur shadow">
        <img src={images[index]} alt="Journey media" className="h-full w-full object-cover" />
      </div>
      {count > 1 && (
        <>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/80 border border-white/70 shadow hover:bg-white transition">
            <ChevronLeft size={18} />
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/80 border border-white/70 shadow hover:bg-white transition">
            <ChevronRight size={18} />
          </button>
        </>
      )}
      <div className="mt-2 flex items-center justify-center gap-1">
        {images.map((_, i) => (
          <span key={i} className={`h-1.5 w-6 rounded-full ${i === index ? 'bg-cyan-500' : 'bg-slate-300'}`} />
        ))}
      </div>
    </div>
  );
}

export default function JourneyTree() {
  const [year, setYear] = useState('All');
  const [state, setState] = useState('All');
  const [college, setCollege] = useState('All');

  const years = useMemo(() => ['All', ...Array.from(new Set(sampleNodes.map((n) => n.year)))], []);
  const states = useMemo(() => ['All', ...Array.from(new Set(sampleNodes.map((n) => n.state)))], []);
  const colleges = useMemo(() => ['All', ...Array.from(new Set(sampleNodes.map((n) => n.college)))], []);

  const filtered = useMemo(() => {
    return sampleNodes.filter((n) =>
      (year === 'All' || n.year === Number(year)) &&
      (state === 'All' || n.state === state) &&
      (college === 'All' || n.college === college)
    );
  }, [year, state, college]);

  return (
    <section id="journey" className="relative py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Journey Tree</h2>
            <p className="text-slate-600 mt-1">Interactive timeline of colleges and workshops</p>
          </div>
          <div className="flex items-center gap-3 bg-white/70 backdrop-blur border border-white/70 rounded-xl p-2 shadow">
            <span className="px-2 text-slate-600 hidden sm:inline-flex items-center gap-2"><Filter size={16}/> Filters</span>
            <select value={year} onChange={(e) => setYear(e.target.value)} className="px-3 py-2 rounded-lg bg-white/80 border border-white/70 text-slate-700">
              {years.map((y) => (<option key={y} value={y}>{y}</option>))}
            </select>
            <select value={state} onChange={(e) => setState(e.target.value)} className="px-3 py-2 rounded-lg bg-white/80 border border-white/70 text-slate-700">
              {states.map((s) => (<option key={s} value={s}>{s}</option>))}
            </select>
            <select value={college} onChange={(e) => setCollege(e.target.value)} className="px-3 py-2 rounded-lg bg-white/80 border border-white/70 text-slate-700">
              {colleges.map((c) => (<option key={c} value={c}>{c}</option>))}
            </select>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {filtered.map((node) => (
            <div key={node.id} className="relative p-1 rounded-2xl bg-gradient-to-br from-cyan-400 via-violet-500 to-cyan-500 shadow-lg">
              <div className="rounded-xl bg-white/70 backdrop-blur border border-white/60 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm text-slate-500">{node.year} • {node.state}</div>
                    <h3 className="text-xl font-semibold text-slate-900">{node.college}</h3>
                    <p className="text-slate-700 mt-1">{node.title}</p>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/70 border border-white/60 text-xs text-slate-600">
                    <Image size={14} /> {node.media.length}
                  </div>
                </div>

                <div className="mt-4">
                  <Carousel images={node.media} />
                </div>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {node.highlights.map((h) => (
                    <li key={h} className="px-3 py-1 rounded-full bg-slate-100/80 text-slate-700 text-sm border border-white/80">{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
