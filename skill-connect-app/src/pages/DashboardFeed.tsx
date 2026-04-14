import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Bell, 
  LayoutDashboard, 
  Users, 
  ClipboardCheck, 
  Bookmark, 
  Heart, 
  MessageSquare, 
  Share2, 
  Rocket, 
  Settings, 
  Calendar,
  UserPlus,
  TrendingUp,
  Send,
  MoreHorizontal,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const DashboardFeed: React.FC = () => {
  const posts = [
    {
      id: 1,
      user: {
        name: "Sarah Jenkins",
        role: "UI/UX Designer",
        time: "2 hours ago",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
      },
      tag: "Looking for Team",
      content: "Hey everyone! 👋 I'm starting a project for the EthGlobal Hackathon next month. I have the high-fidelity mocks ready for a decentralized voting platform, but I need a solid Solidity/React developer to help bring it to life. Anyone interested?",
      event: {
        name: "EthGlobal Hackathon 2024",
        prize: "$50,000"
      },
      likes: 24,
      comments: 8
    },
    {
      id: 2,
      user: {
        name: "Marcus Wade",
        role: "AI Researcher",
        time: "5 hours ago",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
      },
      tag: "Tech Trends",
      title: "The Shift to On-Device Large Language Models",
      content: "We are entering a new era where privacy and latency concerns are driving LLMs to run directly on consumer hardware. This changes everything for app developers...",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
      likes: 142,
      comments: 12
    }
  ];

  const suggested = [
    { name: "Liam Rodriguez", role: "Python, AWS expert", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" },
    { name: "Emma Zhang", role: "Solidity, Web3 Dev", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop" },
    { name: "Jordan Smith", role: "React, Tailwind", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" }
  ];

  const events = [
    { date: "Oct 24", name: "AI in Healthcare Sprints", location: "Global Virtual" },
    { date: "Nov 05", name: "Fintech Builders Meetup", location: "Cambridge, MA" },
    { date: "Nov 12", name: "Digital Atheneum Hack", location: "Hybrid / SF" }
  ];

  return (
    <div className="pt-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 h-18 flex justify-between items-center mb-8">
        <div className="flex-1 max-w-2xl relative">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-on-surface-variant" size={20} />
          <input 
            type="text" 
            placeholder="Search the feed for skills, posts, or people..."
            className="w-full bg-surface-container-high border-none rounded-[1.25rem] py-4 pl-16 pr-6 text-base focus:ring-2 focus:ring-primary focus:bg-white transition-all diffuse-shadow"
          />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 flex gap-10">
        {/* Left Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0 space-y-8">
          <section className="bg-white rounded-[2rem] p-4 diffuse-shadow border border-outline-variant/10">
            {[
              { icon: <LayoutDashboard size={20} />, label: "Feed", active: true },
              { icon: <Users size={20} />, label: "My Teams" },
              { icon: <ClipboardCheck size={20} />, label: "Applications" },
              { icon: <Bookmark size={20} />, label: "Saved Posts" },
              { icon: <Settings size={20} />, label: "Settings" }
            ].map((item, idx) => (
              <button 
                key={idx}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${
                  item.active ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </section>

          <section className="premium-gradient rounded-[2rem] p-8 text-white relative overflow-hidden diffuse-shadow">
            <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-black mb-1">Alex Chen</h3>
            <p className="text-white/70 text-sm mb-6">Full-stack Developer @ MIT</p>
            <div className="flex gap-3 mb-8">
              <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">React</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">Python</span>
            </div>
            <button className="w-full py-4 bg-white/20 hover:bg-white/30 rounded-2xl text-xs font-black transition-all backdrop-blur-xl">
              Edit Profile
            </button>
          </section>
        </aside>

        {/* Center Feed */}
        <section className="flex-1 space-y-8 pb-20">
          <div className="bg-white rounded-[2rem] p-8 diffuse-shadow flex gap-6 items-center">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop" className="w-14 h-14 rounded-full object-cover" alt="User" />
            <button className="flex-1 text-left px-8 py-4 bg-surface-container-low hover:bg-surface-container rounded-full text-on-surface-variant text-lg font-medium transition-all">
              Share a project, news, or look for a team...
            </button>
          </div>

          {posts.map(post => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] diffuse-shadow border border-outline-variant/10 overflow-hidden"
            >
              <div className="p-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex gap-4">
                    <img src={post.user.avatar} className="w-14 h-14 rounded-2xl object-cover" alt={post.user.name} />
                    <div>
                      <h4 className="text-lg font-black text-on-surface">{post.user.name}</h4>
                      <p className="text-sm text-on-surface-variant font-medium">{post.user.time} • {post.user.role}</p>
                    </div>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase ${
                    post.tag === "Looking for Team" ? "bg-teal-50 text-teal-600" : "bg-indigo-50 text-indigo-600"
                  }`}>
                    {post.tag}
                  </span>
                </div>

                {post.title && <h3 className="text-2xl font-black text-on-surface mb-4">{post.title}</h3>}
                <p className="text-on-surface-variant text-lg leading-[1.6] mb-8">{post.content}</p>

                {post.image && (
                  <div className="rounded-3xl overflow-hidden mb-8 border border-outline-variant/10">
                    <img src={post.image} className="w-full aspect-video object-cover" alt="Post" />
                  </div>
                )}

                {post.event && (
                  <div className="bg-surface-container-low rounded-3xl p-6 flex justify-between items-center group cursor-pointer hover:bg-surface-container transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center">
                        <Rocket size={24} />
                      </div>
                      <div>
                        <h5 className="font-black text-on-surface">{post.event.name}</h5>
                        <p className="text-sm text-on-surface-variant font-bold">Prize Pool: {post.event.prize}</p>
                      </div>
                    </div>
                    <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform" />
                  </div>
                )}
              </div>

              <div className="px-10 py-6 border-t border-outline-variant/10 flex justify-between items-center">
                <div className="flex gap-8">
                  <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-all font-bold">
                    <Heart size={20} />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-all font-bold group">
                    <MessageSquare size={20} className="group-hover:scale-110 transition-transform" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="text-on-surface-variant hover:text-primary transition-all group">
                    <Share2 size={20} className="group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="text-on-surface-variant hover:text-primary transition-all group">
                    <Bookmark size={20} className="group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="text-on-surface-variant hover:text-primary transition-all group">
                    <Send size={20} className="group-hover:scale-110 transition-transform" />
                  </button>
                </div>
                <div className="flex gap-4">
                  <button className="p-3 text-on-surface-variant hover:bg-surface-container rounded-xl transition-all">
                    <MoreHorizontal size={20} />
                  </button>
                  <button className="px-8 py-3 bg-primary text-white rounded-xl font-black text-sm shadow-xl shadow-primary/10 hover:shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                    Join Project
                  </button>
                </div>
              </div>
            </motion.article>
          ))}

          {/* Featured Hackathon Ad in Feed */}
          <article className="bg-[#0b1a7d] rounded-[3rem] p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Rocket size={120} />
            </div>
            <div className="relative z-10">
              <span className="text-[10px] font-black tracking-widest uppercase text-teal-400 mb-4 block">Official Announcement</span>
              <h2 className="text-4xl font-black mb-6 leading-tight">Digital Atheneum<br />Hack 2024</h2>
              <p className="text-indigo-100 text-lg mb-10 max-w-md">Join 500+ students for a 48-hour sprint building the future of educational technology.</p>
              <div className="flex flex-wrap items-center gap-10">
                <div className="flex gap-10">
                  <div>
                    <p className="text-[10px] text-indigo-300 font-bold uppercase mb-1">Date</p>
                    <p className="font-black">Nov 12 - 14</p>
                  </div>
                  <div className="w-[1px] h-10 bg-white/10"></div>
                  <div>
                    <p className="text-[10px] text-indigo-300 font-bold uppercase mb-1">Loc</p>
                    <p className="font-black">SF / Hybrid</p>
                  </div>
                </div>
                <button className="px-10 py-4 bg-teal-400 text-[#0b1a7d] rounded-2xl font-black text-lg hover:bg-teal-300 transition-all shadow-xl shadow-teal-500/20">
                  Register Now
                </button>
              </div>
            </div>
          </article>
        </section>

        {/* Right Sidebar */}
        <aside className="hidden xl:block w-80 shrink-0 space-y-10">
          <section className="bg-white rounded-[2.5rem] p-10 diffuse-shadow border border-outline-variant/10">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-black text-on-surface">Upcoming</h3>
              <Calendar size={20} className="text-on-surface-variant" />
            </div>
            <div className="space-y-6">
              {events.map((evt, idx) => (
                <div key={idx} className="flex gap-6 items-start group cursor-pointer">
                  <div className="bg-surface-container rounded-2xl p-3 text-center min-w-[64px] group-hover:bg-primary group-hover:text-white transition-all">
                    <p className="text-[10px] font-black uppercase mb-1">{evt.date.split(' ')[0]}</p>
                    <p className="text-2xl font-black leading-none">{evt.date.split(' ')[1]}</p>
                  </div>
                  <div>
                    <h4 className="font-black text-on-surface leading-tight text-sm mb-1">{evt.name}</h4>
                    <p className="text-[10px] text-on-surface-variant font-bold uppercase">{evt.location}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-4 text-xs font-black text-primary hover:bg-indigo-50 border border-outline-variant rounded-2xl transition-all">
              View Calendar
            </button>
          </section>

          <section className="bg-white rounded-[2.5rem] p-10 diffuse-shadow border border-outline-variant/10">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-black text-on-surface">Suggested</h3>
              <UserPlus size={20} className="text-on-surface-variant" />
            </div>
            <div className="space-y-8">
              {suggested.map((user, idx) => (
                <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                  <img src={user.avatar} className="w-12 h-12 rounded-full object-cover" alt={user.name} />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-black text-on-surface text-sm truncate">{user.name}</h4>
                    <p className="text-[10px] font-bold text-on-surface-variant truncate">{user.role}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-on-surface-variant bg-surface-container-high rounded-full hover:bg-primary hover:text-white transition-all tooltip" title="Message">
                      <Send size={16} />
                    </button>
                    <button className="p-2 text-primary bg-indigo-50 rounded-full hover:bg-primary hover:text-white transition-all tooltip" title="Connect">
                      <UserPlus size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-secondary-container rounded-[2.5rem] p-8 relative overflow-hidden diffuse-shadow border border-outline-variant/10">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp size={20} className="text-secondary" />
                <span className="text-[10px] font-black tracking-widest uppercase text-secondary">Your Activity</span>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-black text-on-secondary-container">12</p>
                  <p className="text-[10px] font-bold text-on-secondary-container/60 uppercase">Endorsements</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-on-secondary-container">3</p>
                  <p className="text-[10px] font-bold text-on-secondary-container/60 uppercase">Invites</p>
                </div>
              </div>
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
};
