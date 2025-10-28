import React, { useState } from 'react';
import { Settings, Sun, Moon, Plus, Edit3, Image, Calendar, Award, Newspaper } from 'lucide-react';

const AdminCard = ({ title, description, icon: Icon, actions = [] }) => (
  <div className="p-1 rounded-2xl bg-gradient-to-br from-cyan-400 via-violet-500 to-cyan-500">
    <div className="rounded-xl bg-white/70 backdrop-blur border border-white/60 p-5 flex flex-col gap-4 shadow">
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-xl bg-white/80 border border-white/60 grid place-items-center text-violet-600">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600">{description}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {actions.map((a) => (
          <button key={a.label} onClick={a.onClick} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/80 border border-white/60 text-slate-800 hover:bg-white transition">
            {a.icon}
            <span className="text-sm">{a.label}</span>
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default function AdminPanel() {
  const [dark, setDark] = useState(false);
  return (
    <section id="admin" className="relative py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Admin Panel</h2>
            <p className="text-slate-600 mt-1">Manage journey nodes, media, posts, and events</p>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/70 backdrop-blur border border-white/70 shadow">
            <Settings size={18} className="text-slate-600" />
            <span className="text-sm text-slate-700">Appearance</span>
            <button
              onClick={() => setDark(!dark)}
              className="ml-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/80 border border-white/60 text-slate-800 hover:bg-white"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
              <span className="text-sm">{dark ? 'Light' : 'Dark'}</span>
            </button>
          </div>
        </div>

        <div className={`mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${dark ? 'brightness-90' : ''}`}>
          <AdminCard
            title="Journey Nodes"
            description="Add or edit colleges, workshops, and achievements"
            icon={Calendar}
            actions={[
              { label: 'Add Node', icon: <Plus size={16} />, onClick: () => alert('Mock: Add Node') },
              { label: 'Edit Node', icon: <Edit3 size={16} />, onClick: () => alert('Mock: Edit Node') },
              { label: 'Upload Media', icon: <Image size={16} />, onClick: () => alert('Mock: Upload Media') },
            ]}
          />
          <AdminCard
            title="Awards & Recognition"
            description="Certificates, honors, and milestones"
            icon={Award}
            actions={[
              { label: 'Add Award', icon: <Plus size={16} />, onClick: () => alert('Mock: Add Award') },
              { label: 'Edit Award', icon: <Edit3 size={16} />, onClick: () => alert('Mock: Edit Award') },
            ]}
          />
          <AdminCard
            title="Blog / Insights"
            description="AI, Cybersecurity, Quantum Computing"
            icon={Newspaper}
            actions={[
              { label: 'New Post', icon: <Plus size={16} />, onClick: () => alert('Mock: New Post') },
              { label: 'Edit Posts', icon: <Edit3 size={16} />, onClick: () => alert('Mock: Edit Posts') },
            ]}
          />
          <AdminCard
            title="Events / Calendar"
            description="Schedule upcoming and past events"
            icon={Calendar}
            actions={[
              { label: 'Create Event', icon: <Plus size={16} />, onClick: () => alert('Mock: Create Event') },
              { label: 'Edit Event', icon: <Edit3 size={16} />, onClick: () => alert('Mock: Edit Event') },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
