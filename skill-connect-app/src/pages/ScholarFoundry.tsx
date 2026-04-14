import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  BookOpen, 
  Terminal, 
  BrainCircuit, 
  Cpu, 
  Network, 
  ChevronRight, 
  ArrowRight,
  Zap
} from 'lucide-react';

export const ScholarFoundry: React.FC = () => {
  const categories = [
    { title: "Distributed Systems", count: "14 active", icon: <Network className="text-primary" /> },
    { title: "Neuro-Symbolic AI", count: "8 active", icon: <BrainCircuit className="text-secondary" /> },
    { title: "Language Models", count: "23 active", icon: <Cpu className="text-teal-500" /> },
    { title: "Creative Computation", count: "5 active", icon: <Sparkles className="text-indigo-400" /> }
  ];

  return (
    <div className="pt-24 bg-surface min-h-screen">
      <main className="max-w-7xl mx-auto px-6 pb-20">
        {/* Hero Section */}
        <section className="mb-20 flex flex-col items-center text-center space-y-10 py-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 px-6 py-2 bg-indigo-50 border border-primary/10 rounded-full text-primary text-xs font-black uppercase tracking-widest shadow-sm"
          >
            <Zap size={14} className="fill-primary" />
            Knowledge Refinement Center
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black text-primary tracking-tighter max-w-4xl leading-[0.9]">
            The Scholar <span className="text-on-surface-variant font-medium opacity-20 italic">Foundry</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-on-surface-variant font-medium max-w-3xl leading-relaxed">
            A collaborative incubation chamber for research projects, technical papers, and academic experiments within the Digital Atheneum.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <button className="premium-gradient text-white px-12 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-primary/20 hover:scale-[1.05] active:scale-95 transition-all flex items-center gap-3">
              Forging New Knowledge
              <ArrowRight size={20} />
            </button>
            <button className="bg-white text-on-surface px-12 py-5 rounded-2xl font-black text-lg border-2 border-outline-variant/10 hover:bg-surface-container transition-all active:scale-95 shadow-lg">
              Visit The Archives
            </button>
          </div>
        </section>

        {/* Bento Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-8 bg-indigo-950 rounded-[3rem] p-12 text-white diffuse-shadow border border-outline-variant/10 relative overflow-hidden group"
          >
            <div className="relative z-10 space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform duration-500">
                <BookOpen size={32} />
              </div>
              <div>
                <h3 className="text-4xl font-black mb-4 tracking-tight">Paper Incubation</h3>
                <p className="text-xl text-indigo-100/70 font-medium leading-relaxed max-w-xl">
                  Collaborate on high-impact research papers with real-time markdown editors, citation management, and peer-review systems.
                </p>
              </div>
              <button className="flex items-center gap-2 text-teal-400 font-black text-base hover:gap-4 transition-all">
                Explore current papers <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Background art */}
            <div className="absolute -bottom-20 -right-20 w-[440px] h-[440px] bg-primary rounded-full blur-[160px] opacity-20"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-white rounded-[3rem] p-12 diffuse-shadow border border-outline-variant/10 space-y-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center text-primary">
              <Terminal size={32} />
            </div>
            <div>
              <h3 className="text-3xl font-black text-on-surface mb-4 tracking-tight">Code Labs</h3>
              <p className="text-base text-on-surface-variant font-medium leading-[1.6]">
                Spin up development sandboxes for AI experimentation and technical verification in seconds.
              </p>
            </div>
            <div className="pt-4 border-t border-outline-variant/10">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">Status</span>
              <p className="text-sm font-black text-on-surface-variant flex items-center gap-2 mt-1">
                <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.6)]"></span>
                Foundry Online
              </p>
            </div>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <section className="space-y-12">
          <div className="flex items-end justify-between px-6">
            <h2 className="text-3xl font-black text-primary tracking-tight">Active Sectors</h2>
            <button className="text-on-surface-variant font-black text-sm uppercase tracking-widest hover:text-primary transition-colors">See all domains</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-10 rounded-[2.5rem] group border border-outline-variant/5 diffuse-shadow hover:bg-white/40 transition-all cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {cat.icon}
                </div>
                <h4 className="text-xl font-black text-on-surface mb-2 tracking-tight">{cat.title}</h4>
                <p className="text-sm font-bold text-on-surface-variant/60 uppercase tracking-widest">{cat.count}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="mt-32 bg-surface-container-high rounded-[4rem] p-20 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 premium-gradient"></div>
          <h2 className="text-5xl font-black text-primary tracking-tighter">Forge the future with us.</h2>
          <p className="text-2xl text-on-surface-variant font-medium max-w-2xl mx-auto px-6">
            Become a Foundry scholar and transform abstract ideas into architectural realities.
          </p>
          <button className="bg-primary text-white px-16 py-6 rounded-2xl font-black text-xl shadow-2xl shadow-primary/20 hover:scale-[1.05] active:scale-95 transition-all">
            Apply for Incubation
          </button>
        </section>
      </main>
    </div>
  );
};
