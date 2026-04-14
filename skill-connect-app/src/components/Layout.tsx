import React from 'react';
import { Navbar } from './Navbar';
import { useLocation } from 'react-router-dom';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />
      <div className={`${isHome ? '' : 'pt-18'} flex-1`}>
        {children}
      </div>
      <footer className="w-full py-16 px-6 bg-white border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="text-2xl font-black text-primary font-headline">Skill Connection</span>
            <p className="text-on-surface-variant text-sm font-medium">© 2024 Skill Connection. Built for the Digital Atheneum.</p>
          </div>
          <div className="flex gap-10">
            {['Community', 'Support', 'Privacy', 'Terms'].map(item => (
              <a key={item} href="#" className="text-on-surface-variant hover:text-primary transition-all text-sm font-bold border-b border-transparent hover:border-primary pb-1">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};
