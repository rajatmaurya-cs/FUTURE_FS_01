import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import './LeadForm.css';

const STATUS_OPTIONS = ['New', 'Contacted', 'Qualified', 'Converted', 'Closed'];

const LeadForm = ({ isOpen, onClose, onSubmit, editingLead }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    source: '',
    message: '',
    status: 'New',
  });

  useEffect(() => {
    if (editingLead) {
      setFormData({
        fullName: editingLead.fullName || '',
        email: editingLead.email || '',
        phone: editingLead.phone || '',
        companyName: editingLead.companyName || '',
        source: editingLead.source || '',
        message: editingLead.message || '',
        status: editingLead.status || 'New',
      });
    } else {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        source: '',
        message: '',
        status: 'New',
      });
    }
  }, [editingLead, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content card">
        <div className="modal-header">
          <h2>{editingLead ? 'Edit Lead' : 'Add New Lead'}</h2>
          <button onClick={onClose} className="close-btn">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-body">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                name="fullName"
                className="form-input"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Email *</label>
              <input
                type="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phone *</label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Company</label>
              <input
                type="text"
                name="companyName"
                className="form-input"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Source *</label>
              <input
                type="text"
                name="source"
                className="form-input"
                placeholder="e.g. Website, LinkedIn, Referral"
                value={formData.source}
                onChange={handleChange}
                required
              />
            </div>

            {editingLead && (
              <div className="form-group">
                <label className="form-label">Status</label>
                <select
                  name="status"
                  className="form-select"
                  value={formData.status}
                  onChange={handleChange}
                >
                  {STATUS_OPTIONS.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div className="form-group mt-3">
            <label className="form-label">Initial Message / Notes</label>
            <textarea
              name="message"
              className="form-textarea"
              rows={3}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="modal-footer">
            <button type="button" onClick={onClose} className="btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              {editingLead ? 'Update Lead' : 'Save Lead'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
