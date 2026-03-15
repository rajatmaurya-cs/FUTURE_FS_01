import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, UserPlus, Settings } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <Users color="white" size={24} />
        </div>
        <h2>MiniCRM</h2>
      </div>

      <nav className="sidebar-nav">
        <NavLink 
          to="/" 
          end
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink 
          to="/leads" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          <Users size={20} />
          <span>All Leads</span>
        </NavLink>
        
        <div className="nav-divider"></div>
        
        <div className="nav-item disabled">
          <Settings size={20} />
          <span>Settings</span>
        </div>
      </nav>
      
      <div className="sidebar-footer">
        <p className="version-text">v1.0.0 Pro</p>
      </div>
    </aside>
  );
};

export default Sidebar;
