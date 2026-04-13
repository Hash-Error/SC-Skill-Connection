import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Zap, Users, Briefcase, Trophy, User, LogOut, Plus, Menu, X, ChevronRight, ExternalLink, MapPin, Calendar, Clock, Globe, Star, Send, Check, XCircle, Filter, Heart, ArrowRight, Sparkles, Code, GraduationCap, Building } from 'lucide-react';
import store from './data/store';
import './index.css';

/* ============================================
   HOOKS
   ============================================ */
function useStore() {
  const [, setTick] = useState(0);
  useEffect(() => {
    return store.subscribe(() => setTick(t => t + 1));
  }, []);
  return store;
}

function useToast() {
  const [toasts, setToasts] = useState([]);
  const addToast = useCallback((message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3500);
  }, []);
  return { toasts, addToast };
}

/* ============================================
   TOAST COMPONENT
   ============================================ */
function ToastContainer({ toasts }) {
  if (!toasts.length) return null;
  return (
    <div className="toast-container">
      {toasts.map(t => (
        <div key={t.id} className="toast" style={{ borderLeft: `3px solid ${t.type === 'success' ? 'var(--accent-success)' : t.type === 'error' ? 'var(--accent-danger)' : 'var(--accent-primary)'}` }}>
          {t.type === 'success' ? <Check size={18} style={{ color: 'var(--accent-success)' }} /> : <Sparkles size={18} style={{ color: 'var(--accent-primary)' }} />}
          {t.message}
        </div>
      ))}
    </div>
  );
}

/* ============================================
   NAVBAR
   ============================================ */
function Navbar() {
  const s = useStore();
  const user = s.getCurrentUser();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { path: '/', label: 'Home', icon: Zap },
    { path: '/hackathons', label: 'Hackathons', icon: Trophy },
    { path: '/teams', label: 'Teams', icon: Users },
    { path: '/internships', label: 'Internships', icon: Briefcase },
    { path: '/explore', label: 'Explore', icon: Search },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <div className="navbar-brand-icon">SC</div>
          <span>Skill<span className="gradient-text">Connection</span></span>
        </Link>

        <div className="navbar-links">
          {links.map(l => (
            <Link key={l.path} to={l.path} className={`navbar-link ${location.pathname === l.path ? 'active' : ''}`}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="navbar-cta">
          {user ? (
            <>
              <Link to={`/profile/${user.id}`} className="btn btn-ghost btn-sm" style={{ gap: '6px' }}>
                <div className="avatar avatar-sm">{user.avatar}</div>
                <span style={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user.name.split(' ')[0]}</span>
              </Link>
              <button className="btn btn-secondary btn-sm btn-icon" onClick={() => { s.logout(); navigate('/'); }} title="Log out">
                <LogOut size={16} />
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-ghost btn-sm" onClick={() => navigate('/login')}>Log In</button>
              <button className="btn btn-primary btn-sm" onClick={() => navigate('/signup')}>Sign Up</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

/* ============================================
   AUTH PAGES
   ============================================ */
function LoginPage({ addToast }) {
  const s = useStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState('arjun@iitb.ac.in');
  const [password, setPassword] = useState('demo');
  const [err, setErr] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = s.login(email, password);
    if (user) { addToast(`Welcome back, ${user.name}!`); navigate('/'); }
    else setErr('Invalid email or password.');
  };

  return (
    <div className="page-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div className="card" style={{ maxWidth: '440px', width: '100%', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-1" style={{ width: '200px', height: '200px', top: '-60px', left: '-60px', opacity: 0.15 }}></div>
        <h2 className="text-display" style={{ marginBottom: 'var(--sp-2)' }}>Welcome <span className="gradient-text">back</span></h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--sp-8)' }}>Sign in to continue to Skill Connection</p>
        {err && <div style={{ padding: 'var(--sp-3)', background: 'var(--accent-danger-dim)', borderRadius: 'var(--r-md)', color: 'var(--accent-danger)', fontSize: '0.875rem', marginBottom: 'var(--sp-4)' }}>{err}</div>}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
          <div className="input-group">
            <label className="input-label">Email</label>
            <input className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@college.edu" required />
          </div>
          <div className="input-group">
            <label className="input-label">Password</label>
            <input className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required />
          </div>
          <button className="btn btn-primary btn-lg" type="submit" style={{ width: '100%' }}>Sign In</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: 'var(--sp-6)', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          Don't have an account? <Link to="/signup" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Sign up</Link>
        </p>
        <div style={{ marginTop: 'var(--sp-4)', padding: 'var(--sp-3)', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--r-md)', fontSize: '0.8125rem', color: 'var(--text-tertiary)', textAlign: 'center' }}>
          <strong>Demo:</strong> arjun@iitb.ac.in / demo
        </div>
      </div>
    </div>
  );
}

function SignupPage({ addToast }) {
  const s = useStore();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', college: '', department: '', year: '', country: '', city: '', bio: '', skills: '', github: '', linkedin: '' });
  const [err, setErr] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...form, skills: form.skills.split(',').map(s => s.trim()).filter(Boolean) };
    const user = s.signup(data);
    if (user) { addToast(`Welcome, ${user.name}! Account created.`); navigate('/'); }
    else setErr('Email already registered.');
  };

  const up = (key, val) => setForm(f => ({ ...f, [key]: val }));

  return (
    <div className="page-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--sp-16) var(--sp-6)' }}>
      <div className="card" style={{ maxWidth: '560px', width: '100%', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-2" style={{ width: '200px', height: '200px', bottom: '-60px', right: '-60px', opacity: 0.12 }}></div>
        <h2 className="text-display" style={{ marginBottom: 'var(--sp-2)' }}>Join <span className="gradient-text">Skill Connection</span></h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--sp-8)' }}>Create your profile and start connecting</p>
        {err && <div style={{ padding: 'var(--sp-3)', background: 'var(--accent-danger-dim)', borderRadius: 'var(--r-md)', color: 'var(--accent-danger)', fontSize: '0.875rem', marginBottom: 'var(--sp-4)' }}>{err}</div>}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-4)' }}>
            <div className="input-group"><label className="input-label">Full Name *</label><input className="input" value={form.name} onChange={e => up('name', e.target.value)} required /></div>
            <div className="input-group"><label className="input-label">Email *</label><input className="input" type="email" value={form.email} onChange={e => up('email', e.target.value)} required /></div>
          </div>
          <div className="input-group"><label className="input-label">Password *</label><input className="input" type="password" value={form.password} onChange={e => up('password', e.target.value)} required /></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-4)' }}>
            <div className="input-group"><label className="input-label">College</label><input className="input" value={form.college} onChange={e => up('college', e.target.value)} /></div>
            <div className="input-group"><label className="input-label">Department</label><input className="input" value={form.department} onChange={e => up('department', e.target.value)} /></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--sp-4)' }}>
            <div className="input-group"><label className="input-label">Year</label><input className="input" value={form.year} onChange={e => up('year', e.target.value)} placeholder="e.g. 3rd Year" /></div>
            <div className="input-group"><label className="input-label">Country</label><input className="input" value={form.country} onChange={e => up('country', e.target.value)} /></div>
            <div className="input-group"><label className="input-label">City</label><input className="input" value={form.city} onChange={e => up('city', e.target.value)} /></div>
          </div>
          <div className="input-group"><label className="input-label">Skills (comma-separated)</label><input className="input" value={form.skills} onChange={e => up('skills', e.target.value)} placeholder="React, Python, Figma..." /></div>
          <div className="input-group"><label className="input-label">Short Bio</label><textarea className="textarea" value={form.bio} onChange={e => up('bio', e.target.value)} rows="3" /></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-4)' }}>
            <div className="input-group"><label className="input-label">GitHub</label><input className="input" value={form.github} onChange={e => up('github', e.target.value)} /></div>
            <div className="input-group"><label className="input-label">LinkedIn</label><input className="input" value={form.linkedin} onChange={e => up('linkedin', e.target.value)} /></div>
          </div>
          <button className="btn btn-primary btn-lg" type="submit" style={{ width: '100%' }}>Create Account</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: 'var(--sp-6)', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          Already have an account? <Link to="/login" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Log in</Link>
        </p>
      </div>
    </div>
  );
}

