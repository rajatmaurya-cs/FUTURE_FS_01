import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Building2, Phone, Mail, Globe, Clock, User, MessageSquare } from 'lucide-react';
import api from '../services/api';
import './LeadDetail.css';

const LeadDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lead, setLead] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [newNote, setNewNote] = useState('');
  const [savingNote, setSavingNote] = useState(false);

  useEffect(() => {
    fetchLeadDetails();
  }, [id]);

  const fetchLeadDetails = async () => {
    try {
      const { data } = await api.get(`/leads/${id}`);
      setLead(data);
      setError('');
    } catch (err) {
      setError('Lead not found or error loading details');
    } finally {
      setLoading(false);
    }
  };

  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    try {
      setSavingNote(true);
      const { data } = await api.post(`/leads/${id}/notes`, { text: newNote });
      setLead(data); // update lead with new notes array
      setNewNote('');
    } catch (err) {
      alert('Failed to add note');
    } finally {
      setSavingNote(false);
    }
  };

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    try {
      const { data } = await api.put(`/leads/${id}`, { status: newStatus });
      setLead(data);
    } catch (err) {
      alert('Failed to change status');
    }
  };

  if (loading) {
    return (
      <div className="lead-detail-loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error || !lead) {
    return (
      <div className="error-banner">
        {error}
        <button onClick={() => navigate('/leads')} className="btn-secondary ml-3">Go Back</button>
      </div>
    );
  }

  return (
    <div className="lead-detail-page">
      <div className="detail-header">
        <Link to="/leads" className="back-link">
          <ArrowLeft size={16} />
          <span>Back to Leads</span>
        </Link>
        <div className="header-actions">
          <select 
            className="status-dropdown" 
            value={lead.status}
            onChange={handleStatusChange}
          >
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Qualified">Qualified</option>
            <option value="Converted">Converted</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
      </div>

      <div className="detail-grid">
        {/* Left Column: Info */}
        <div className="info-column card">
          <div className="profile-header">
            <div className="profile-avatar">
              {lead.fullName.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="profile-name">{lead.fullName}</h2>
              <span className={`badge badge-${lead.status.toLowerCase()} mt-1`}>
                {lead.status}
              </span>
            </div>
          </div>

          <div className="info-section">
            <h3>Contact Information</h3>
            <div className="info-item">
              <Mail size={16} className="info-icon" />
              <a href={`mailto:${lead.email}`}>{lead.email}</a>
            </div>
            <div className="info-item">
              <Phone size={16} className="info-icon" />
              <a href={`tel:${lead.phone}`}>{lead.phone}</a>
            </div>
          </div>

          <div className="info-section">
            <h3>Company Details</h3>
            <div className="info-item">
              <Building2 size={16} className="info-icon" />
              <span>{lead.companyName || 'Not Provided'}</span>
            </div>
            <div className="info-item">
              <Globe size={16} className="info-icon" />
              <span>Source: {lead.source}</span>
            </div>
          </div>

          <div className="info-section">
            <h3>Initial Message</h3>
            <div className="message-box">
              {lead.message || 'No initial message provided.'}
            </div>
          </div>
          
          <div className="info-section bottom-meta">
            <div className="meta-item">
              <User size={14} /> Added: {new Date(lead.createdAt).toLocaleString()}
            </div>
            <div className="meta-item">
              <Clock size={14} /> Updated: {new Date(lead.updatedAt).toLocaleString()}
            </div>
          </div>
        </div>

        {/* Right Column: Notes Timeline */}
        <div className="notes-column card">
          <div className="notes-header">
            <h3>Activity & Notes</h3>
          </div>

          <div className="notes-list">
            {lead.notes && lead.notes.length > 0 ? (
              lead.notes.map((note, index) => (
                <div key={note._id || index} className="note-card">
                  <div className="note-icon">
                    <MessageSquare size={14} />
                  </div>
                  <div className="note-content">
                    <div className="note-meta">
                      <span className="note-author">Admin</span>
                      <span className="note-time">
                        {new Date(note.createdAt).toLocaleString()}
                      </span>
                    </div>
                    <div className="note-text">{note.text}</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-notes">
                <p>No notes or activity recorded yet.</p>
              </div>
            )}
          </div>

          <form onSubmit={handleAddNote} className="add-note-form">
            <textarea
              placeholder="Add a new follow-up note..."
              className="note-input"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              rows="3"
            ></textarea>
            <div className="form-actions">
              <button 
                type="submit" 
                className="btn-primary"
                disabled={savingNote || !newNote.trim()}
              >
                {savingNote ? 'Saving...' : 'Add Note'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeadDetail;
