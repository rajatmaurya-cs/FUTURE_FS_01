import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Bell, Search, LogOut, Menu } from 'lucide-react';
import './Header.css';

const Header = () => {
  const { admin, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="header-left">
        <button className="mobile-menu-btn d-md-none">
          <Menu size={24} />
        </button>
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search leads, contacts, etc..." />
        </div>
      </div>
      
      <div className="header-right">
        <button className="icon-btn">
          <Bell size={20} />
          <span className="notification-badge"></span>
        </button>
        
        <div className="user-profile">
          <div className="avatar">
            {admin?.email?.charAt(0).toUpperCase() || 'A'}
          </div>
          <div className="user-info">
            <span className="user-name">Admin User</span>
            <span className="user-role">{admin?.email}</span>
          </div>
          <button onClick={logout} className="logout-btn" title="Logout">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