/* ============================================
   HOME / LANDING PAGE
   ============================================ */
function HomePage() {
  const s = useStore();
  const user = s.getCurrentUser();
  const navigate = useNavigate();

  const features = [
    { icon: Trophy, title: 'Discover Hackathons', desc: 'Find the best hackathons worldwide. Filter by mode, skills, and prizes.', color: 'var(--aurora-1)', link: '/hackathons' },
    { icon: Users, title: 'Form Dream Teams', desc: 'Match with teammates by skills. Apply to join or recruit your own team.', color: 'var(--aurora-3)', link: '/teams' },
    { icon: Briefcase, title: 'Land Internships', desc: 'Browse curated internships from top companies. Apply with one click.', color: 'var(--accent-warning)', link: '/internships' },
    { icon: Globe, title: 'Connect Globally', desc: 'Network with students across colleges and countries. Build your tribe.', color: 'var(--accent-success)', link: '/explore' },
  ];

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="saas-background">
          <div className="saas-blob saas-blob-1"></div>
          <div className="saas-blob saas-blob-2"></div>
          <div className="saas-blob saas-blob-3"></div>
          <div className="saas-blob saas-blob-4"></div>
          <div className="saas-noise"></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '720px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--sp-2)', padding: 'var(--sp-1) var(--sp-4)', background: 'var(--accent-primary-dim)', borderRadius: 'var(--r-full)', marginBottom: 'var(--sp-6)' }}>
              <Sparkles size={14} style={{ color: 'var(--accent-primary)' }} />
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--accent-primary)' }}>For college students, by college students</span>
            </div>
            <h1 className="text-hero">
              Hack. Team. Intern.<br />
              <span className="gradient-text">Connect.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginTop: 'var(--sp-6)', maxWidth: '580px', lineHeight: 1.7 }}>
              The all-in-one platform for college students to discover hackathons, build winning teams based on skills, land top internships, and grow their network.
            </p>
            <div style={{ display: 'flex', gap: 'var(--sp-4)', marginTop: 'var(--sp-10)', flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-lg" onClick={() => navigate(user ? '/hackathons' : '/signup')}>
                {user ? 'Browse Hackathons' : 'Get Started — Free'} <ArrowRight size={18} />
              </button>
              <button className="btn btn-secondary btn-lg" onClick={() => navigate('/explore')}>
                Explore Students <Search size={18} />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="stats-row" style={{ marginTop: 'var(--sp-16)' }}>
            <div className="stat-item">
              <div className="stat-value gradient-text">{s.getHackathons().length}+</div>
              <div className="stat-label">Active Hackathons</div>
            </div>
            <div className="stat-item">
              <div className="stat-value gradient-text">{s.users.length * 120}+</div>
              <div className="stat-label">Students Connected</div>
            </div>
            <div className="stat-item">
              <div className="stat-value gradient-text">{s.getTeams().length * 15}+</div>
              <div className="stat-label">Teams Formed</div>
            </div>
            <div className="stat-item">
              <div className="stat-value gradient-text">{s.getInternships().length * 8}+</div>
              <div className="stat-label">Internship Listings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section" style={{ background: 'var(--bg-base)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <p className="text-xs">EVERYTHING YOU NEED</p>
            <h2 className="text-display">One Platform, <span className="gradient-text">Endless Possibilities</span></h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: 'var(--sp-4) auto 0' }}>From finding the perfect hackathon to landing your dream internship — we've got you covered.</p>
          </div>
          <div className="grid-4" style={{ gap: 'var(--sp-6)' }}>
            {features.map((f, i) => (
              <div key={i} className="card card-glow" onClick={() => navigate(f.link)} style={{ cursor: 'pointer' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--r-md)', background: `${f.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--sp-5)' }}>
                  <f.icon size={24} style={{ color: f.color }} />
                </div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: 'var(--sp-3)', color: 'var(--text-primary)' }}>{f.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{f.desc}</p>
                <div style={{ marginTop: 'var(--sp-5)', display: 'flex', alignItems: 'center', gap: 'var(--sp-2)', color: f.color, fontSize: '0.875rem', fontWeight: 600 }}>
                  Learn more <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Hackathons Preview */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--sp-8)' }}>
            <div>
              <p className="text-xs">TRENDING NOW</p>
              <h2 className="text-display">Upcoming <span className="gradient-text">Hackathons</span></h2>
            </div>
            <Link to="/hackathons" className="btn btn-ghost">View All <ChevronRight size={16} /></Link>
          </div>
          <div className="grid-3">
            {s.getHackathons().filter(h => h.status === 'upcoming').slice(0, 3).map(h => (
              <HackathonCard key={h.id} hackathon={h} onClick={() => navigate(`/hackathons/${h.id}`)} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ padding: 'var(--sp-16)', background: 'var(--bg-elevated)', borderRadius: 'var(--r-xl)', border: 'var(--border-subtle)', position: 'relative', overflow: 'hidden' }}>
            <div className="orb orb-1" style={{ opacity: 0.08 }}></div>
            <div className="orb orb-2" style={{ opacity: 0.06 }}></div>
            <h2 className="text-display" style={{ marginBottom: 'var(--sp-4)' }}>Ready to level up your <span className="gradient-text">college journey</span>?</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '500px', margin: '0 auto var(--sp-8)' }}>
              Join thousands of students building, competing, and growing together.
            </p>
            <button className="btn btn-primary btn-lg" onClick={() => navigate(user ? '/hackathons' : '/signup')}>
              {user ? 'Explore Hackathons' : 'Create Free Account'} <Sparkles size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: 'var(--sp-12) 0', borderTop: 'var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--sp-4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
              <div className="navbar-brand-icon" style={{ width: '28px', height: '28px', fontSize: '0.7rem' }}>SC</div>
              <span style={{ fontWeight: 700, fontSize: '0.9375rem' }}>Skill Connection</span>
            </div>
            <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8125rem' }}>© 2026 Skill Connection. Built for students, by students.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ============================================
   HACKATHON CARD
   ============================================ */
