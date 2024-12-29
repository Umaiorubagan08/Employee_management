import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./shared/Layout";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import ProjectDashboard from './components/ProjectDashboard';
import Department from "./components/Department";
import Settings from "./components/Settings";
import Support from "./components/Support";
import Logout from "./components/Logout";

// Shared components
import MyAccount from "./shared/MyAccount";
import Favorites from "./shared/Favorites";
import Drive from "./shared/Drive";
import Reports from "./shared/Reports";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="project-dashboard" element={<ProjectDashboard />} />
          <Route path="department" element={<Department />} />
          <Route path="settings" element={<Settings />} />
          <Route path="support" element={<Support />} />
          <Route path="account" element={<MyAccount />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="drive" element={<Drive />} />
          <Route path="reports" element={<Reports />} />
        </Route>
        <Route path="logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
