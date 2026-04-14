import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Search, 
  BrainCircuit, 
  PlusCircle, 
  ChevronLeft, 
  ChevronRight, 
  Rocket, 
  TrendingUp,
  DollarSign
} from 'lucide-react';

export const InternshipBoard: React.FC = () => {
  const jobs = [
    {
      id: 1,
      role: "UX Research Intern",
      company: "Lumina Technologies",
      location: "Remote, USA",
      stipend: "$2,500/mo",
      tags: ["Figma", "User Interviews", "Research"],
      logo: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=100&auto=format&fit=crop",
      status: "Active"
    },
    {
      id: 2,
      role: "Full-Stack Intern",
      company: "GreenSeed Ventures",
      location: "San Francisco, CA",
      stipend: "$4,000/mo",
      tags: ["Next.js", "TailwindCSS", "Node.js"],
      logo: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=100&auto=format&fit=crop",
      status: "Active"
    },
    {
      id: 3,
      role: "ML Operations Intern",
      company: "NovaCloud Systems",
      location: "Austin, TX",
      stipend: "$3,500/mo",
      tags: ["PyTorch", "AWS", "Kubernetes"],
      logo: "https://images.unsplash.com/photo-1614851012101-b204992576ca?q=80&w=100&auto=format&fit=crop",
      status: "Closing Soon"
    },
    {
      id: 4,
      role: "Content Strategy Intern",
      company: "Nexus AI",
      location: "London, UK",
      stipend: "$2,800/mo",
      tags: ["SEO", "Analytics", "Copywriting"],
      logo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=100&auto=format&fit=crop",
      status: "Active"
    }
  ];

  return (
    <div className="pt-24 bg-surface min-h-screen">
      <main className="max-w-7xl mx-auto px-6 pb-20">
        {/* Header section */}
        <section className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-primary mb-6">Discover Your<br/>Next Chapter</h1>
            <p className="text-xl text-on-surface-variant font-medium leading-relaxed">Connect with top-tier startups and global tech giants looking for fresh talent like you. The Digital Atheneum’s gateway to professional excellence.</p>
          </div>
          <button className="premium-gradient text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
            <PlusCircle size={24} />
            Post an Internship
          </button>
        </section>

        {/* Filter Bar */}
        <div className="bg-white p-10 rounded-[3rem] mb-16 diffuse-shadow border border-outline-variant/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Role or Company</label>
              <div className="flex items-center gap-3 bg-surface-container-low p-4 rounded-2xl focus-within:bg-white focus-within:ring-2 focus-within:ring-primary transition-all">
                <Briefcase size={20} className="text-on-surface-variant" />
                <input type="text" placeholder="Software Engineer..." className="bg-transparent border-none p-0 text-on-surface font-bold placeholder:text-on-surface-variant/50 focus:ring-0 w-full" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Internship Type</label>
              <select className="w-full bg-surface-container-low border-none rounded-2xl p-4 text-on-surface font-bold focus:ring-2 focus:ring-primary transition-all">
                <option>All Types</option>
                <option>Full-time</option>
                <option>Internship</option>
                <option>Part-time</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Stipend Range</label>
              <select className="w-full bg-surface-container-low border-none rounded-2xl p-4 text-on-surface font-bold focus:ring-2 focus:ring-primary transition-all">
                <option>Any Stipend</option>
                <option>$500 - $1,000</option>
                <option>$1,000 - $3,000</option>
                <option>$3,000+</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Required Skills</label>
              <div className="flex items-center gap-3 bg-surface-container-low p-4 rounded-2xl focus-within:bg-white focus-within:ring-2 focus-within:ring-primary transition-all">
                <BrainCircuit size={20} className="text-on-surface-variant" />
                <input type="text" placeholder="React, Python..." className="bg-transparent border-none p-0 text-on-surface font-bold placeholder:text-on-surface-variant/50 focus:ring-0 w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {jobs.map((job, idx) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[3rem] group border border-outline-variant/5 diffuse-shadow hover:bg-white/40 transition-all flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="w-18 h-18 rounded-3xl bg-white shadow-lg flex items-center justify-center p-3 border border-outline-variant/10 group-hover:scale-110 transition-transform duration-500">
                  <img src={job.logo} className="w-full h-full object-contain" alt={job.company} />
                </div>
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                  job.status === "Active" ? "bg-teal-50 text-teal-600" : "bg-red-50 text-red-600"
                }`}>
                  {job.status}
                </span>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-black text-on-surface mb-2 tracking-tight group-hover:text-primary transition-colors">{job.role}</h3>
                <p className="text-lg text-on-surface-variant font-bold">{job.company}</p>
              </div>

              <div className="flex items-center gap-2 text-on-surface-variant font-bold text-sm mb-8">
                <MapPin size={18} className="text-primary/60" />
                {job.location}
              </div>

              <div className="flex flex-wrap gap-2 mb-12">
                {job.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-surface-container rounded-xl text-on-surface-variant text-[10px] font-black uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between pt-10 border-t border-outline-variant/10">
                <div>
                  <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Stipend</p>
                  <p className="text-2xl font-black text-primary flex items-center gap-1">
                    <DollarSign size={18} className="text-primary/60" />
                    {job.stipend.split('/')[0]}
                    <span className="text-xs text-on-surface-variant font-bold">/{job.stipend.split('/')[1]}</span>
                  </p>
                </div>
                <button className="bg-primary text-white px-8 py-3 rounded-2xl font-black text-sm shadow-xl shadow-primary/10 hover:shadow-primary/20 hover:scale-[1.05] active:scale-95 transition-all">Apply</button>
              </div>
            </motion.div>
          ))}

          {/* Recruit Card */}
          <div className="bg-indigo-950 p-10 rounded-[3rem] flex flex-col justify-center items-center text-center text-white diffuse-shadow border border-outline-variant/10 group cursor-pointer overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-8 text-teal-400 group-hover:scale-110 transition-transform duration-500">
                <Rocket size={40} />
              </div>
              <h3 className="text-3xl font-black mb-4 tracking-tight">Hire Your<br/>Next Talent</h3>
              <p className="text-indigo-200/80 font-medium text-lg mb-10 max-w-[240px]">Post your opening and reach thousands of skilled candidates.</p>
              <button className="bg-white text-indigo-950 px-10 py-4 rounded-2xl font-black text-lg hover:bg-teal-300 transition-all shadow-xl">Start Recruiting</button>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-20 flex justify-center items-center gap-4">
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
      </main>
    </div>
  );
};