function HackathonCard({ hackathon: h, onClick }) {
  const modeColor = h.mode === 'Online' ? 'var(--accent-success)' : h.mode === 'Hybrid' ? 'var(--accent-warning)' : 'var(--accent-primary)';
  return (
    <div className="card card-glow" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="card-header">
        <div>
          <div style={{ display: 'flex', gap: 'var(--sp-2)', marginBottom: 'var(--sp-3)' }}>
            <span className="tag tag-primary">{h.mode}</span>
            {h.status === 'completed' && <span className="tag tag-neutral">Completed</span>}
          </div>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: 'var(--sp-1)' }}>{h.title}</h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>by {h.organizer}</p>
        </div>
      </div>
      <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: 'var(--sp-4)' }}>{h.description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-2)', marginBottom: 'var(--sp-4)' }}>
        {h.skills.slice(0, 3).map(s => <span key={s} className="tag tag-secondary">{s}</span>)}
        {h.skills.length > 3 && <span className="tag tag-neutral">+{h.skills.length - 3}</span>}
      </div>
      <div className="card-footer">
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)', color: 'var(--text-tertiary)', fontSize: '0.8125rem' }}>
          <Calendar size={14} /> {h.startDate}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)', color: 'var(--accent-warning)', fontSize: '0.875rem', fontWeight: 700 }}>
          <Star size={14} /> {h.prizes}
        </div>
      </div>
    </div>
  );
}

/* ============================================
   HACKATHONS PAGE
   ============================================ */
function HackathonsPage({ addToast }) {
  const s = useStore();
  const navigate = useNavigate();
  const user = s.getCurrentUser();
  const [search, setSearch] = useState('');
  const [modeFilter, setModeFilter] = useState('');
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({ title: '', organizer: '', description: '', startDate: '', endDate: '', mode: 'Online', location: '', maxTeamSize: 4, minTeamSize: 2, skills: '', prizes: '', website: '', tags: '' });

  let hackathons = s.getHackathons();
  if (search) {
    const q = search.toLowerCase();
    hackathons = hackathons.filter(h => h.title.toLowerCase().includes(q) || h.skills.some(sk => sk.toLowerCase().includes(q)) || h.organizer.toLowerCase().includes(q));
  }
  if (modeFilter) hackathons = hackathons.filter(h => h.mode === modeFilter);

  const handleCreate = (e) => {
    e.preventDefault();
    s.addHackathon({ ...form, skills: form.skills.split(',').map(x => x.trim()).filter(Boolean), tags: form.tags.split(',').map(x => x.trim()).filter(Boolean), maxTeamSize: +form.maxTeamSize, minTeamSize: +form.minTeamSize });
    addToast('Hackathon posted successfully!');
    setShowCreate(false);
    setForm({ title: '', organizer: '', description: '', startDate: '', endDate: '', mode: 'Online', location: '', maxTeamSize: 4, minTeamSize: 2, skills: '', prizes: '', website: '', tags: '' });
  };

  return (
    <div className="page-content">
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--sp-8)', flexWrap: 'wrap', gap: 'var(--sp-4)' }}>
            <div>
              <p className="text-xs">COMPETE & WIN</p>
              <h1 className="text-display">Hackathons</h1>
              <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--sp-2)' }}>Discover hackathons from across the globe</p>
            </div>
            {user && (
              <button className="btn btn-primary" onClick={() => setShowCreate(true)}>
                <Plus size={18} /> Post Hackathon
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="filter-bar" style={{ marginBottom: 'var(--sp-8)' }}>
            <div className="search-bar" style={{ maxWidth: '300px' }}>
              <Search size={18} />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search hackathons..." />
            </div>
            <select className="select" value={modeFilter} onChange={e => setModeFilter(e.target.value)} style={{ maxWidth: '160px' }}>
              <option value="">All Modes</option>
              <option value="Online">Online</option>
              <option value="In-person">In-person</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div className="grid-3">
            {hackathons.map(h => (
              <HackathonCard key={h.id} hackathon={h} onClick={() => navigate(`/hackathons/${h.id}`)} />
            ))}
          </div>
          {hackathons.length === 0 && (
            <div className="empty-state"><Trophy size={48} /><p>No hackathons found matching your filters.</p></div>
          )}
        </div>
      </section>

      {/* Create Modal */}
      {showCreate && (
        <div className="modal-overlay" onClick={() => setShowCreate(false)}>
          <div className="modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '640px' }}>
            <div className="modal-header">
              <h2 className="text-heading">Post a Hackathon</h2>
              <button className="btn btn-icon btn-secondary" onClick={() => setShowCreate(false)}><X size={18} /></button>
            </div>
            <form onSubmit={handleCreate} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-4)' }}>
                <div className="input-group"><label className="input-label">Title *</label><input className="input" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} required /></div>
                <div className="input-group"><label className="input-label">Organizer *</label><input className="input" value={form.organizer} onChange={e => setForm(f => ({ ...f, organizer: e.target.value }))} required /></div>
              </div>
              <div className="input-group"><label className="input-label">Description *</label><textarea className="textarea" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} required /></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--sp-4)' }}>
                <div className="input-group"><label className="input-label">Start Date</label><input className="input" type="date" value={form.startDate} onChange={e => setForm(f => ({ ...f, startDate: e.target.value }))} /></div>
                <div className="input-group"><label className="input-label">End Date</label><input className="input" type="date" value={form.endDate} onChange={e => setForm(f => ({ ...f, endDate: e.target.value }))} /></div>
                <div className="input-group"><label className="input-label">Mode</label>
                  <select className="select" value={form.mode} onChange={e => setForm(f => ({ ...f, mode: e.target.value }))}>
                    <option>Online</option><option>In-person</option><option>Hybrid</option>
                  </select>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-4)' }}>
                <div className="input-group"><label className="input-label">Location</label><input className="input" value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} /></div>
                <div className="input-group"><label className="input-label">Prizes</label><input className="input" value={form.prizes} onChange={e => setForm(f => ({ ...f, prizes: e.target.value }))} /></div>
              </div>
              <div className="input-group"><label className="input-label">Required Skills (comma-separated)</label><input className="input" value={form.skills} onChange={e => setForm(f => ({ ...f, skills: e.target.value }))} /></div>
              <div className="input-group"><label className="input-label">Website URL</label><input className="input" value={form.website} onChange={e => setForm(f => ({ ...f, website: e.target.value }))} /></div>
              <button className="btn btn-primary btn-lg" type="submit" style={{ width: '100%' }}>Post Hackathon</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================
   HACKATHON DETAIL PAGE
   ============================================ */
