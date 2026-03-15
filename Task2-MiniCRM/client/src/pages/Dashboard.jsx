import React, { useState, useEffect } from 'react';
import { Users, UserPlus, PhoneCall, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import MetricCard from '../components/MetricCard';
import './Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await api.get('/dashboard/stats');
        setStats(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load dashboard statistics.');
        setLoading(false);
      }
    };
    
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <div className="error-banner">{error}</div>;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p>Welcome back! Here's what's happening with your leads today.</p>
      </div>

      <div className="metrics-grid">
        <MetricCard 
          title="Total Leads" 
          value={stats.metrics.total} 
          icon={Users} 
          colorClass="primary" 
        />
        <MetricCard 
          title="New Leads" 
          value={stats.metrics.new} 
          icon={UserPlus} 
          colorClass="info" 
        />
        <MetricCard 
          title="Contacted" 
          value={stats.metrics.contacted} 
          icon={PhoneCall} 
          colorClass="warning" 
        />
        <MetricCard 
          title="Converted" 
          value={stats.metrics.converted} 
          icon={CheckCircle} 
          colorClass="success" 
        />
      </div>

      <div className="dashboard-recent">
        <div className="section-header">
          <h2>Recent Leads</h2>
          <Link to="/leads" className="view-all-link">View All Leads</Link>
        </div>
        
        <div className="card">
          <div className="table-responsive">
            <table className="leads-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Source</th>
                  <th>Status</th>
                  <th>Date Added</th>
                </tr>
              </thead>
              <tbody>
                {stats.recentLeads.length > 0 ? (
                  stats.recentLeads.map((lead) => (
                    <tr key={lead._id}>
                      <td className="font-medium">{lead.fullName}</td>
                      <td>{lead.companyName || '-'}</td>
                      <td>{lead.source}</td>
                      <td>
                        <span className={`badge badge-${lead.status.toLowerCase()}`}>
                          {lead.status}
                        </span>
                      </td>
                      <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-muted">No recent leads found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
