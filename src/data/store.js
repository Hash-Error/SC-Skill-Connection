/* ============================================
   Skill Connection — Client-Side Data Store
   In-memory store with localStorage persistence
   ============================================ */

const STORAGE_KEY = 'skill_connection_data';

// Seed Data
const seedUsers = [
  {
    id: 'u1', name: 'Arjun Mehta', email: 'arjun@iitb.ac.in', password: 'demo',
    avatar: 'AM', college: 'IIT Bombay', department: 'Computer Science',
    year: '3rd Year', country: 'India', city: 'Mumbai',
    bio: 'Full-stack developer passionate about AI/ML and hackathons. Built 3 award-winning projects.',
    skills: ['React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB'],
    github: 'github.com/arjunm', linkedin: 'linkedin.com/in/arjunm',
    joinedDate: '2025-08-15', hackathonsCount: 8, teamCount: 5
  },
  {
    id: 'u2', name: 'Priya Sharma', email: 'priya@nit.ac.in', password: 'demo',
    avatar: 'PS', college: 'NIT Trichy', department: 'Electronics',
    year: '4th Year', country: 'India', city: 'Trichy',
    bio: 'IoT and embedded systems enthusiast. Love building hardware+software solutions.',
    skills: ['Arduino', 'Raspberry Pi', 'C++', 'Python', 'PCB Design'],
    github: 'github.com/priyas', linkedin: 'linkedin.com/in/priyas',
    joinedDate: '2025-09-01', hackathonsCount: 5, teamCount: 3
  },
  {
    id: 'u3', name: 'David Chen', email: 'david@mit.edu', password: 'demo',
    avatar: 'DC', college: 'MIT', department: 'Computer Science',
    year: '2nd Year', country: 'USA', city: 'Boston',
    bio: 'Competitive programmer turned product builder. Love working on scalable systems.',
    skills: ['Go', 'Rust', 'Kubernetes', 'AWS', 'System Design'],
    github: 'github.com/davidc', linkedin: 'linkedin.com/in/davidc',
    joinedDate: '2025-07-10', hackathonsCount: 12, teamCount: 7
  },
  {
    id: 'u4', name: 'Fatima Al-Hassan', email: 'fatima@kaust.sa', password: 'demo',
    avatar: 'FA', college: 'KAUST', department: 'Data Science',
    year: '3rd Year', country: 'Saudi Arabia', city: 'Thuwal',
    bio: 'Data science researcher focused on NLP and healthcare AI applications.',
    skills: ['Python', 'PyTorch', 'NLP', 'Scikit-learn', 'SQL'],
    github: 'github.com/fatimah', linkedin: 'linkedin.com/in/fatimah',
    joinedDate: '2025-10-05', hackathonsCount: 4, teamCount: 2
  },
  {
    id: 'u5', name: 'Riya Patel', email: 'riya@bits.ac.in', password: 'demo',
    avatar: 'RP', college: 'BITS Pilani', department: 'Computer Science',
    year: '2nd Year', country: 'India', city: 'Pilani',
    bio: 'UI/UX designer and frontend developer. Believe in pixel-perfect designs.',
    skills: ['Figma', 'React', 'CSS', 'TypeScript', 'Framer Motion'],
    github: 'github.com/riyap', linkedin: 'linkedin.com/in/riyap',
    joinedDate: '2025-11-20', hackathonsCount: 6, teamCount: 4
  },
  {
    id: 'u6', name: 'James Okonkwo', email: 'james@uct.ac.za', password: 'demo',
    avatar: 'JO', college: 'University of Cape Town', department: 'Software Engineering',
    year: '4th Year', country: 'South Africa', city: 'Cape Town',
    bio: 'Mobile developer specializing in cross-platform apps. Mentor at local coding bootcamps.',
    skills: ['Flutter', 'Dart', 'Firebase', 'Swift', 'Kotlin'],
    github: 'github.com/jameso', linkedin: 'linkedin.com/in/jameso',
    joinedDate: '2025-06-01', hackathonsCount: 10, teamCount: 6
  },
  {
    id: 'u7', name: 'Yuki Tanaka', email: 'yuki@todai.jp', password: 'demo',
    avatar: 'YT', college: 'University of Tokyo', department: 'Robotics',
    year: '3rd Year', country: 'Japan', city: 'Tokyo',
    bio: 'Robotics engineer working on autonomous systems and computer vision.',
    skills: ['ROS', 'OpenCV', 'C++', 'Python', 'SLAM'],
    github: 'github.com/yukit', linkedin: 'linkedin.com/in/yukit',
    joinedDate: '2025-12-01', hackathonsCount: 3, teamCount: 2
  },
  {
    id: 'u8', name: 'Maria Santos', email: 'maria@usp.br', password: 'demo',
    avatar: 'MS', college: 'USP', department: 'Information Systems',
    year: '3rd Year', country: 'Brazil', city: 'São Paulo',
    bio: 'Blockchain enthusiast and web3 developer. Building the decentralized future.',
    skills: ['Solidity', 'Ethereum', 'React', 'Node.js', 'Web3.js'],
    github: 'github.com/marias', linkedin: 'linkedin.com/in/marias',
    joinedDate: '2026-01-15', hackathonsCount: 7, teamCount: 4
  }
];

