import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Trophy,
  X,
  Camera,
  Check
} from 'lucide-react';

export const UserProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Julian Thorne",
    university: "Stanford University",
    department: "Dept. of Computer Science & Artificial Intelligence",
    bio: "Passionate Full-Stack Developer specializing in distributed systems and AI integration. Currently focused on building scalable collaboration tools for the Digital Atheneum. 3x Hackathon winner and tech community mentor.",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop"
  });

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
                src={profile.avatar} 
                className="w-full h-full object-cover" 
                alt="Avatar" 
              />
            </motion.div>
            
            <div className="flex-grow pb-4 z-10">
              <h1 className="text-5xl font-black text-on-surface tracking-tighter mb-2">{profile.name}</h1>
              <p className="text-xl font-bold text-primary mb-1">{profile.university}</p>
              <p className="text-base text-on-surface-variant font-medium tracking-wide">{profile.department}</p>
            </div>
            
            <div className="pb-4 z-10">
              <button 
                onClick={() => setIsEditing(true)}
                className="premium-gradient text-white px-10 py-4 rounded-2xl font-black flex items-center gap-3 shadow-xl hover:scale-[0.98] transition-transform"
              >
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
              {profile.bio}
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

      {/* Edit Profile Modal */}
      <AnimatePresence>
        {isEditing && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEditing(false)}
              className="absolute inset-0 bg-indigo-950/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-outline-variant/10"
            >
              <div className="h-1.5 w-full premium-gradient"></div>
              
              <div className="p-10">
                <header className="flex justify-between items-center mb-10">
                  <div>
                    <h2 className="text-3xl font-black text-primary tracking-tight">Edit Profile</h2>
                    <p className="text-on-surface-variant font-medium mt-1 uppercase text-[10px] tracking-widest">Update your digital persona</p>
                  </div>
                  <button 
                    onClick={() => setIsEditing(false)}
                    className="p-3 hover:bg-surface-container rounded-2xl transition-all text-on-surface-variant"
                  >
                    <X size={24} />
                  </button>
                </header>

                <div className="space-y-8">
                  <div className="flex items-center gap-8 mb-4">
                    <div className="relative group cursor-pointer">
                      <div className="w-24 h-24 rounded-[1.5rem] overflow-hidden border-4 border-surface-container group-hover:opacity-80 transition-opacity">
                        <img src={profile.avatar} className="w-full h-full object-cover" alt="Avatar Preview" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-[1.5rem]">
                        <Camera size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-black text-on-surface">Profile Identity</h4>
                      <p className="text-xs text-on-surface-variant font-medium mt-1">Recommended: 400x400px</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        type="text" 
                        value={profile.name}
                        onChange={(e) => setProfile({...profile, name: e.target.value})}
                        className="w-full px-6 py-4 bg-surface-container border-none rounded-2xl font-bold focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-inner"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest ml-1">University</label>
                      <input 
                        type="text" 
                        value={profile.university}
                        onChange={(e) => setProfile({...profile, university: e.target.value})}
                        className="w-full px-6 py-4 bg-surface-container border-none rounded-2xl font-bold focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest ml-1">Department</label>
                    <input 
                      type="text" 
                      value={profile.department}
                      onChange={(e) => setProfile({...profile, department: e.target.value})}
                      className="w-full px-6 py-4 bg-surface-container border-none rounded-2xl font-bold focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-inner"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest ml-1">Bio</label>
                    <textarea 
                      rows={4}
                      value={profile.bio}
                      onChange={(e) => setProfile({...profile, bio: e.target.value})}
                      className="w-full px-6 py-4 bg-surface-container border-none rounded-2xl font-medium text-sm leading-relaxed focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-inner"
                    />
                  </div>
                </div>

                <div className="mt-12 flex justify-end gap-4">
                  <button 
                    onClick={() => setIsEditing(false)}
                    className="px-8 py-4 font-black text-on-surface-variant hover:text-primary transition-all text-sm uppercase tracking-widest"
                  >
                    Discard Changes
                  </button>
                  <button 
                    onClick={() => setIsEditing(false)}
                    className="premium-gradient px-10 py-4 rounded-2xl text-white font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.05] active:scale-95 transition-all flex items-center gap-2"
                  >
                    <Check size={18} />
                    Sync Profile
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
