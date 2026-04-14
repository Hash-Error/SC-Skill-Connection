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
  Check,
  Plus,
  Trash2
} from 'lucide-react';

export const UserProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Julian Thorne",
    university: "Stanford University",
    department: "Dept. of Computer Science & Artificial Intelligence",
    bio: "Passionate Full-Stack Developer specializing in distributed systems and AI integration. Currently focused on building scalable collaboration tools for the Digital Atheneum. 3x Hackathon winner and tech community mentor.",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
    cover: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
  });

  const [links, setLinks] = useState([
    { icon: <Mail size={22} />, label: "j.thorne@stanford.edu", color: "text-red-500", key: "email" },
    { icon: <LinkIcon size={22} />, label: "linkedin.com/in/jthorne", color: "text-blue-600", key: "linkedin" },
    { icon: <Globe size={22} />, label: "github.com/jthorne-dev", color: "text-slate-900", key: "github" },
    { icon: <LinkIcon size={22} />, label: "thorne.dev", color: "text-primary", key: "website" }
  ]);

  const [skills, setSkills] = useState([
    { name: "React", level: 12, color: "bg-primary-fixed text-on-primary-fixed" },
    { name: "Python", level: 8, color: "bg-secondary-container text-on-secondary-container" },
    { name: "TypeScript", level: 15, color: "bg-tertiary-fixed text-on-tertiary-fixed" },
    { name: "Rust", level: 4, color: "bg-surface-container-highest text-on-surface-variant" },
    { name: "Node.js", level: 9, color: "bg-surface-container-highest text-on-surface-variant" },
    { name: "TensorFlow", level: 6, color: "bg-surface-container-highest text-on-surface-variant" }
  ]);

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const addSkill = () => {
    setSkills([...skills, { name: "New Skill", level: 1, color: "bg-surface-container-highest text-on-surface-variant" }]);
  };

  const updateSkill = (index: number, field: string, value: any) => {
    const newSkills = [...skills];
    newSkills[index] = { ...newSkills[index], [field]: value };
    setSkills(newSkills);
  };

  const updateLink = (key: string, value: string) => {
    setLinks(links.map(link => link.key === key ? { ...link, label: value } : link));
  };

  const [milestones, setMilestones] = useState([
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
  ]);

  const removeMilestone = (index: number) => {
    setMilestones(milestones.filter((_, i) => i !== index));
  };

  const addMilestone = () => {
    setMilestones([...milestones, {
      type: "Internship",
      role: "New Milestone",
      at: "Organization",
      time: "2024",
      desc: "Description of your achievement...",
      color: "bg-primary"
    }]);
  };

  const updateMilestone = (index: number, field: string, value: string) => {
    const newMilestones = [...milestones];
    newMilestones[index] = { ...newMilestones[index], [field]: value };
    setMilestones(newMilestones);
  };

  const [teams, setTeams] = useState([
    { name: "Athena Nexus", role: "Lead Architect", code: "AN", color: "bg-teal-400" },
    { name: "Quantum Reality", role: "Frontend Dev", code: "QR", color: "bg-indigo-400" }
  ]);

  const removeTeam = (index: number) => {
    setTeams(teams.filter((_, i) => i !== index));
  };

  const addTeam = () => {
    setTeams([...teams, { 
      name: "New Team", 
      role: "Contributor", 
      code: "NT", 
      color: "bg-primary" 
    }]);
  };

  const updateTeam = (index: number, field: string, value: string) => {
    const newTeams = [...teams];
    newTeams[index] = { ...newTeams[index], [field]: value };
    setTeams(newTeams);
  };

  return (
    <div className="pt-18 bg-surface min-h-screen">
      {/* Banner & Header */}
      <section className="relative">
        <div className="h-72 w-full premium-gradient relative overflow-hidden">
          <img 
            src={profile.cover} 
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
              {links.map((link, idx) => (
                <a key={idx} href="#" className="flex items-center gap-5 text-on-surface-variant hover:text-primary transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <span className={link.color}>{link.icon}</span>
                  </div>
                  <span className="font-bold text-sm truncate max-w-[200px]">{link.label}</span>
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
              {teams.map((team, idx) => (
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
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 overflow-y-auto pt-20 pb-10">
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
              className="relative w-full max-w-3xl bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-outline-variant/10"
            >
              <div className="h-1.5 w-full premium-gradient"></div>
              
              <div className="p-8 md:p-12 max-h-[85vh] overflow-y-auto text-on-surface">
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

                <div className="space-y-12">
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
                        <p className="text-xs text-on-surface-variant font-medium mt-1 uppercase tracking-widest">Julian Thorne</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest ml-1">Profile Image (URL)</label>
                        <input 
                          type="text" 
                          value={profile.avatar}
                          onChange={(e) => setProfile({...profile, avatar: e.target.value})}
                          placeholder="https://images.unsplash.com/avatar-..."
                          className="w-full px-6 py-4 bg-surface-container border-none rounded-2xl font-bold text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-inner"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest ml-1">Cover Photo (URL)</label>
                        <input 
                          type="text" 
                          value={profile.cover}
                          onChange={(e) => setProfile({...profile, cover: e.target.value})}
                          placeholder="https://images.unsplash.com/banner-..."
                          className="w-full px-6 py-4 bg-surface-container border-none rounded-2xl font-bold text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-inner"
                        />
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
                      <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest ml-1">Bio Summary</label>
                      <textarea 
                        rows={3}
                        value={profile.bio}
                        onChange={(e) => setProfile({...profile, bio: e.target.value})}
                        className="w-full px-6 py-4 bg-surface-container border-none rounded-2xl font-medium text-sm leading-relaxed focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Networks Management */}
                  <div className="pt-8 border-t border-outline-variant/10">
                    <div className="mb-8">
                      <h4 className="text-xl font-black text-primary">Networks</h4>
                      <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mt-1">Your professional footprint</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {links.map((link) => (
                        <div key={link.key} className="space-y-2">
                          <div className="flex items-center gap-2 ml-1">
                            <span className={link.color}>{link.icon}</span>
                            <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">{link.key}</label>
                          </div>
                          <input 
                            type="text" 
                            value={link.label}
                            onChange={(e) => updateLink(link.key, e.target.value)}
                            className="w-full px-6 py-4 bg-surface-container border-none rounded-2xl font-bold text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-inner"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Teams Management */}
                  <div className="pt-8 border-t border-outline-variant/10">
                    <div className="flex justify-between items-center mb-8">
                      <div>
                        <h4 className="text-xl font-black text-primary">My Teams</h4>
                        <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mt-1">Manage your active squads</p>
                      </div>
                      <button 
                        onClick={addTeam}
                        className="flex items-center gap-2 px-6 py-3 bg-surface-container hover:bg-teal-400 hover:text-indigo-950 rounded-xl font-black text-xs transition-all active:scale-95 shadow-sm"
                      >
                        <Plus size={16} />
                        Add Team
                      </button>
                    </div>

                    <div className="space-y-4">
                      {teams.map((team, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row items-center gap-6 p-6 bg-surface-container rounded-[1.5rem] group hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-outline-variant/10">
                          <div className="w-full md:w-20">
                            <label className="text-[8px] font-black text-on-surface-variant uppercase tracking-widest mb-2 block ml-1">Icon/Code</label>
                            <input 
                              type="text" 
                              maxLength={2}
                              value={team.code}
                              onChange={(e) => updateTeam(idx, 'code', e.target.value)}
                              className="w-full px-4 py-3 bg-white/50 border-none rounded-xl font-black text-center text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all uppercase"
                            />
                          </div>
                          <div className="flex-1 w-full md:w-auto">
                            <label className="text-[8px] font-black text-on-surface-variant uppercase tracking-widest mb-2 block ml-1">Team Name</label>
                            <input 
                              type="text" 
                              value={team.name}
                              onChange={(e) => updateTeam(idx, 'name', e.target.value)}
                              className="w-full px-4 py-3 bg-white/50 border-none rounded-xl font-bold text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            />
                          </div>
                          <div className="w-full md:w-48">
                            <label className="text-[8px] font-black text-on-surface-variant uppercase tracking-widest mb-2 block ml-1">Your Role</label>
                            <input 
                              type="text" 
                              value={team.role}
                              onChange={(e) => updateTeam(idx, 'role', e.target.value)}
                              className="w-full px-4 py-3 bg-white/50 border-none rounded-xl font-bold text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            />
                          </div>
                          <div className="flex items-end pb-1">
                            <button 
                              onClick={() => removeTeam(idx)}
                              className="p-3 text-on-surface-variant hover:text-error hover:bg-error/5 rounded-xl transition-all"
                            >
                              <Trash2 size={20} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Milestones Management */}
                  <div className="pt-8 border-t border-outline-variant/10">
                    <div className="flex justify-between items-center mb-8">
                      <div>
                        <h4 className="text-xl font-black text-primary">Milestones</h4>
                        <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mt-1">Showcase your journey</p>
                      </div>
                      <button 
                        onClick={addMilestone}
                        className="flex items-center gap-2 px-6 py-3 bg-surface-container hover:bg-secondary hover:text-white rounded-xl font-black text-xs transition-all active:scale-95 shadow-sm"
                      >
                        <Plus size={16} />
                        Add Milestone
                      </button>
                    </div>

                    <div className="space-y-6">
                      {milestones.map((m, idx) => (
                        <div key={idx} className="p-8 bg-surface-container rounded-[2rem] border border-transparent hover:border-outline-variant/10 transition-all group">
                          <div className="flex justify-between items-start mb-6">
                            <div className="px-4 py-2 bg-white/50 rounded-xl text-[10px] font-black uppercase tracking-widest text-primary">
                              #{idx + 1} Milestone
                            </div>
                            <button 
                              onClick={() => removeMilestone(idx)}
                              className="p-2 text-on-surface-variant hover:text-error hover:bg-error/5 rounded-lg transition-all"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                              <label className="text-[8px] font-black text-on-surface-variant uppercase tracking-widest ml-1">Type</label>
                              <select 
                                value={m.type}
                                onChange={(e) => updateMilestone(idx, 'type', e.target.value)}
                                className="w-full px-4 py-3 bg-white/50 border-none rounded-xl font-bold text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm"
                              >
                                <option value="Internship">Internship</option>
                                <option value="Hackathon Winner">Hackathon Winner</option>
                                <option value="Certification">Certification</option>
                                <option value="Publication">Publication</option>
                              </select>
                            </div>
                            <div className="space-y-2">
                              <label className="text-[8px] font-black text-on-surface-variant uppercase tracking-widest ml-1">Timeline</label>
                              <input 
                                type="text" 
                                value={m.time}
                                placeholder="e.g. June - Sept 2023"
                                onChange={(e) => updateMilestone(idx, 'time', e.target.value)}
                                className="w-full px-4 py-3 bg-white/50 border-none rounded-xl font-bold text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                              <label className="text-[8px] font-black text-on-surface-variant uppercase tracking-widest ml-1">Role / Title</label>
                              <input 
                                type="text" 
                                value={m.role}
                                onChange={(e) => updateMilestone(idx, 'role', e.target.value)}
                                className="w-full px-4 py-3 bg-white/50 border-none rounded-xl font-bold text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-[8px] font-black text-on-surface-variant uppercase tracking-widest ml-1">Organization</label>
                              <input 
                                type="text" 
                                value={m.at}
                                onChange={(e) => updateMilestone(idx, 'at', e.target.value)}
                                className="w-full px-4 py-3 bg-white/50 border-none rounded-xl font-bold text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-[8px] font-black text-on-surface-variant uppercase tracking-widest ml-1">Detailed Contribution</label>
                            <textarea 
                              rows={3}
                              value={m.desc}
                              onChange={(e) => updateMilestone(idx, 'desc', e.target.value)}
                              className="w-full px-6 py-4 bg-white/50 border-none rounded-[1.5rem] font-medium text-xs leading-relaxed focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm resize-none"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Management */}
                  <div className="pt-8 border-t border-outline-variant/10">
                    <div className="flex justify-between items-center mb-8">
                      <div>
                        <h4 className="text-xl font-black text-primary">Technical Arsenal</h4>
                        <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mt-1">Manage your expertise levels</p>
                      </div>
                      <button 
                        onClick={addSkill}
                        className="flex items-center gap-2 px-6 py-3 bg-surface-container hover:bg-primary hover:text-white rounded-xl font-black text-xs transition-all active:scale-95 shadow-sm"
                      >
                        <Plus size={16} />
                        Add Skill
                      </button>
                    </div>

                    <div className="space-y-4">
                      {skills.map((skill, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row items-center gap-6 p-6 bg-surface-container rounded-[1.5rem] group hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-outline-variant/10">
                          <div className="flex-1 w-full md:w-auto">
                            <label className="text-[8px] font-black text-on-surface-variant uppercase tracking-widest mb-2 block ml-1">Skill Name</label>
                            <input 
                              type="text" 
                              value={skill.name}
                              onChange={(e) => updateSkill(idx, 'name', e.target.value)}
                              className="w-full px-4 py-3 bg-white/50 border-none rounded-xl font-bold text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            />
                          </div>
                          <div className="w-full md:w-32">
                            <label className="text-[8px] font-black text-on-surface-variant uppercase tracking-widest mb-2 block ml-1">Level / Endorse</label>
                            <input 
                              type="number" 
                              value={skill.level}
                              onChange={(e) => updateSkill(idx, 'level', parseInt(e.target.value))}
                              className="w-full px-4 py-3 bg-white/50 border-none rounded-xl font-black text-sm text-center focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                            />
                          </div>
                          <div className="flex items-end pb-1">
                            <button 
                              onClick={() => removeSkill(idx)}
                              className="p-3 text-on-surface-variant hover:text-error hover:bg-error/5 rounded-xl transition-all"
                            >
                              <Trash2 size={20} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-outline-variant/10 flex justify-end gap-6">
                  <button 
                    onClick={() => setIsEditing(false)}
                    className="px-8 py-4 font-black text-on-surface-variant hover:text-primary transition-all text-xs uppercase tracking-[0.2em]"
                  >
                    Discard Changes
                  </button>
                  <button 
                    onClick={() => setIsEditing(false)}
                    className="premium-gradient px-12 py-5 rounded-[1.25rem] text-white font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 hover:scale-[1.05] active:scale-95 transition-all flex items-center gap-3"
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