const seedHackathons = [
  {
    id: 'h1', title: 'HackMIT 2026', organizer: 'MIT',
    description: 'MIT\'s premier annual hackathon — 36 hours of building, learning, and innovating. Open to all college students worldwide. $50K+ in prizes!',
    startDate: '2026-05-15', endDate: '2026-05-17',
    mode: 'Hybrid', location: 'MIT, Cambridge, MA',
    maxTeamSize: 4, minTeamSize: 2,
    skills: ['AI/ML', 'Web Dev', 'Mobile', 'Blockchain'],
    prizes: '$50,000+', registeredTeams: 120,
    website: 'https://hackmit.org',
    postedBy: 'u3', status: 'upcoming',
    tags: ['Premier', 'International', 'Open Track']
  },
  {
    id: 'h2', title: 'Smart India Hackathon', organizer: 'Government of India',
    description: 'India\'s biggest hackathon connecting students with government and industry problem statements. Build solutions for real-world challenges facing the nation.',
    startDate: '2026-06-01', endDate: '2026-06-03',
    mode: 'In-person', location: 'Multiple Cities, India',
    maxTeamSize: 6, minTeamSize: 4,
    skills: ['IoT', 'AI/ML', 'Web Dev', 'Mobile', 'Blockchain'],
    prizes: '₹10,00,000', registeredTeams: 450,
    website: 'https://sih.gov.in',
    postedBy: 'u1', status: 'upcoming',
    tags: ['Government', 'National', 'Problem Statements']
  },
  {
    id: 'h3', title: 'ETHGlobal Tokyo', organizer: 'ETHGlobal',
    description: 'The world\'s leading Ethereum hackathon comes to Tokyo. Build the next generation of decentralized applications.',
    startDate: '2026-04-20', endDate: '2026-04-22',
    mode: 'In-person', location: 'Tokyo Big Sight, Japan',
    maxTeamSize: 5, minTeamSize: 1,
    skills: ['Blockchain', 'Solidity', 'Web3', 'DeFi'],
    prizes: '$100,000+', registeredTeams: 85,
    website: 'https://ethglobal.com',
    postedBy: 'u8', status: 'upcoming',
    tags: ['Web3', 'International', 'Ethereum']
  },
  {
    id: 'h4', title: 'NASA Space Apps 2026', organizer: 'NASA',
    description: 'A global hackathon focused on solving challenges using NASA\'s open data. 48-hour sprint to innovate for space exploration.',
    startDate: '2026-07-10', endDate: '2026-07-12',
    mode: 'Online', location: 'Virtual',
    maxTeamSize: 6, minTeamSize: 2,
    skills: ['Data Science', 'Python', 'Visualization', 'AI/ML'],
    prizes: 'Global Recognition + Mentorship', registeredTeams: 300,
    website: 'https://spaceapps.nasa.gov',
    postedBy: 'u4', status: 'upcoming',
    tags: ['Space', 'Global', 'Data Science']
  },
  {
    id: 'h5', title: 'BITS Hackathon', organizer: 'BITS Pilani Coding Club',
    description: 'Annual 24-hour hackathon at BITS Pilani focused on building innovative solutions for campus problems and beyond.',
    startDate: '2026-03-10', endDate: '2026-03-11',
    mode: 'In-person', location: 'BITS Pilani, Rajasthan',
    maxTeamSize: 4, minTeamSize: 2,
    skills: ['Web Dev', 'Mobile', 'AI/ML', 'UI/UX'],
    prizes: '₹2,00,000', registeredTeams: 60,
    website: '#',
    postedBy: 'u5', status: 'completed',
    tags: ['College', 'Regional', 'Beginner Friendly']
  }
];

