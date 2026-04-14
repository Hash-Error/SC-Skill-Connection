import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Globe, 
  Link as LinkIcon, 
  Edit, 
  Terminal, 
  Award, 
  Users, 
  User, 
  BookOpen,
  Briefcase,
  Trophy
} from 'lucide-react';

export const UserProfile: React.FC = () => {
  const skills = [
    { name: "React", level: 12, color: "bg-primary-fixed text-on-primary-fixed" },
    { name: "Python", level: 8, color: "bg-secondary-container text-on-secondary-container" },
    { name: "TypeScript", level: 15, color: "bg-tertiary-fixed text-on-tertiary-fixed" },
    { name: "Rust", level: 4, color: "bg-surface-container-highest text-on-surface-variant" },
    { name: "Node.js", level: 9, color: "bg-surface-container-highest text-on-surface-variant" },
    { name: "TensorFlow", level: 6, color: "bg-surface-container-highest text-on-surface-variant" }
  ];

  const milestones = [
    {
      type: "Internship",
      role: "Software Engineering Intern",
      at: "Google Cloud",
      time: "June - Sept 2023",
      desc: "Worked with the Kubernetes team to optimize container orchestration for multi-region clusters. Developed an internal CLI tool reducing deployment time by 15%.",
      color: "bg-primary"
    },
    {
      type: "Hackathon Winner",
      role: "EthGlobal Paris 2023",
      at: "Project: SecurePulse",
      time: "July 2023",
      desc: "Built a decentralized health record management system using zero-knowledge proofs. Awarded 'Best Use of Privacy Protocol' and Overall 2nd Place.",
      color: "bg-secondary"
    },
    {
      type: "Internship",
      role: "Data Science Fellow",
      at: "NVIDIA",
      time: "2022",
      desc: "Collaborated on deep learning model optimization for edge devices. Published findings in the internal engineering journal.",
      color: "bg-primary-fixed"
    }
  ];

  return (
    <div className="pt-18 bg-surface min-h-screen">
      {/* Banner & Header */}
      <section className="relative">
        <div className="h-72 w-full premium-gradient relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop" 
            alt="Banner" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-indigo-950/40 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative -mt-24 mb-16 flex flex-col md:flex-row items-end gap-10">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="h-56 w-56 rounded-[2.5rem] border-[8px] border-surface bg-white overflow-hidden shadow-2xl z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop" 
                className="w-full h-full object-cover" 
                alt="Avatar" 
              />
            </motion.div>
            
            <div className="flex-grow pb-4 z-10">
              <h1 className="text-5xl font-black text-on-surface tracking-tighter mb-2">Julian Thorne</h1>
              <p className="text-xl font-bold text-primary mb-1">Stanford University</p>
              <p className="text-base text-on-surface-variant font-medium tracking-wide">Dept. of Computer Science & Artificial Intelligence</p>
            </div>
            
            <div className="pb-4 z-10">
              <button className="premium-gradient text-white px-10 py-4 rounded-2xl font-black flex items-center gap-3 shadow-xl hover:scale-[0.98] transition-transform">
                <Edit size={20} />
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-32">
        {/* Left Sidebar */}
        <aside className="lg:col-span-4 space-y-10">
          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[2.5rem] p-10 diffuse-shadow border border-outline-variant/10"
          >
            <h3 className="text-2xl font-black text-primary mb-6 flex items-center gap-3">
              <User size={24} />
              Bio
            </h3>
            <p className="text-on-surface-variant text-lg leading-relaxed font-medium">
              Passionate Full-Stack Developer specializing in distributed systems and AI integration. Currently focused on building scalable collaboration tools for the Digital Atheneum. 3x Hackathon winner and tech community mentor.
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[2.5rem] p-10 diffuse-shadow border border-outline-variant/10"
          >
            <h3 className="text-2xl font-black text-primary mb-8">Networks</h3>
            <div className="space-y-6">
              {[
                { icon: <Mail size={22} />, label: "j.thorne@stanford.edu", color: "text-red-500" },
                { icon: <LinkIcon size={22} />, label: "linkedin.com/in/jthorne", color: "text-blue-600" },
                { icon: <Globe size={22} />, label: "github.com/jthorne-dev", color: "text-slate-900" },
                { icon: <LinkIcon size={22} />, label: "thorne.dev", color: "text-primary" }
              ].map((link, idx) => (
                <a key={idx} href="#" className="flex items-center gap-5 text-on-surface-variant hover:text-primary transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <span className={link.color}>{link.icon}</span>
                  </div>
                  <span className="font-bold text-sm">{link.label}</span>
                </a>
              ))}
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-indigo-950 rounded-[2.5rem] p-10 text-white diffuse-shadow border border-outline-variant/10"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-black">My Teams</h3>
              <Users size={24} className="text-teal-400" />
            </div>
            <div className="space-y-6">
              {[
                { name: "Athena Nexus", role: "Lead Architect", code: "AN", color: "bg-teal-400" },
                { name: "Quantum Reality", role: "Frontend Dev", code: "QR", color: "bg-indigo-400" }
              ].map((team, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-3xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
                  <div className={`w-14 h-14 rounded-2xl ${team.color} flex items-center justify-center text-indigo-950 font-black text-lg shadow-lg`}>
                    {team.code}
                  </div>
                  <div>
                    <p className="font-black text-base">{team.name}</p>
                    <p className="text-xs text-white/60 font-bold uppercase">{team.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </aside>

        {/* Right Content */}
        <div className="lg:col-span-8 space-y-12">
          {/* Skills Arsenal */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[3rem] p-12 diffuse-shadow border border-outline-variant/10"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-primary">
                <Terminal size={32} />
              </div>
              <h3 className="text-3xl font-black text-primary tracking-tight">Technical Arsenal</h3>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {skills.map(skill => (
                <div key={skill.name} className={`flex items-center gap-3 px-6 py-3 rounded-full font-black text-sm tracking-wide shadow-sm hover:scale-105 transition-transform cursor-default ${skill.color}`}>
                  <span>{skill.name}</span>
                  <span className="w-6 h-6 bg-black/10 rounded-full text-[10px] flex items-center justify-center">{skill.level}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Experience Journey */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[3rem] p-12 diffuse-shadow border border-outline-variant/10"
          >
            <div className="flex items-center gap-4 mb-14">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-secondary">
                <Trophy size={32} />
              </div>
              <h3 className="text-3xl font-black text-primary tracking-tight">Milestones</h3>
            </div>

            <div className="space-y-16 relative before:absolute before:left-[27px] before:top-4 before:bottom-4 before:w-1 before:bg-surface-container">
              {milestones.map((m, idx) => (
                <div key={idx} className="relative pl-16 group">
                  <div className={`absolute left-0 top-0 w-14 h-14 rounded-2xl ${m.color} flex items-center justify-center text-white shadow-xl z-10 group-hover:scale-110 transition-transform duration-500`}>
                    {m.type === "Internship" ? <Briefcase size={24} /> : <Award size={24} />}
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mb-3 block">{m.type}</span>
                      <h4 className="text-2xl font-black text-on-surface mb-1 group-hover:text-primary transition-colors">{m.role}</h4>
                      <p className="text-lg font-bold text-primary mb-6">{m.at}</p>
                      <p className="text-on-surface-variant text-lg leading-relaxed font-medium max-w-2xl">
                        {m.desc}
                      </p>
                    </div>
                    <span className="bg-surface-container-high px-5 py-2 rounded-2xl text-xs font-black text-on-surface-variant whitespace-nowrap shadow-sm">
                      {m.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};
