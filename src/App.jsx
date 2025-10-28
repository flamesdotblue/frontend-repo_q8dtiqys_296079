import React from 'react';
import Hero from './components/Hero';
import JourneyTree from './components/JourneyTree';
import StatsImpact from './components/StatsImpact';
import AdminPanel from './components/AdminPanel';
import { Award, Calendar, Newspaper, Mail, Link as LinkIcon } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Hero */}
      <Hero />

      {/* Stats */}
      <StatsImpact />

      {/* Journey */}
      <JourneyTree />

      {/* Awards + Media + Blog Preview Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="p-1 rounded-2xl bg-gradient-to-br from-cyan-400 via-violet-500 to-cyan-500">
              <div className="rounded-xl bg-white/70 backdrop-blur border border-white/60 p-6 h-full shadow">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-white/80 border border-white/60 grid place-items-center text-violet-600"><Award size={20} /></div>
                  <div>
                    <h3 className="text-xl font-semibold">Awards & Recognition</h3>
                    <p className="text-slate-600 text-sm">A few highlights</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-3 text-slate-700">
                  <li>• National Innovation Educator Award (2023)</li>
                  <li>• Keynote Speaker — DevCon South (2024)</li>
                  <li>• Industry Mentor — Startup India</li>
                </ul>
              </div>
            </div>

            <div className="p-1 rounded-2xl bg-gradient-to-br from-cyan-400 via-violet-500 to-cyan-500">
              <div className="rounded-xl bg-white/70 backdrop-blur border border-white/60 p-6 h-full shadow">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-white/80 border border-white/60 grid place-items-center text-violet-600"><Newspaper size={20} /></div>
                  <div>
                    <h3 className="text-xl font-semibold">Blog / Insights</h3>
                    <p className="text-slate-600 text-sm">Recent thoughts</p>
                  </div>
                </div>
                <div className="mt-4 grid gap-3">
                  <a href="#" className="block p-3 rounded-lg bg-white/80 border border-white/60 hover:bg-white transition">
                    AI Safety: Balancing Innovation & Risk →
                  </a>
                  <a href="#" className="block p-3 rounded-lg bg-white/80 border border-white/60 hover:bg-white transition">
                    Zero-Trust in the Modern Enterprise →
                  </a>
                  <a href="#" className="block p-3 rounded-lg bg-white/80 border border-white/60 hover:bg-white transition">
                    Quantum-Ready Algorithms: Where to Begin →
                  </a>
                </div>
              </div>
            </div>

            <div className="p-1 rounded-2xl bg-gradient-to-br from-cyan-400 via-violet-500 to-cyan-500">
              <div className="rounded-xl bg-white/70 backdrop-blur border border-white/60 p-6 h-full shadow">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-white/80 border border-white/60 grid place-items-center text-violet-600"><Calendar size={20} /></div>
                  <div>
                    <h3 className="text-xl font-semibold">Events / Calendar</h3>
                    <p className="text-slate-600 text-sm">Upcoming & past</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-3 text-slate-700">
                  <li>
                    <div className="flex items-center justify-between">
                      <span>TRIAD Tech Summit — Hyderabad</span>
                      <button className="text-cyan-600 hover:text-cyan-700">Add to Calendar</button>
                    </div>
                    <div className="text-sm text-slate-500">Dec 12, 2025</div>
                  </li>
                  <li>
                    <div className="flex items-center justify-between">
                      <span>AI for India — Workshop Series</span>
                      <button className="text-cyan-600 hover:text-cyan-700">Add to Calendar</button>
                    </div>
                    <div className="text-sm text-slate-500">Jan 20, 2026</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin */}
      <AdminPanel />

      {/* About + Contact */}
      <section id="about" className="relative py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-1 rounded-2xl bg-gradient-to-br from-cyan-400 via-violet-500 to-cyan-500">
              <div className="rounded-xl bg-white/70 backdrop-blur border border-white/60 p-6 shadow">
                <h3 className="text-2xl font-semibold">About Me</h3>
                <p className="mt-3 text-slate-700">
                  I am an educator and technologist focused on shaping future-ready talent. As CEO of TRIAD Academy, my mission is to unlock curiosity and accelerate careers through hands-on learning in AI, cybersecurity, and modern software.
                </p>
                <a href="#" className="mt-4 inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700">
                  <LinkIcon size={18} /> Visit TRIAD Academy
                </a>
              </div>
            </div>
            <div className="p-1 rounded-2xl bg-gradient-to-br from-cyan-400 via-violet-500 to-cyan-500">
              <div className="rounded-xl bg-white/70 backdrop-blur border border-white/60 p-6 shadow" id="contact">
                <h3 className="text-2xl font-semibold">Contact</h3>
                <form onSubmit={(e) => e.preventDefault()} className="mt-4 grid gap-3">
                  <input className="px-4 py-3 rounded-lg bg-white/80 border border-white/60" placeholder="Your name" />
                  <input className="px-4 py-3 rounded-lg bg-white/80 border border-white/60" type="email" placeholder="Email" />
                  <textarea className="px-4 py-3 rounded-lg bg-white/80 border border-white/60" rows="4" placeholder="Message" />
                  <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40 transition">
                    <Mail size={18} /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <p className="mt-10 text-center text-sm text-slate-500">© {new Date().getFullYear()} Naga Sai • TRIAD Academy</p>
      </div>
      </section>
    </div>
  );
}