const seedTeams = [
  {
    id: 't1', name: 'Neural Nexus', hackathonId: 'h1',
    description: 'Building an AI-powered campus navigation system for visually impaired students. Looking for a frontend dev!',
    leaderId: 'u1', members: ['u1', 'u4'],
    requiredSkills: ['React', 'UI/UX', 'Accessibility'],
    maxSize: 4, status: 'recruiting',
    applications: [
      { userId: 'u5', message: 'I\'d love to join! I have extensive React and accessibility experience.', status: 'pending', date: '2026-04-10' }
    ]
  },
  {
    id: 't2', name: 'Web3 Warriors', hackathonId: 'h3',
    description: 'Creating a decentralized credential verification system for universities. Need a smart contract developer.',
    leaderId: 'u8', members: ['u8', 'u3'],
    requiredSkills: ['Solidity', 'Ethereum', 'Smart Contracts'],
    maxSize: 5, status: 'recruiting',
    applications: []
  },
  {
    id: 't3', name: 'SpaceData Pioneers', hackathonId: 'h4',
    description: 'Using NASA satellite data to predict agricultural yields in developing countries.',
    leaderId: 'u4', members: ['u4', 'u2', 'u7'],
    requiredSkills: ['Data Visualization', 'Python'],
    maxSize: 6, status: 'recruiting',
    applications: [
      { userId: 'u1', message: 'I can help with the web dashboard and data pipelines.', status: 'accepted', date: '2026-04-08' }
    ]
  },
  {
    id: 't4', name: 'PixelPerfect', hackathonId: 'h5',
    description: 'Redesigning the campus management system with a modern UI/UX. Team full — great experience!',
    leaderId: 'u5', members: ['u5', 'u1', 'u6', 'u2'],
    requiredSkills: [],
    maxSize: 4, status: 'full',
    applications: []
  }
];

