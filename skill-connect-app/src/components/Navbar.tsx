import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, Menu, X, PlusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Feed', path: '/dashboard' },
    { name: 'Discover', path: '/discover' },
    { name: 'Hackathons', path: '/hackathons' },
    { name: 'Internships', path: '/internships' },
    { name: 'Scholar', path: '/scholar' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/70 backdrop-blur-2xl border-b border-outline-variant/10 diffuse-shadow">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-2xl font-black tracking-tighter text-primary font-headline flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">SC</span>
            </div>
            <span>Skill Connection</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-8 items-center">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[13px] font-black uppercase tracking-widest transition-all duration-300 hover:text-primary relative group ${
                  isActive(link.path) ? 'text-primary' : 'text-on-surface-variant'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
                  />
                )}
                {!isActive(link.path) && (
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/30 rounded-full group-hover:w-full transition-all duration-300" />
                )}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/create" className="hidden sm:flex items-center gap-2 bg-primary/5 hover:bg-primary/10 text-primary px-5 py-2.5 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all">
            <PlusCircle size={16} />
            Post
          </Link>

          <button className="p-2.5 rounded-xl hover:bg-surface-container transition-all text-on-surface-variant relative">
            <Bell size={20} />
            <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-secondary rounded-full border-2 border-white shadow-sm"></span>
          </button>
          
          <Link to="/profile" className="flex items-center gap-3 pl-2 sm:pl-4 sm:border-l border-outline-variant/20">
            <div className="hidden sm:block text-right">
              <p className="text-xs font-black text-on-surface leading-none">Julian Thorne</p>
              <p className="text-[10px] font-bold text-on-surface-variant leading-none mt-1">Foundry Scholar</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop"
              alt="User"
              className="w-10 h-10 rounded-xl border-2 border-white diffuse-shadow object-cover group-hover:scale-110 transition-transform"
            />
          </Link>

          <button 
            className="lg:hidden p-2 text-on-surface-variant bg-surface-container rounded-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white border-b border-outline-variant/10 p-8 flex flex-col gap-6"
          >
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-black tracking-tight ${
                  isActive(link.path) ? 'text-primary pl-4 border-l-4 border-primary' : 'text-on-surface-variant'
                } transition-all`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/create" 
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/20"
            >
              <PlusCircle size={20} />
              Post Opportunity
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
