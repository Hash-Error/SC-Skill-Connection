import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Briefcase, 
  Users, 
  MessageSquare, 
  Calendar, 
  MapPin, 
  Plus, 
  ChevronRight, 
  CloudUpload,
  Rocket,
  CheckCircle,
  Zap,
  Tag
} from 'lucide-react';

export const CreateContentForm: React.FC = () => {
  const postTypes = [
    { id: 'hackathon', icon: <Trophy size={20} />, label: "Hackathon Event", active: true },
    { id: 'internship', icon: <Briefcase size={20} />, label: "Internship", active: false },
    { id: 'team', icon: <Users size={20} />, label: "Team Hunt", active: false },
    { id: 'general', icon: <MessageSquare size={20} />, label: "General Post", active: false }
  ];

  return (
    <div className="pt-24 bg-surface min-h-screen">
      <main className="max-w-6xl mx-auto px-6 pb-20">
        {/* Breadcrumb Rail */}
        <div className="flex items-center gap-2 mb-10 text-sm font-black text-on-surface-variant uppercase tracking-widest">
          <span className="hover:text-primary cursor-pointer transition-colors">Explorer</span>
          <ChevronRight size={14} />
          <span className="text-primary">Create New Opportunity</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Form Area */}
          <div className="flex-1 space-y-10">
            <header>
              <h1 className="text-5xl font-black text-primary tracking-tighter mb-4">Post an Opportunity</h1>
              <p className="text-lg text-on-surface-variant font-medium max-w-xl leading-relaxed">Connect with the community by sharing hackathons, internships, or finding your next team members.</p>
            </header>

            {/* Post Type Selector */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {postTypes.map(type => (
                <button 
                  key={type.id}
                  className={`p-6 rounded-2xl flex flex-col gap-3 text-left transition-all duration-300 diffuse-shadow border-2 ${
                    type.active 
                    ? 'bg-white border-primary shadow-xl shadow-primary/10' 
                    : 'bg-surface-container-low border-transparent hover:bg-white hover:border-primary/20'
                  }`}
                >
                  <span className={`${type.active ? 'text-primary' : 'text-on-surface-variant'}`}>{type.icon}</span>
                  <span className={`text-[11px] font-black uppercase tracking-widest ${type.active ? 'text-primary' : 'text-on-surface-variant'}`}>{type.label}</span>
                </button>
              ))}
            </section>

            {/* Form Canvas */}
            <div className="bg-white p-10 rounded-[3rem] diffuse-shadow border border-outline-variant/10 space-y-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 premium-gradient"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Hackathon Title</label>
                  <input type="text" placeholder="e.g. AthenaHacks 2024" className="w-full bg-surface-container border-none rounded-2xl p-5 text-on-surface font-bold placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary focus:bg-white transition-all" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Host Organization</label>
                  <input type="text" placeholder="Digital Atheneum" className="w-full bg-surface-container border-none rounded-2xl p-5 text-on-surface font-bold placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary focus:bg-white transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Event Date</label>
                  <div className="relative">
                    <input type="date" className="w-full bg-surface-container border-none rounded-2xl p-5 text-on-surface font-bold focus:ring-2 focus:ring-primary focus:bg-white transition-all" />
                    <Calendar size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Location</label>
                  <div className="relative">
                    <input type="text" placeholder="Hybrid / NYC" className="w-full bg-surface-container border-none rounded-2xl p-5 text-on-surface font-bold focus:ring-2 focus:ring-primary focus:bg-white transition-all" />
                    <MapPin size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Max Team Size</label>
                  <div className="flex bg-surface-container rounded-2xl overflow-hidden shadow-inner">
                    <button className="px-6 hover:bg-primary/10 transition-colors font-black text-xl text-primary">-</button>
                    <input type="number" placeholder="4" className="w-full bg-transparent border-none text-center p-5 text-on-surface font-bold focus:ring-0" />
                    <button className="px-6 hover:bg-primary/10 transition-colors font-black text-xl text-primary">+</button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Required Skillsets</label>
                <div className="flex flex-wrap gap-3 p-4 bg-surface-container rounded-2xl border-2 border-transparent focus-within:bg-white focus-within:border-primary/20 transition-all">
                  {['Python', 'UI Design', 'React'].map(tag => (
                    <span key={tag} className="flex items-center gap-2 bg-secondary-container text-on-secondary-container py-2 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm">
                      {tag} <Plus size={12} className="rotate-45" />
                    </span>
                  ))}
                  <input type="text" placeholder="Add skills..." className="bg-transparent border-none focus:ring-0 text-sm font-bold flex-1 min-w-[120px]" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Description & Rules</label>
                <div className="bg-surface-container rounded-[2.5rem] overflow-hidden shadow-inner ring-2 ring-transparent focus-within:ring-primary/20 transition-all">
                  <div className="flex items-center gap-6 px-8 py-4 bg-surface-container-high/50 border-b border-outline-variant/20">
                    <button className="text-on-surface-variant hover:text-primary transition-colors font-bold text-lg">B</button>
                    <button className="text-on-surface-variant hover:text-primary transition-colors italic text-lg">I</button>
                    <Tag size={18} className="text-on-surface-variant hover:text-primary cursor-pointer"/>
                    <CloudUpload size={18} className="text-on-surface-variant hover:text-primary cursor-pointer"/>
                  </div>
                  <textarea 
                    className="w-full border-none focus:ring-0 p-8 bg-transparent text-on-surface font-medium text-lg placeholder:text-on-surface-variant/40 placeholder:font-black placeholder:uppercase placeholder:text-xs min-h-[240px]" 
                    placeholder="Tell the community everything they need to know about your opportunity..."
                  ></textarea>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Cover Banner</label>
                <div className="border-[3px] border-dashed border-outline-variant/30 rounded-[2.5rem] p-16 flex flex-col items-center justify-center text-on-surface-variant bg-surface-container hover:bg-white hover:border-primary/40 transition-all group cursor-pointer">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-500">
                    <CloudUpload size={32} />
                  </div>
                  <p className="font-black text-on-surface text-lg">Drop your masterwork here</p>
                  <p className="text-sm font-bold text-on-surface-variant/60 mt-1 uppercase tracking-widest">PNG, JPG up to 10MB (1200x630)</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-6 pt-6">
              <button className="px-10 py-5 font-black text-on-surface-variant hover:text-primary uppercase tracking-widest text-sm transition-all">Save Draft</button>
              <button className="px-12 py-5 font-black text-white premium-gradient rounded-2xl shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-3">
                Publish Opportunity 
                <Rocket size={18} />
              </button>
            </div>
          </div>

          {/* Right Preview Sidebar */}
          <aside className="lg:w-96 space-y-10">
            <div className="bg-indigo-950 p-10 rounded-[2.5rem] text-indigo-50 relative overflow-hidden diffuse-shadow border border-outline-variant/10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-teal-400/10 rounded-full blur-[80px]"></div>
              <h3 className="text-2xl font-black mb-6 relative z-10 tracking-tight">Strategy Guide</h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "Be ultra-specific about technical requirements to attract precise talent.",
                  "Use high-fidelity banners to increase click-through by up to 45%.",
                  "Front-load prizes and primary learning outcomes in the first 2 sentences."
                ].map((tip, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle className="text-teal-400 shrink-0 mt-1" size={18} />
                    <span className="text-sm font-medium leading-relaxed opacity-80">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] diffuse-shadow border border-outline-variant/10">
              <h3 className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] mb-8">Live Feed Preview</h3>
              <div className="bg-surface-container rounded-3xl overflow-hidden shadow-sm border border-outline-variant/10 scale-95 origin-top mb-10">
                <div className="h-40 bg-surface-container-high/50 flex items-center justify-center">
                  <CloudUpload className="text-on-surface-variant/20" size={48} />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <Zap size={10} className="text-teal-500 fill-teal-500" />
                    <span className="text-[8px] font-black text-teal-600 uppercase tracking-widest">Hackathon Preview</span>
                  </div>
                  <div className="h-5 bg-on-surface/5 w-3/4 rounded-full"></div>
                  <div className="h-3 bg-on-surface/5 w-1/2 rounded-full"></div>
                  <div className="flex gap-2 pt-2">
                    <div className="h-5 w-14 bg-secondary-container/50 rounded-lg"></div>
                    <div className="h-5 w-14 bg-secondary-container/50 rounded-lg"></div>
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-center text-on-surface-variant font-black uppercase tracking-widest leading-relaxed opacity-60 px-4">This is how your opportunity will manifest in the global feed.</p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};
