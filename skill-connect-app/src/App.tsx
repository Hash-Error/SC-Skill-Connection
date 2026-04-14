import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { DashboardFeed } from './pages/DashboardFeed';
import { HackathonExplorer } from './pages/HackathonExplorer';
import { InternshipBoard } from './pages/InternshipBoard';
import { UserProfile } from './pages/UserProfile';
import { SearchDiscovery } from './pages/SearchDiscovery';
import { CreateContentForm } from './pages/CreateContentForm';
import { ScholarFoundry } from './pages/ScholarFoundry';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardFeed />} />
          <Route path="/hackathons" element={<HackathonExplorer />} />
          <Route path="/internships" element={<InternshipBoard />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/discover" element={<SearchDiscovery />} />
          <Route path="/create" element={<CreateContentForm />} />
          <Route path="/scholar" element={<ScholarFoundry />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