function HackathonDetailPage({ addToast }) {
  const s = useStore();
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split('/').pop();
  const hack = s.getHackathon(id);
  const user = s.getCurrentUser();
  const teams = s.getTeamsForHackathon(id);

  if (!hack) return <div className="page-content"><div className="container section"><div className="empty-state"><p>Hackathon not found.</p></div></div></div>;

  const poster = s.getUser(hack.postedBy);

  return (
    <div className="page-content">
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <button className="btn btn-ghost btn-sm" onClick={() => navigate('/hackathons')} style={{ marginBottom: 'var(--sp-6)' }}>← Back to Hackathons</button>
          
          <div className="card" style={{ padding: 'var(--sp-8)', position: 'relative', overflow: 'hidden' }}>
            <div className="orb orb-1" style={{ opacity: 0.06 }}></div>
            <div style={{ display: 'flex', gap: 'var(--sp-3)', marginBottom: 'var(--sp-4)' }}>
              <span className="tag tag-primary">{hack.mode}</span>
              <span className="tag tag-success">{hack.status}</span>
            </div>
            <h1 className="text-display" style={{ marginBottom: 'var(--sp-2)' }}>{hack.title}</h1>
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-tertiary)', marginBottom: 'var(--sp-6)' }}>Organized by <strong style={{ color: 'var(--text-secondary)' }}>{hack.organizer}</strong></p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--sp-4)', marginBottom: 'var(--sp-8)' }}>
              <InfoBlock icon={Calendar} label="Dates" value={`${hack.startDate} → ${hack.endDate}`} />
              <InfoBlock icon={MapPin} label="Location" value={hack.location} />
              <InfoBlock icon={Users} label="Team Size" value={`${hack.minTeamSize} – ${hack.maxTeamSize} members`} />
              <InfoBlock icon={Star} label="Prizes" value={hack.prizes} />
              <InfoBlock icon={Trophy} label="Teams Registered" value={hack.registeredTeams} />
            </div>

            <h3 style={{ marginBottom: 'var(--sp-3)', color: 'var(--text-primary)' }}>About</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 'var(--sp-6)' }}>{hack.description}</p>

            <h3 style={{ marginBottom: 'var(--sp-3)', color: 'var(--text-primary)' }}>Skills & Tracks</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-2)', marginBottom: 'var(--sp-6)' }}>
              {hack.skills.map(sk => <span key={sk} className="tag tag-secondary">{sk}</span>)}
              {hack.tags?.map(t => <span key={t} className="tag tag-neutral">{t}</span>)}
            </div>

            {hack.website && hack.website !== '#' && (
              <a href={hack.website} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginBottom: 'var(--sp-6)' }}>
                Visit Website <ExternalLink size={16} />
              </a>
            )}

            {poster && (
              <div className="card-footer" style={{ marginTop: 'var(--sp-4)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
                  <div className="avatar avatar-sm">{poster.avatar}</div>
                  <div>
                    <p style={{ fontSize: '0.875rem', fontWeight: 600 }}>Posted by {poster.name}</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>{poster.college}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Teams for this hackathon */}
          <div style={{ marginTop: 'var(--sp-10)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--sp-6)' }}>
              <h2 className="text-heading">Teams for this Hackathon</h2>
              {user && <button className="btn btn-primary btn-sm" onClick={() => navigate('/teams')}>Create Team</button>}
            </div>
            {teams.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
                {teams.map(t => <TeamCard key={t.id} team={t} store={s} onClick={() => navigate(`/teams/${t.id}`)} />)}
              </div>
            ) : (
              <div className="empty-state" style={{ padding: 'var(--sp-8)' }}><Users size={36} /><p>No teams yet. Be the first to create one!</p></div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoBlock({ icon: Icon, label, value }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
      <div style={{ width: '36px', height: '36px', borderRadius: 'var(--r-md)', background: 'var(--accent-primary-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon size={16} style={{ color: 'var(--accent-primary)' }} />
      </div>
      <div>
        <p className="text-xs" style={{ fontSize: '0.6875rem', marginBottom: '2px' }}>{label}</p>
        <p style={{ fontSize: '0.875rem', fontWeight: 600 }}>{value}</p>
      </div>
    </div>
  );
}

/* ============================================
   TEAM CARD
   ============================================ */
function TeamCard({ team: t, store: s, onClick }) {
  const hack = s.getHackathon(t.hackathonId);
  const leader = s.getUser(t.leaderId);
  const statusColor = t.status === 'recruiting' ? 'tag-success' : 'tag-neutral';
  return (
    <div className="card card-glow" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="card-header">
        <div>
          <h3 style={{ fontSize: '1.125rem', color: 'var(--text-primary)', marginBottom: 'var(--sp-1)' }}>{t.name}</h3>
          {hack && <p style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)' }}>{hack.title}</p>}
        </div>
        <span className={`tag ${statusColor}`}>{t.status === 'recruiting' ? 'Recruiting' : 'Full'}</span>
      </div>
      <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: 'var(--sp-4)' }}>{t.description}</p>
      {t.requiredSkills.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-2)', marginBottom: 'var(--sp-3)' }}>
          {t.requiredSkills.map(sk => <span key={sk} className="tag tag-secondary">{sk}</span>)}
        </div>
      )}
      <div className="card-footer">
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
          {leader && <div className="avatar avatar-sm">{leader.avatar}</div>}
          <span style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)' }}>{t.members.length}/{t.maxSize} members</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)', fontSize: '0.8125rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
          View Details <ChevronRight size={14} />
        </div>
      </div>
    </div>
  );
}

/* ============================================
   TEAMS PAGE
   ============================================ */