const seedInternships = [
  {
    id: 'i1', title: 'Frontend Engineer Intern',
    company: 'Google', location: 'Bangalore, India',
    type: 'On-site', duration: '3 months',
    description: 'Join Google\'s Cloud team as a frontend engineering intern. Work on cutting-edge UI frameworks used by millions. Strong React and TypeScript skills required.',
    requirements: ['React', 'TypeScript', 'CSS', 'Testing'],
    stipend: '₹80,000/month', deadline: '2026-05-01',
    postedBy: 'u3', postedDate: '2026-04-01',
    applicants: ['u1', 'u5'],
    status: 'open'
  },
  {
    id: 'i2', title: 'Machine Learning Research Intern',
    company: 'DeepMind', location: 'London, UK',
    type: 'On-site', duration: '6 months',
    description: 'Research internship focused on reinforcement learning for robotics. Publish papers and work alongside world-class researchers.',
    requirements: ['Python', 'PyTorch', 'RL', 'Research Papers'],
    stipend: '£3,500/month', deadline: '2026-06-15',
    postedBy: 'u4', postedDate: '2026-04-05',
    applicants: ['u4'],
    status: 'open'
  },
  {
    id: 'i3', title: 'Full-Stack Developer Intern',
    company: 'Razorpay', location: 'Remote',
    type: 'Remote', duration: '4 months',
    description: 'Build scalable payment infrastructure used by 10M+ businesses. Work on microservices architecture with Go and React.',
    requirements: ['Go', 'React', 'PostgreSQL', 'Docker'],
    stipend: '₹60,000/month', deadline: '2026-05-20',
    postedBy: 'u1', postedDate: '2026-04-08',
    applicants: [],
    status: 'open'
  },
  {
    id: 'i4', title: 'Mobile Developer Intern',
    company: 'Spotify', location: 'Stockholm, Sweden',
    type: 'Hybrid', duration: '3 months',
    description: 'Work on the Spotify mobile experience used by 600M+ users. Flutter/Kotlin experience preferred.',
    requirements: ['Flutter', 'Kotlin', 'REST APIs', 'CI/CD'],
    stipend: '€2,800/month', deadline: '2026-07-01',
    postedBy: 'u6', postedDate: '2026-04-12',
    applicants: ['u6'],
    status: 'open'
  },
  {
    id: 'i5', title: 'Blockchain Developer Intern',
    company: 'Polygon Labs', location: 'Remote',
    type: 'Remote', duration: '3 months',
    description: 'Build core infrastructure for Polygon\'s L2 scaling solutions. Deep Solidity and EVM knowledge required.',
    requirements: ['Solidity', 'Ethereum', 'Node.js', 'Testing'],
    stipend: '$4,000/month', deadline: '2026-06-01',
    postedBy: 'u8', postedDate: '2026-04-10',
    applicants: ['u8', 'u3'],
    status: 'open'
  }
];

