import React, { useState, useEffect } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import api from '../services/api';
import LeadTable from '../components/LeadTable';
import LeadForm from '../components/LeadForm';
import './LeadsList.css';

const LeadsList = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Search & Filter state
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLead, setEditingLead] = useState(null);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      let query = '/leads?';
      if (searchTerm) query += `search=${searchTerm}&`;
      if (statusFilter) query += `status=${statusFilter}`;
      
      const { data } = await api.get(query);
      setLeads(data);
      setError('');
    } catch (err) {
      setError('Failed to fetch leads');
    } finally {
      setLoading(false);
    }
  };

  // Debounced search effect
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchLeads();
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm, statusFilter]);

  const handleOpenModal = (lead = null) => {
    setEditingLead(lead);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditingLead(null);
    setIsModalOpen(false);
  };

  const handleSaveLead = async (formData) => {
    try {
      if (editingLead) {
        await api.put(`/leads/${editingLead._id}`, formData);
      } else {
        await api.post('/leads', formData);
      }
      handleCloseModal();
      fetchLeads(); // Refresh list
    } catch (err) {
      alert(err.response?.data?.message || 'Error saving lead');
    }
  };

  const handleDeleteLead = async (id) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      try {
        await api.delete(`/leads/${id}`);
        fetchLeads(); // Refresh
      } catch (err) {
        alert('Failed to delete lead');
      }
    }
  };

  return (
    <div className="leads-page">
      <div className="page-header">
        <div>
          <h1>Lead Management</h1>
          <p>View, search, and organize all your clients.</p>
        </div>
        <button onClick={() => handleOpenModal()} className="btn-primary flex-center gap-2">
          <Plus size={18} />
          <span>Add Lead</span>
        </button>
      </div>

      <div className="card leads-container">
        <div className="toolbar">
          <div className="search-group">
            <Search className="search-icon" size={18} />
            <input 
              type="text" 
              placeholder="Search leads by name, email, or company..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="toolbar-input"
            />
          </div>
          
          <div className="filter-group">
            <Filter className="filter-icon" size={18} />
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="toolbar-select"
            >
              <option value="">All Statuses</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Converted">Converted</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>

        {error && <div className="error-banner m-4">{error}</div>}

        {loading ? (
          <div className="leads-loading">
            <div className="spinner"></div>
          </div>
        ) : (
          <LeadTable 
            leads={leads} 
            onEdit={handleOpenModal} 
            onDelete={handleDeleteLead}
          />
        )}
      </div>

      <LeadForm 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onSubmit={handleSaveLead}
        editingLead={editingLead}
      />
    </div>
  );
};

export default LeadsList;