function TeamsPage({ addToast }) {
  const s = useStore();
  const navigate = useNavigate();
  const user = s.getCurrentUser();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({ name: '', hackathonId: '', description: '', requiredSkills: '', maxSize: 4 });

  let teams = s.getTeams();
  if (search) {
    const q = search.toLowerCase();
    teams = teams.filter(t => t.name.toLowerCase().includes(q) || t.requiredSkills.some(sk => sk.toLowerCase().includes(q)));
  }
  if (filter === 'recruiting') teams = teams.filter(t => t.status === 'recruiting');
  if (filter === 'my' && user) teams = teams.filter(t => t.members.includes(user.id) || t.leaderId === user.id);

  const handleCreate = (e) => {
    e.preventDefault();
    s.createTeam({ ...form, requiredSkills: form.requiredSkills.split(',').map(x => x.trim()).filter(Boolean), maxSize: +form.maxSize });
    addToast('Team created! Now recruit some members.');
    setShowCreate(false);
    setForm({ name: '', hackathonId: '', description: '', requiredSkills: '', maxSize: 4 });
  };

  return (
    <div className="page-content">
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--sp-8)', flexWrap: 'wrap', gap: 'var(--sp-4)' }}>
            <div>
              <p className="text-xs">BUILD YOUR SQUAD</p>
              <h1 className="text-display">Teams</h1>
              <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--sp-2)' }}>Find teammates or recruit your dream team</p>
            </div>
            {user && <button className="btn btn-primary" onClick={() => setShowCreate(true)}><Plus size={18} /> Create Team</button>}
          </div>

          <div className="filter-bar" style={{ marginBottom: 'var(--sp-8)' }}>
            <div className="search-bar" style={{ maxWidth: '300px' }}>
              <Search size={18} />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search teams or skills..." />
            </div>
            <div className="tabs">
              {[{ key: 'all', label: 'All Teams' }, { key: 'recruiting', label: 'Recruiting' }, { key: 'my', label: 'My Teams' }].map(t => (
                <button key={t.key} className={`tab ${filter === t.key ? 'active' : ''}`} onClick={() => setFilter(t.key)}>{t.label}</button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
            {teams.map(t => (
              <TeamCard key={t.id} team={t} store={s} onClick={() => navigate(`/teams/${t.id}`)} />
            ))}
          </div>
          {teams.length === 0 && <div className="empty-state"><Users size={48} /><p>No teams found.</p></div>}
        </div>
      </section>

      {/* Create Team Modal */}
      {showCreate && (
        <div className="modal-overlay" onClick={() => setShowCreate(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="text-heading">Create a Team</h2>
              <button className="btn btn-icon btn-secondary" onClick={() => setShowCreate(false)}><X size={18} /></button>
            </div>
            <form onSubmit={handleCreate} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
              <div className="input-group"><label className="input-label">Team Name *</label><input className="input" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required /></div>
              <div className="input-group">
                <label className="input-label">Hackathon *</label>
                <select className="select" value={form.hackathonId} onChange={e => setForm(f => ({ ...f, hackathonId: e.target.value }))} required>
                  <option value="">Select a hackathon</option>
                  {s.getHackathons().filter(h => h.status === 'upcoming').map(h => <option key={h.id} value={h.id}>{h.title}</option>)}
                </select>
              </div>
              <div className="input-group"><label className="input-label">Description *</label><textarea className="textarea" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} required /></div>
              <div className="input-group"><label className="input-label">Looking for Skills (comma-separated)</label><input className="input" value={form.requiredSkills} onChange={e => setForm(f => ({ ...f, requiredSkills: e.target.value }))} placeholder="React, Python, Figma..." /></div>
              <div className="input-group"><label className="input-label">Max Team Size</label><input className="input" type="number" min={2} max={10} value={form.maxSize} onChange={e => setForm(f => ({ ...f, maxSize: e.target.value }))} /></div>
              <button className="btn btn-primary btn-lg" type="submit" style={{ width: '100%' }}>Create Team</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================
   TEAM DETAIL PAGE
   ============================================ */
function TeamDetailPage({ addToast }) {
  const s = useStore();
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split('/').pop();
  const team = s.getTeam(id);
  const user = s.getCurrentUser();
  const [applyMsg, setApplyMsg] = useState('');
  const [showApply, setShowApply] = useState(false);

  if (!team) return <div className="page-content"><div className="container section"><div className="empty-state"><p>Team not found.</p></div></div></div>;

  const hack = s.getHackathon(team.hackathonId);
  const leader = s.getUser(team.leaderId);
  const isLeader = user && user.id === team.leaderId;
  const isMember = user && team.members.includes(user.id);
  const hasApplied = user && team.applications.find(a => a.userId === user.id);
  const canApply = user && !isMember && !hasApplied && team.status === 'recruiting';

  const handleApply = () => {
    s.applyToTeam(team.id, applyMsg);
    addToast('Application sent! The team leader will review it.');
    setShowApply(false);
    setApplyMsg('');
  };

  const handleApplication = (userId, accept) => {
    s.handleApplication(team.id, userId, accept);
    addToast(accept ? 'Member accepted!' : 'Application rejected.');
  };

  return (
    <div className="page-content">
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <button className="btn btn-ghost btn-sm" onClick={() => navigate('/teams')} style={{ marginBottom: 'var(--sp-6)' }}>← Back to Teams</button>

          <div className="card" style={{ padding: 'var(--sp-8)', position: 'relative', overflow: 'hidden' }}>
            <div className="orb orb-2" style={{ opacity: 0.06 }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--sp-4)', flexWrap: 'wrap', gap: 'var(--sp-3)' }}>
              <div>
                <h1 className="text-display">{team.name}</h1>
                {hack && <p style={{ color: 'var(--text-tertiary)', marginTop: 'var(--sp-1)' }}>for {hack.title}</p>}
              </div>
              <span className={`tag ${team.status === 'recruiting' ? 'tag-success' : 'tag-neutral'}`} style={{ fontSize: '0.875rem', padding: 'var(--sp-2) var(--sp-4)' }}>
                {team.status === 'recruiting' ? '🟢 Recruiting' : '🔴 Full'}
              </span>
            </div>

            <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--sp-6)' }}>{team.description}</p>

            {team.requiredSkills.length > 0 && (
              <div style={{ marginBottom: 'var(--sp-6)' }}>
                <h3 style={{ fontSize: '0.9375rem', marginBottom: 'var(--sp-3)' }}>Looking For</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-2)' }}>
                  {team.requiredSkills.map(sk => <span key={sk} className="tag tag-secondary">{sk}</span>)}
                </div>
              </div>
            )}

            {/* Members */}
            <h3 style={{ fontSize: '0.9375rem', marginBottom: 'var(--sp-3)' }}>Members ({team.members.length}/{team.maxSize})</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)', marginBottom: 'var(--sp-6)' }}>
              {team.members.map(mid => {
                const m = s.getUser(mid);
                if (!m) return null;
                return (
                  <div key={mid} style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', padding: 'var(--sp-3)', background: 'var(--bg-surface)', borderRadius: 'var(--r-md)', cursor: 'pointer' }} onClick={() => navigate(`/profile/${m.id}`)}>
                    <div className="avatar">{m.avatar}</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{m.name} {mid === team.leaderId && <span className="tag tag-warning" style={{ marginLeft: 'var(--sp-2)' }}>Leader</span>}</p>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)' }}>{m.college} — {m.skills.slice(0, 3).join(', ')}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Apply Button */}
            {canApply && (
              <button className="btn btn-primary btn-lg" onClick={() => setShowApply(true)} style={{ width: '100%' }}>
                <Send size={18} /> Apply to Join
              </button>
            )}
            {hasApplied && (
              <div className="tag tag-warning" style={{ fontSize: '0.9375rem', padding: 'var(--sp-3) var(--sp-5)', width: '100%', justifyContent: 'center' }}>
                ⏳ Application {hasApplied.status}
              </div>
            )}

            {/* Leader: Review Applications */}
            {isLeader && team.applications.filter(a => a.status === 'pending').length > 0 && (
              <div style={{ marginTop: 'var(--sp-8)' }}>
                <h3 style={{ fontSize: '0.9375rem', marginBottom: 'var(--sp-4)' }}>Pending Applications ({team.applications.filter(a => a.status === 'pending').length})</h3>
                {team.applications.filter(a => a.status === 'pending').map(app => {
                  const applicant = s.getUser(app.userId);
                  if (!applicant) return null;
                  return (
                    <div key={app.userId} className="card" style={{ marginBottom: 'var(--sp-3)', padding: 'var(--sp-4)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', marginBottom: 'var(--sp-3)' }}>
                        <div className="avatar">{applicant.avatar}</div>
                        <div>
                          <p style={{ fontWeight: 600 }}>{applicant.name}</p>
                          <p style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)' }}>{applicant.college}</p>
                        </div>
                      </div>
                      <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: 'var(--sp-3)' }}>"{app.message}"</p>
                      <div style={{ display: 'flex', gap: 'var(--sp-3)' }}>
                        <button className="btn btn-success btn-sm" onClick={() => handleApplication(app.userId, true)}><Check size={16} /> Accept</button>
                        <button className="btn btn-danger btn-sm" onClick={() => handleApplication(app.userId, false)}><XCircle size={16} /> Reject</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      {showApply && (
        <div className="modal-overlay" onClick={() => setShowApply(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="text-heading">Apply to {team.name}</h2>
              <button className="btn btn-icon btn-secondary" onClick={() => setShowApply(false)}><X size={18} /></button>
            </div>
            <div className="input-group" style={{ marginBottom: 'var(--sp-6)' }}>
              <label className="input-label">Why do you want to join? Tell the team leader about your skills.</label>
              <textarea className="textarea" value={applyMsg} onChange={e => setApplyMsg(e.target.value)} placeholder="I'd love to contribute my skills in..." rows={4} />
            </div>
            <button className="btn btn-primary btn-lg" onClick={handleApply} disabled={!applyMsg.trim()} style={{ width: '100%' }}>
              <Send size={18} /> Send Application
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================
   INTERNSHIPS PAGE
   ============================================ */
function InternshipsPage({ addToast }) {
  const s = useStore();
  const navigate = useNavigate();
  const user = s.getCurrentUser();
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({ title: '', company: '', location: '', type: 'Remote', duration: '', description: '', requirements: '', stipend: '', deadline: '' });

  let internships = s.getInternships();
  if (search) {
    const q = search.toLowerCase();
    internships = internships.filter(i => i.title.toLowerCase().includes(q) || i.company.toLowerCase().includes(q) || i.requirements.some(r => r.toLowerCase().includes(q)));
  }
  if (typeFilter) internships = internships.filter(i => i.type === typeFilter);

  const handleCreate = (e) => {
    e.preventDefault();
    s.addInternship({ ...form, requirements: form.requirements.split(',').map(x => x.trim()).filter(Boolean) });
    addToast('Internship posted!');
    setShowCreate(false);
    setForm({ title: '', company: '', location: '', type: 'Remote', duration: '', description: '', requirements: '', stipend: '', deadline: '' });
  };

  const handleApply = (internId) => {
    if (!user) { navigate('/login'); return; }
    const result = s.applyToInternship(internId);
    if (result) addToast('Application submitted!');
    else addToast('Already applied!', 'info');
  };

  return (
    <div className="page-content">
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--sp-8)', flexWrap: 'wrap', gap: 'var(--sp-4)' }}>
            <div>
              <p className="text-xs">LAUNCH YOUR CAREER</p>
              <h1 className="text-display">Internships</h1>
              <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--sp-2)' }}>Find and apply to top internships worldwide</p>
            </div>
            {user && <button className="btn btn-primary" onClick={() => setShowCreate(true)}><Plus size={18} /> Post Internship</button>}
          </div>

          <div className="filter-bar" style={{ marginBottom: 'var(--sp-8)' }}>
            <div className="search-bar" style={{ maxWidth: '300px' }}>
              <Search size={18} />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by role, company, or skill..." />
            </div>
            <select className="select" value={typeFilter} onChange={e => setTypeFilter(e.target.value)} style={{ maxWidth: '160px' }}>
              <option value="">All Types</option>
              <option value="Remote">Remote</option>
              <option value="On-site">On-site</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
            {internships.map(i => {
              const applied = user && i.applicants.includes(user.id);
              const typeColors = { 'Remote': 'tag-success', 'On-site': 'tag-primary', 'Hybrid': 'tag-warning' };
              return (
                <div key={i.id} className="card card-glow">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--sp-4)' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', gap: 'var(--sp-2)', marginBottom: 'var(--sp-3)' }}>
                        <span className={`tag ${typeColors[i.type] || 'tag-neutral'}`}>{i.type}</span>
                        <span className="tag tag-neutral">{i.duration}</span>
                      </div>
                      <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: 'var(--sp-1)' }}>{i.title}</h3>
                      <p style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)', color: 'var(--text-tertiary)', marginBottom: 'var(--sp-3)' }}>
                        <Building size={14} /> {i.company} <span style={{ margin: '0 var(--sp-2)' }}>•</span> <MapPin size={14} /> {i.location}
                      </p>
                      <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: 'var(--sp-4)' }}>{i.description}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-2)', marginBottom: 'var(--sp-4)' }}>
                        {i.requirements.map(r => <span key={r} className="tag tag-secondary">{r}</span>)}
                      </div>
                      <div className="card-footer" style={{ marginTop: 0 }}>
                        <div style={{ display: 'flex', gap: 'var(--sp-6)', fontSize: '0.8125rem', color: 'var(--text-tertiary)' }}>
                          <span style={{ color: 'var(--accent-success)', fontWeight: 700 }}>{i.stipend}</span>
                          <span>Deadline: {i.deadline}</span>
                          <span>{i.applicants.length} applicant{i.applicants.length !== 1 ? 's' : ''}</span>
                        </div>
                        <div style={{ display: 'flex', gap: 'var(--sp-3)' }}>
                          {applied ? (
                            <span className="tag tag-success" style={{ padding: 'var(--sp-2) var(--sp-4)' }}>✓ Applied</span>
                          ) : (
                            <button className="btn btn-primary btn-sm" onClick={() => handleApply(i.id)}>Apply Now</button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {internships.length === 0 && <div className="empty-state"><Briefcase size={48} /><p>No internships match your search.</p></div>}
        </div>
      </section>

      {/* Post Internship Modal */}
      {showCreate && (
        <div className="modal-overlay" onClick={() => setShowCreate(false)}>
          <div className="modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '640px' }}>
            <div className="modal-header">
              <h2 className="text-heading">Post an Internship</h2>
              <button className="btn btn-icon btn-secondary" onClick={() => setShowCreate(false)}><X size={18} /></button>
            </div>
            <form onSubmit={handleCreate} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-4)' }}>
                <div className="input-group"><label className="input-label">Job Title *</label><input className="input" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} required /></div>
                <div className="input-group"><label className="input-label">Company *</label><input className="input" value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} required /></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--sp-4)' }}>
                <div className="input-group"><label className="input-label">Location</label><input className="input" value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} /></div>
                <div className="input-group"><label className="input-label">Type</label>
                  <select className="select" value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))}>
                    <option>Remote</option><option>On-site</option><option>Hybrid</option>
                  </select>
                </div>
                <div className="input-group"><label className="input-label">Duration</label><input className="input" value={form.duration} onChange={e => setForm(f => ({ ...f, duration: e.target.value }))} placeholder="e.g. 3 months" /></div>
              </div>
              <div className="input-group"><label className="input-label">Description *</label><textarea className="textarea" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} required /></div>
              <div className="input-group"><label className="input-label">Requirements (comma-separated)</label><input className="input" value={form.requirements} onChange={e => setForm(f => ({ ...f, requirements: e.target.value }))} /></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-4)' }}>
                <div className="input-group"><label className="input-label">Stipend</label><input className="input" value={form.stipend} onChange={e => setForm(f => ({ ...f, stipend: e.target.value }))} placeholder="e.g. ₹60,000/month" /></div>
                <div className="input-group"><label className="input-label">Deadline</label><input className="input" type="date" value={form.deadline} onChange={e => setForm(f => ({ ...f, deadline: e.target.value }))} /></div>
              </div>
              <button className="btn btn-primary btn-lg" type="submit" style={{ width: '100%' }}>Post Internship</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================
   EXPLORE / STUDENT DIRECTORY PAGE
   ============================================ */
function ExplorePage() {
  const s = useStore();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [college, setCollege] = useState('');
  const [department, setDepartment] = useState('');
  const [country, setCountry] = useState('');

  const users = s.searchUsers(search, { college: college || undefined, department: department || undefined, country: country || undefined });

  return (
    <div className="page-content">
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 'var(--sp-8)' }}>
            <p className="text-xs">DISCOVER TALENT</p>
            <h1 className="text-display">Explore <span className="gradient-text">Students</span></h1>
            <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--sp-2)' }}>Find and connect with students across colleges, countries, and skill sets</p>
          </div>

          <div className="filter-bar" style={{ marginBottom: 'var(--sp-8)' }}>
            <div className="search-bar" style={{ maxWidth: '320px' }}>
              <Search size={18} />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name, skill, or college..." />
            </div>
            <select className="select" value={college} onChange={e => setCollege(e.target.value)}>
              <option value="">All Colleges</option>
              {s.getUniqueColleges().map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select className="select" value={department} onChange={e => setDepartment(e.target.value)}>
              <option value="">All Departments</option>
              {s.getUniqueDepartments().map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <select className="select" value={country} onChange={e => setCountry(e.target.value)}>
              <option value="">All Countries</option>
              {s.getUniqueCountries().map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <p style={{ marginBottom: 'var(--sp-6)', color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>{users.length} student{users.length !== 1 ? 's' : ''} found</p>

          <div className="grid-3">
            {users.map(u => (
              <div key={u.id} className="card card-glow" onClick={() => navigate(`/profile/${u.id}`)} style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-4)', marginBottom: 'var(--sp-4)' }}>
                  <div className="avatar avatar-lg" style={{ background: `linear-gradient(135deg, hsl(${u.id.charCodeAt(1) * 37 % 360}, 70%, 50%), hsl(${(u.id.charCodeAt(1) * 37 + 60) % 360}, 70%, 50%))` }}>{u.avatar}</div>
                  <div>
                    <h3 style={{ fontSize: '1.0625rem', color: 'var(--text-primary)', marginBottom: '2px' }}>{u.name}</h3>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)' }}>{u.college}</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>{u.department} • {u.year}</p>
                  </div>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: 'var(--sp-4)' }}>{u.bio}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-1)' }}>
                  {u.skills.slice(0, 4).map(sk => <span key={sk} className="tag tag-secondary">{sk}</span>)}
                  {u.skills.length > 4 && <span className="tag tag-neutral">+{u.skills.length - 4}</span>}
                </div>
                <div className="card-footer">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)', fontSize: '0.8125rem', color: 'var(--text-tertiary)' }}>
                    <MapPin size={12} /> {u.city}, {u.country}
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--sp-4)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                    <span>{u.hackathonsCount} hacks</span>
                    <span>{u.teamCount} teams</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {users.length === 0 && <div className="empty-state"><Search size={48} /><p>No students found. Try adjusting your filters.</p></div>}
        </div>
      </section>
    </div>
  );
}

/* ============================================
   PROFILE PAGE
   ============================================ */
function ProfilePage({ addToast }) {
  const s = useStore();
  const location = useLocation();
  const navigate = useNavigate();
  const userId = location.pathname.split('/').pop();
  const profileUser = s.getUser(userId);
  const currentUser = s.getCurrentUser();
  const isOwnProfile = currentUser && currentUser.id === userId;
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({});

  if (!profileUser) return <div className="page-content"><div className="container section"><div className="empty-state"><User size={48} /><p>User not found.</p></div></div></div>;

  const userTeams = s.getTeams().filter(t => t.members.includes(userId));

  const startEdit = () => {
    setForm({ name: profileUser.name, bio: profileUser.bio, college: profileUser.college, department: profileUser.department, year: profileUser.year, country: profileUser.country, city: profileUser.city, skills: profileUser.skills.join(', '), github: profileUser.github, linkedin: profileUser.linkedin });
    setEditing(true);
  };

  const saveEdit = () => {
    s.updateProfile({ ...form, skills: form.skills.split(',').map(x => x.trim()).filter(Boolean) });
    addToast('Profile updated!');
    setEditing(false);
  };

  return (
    <div className="page-content">
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          {/* Banner */}
          <div className="profile-banner" style={{ background: `linear-gradient(135deg, hsl(${userId.charCodeAt(1) * 37 % 360}, 60%, 35%), hsl(${(userId.charCodeAt(1) * 37 + 80) % 360}, 60%, 45%))` }}></div>
          
          <div style={{ padding: '0 var(--sp-6)' }}>
            <div className="profile-avatar" style={{ background: `linear-gradient(135deg, hsl(${userId.charCodeAt(1) * 37 % 360}, 70%, 50%), hsl(${(userId.charCodeAt(1) * 37 + 60) % 360}, 70%, 50%))` }}>{profileUser.avatar}</div>
            
            <div style={{ marginTop: 'var(--sp-4)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--sp-4)' }}>
              <div>
                <h1 className="text-display">{profileUser.name}</h1>
                <p style={{ color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-1)' }}><GraduationCap size={16} /> {profileUser.college}</span>
                  <span>•</span>
                  <span>{profileUser.department}</span>
                  <span>•</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-1)' }}><MapPin size={14} /> {profileUser.city}, {profileUser.country}</span>
                </p>
              </div>
              {isOwnProfile && !editing && (
                <button className="btn btn-secondary" onClick={startEdit}>Edit Profile</button>
              )}
            </div>

            {/* Edit Mode */}
            {editing ? (
              <div className="card" style={{ marginTop: 'var(--sp-6)' }}>
                <h3 style={{ marginBottom: 'var(--sp-4)' }}>Edit Profile</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-4)' }}>
                    <div className="input-group"><label className="input-label">Name</label><input className="input" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} /></div>
                    <div className="input-group"><label className="input-label">College</label><input className="input" value={form.college} onChange={e => setForm(f => ({ ...f, college: e.target.value }))} /></div>
                  </div>
                  <div className="input-group"><label className="input-label">Bio</label><textarea className="textarea" value={form.bio} onChange={e => setForm(f => ({ ...f, bio: e.target.value }))} /></div>
                  <div className="input-group"><label className="input-label">Skills (comma-separated)</label><input className="input" value={form.skills} onChange={e => setForm(f => ({ ...f, skills: e.target.value }))} /></div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--sp-4)' }}>
                    <div className="input-group"><label className="input-label">Department</label><input className="input" value={form.department} onChange={e => setForm(f => ({ ...f, department: e.target.value }))} /></div>
                    <div className="input-group"><label className="input-label">Country</label><input className="input" value={form.country} onChange={e => setForm(f => ({ ...f, country: e.target.value }))} /></div>
                    <div className="input-group"><label className="input-label">City</label><input className="input" value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} /></div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-4)' }}>
                    <div className="input-group"><label className="input-label">GitHub</label><input className="input" value={form.github} onChange={e => setForm(f => ({ ...f, github: e.target.value }))} /></div>
                    <div className="input-group"><label className="input-label">LinkedIn</label><input className="input" value={form.linkedin} onChange={e => setForm(f => ({ ...f, linkedin: e.target.value }))} /></div>
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--sp-3)' }}>
                    <button className="btn btn-primary" onClick={saveEdit}>Save Changes</button>
                    <button className="btn btn-secondary" onClick={() => setEditing(false)}>Cancel</button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* Bio */}
                <div className="card" style={{ marginTop: 'var(--sp-6)' }}>
                  <h3 style={{ fontSize: '0.9375rem', marginBottom: 'var(--sp-3)' }}>About</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{profileUser.bio}</p>
                </div>

                {/* Skills */}
                <div className="card" style={{ marginTop: 'var(--sp-4)' }}>
                  <h3 style={{ fontSize: '0.9375rem', marginBottom: 'var(--sp-3)' }}>Skills</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-2)' }}>
                    {profileUser.skills.map(sk => <span key={sk} className="tag tag-secondary" style={{ fontSize: '0.875rem', padding: 'var(--sp-2) var(--sp-4)' }}>{sk}</span>)}
                  </div>
                </div>

                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--sp-4)', marginTop: 'var(--sp-4)' }}>
                  <div className="card" style={{ textAlign: 'center' }}>
                    <div className="stat-value gradient-text" style={{ fontSize: '2rem' }}>{profileUser.hackathonsCount}</div>
                    <div className="stat-label">Hackathons</div>
                  </div>
                  <div className="card" style={{ textAlign: 'center' }}>
                    <div className="stat-value gradient-text" style={{ fontSize: '2rem' }}>{profileUser.teamCount}</div>
                    <div className="stat-label">Teams</div>
                  </div>
                  <div className="card" style={{ textAlign: 'center' }}>
                    <div className="stat-value gradient-text" style={{ fontSize: '2rem' }}>{profileUser.skills.length}</div>
                    <div className="stat-label">Skills</div>
                  </div>
                </div>

                {/* Contact */}
                <div className="card" style={{ marginTop: 'var(--sp-4)' }}>
                  <h3 style={{ fontSize: '0.9375rem', marginBottom: 'var(--sp-4)' }}>Links & Contact</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
                    {profileUser.email && <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', color: 'var(--text-secondary)', fontSize: '0.9375rem' }}><Send size={16} style={{ color: 'var(--accent-primary)' }} />{profileUser.email}</div>}
                    {profileUser.github && <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', color: 'var(--text-secondary)', fontSize: '0.9375rem' }}><Code size={16} style={{ color: 'var(--accent-primary)' }} />{profileUser.github}</div>}
                    {profileUser.linkedin && <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', color: 'var(--text-secondary)', fontSize: '0.9375rem' }}><ExternalLink size={16} style={{ color: 'var(--accent-primary)' }} />{profileUser.linkedin}</div>}
                  </div>
                </div>

                {/* Teams */}
                {userTeams.length > 0 && (
                  <div style={{ marginTop: 'var(--sp-6)' }}>
                    <h3 style={{ marginBottom: 'var(--sp-4)' }}>Teams</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
                      {userTeams.map(t => <TeamCard key={t.id} team={t} store={s} onClick={() => navigate(`/teams/${t.id}`)} />)}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================
   APP ROOT — ROUTING
   ============================================ */
function App() {
  const { toasts, addToast } = useToast();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage addToast={addToast} />} />
        <Route path="/signup" element={<SignupPage addToast={addToast} />} />
        <Route path="/hackathons" element={<HackathonsPage addToast={addToast} />} />
        <Route path="/hackathons/:id" element={<HackathonDetailPage addToast={addToast} />} />
        <Route path="/teams" element={<TeamsPage addToast={addToast} />} />
        <Route path="/teams/:id" element={<TeamDetailPage addToast={addToast} />} />
        <Route path="/internships" element={<InternshipsPage addToast={addToast} />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/profile/:id" element={<ProfilePage addToast={addToast} />} />
      </Routes>
      <ToastContainer toasts={toasts} />
    </>
  );
}

export default App;
