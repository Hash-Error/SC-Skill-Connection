import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Calendar, 
  Users, 
  MapPin, 
  ChevronRight, 
  Rocket, 
  Grid, 
  List, 
  RefreshCcw,
  Zap,
  Globe
} from 'lucide-react';

export const HackathonExplorer: React.FC = () => {
  const hackathons = [
    {
      id: 1,
      name: "Neural Nexus: AI For Good",
      org: "TechNova",
      desc: "Develop innovative AI solutions focusing on climate change and humanitarian aid. $50,000 prize pool up for grabs.",
      time: "Oct 12 - 14",
      teamSize: "2-4 Members",
      location: "Remote",
      status: "Starts in 3 days",
      tags: ["Python", "TensorFlow", "GCP"],
      logo: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=100&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Web3 Infrastructure Summit",
      org: "Ethos Web3",
      desc: "Building the next generation of decentralized identity and storage solutions at the heart of London's tech scene.",
      time: "Oct 20 - 22",
      teamSize: "Solo or Pair",
      location: "London, UK",
      status: "Starts in 1 week",
      tags: ["Solidity", "Rust", "React"],
      logo: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=100&auto=format&fit=crop"
    }
  ];

  const sidebarFilters = [
    { title: "Location", options: ["Online / Remote", "In-Person / Offline"] },
    { title: "Team Size", options: ["Any Size", "Solo (1)", "Small (2-4)", "Large (5+)"] }
  ];

  return (
    <div className="pt-24 bg-surface min-h-screen">
      <main className="max-w-7xl mx-auto px-6 pb-20 flex flex-col md:flex-row gap-10">
        {/* Filter Sidebar */}
        <aside className="w-full md:w-80 flex-shrink-0 space-y-8">
          <div className="bg-white p-8 rounded-[2.5rem] diffuse-shadow border border-outline-variant/10 space-y-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-black text-on-surface">Filters</h3>
              <Filter size={18} className="text-on-surface-variant" />
            </div>

            {sidebarFilters.map((filter, i) => (
              <div key={i}>
                <h4 className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-4">{filter.title}</h4>
                <div className="space-y-3">
                  {filter.options.map(opt => (
                    <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 rounded-lg border-outline-variant text-primary focus:ring-primary/20 accent-primary" />
                      <span className="text-sm font-bold text-on-surface-variant group-hover:text-primary transition-all">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-4">Date Range</h4>
              <div className="space-y-3">
                <input type="date" className="w-full bg-surface-container-high border-none rounded-xl p-3 text-sm font-bold text-on-surface" />
                <input type="date" className="w-full bg-surface-container-high border-none rounded-xl p-3 text-sm font-bold text-on-surface" />
              </div>
            </div>

            <button className="w-full py-4 bg-primary text-white rounded-2xl font-black text-sm shadow-xl shadow-primary/10 hover:scale-[1.02] active:scale-95 transition-all">
              Apply Filters
            </button>
          </div>

          <div className="bg-primary-container p-8 rounded-[2.5rem] text-on-primary-container relative overflow-hidden diffuse-shadow border border-outline-variant/10">
            <div className="relative z-10">
              <h4 className="text-xl font-black mb-2">Host Your Own?</h4>
              <p className="text-sm opacity-80 mb-6 font-medium">Join 500+ organizers building the future of collaborative tech.</p>
              <button className="bg-white text-primary px-6 py-3 rounded-xl font-black text-xs hover:bg-surface-bright transition-all shadow-lg">
                Post a Hackathon
              </button>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-10">
              <Rocket size={120} />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <section className="flex-1 space-y-10">
          <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl font-black text-primary tracking-tighter mb-4">Hackathon Explorer</h1>
              <p className="text-on-surface-variant text-lg font-medium">Find your next team and build something extraordinary.</p>
            </div>
            <div className="flex gap-2 bg-white/50 p-1.5 rounded-2xl border border-outline-variant/10 diffuse-shadow">
              <button className="p-2.5 bg-white rounded-xl shadow-sm text-primary">
                <Grid size={20} />
              </button>
              <button className="p-2.5 text-on-surface-variant hover:bg-white rounded-xl transition-all">
                <List size={20} />
              </button>
            </div>
          </header>

          {/* Featured Hackathon */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-indigo-950 rounded-[3rem] p-12 text-white relative overflow-hidden group diffuse-shadow"
          >
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-teal-400" />
                  <span className="bg-teal-400/20 text-teal-400 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase">Featured Content</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">Design Systems 2.0:<br/>The Future of UI</h3>
                <p className="text-indigo-100/80 text-lg leading-relaxed max-w-xl">A collaborative 48-hour sprint focusing on tokenized workflows, accessibility by default, and AI-driven component generation.</p>
                
                <div className="flex flex-wrap gap-10">
                  <div className="flex items-center gap-3">
                    <Globe className="text-teal-400" size={20} />
                    <span className="font-black text-sm uppercase tracking-widest">Global Virtual</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="text-teal-400" size={20} />
                    <span className="font-black text-sm uppercase tracking-widest">$10,000 Prize</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="bg-white text-indigo-950 px-10 py-4 rounded-2xl font-black text-lg hover:bg-teal-300 transition-all shadow-xl shadow-white/5">Register Now</button>
                  <button className="bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-white/20 transition-all border border-white/10">View Details</button>
                </div>
              </div>
              <div className="w-full lg:w-1/3">
                <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl relative rotate-3 group-hover:rotate-0 transition-transform duration-700">
                  <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop" alt="Abstract" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-indigo-900/40 mix-blend-overlay"></div>
                </div>
              </div>
            </div>
            {/* Background highlights */}
            <div className="absolute -top-1/2 -right-1/4 w-[500px] h-[500px] bg-primary rounded-full blur-[160px] opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-1/2 -left-1/4 w-[400px] h-[400px] bg-secondary rounded-full blur-[140px] opacity-20"></div>
          </motion.div>

          {/* Hackathon Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hackathons.map((hct, idx) => (
              <motion.div 
                key={hct.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] group border border-outline-variant/10 diffuse-shadow hover:bg-white/40 transition-all"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-surface-container p-3 flex items-center justify-center border border-outline-variant/10 group-hover:scale-110 transition-transform duration-500">
                    <img src={hct.logo} className="w-full h-full object-contain" alt={hct.org} />
                  </div>
                  <div className="text-right space-y-1.5">
                    <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase">{hct.location}</span>
                    <p className="text-[10px] font-black text-secondary uppercase animate-pulse">{hct.status}</p>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-on-surface group-hover:text-primary transition-colors mb-4">{hct.name}</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8 line-clamp-2 font-medium">{hct.desc}</p>

                <div className="flex gap-8 py-8 border-t border-outline-variant/10 mb-8">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <Calendar size={18} />
                    <span className="text-sm font-black">{hct.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <Users size={18} />
                    <span className="text-sm font-black">{hct.teamSize}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-10">
                  {hct.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-xl border border-outline-variant/20 text-on-surface-variant text-[10px] font-black uppercase tracking-wider group-hover:border-primary/20 group-hover:text-primary transition-all">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-primary text-white py-4 rounded-2xl font-black text-base shadow-xl shadow-primary/10 hover:shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">Join Team</button>
                  <button className="px-6 bg-surface-container rounded-2xl group-hover:bg-primary/5 transition-all border border-outline-variant/10">
                    <ChevronRight className="text-on-surface-variant group-hover:text-primary transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="py-16 flex justify-center">
            <button className="group flex items-center gap-4 text-on-surface-variant font-black text-lg hover:text-primary transition-all">
              <RefreshCcw size={24} className="group-hover:rotate-180 transition-transform duration-700" />
              Load more hackathons
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
