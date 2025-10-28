import React from 'react';
import { FileDown, Mail } from 'lucide-react';

const GradientOrb = ({ className = '' }) => (
  <div
    className={`pointer-events-none absolute rounded-full blur-3xl opacity-40 ${className}`}
    aria-hidden="true"
  />
);

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient waves */}
      <div className="absolute inset-0 -z-0">
        <GradientOrb className="w-72 h-72 bg-cyan-400/60 top-[-3rem] left-[-2rem]" />
        <GradientOrb className="w-96 h-96 bg-violet-500/50 bottom-[-4rem] right-[-3rem]" />
        <GradientOrb className="w-80 h-80 bg-cyan-500/40 bottom-10 left-1/2 -translate-x-1/2" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.6),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-white/60 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-sm text-slate-700">TRIAD Academy Style</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              Naga Sai
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-slate-600">
              Educator • Technologist • CEO — Inspiring the Next Generation of Coders
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#journey" className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40 transition">
                View Journey Tree
                <span className="group-hover:translate-x-0.5 transition">→</span>
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/70 backdrop-blur border border-white/70 text-slate-800 hover:bg-white transition">
                <FileDown size={18} />
                Download Resume
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/70 backdrop-blur border border-white/70 text-slate-800 hover:bg-white transition">
                <Mail size={18} />
                Contact Me
              </a>
            </div>
          </div>

          {/* Avatar Card */}
          <div className="relative">
            <div className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72 rounded-3xl p-1 bg-gradient-to-br from-cyan-400 via-violet-500 to-cyan-500 shadow-2xl">
              <div className="h-full w-full rounded-2xl bg-white/70 backdrop-blur border border-white/60 flex items-center justify-center">
                {/* Futuristic avatar with initials */}
                <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 shadow-inner flex items-center justify-center">
                  <span className="text-5xl font-semibold bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">
                    NS
                  </span>
                  <div className="absolute inset-0 rounded-full ring-2 ring-white/60" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
              <div className="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-white/60 shadow flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-sm text-slate-700">Available for Keynotes & Workshops</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