// ============================================
// Store Class
// ============================================
class Store {
  constructor() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.users = parsed.users || seedUsers;
        this.hackathons = parsed.hackathons || seedHackathons;
        this.teams = parsed.teams || seedTeams;
        this.internships = parsed.internships || seedInternships;
        this.currentUserId = parsed.currentUserId || null;
      } catch {
        this._seedAll();
      }
    } else {
      this._seedAll();
    }
    this._listeners = [];
  }

  _seedAll() {
    this.users = [...seedUsers];
    this.hackathons = [...seedHackathons];
    this.teams = [...seedTeams];
    this.internships = [...seedInternships];
    this.currentUserId = null;
    this._save();
  }

  _save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      users: this.users,
      hackathons: this.hackathons,
      teams: this.teams,
      internships: this.internships,
      currentUserId: this.currentUserId
    }));
    this._notify();
  }

  subscribe(fn) {
    this._listeners.push(fn);
    return () => { this._listeners = this._listeners.filter(l => l !== fn); };
  }

  _notify() {
    this._listeners.forEach(fn => fn());
  }

  // Auth
  login(email, password) {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) { this.currentUserId = user.id; this._save(); return user; }
    return null;
  }

  signup(data) {
    const exists = this.users.find(u => u.email === data.email);
    if (exists) return null;
    const id = 'u' + Date.now();
    const user = {
      id, ...data,
      avatar: data.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2),
      skills: data.skills || [],
      joinedDate: new Date().toISOString().split('T')[0],
      hackathonsCount: 0, teamCount: 0
    };
    this.users.push(user);
    this.currentUserId = user.id;
    this._save();
    return user;
  }

  logout() { this.currentUserId = null; this._save(); }
  getCurrentUser() { return this.users.find(u => u.id === this.currentUserId) || null; }
  getUser(id) { return this.users.find(u => u.id === id) || null; }

  updateProfile(data) {
    const idx = this.users.findIndex(u => u.id === this.currentUserId);
    if (idx > -1) {
      this.users[idx] = { ...this.users[idx], ...data };
      this._save();
      return this.users[idx];
    }
    return null;
  }

  // Hackathons
  getHackathons() { return this.hackathons; }
  getHackathon(id) { return this.hackathons.find(h => h.id === id); }

  addHackathon(data) {
    const hack = {
      id: 'h' + Date.now(),
      ...data,
      registeredTeams: 0,
      postedBy: this.currentUserId,
      status: 'upcoming'
    };
    this.hackathons.unshift(hack);
    this._save();
    return hack;
  }

  // Teams
  getTeams() { return this.teams; }
  getTeam(id) { return this.teams.find(t => t.id === id); }
  
  getTeamsForHackathon(hackathonId) {
    return this.teams.filter(t => t.hackathonId === hackathonId);
  }

  createTeam(data) {
    const team = {
      id: 't' + Date.now(),
      ...data,
      leaderId: this.currentUserId,
      members: [this.currentUserId],
      applications: [],
      status: 'recruiting'
    };
    this.teams.unshift(team);
    this._save();
    return team;
  }

  applyToTeam(teamId, message) {
    const team = this.teams.find(t => t.id === teamId);
    if (!team) return null;
    const alreadyApplied = team.applications.find(a => a.userId === this.currentUserId);
    if (alreadyApplied) return null;
    const isMember = team.members.includes(this.currentUserId);
    if (isMember) return null;
    team.applications.push({
      userId: this.currentUserId,
      message,
      status: 'pending',
      date: new Date().toISOString().split('T')[0]
    });
    this._save();
    return team;
  }

  handleApplication(teamId, userId, accept) {
    const team = this.teams.find(t => t.id === teamId);
    if (!team || team.leaderId !== this.currentUserId) return null;
    const app = team.applications.find(a => a.userId === userId);
    if (!app) return null;
    app.status = accept ? 'accepted' : 'rejected';
    if (accept) {
      team.members.push(userId);
      if (team.members.length >= team.maxSize) team.status = 'full';
    }
    this._save();
    return team;
  }

  // Internships
  getInternships() { return this.internships; }
  getInternship(id) { return this.internships.find(i => i.id === id); }

  addInternship(data) {
    const intern = {
      id: 'i' + Date.now(),
      ...data,
      postedBy: this.currentUserId,
      postedDate: new Date().toISOString().split('T')[0],
      applicants: [],
      status: 'open'
    };
    this.internships.unshift(intern);
    this._save();
    return intern;
  }

  applyToInternship(internshipId) {
    const intern = this.internships.find(i => i.id === internshipId);
    if (!intern) return null;
    if (intern.applicants.includes(this.currentUserId)) return null;
    intern.applicants.push(this.currentUserId);
    this._save();
    return intern;
  }

  // Search / Filter
  searchUsers(query, filters = {}) {
    let results = [...this.users];
    if (query) {
      const q = query.toLowerCase();
      results = results.filter(u =>
        u.name.toLowerCase().includes(q) ||
        u.skills.some(s => s.toLowerCase().includes(q)) ||
        u.college.toLowerCase().includes(q)
      );
    }
    if (filters.college) results = results.filter(u => u.college === filters.college);
    if (filters.department) results = results.filter(u => u.department === filters.department);
    if (filters.country) results = results.filter(u => u.country === filters.country);
    if (filters.skill) results = results.filter(u => u.skills.some(s => s.toLowerCase().includes(filters.skill.toLowerCase())));
    return results;
  }

  getUniqueColleges() { return [...new Set(this.users.map(u => u.college))]; }
  getUniqueDepartments() { return [...new Set(this.users.map(u => u.department))]; }
  getUniqueCountries() { return [...new Set(this.users.map(u => u.country))]; }

  resetData() {
    this._seedAll();
  }
}

const store = new Store();
export default store;
