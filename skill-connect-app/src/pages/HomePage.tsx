import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Users, Rocket, Calendar, MapPin, ChevronRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const featuredHackathons = [
    {
      id: 1,
      name: "Neural Nexus AI Jam",
      prize: "$50,000",
      date: "Oct 15 - 17, 2024",
      location: "SF / Hybrid",
      tags: ["Python", "PyTorch", "LLMs"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
      category: "AI/ML",
    },
    {
      id: 2,
      name: "Fullstack Fusion 2.0",
      prize: "Hiring Event",
      date: "Nov 02 - 04, 2024",
      location: "Remote",
      tags: ["React", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
      category: "Fullstack",
    },
    {
      id: 3,
      name: "Pixel Perfect UX Challenge",
      prize: "Internship Grant",
      date: "Dec 12 - 14, 2024",
      location: "New York City",
      tags: ["Figma", "User Research", "Prototyping"],
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=800&auto=format&fit=crop",
      category: "Design",
    },
  ];

  const categories = [
    "React", "Python", "AI/ML", "Figma", "TypeScript", "AWS", "Rust", "Docker", "Generative AI", "Kubernetes", "Solidity"
  ];

  return (
    <motion.main
      className="pt-18"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-32 premium-gradient text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary rounded-full blur-[160px] animate-bounce-slow"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8"
          >
            <Zap size={14} className="text-secondary-container" />
            <span className="text-xs font-bold tracking-widest uppercase font-headline">The Digital Atheneum Experience</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-8xl font-black leading-[1.1] tracking-tighter mb-8"
          >
            Connect. Build.<br/><span className="text-[#8feefc]">Innovate.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-body font-medium"
          >
            Bridging the gap between ambitious students and world-class opportunities. Discover elite hackathons, assemble dream teams, and accelerate your career.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="px-10 py-5 bg-white text-primary rounded-2xl font-black text-xl hover:bg-[#8feefc] transition-all hover:scale-105 active:scale-95 diffuse-shadow flex items-center gap-2">
              Get Started
              <ArrowRight />
            </button>
            <button className="px-10 py-5 bg-white/5 backdrop-blur-lg border border-white/20 text-white rounded-2xl font-black text-xl hover:bg-white/10 transition-all active:scale-95">
              Browse Hackathons
            </button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-20 opacity-60"
          >
            <p className="font-bold text-sm tracking-[0.2em] uppercase mb-6">Trusted by the best</p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
              <span className="text-2xl font-black font-headline tracking-tighter">10,000+ Students</span>
              <span className="text-2xl font-black font-headline tracking-tighter">500+ Colleges</span>
              <span className="text-2xl font-black font-headline tracking-tighter">50+ Tech Partners</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Bento */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-5xl font-black text-primary mb-6 tracking-tighter">The Future of Student Collaboration</h2>
            <p className="text-on-surface-variant text-xl">We provide the tools and network to transform your academic knowledge into real-world impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="md:col-span-8 group relative bg-surface-container-low rounded-[2.5rem] p-10 overflow-hidden transition-all hover:bg-white diffuse-shadow border border-outline-variant/5"
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-[1.25rem] bg-indigo-100 flex items-center justify-center text-primary mb-8">
                    <Search size={32} />
                  </div>
                  <h3 className="text-4xl font-black text-on-surface mb-4">Find Hackathons</h3>
                  <p className="text-on-surface-variant text-lg max-w-md">Access a curated global directory of competitive events, from local university jams to international tech summits.</p>
                </div>
                <div className="mt-12 flex items-center text-primary font-black text-lg group-hover:gap-4 transition-all">
                  Explore directory <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=800&auto=format&fit=crop" 
                alt="Hackathon"
                className="absolute top-0 right-0 h-full w-1/2 object-cover opacity-10 md:opacity-40 mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="md:col-span-4 bg-surface-container-low rounded-[2.5rem] p-10 transition-all hover:bg-white diffuse-shadow border border-outline-variant/5"
            >
              <div className="w-16 h-16 rounded-[1.25rem] bg-teal-50 flex items-center justify-center text-secondary mb-8">
                <Users size={32} />
              </div>
              <h3 className="text-3xl font-black text-on-surface mb-4">Form Elite Teams</h3>
              <p className="text-on-surface-variant text-lg">Connect with specialists across engineering, design, and product to build balanced, winning squads.</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="md:col-span-4 bg-surface-container-low rounded-[2.5rem] p-10 transition-all hover:bg-white diffuse-shadow border border-outline-variant/5"
            >
              <div className="w-16 h-16 rounded-[1.25rem] bg-emerald-50 flex items-center justify-center text-emerald-600 mb-8">
                <Rocket size={32} />
              </div>
              <h3 className="text-3xl font-black text-on-surface mb-4">Land Internships</h3>
              <p className="text-on-surface-variant text-lg">Top companies monitor our leaderboard. Showcase your projects and get fast-tracked for recruitment.</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="md:col-span-8 bg-indigo-950 rounded-[2.5rem] p-10 relative overflow-hidden flex items-center text-white"
            >
              <div className="relative z-10 w-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-teal-400"></span>
                  </span>
                  <span className="text-teal-400 text-sm font-black tracking-widest uppercase">Live Pulse Indicator</span>
                </div>
                <h3 className="text-4xl font-black mb-3">324 Active Collaborations</h3>
                <p className="text-indigo-200 text-lg">Students are currently matching for the upcoming Winter Dev Summit.</p>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-black/40 to-transparent pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Hackathons */}
      <section className="py-32 bg-surface-container-low px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-5xl font-black text-primary mb-3 tracking-tighter">Featured Hackathons</h2>
              <p className="text-on-surface-variant text-xl">Elite competitions starting this month.</p>
            </div>
            <Link to="/hackathons" className="text-primary font-black text-lg flex items-center gap-2 group">
              View All <ChevronRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredHackathons.map((hct) => (
              <motion.div 
                key={hct.id}
                variants={itemVariants}
                whileHover={{ y: -12 }}
                className="bg-white rounded-[2rem] overflow-hidden diffuse-shadow border border-outline-variant/5"
              >
                <div className="h-60 relative overflow-hidden">
                  <img src={hct.image} alt={hct.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  <div className="absolute top-5 right-5 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-sm font-black text-primary shadow-lg">
                    {hct.prize}
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-2 text-secondary font-black text-xs uppercase tracking-[0.15em] mb-4">
                    <Calendar size={14} />
                    {hct.date}
                  </div>
                  <h3 className="text-2xl font-black text-on-surface mb-4 leading-tight">{hct.name}</h3>
                  <div className="flex items-center gap-2 text-on-surface-variant font-medium mb-8">
                    <MapPin size={16} />
                    {hct.location}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-outline-variant/10">
                    {hct.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 rounded-full bg-surface-container text-on-surface-variant text-xs font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Community */}
      <section className="py-32 bg-white px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-primary mb-12 tracking-tighter">Trending in the Community</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, idx) => (
              <motion.span 
                key={cat}
                whileHover={{ scale: 1.1, backgroundColor: '#0b1a7d', color: '#fff' }}
                className={`px-8 py-4 rounded-full font-black text-sm transition-all cursor-default diffuse-shadow ${
                  idx % 3 === 0 ? 'bg-secondary-container text-secondary' : 'bg-surface-container-high text-on-surface-variant'
                }`}
              >
                {cat}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto rounded-[4rem] premium-gradient overflow-hidden relative p-16 md:p-32 text-center text-white">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          <div className="relative z-10 scale-up-center">
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">Ready to build something legendary?</h2>
            <p className="text-white/80 text-xl md:text-2xl mb-14 max-w-2xl mx-auto font-medium">Join the nexus where skill meets opportunity. Your next big break is just one connection away.</p>
            <button className="px-16 py-7 bg-white text-primary rounded-[2rem] font-black text-2xl hover:bg-[#8feefc] transition-all hover:scale-105 active:scale-95 diffuse-shadow">
              Join Skill Connection Now
            </button>
          </div>
        </div>
      </section>
    </motion.main>
  );
};
