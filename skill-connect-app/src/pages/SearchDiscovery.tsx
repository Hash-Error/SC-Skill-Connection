import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  School, 
  BookOpen, 
  Mail, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight,
  Filter,
  MessageSquare,
  Globe,
  Plus
} from 'lucide-react';

export const SearchDiscovery: React.FC = () => {
  const users = [
    {
      name: "Julianne Moore",
      college: "Stanford University",
      tags: ["React", "UI Design", "Node.js"],
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      online: true
    },
    {
      name: "Marcus Chen",
      college: "MIT",
      tags: ["Python", "ML", "Keras"],
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
      online: false
    },
    {
      name: "Elena Rodriguez",
      college: "UCLA",
      tags: ["Figma", "Motion", "Illustration"],
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
      online: true
    },
    {
      name: "David Kim",
      college: "Cornell University",
      tags: ["SQL", "Finance", "R"],
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      online: false
    },
    {
      name: "Sarah Jenkins",
      college: "Columbia University",
      tags: ["Go", "Docker", "AWS"],
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
      online: true
    },
    {
      name: "Liam O'Connell",
      college: "Harvard University",
      tags: ["Copywriting", "SEO", "Strategy"],
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      online: false
    }
  ];

  return (
    <div className="pt-24 bg-surface min-h-screen">
      <main className="max-w-7xl mx-auto px-6 pb-20">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
          <div className="max-w-xl">
            <h1 className="text-5xl font-black text-primary tracking-tighter mb-4">Discover Talent</h1>
            <p className="text-xl text-on-surface-variant font-medium">Connect with students and professionals across the global Digital Atheneum network.</p>
          </div>
          
          <div className="bg-white/50 p-2 rounded-2xl border border-outline-variant/10 diffuse-shadow flex items-center gap-2">
            <button className="px-8 py-3 bg-primary text-white rounded-xl font-black text-sm shadow-xl shadow-primary/20">
              Global Mode
            </button>
            <button className="px-8 py-3 text-on-surface-variant font-black text-sm hover:bg-white rounded-xl transition-all">
              Same College
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-3">
            <div className="bg-white p-10 rounded-[2.5rem] diffuse-shadow border border-outline-variant/10 space-y-10">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-black text-on-surface">Filters</h2>
                <button className="text-primary text-xs font-black hover:underline uppercase tracking-widest">Reset</button>
              </div>

              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Location</label>
                  <div className="relative">
                    <select className="w-full bg-surface-container-low border-none rounded-xl p-4 text-sm font-bold text-on-surface appearance-none focus:ring-2 focus:ring-primary">
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>India</option>
                      <option>Germany</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">College</label>
                  <div className="flex items-center gap-3 bg-surface-container-low p-4 rounded-xl">
                    <School size={18} className="text-on-surface-variant" />
                    <input type="text" placeholder="Search institution..." className="bg-transparent border-none p-0 text-sm font-bold placeholder:text-on-surface-variant/50 focus:ring-0 w-full" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Department</label>
                  <div className="relative">
                    <select className="w-full bg-surface-container-low border-none rounded-xl p-4 text-sm font-bold text-on-surface appearance-none focus:ring-2 focus:ring-primary">
                      <option>Computer Science</option>
                      <option>Design</option>
                      <option>Economics</option>
                      <option>Biotechnology</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Skills</label>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-sm">
                      React <Plus size={12} className="rotate-45" />
                    </span>
                    <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-sm">
                      Python <Plus size={12} className="rotate-45" />
                    </span>
                    <button className="border-2 border-dashed border-outline-variant text-on-surface-variant px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-primary hover:text-primary transition-all">
                      + Add Skill
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Graduation Year</label>
                  <div className="flex gap-2">
                    <input type="number" placeholder="From" className="w-full bg-surface-container-low border-none rounded-xl p-3 text-sm font-bold focus:ring-2 focus:ring-primary" />
                    <input type="number" placeholder="To" className="w-full bg-surface-container-low border-none rounded-xl p-3 text-sm font-bold focus:ring-2 focus:ring-primary" />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Results Grid */}
          <section className="lg:col-span-9">
            <div className="flex items-center justify-between mb-10">
              <p className="text-lg font-medium text-on-surface-variant">Showing <span className="font-black text-on-surface">124</span> results</p>
              <div className="flex items-center gap-3 text-sm font-bold text-on-surface-variant bg-white/50 px-4 py-2 rounded-xl border border-outline-variant/10 diffuse-shadow">
                <span>Sort by:</span>
                <button className="text-primary flex items-center gap-2 uppercase tracking-widest text-[10px] font-black transition-all hover:scale-105">
                  Relevance <ChevronDown size={14} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {users.map((user, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white p-10 rounded-[3rem] diffuse-shadow border border-outline-variant/5 flex flex-col items-center text-center group hover:bg-white/40 transition-all cursor-pointer"
                >
                  <div className="relative mb-8">
                    <img 
                      src={user.avatar} 
                      className="w-28 h-28 rounded-full object-cover border-8 border-surface-container shadow-2xl group-hover:scale-110 transition-transform duration-500" 
                      alt={user.name} 
                    />
                    {user.online && (
                      <span className="absolute bottom-1 right-1 w-6 h-6 bg-teal-400 border-4 border-white rounded-full shadow-[0_0_15px_rgba(45,212,191,0.6)] animate-pulse"></span>
                    )}
                  </div>

                  <h3 className="text-2xl font-black text-on-surface mb-2 tracking-tight group-hover:text-primary transition-colors">{user.name}</h3>
                  <p className="text-base font-bold text-primary mb-8 flex items-center gap-2 justify-center italic opacity-80">
                    <School size={16} />
                    {user.college}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {user.tags.map(tag => (
                      <span key={tag} className="bg-surface-container-high text-on-surface-variant px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest group-hover:bg-white transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="w-full grid grid-cols-2 gap-4 mt-auto">
                    <button className="py-4 rounded-2xl text-xs font-black uppercase tracking-widest border-2 border-outline-variant/10 text-on-surface hover:bg-surface-container transition-all">Profile</button>
                    <button className="py-4 rounded-2xl text-xs font-black uppercase tracking-widest premium-gradient text-white shadow-xl shadow-primary/20 hover:scale-[1.05] active:scale-95 transition-all flex items-center justify-center gap-2">
                      <Mail size={16} /> Message
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-20 flex justify-center gap-4">
              <button className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white border border-outline-variant/10 text-on-surface-variant hover:bg-primary hover:text-white transition-all diffuse-shadow">
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2">
                <button className="w-14 h-14 rounded-2xl bg-primary text-white font-black text-lg diffuse-shadow">1</button>
                <button className="w-14 h-14 rounded-2xl bg-white border border-outline-variant/10 text-on-surface font-black text-lg hover:bg-surface-container transition-all">2</button>
                <button className="w-14 h-14 rounded-2xl bg-white border border-outline-variant/10 text-on-surface font-black text-lg hover:bg-surface-container transition-all">3</button>
              </div>
              <button className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white border border-outline-variant/10 text-on-surface-variant hover:bg-primary hover:text-white transition-all diffuse-shadow">
                <ChevronRight size={24} />
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
