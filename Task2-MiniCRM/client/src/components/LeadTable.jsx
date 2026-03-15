import React from 'react';
import { Edit2, Eye, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const LeadTable = ({ leads, onEdit, onDelete }) => {
  return (
    <div className="table-responsive">
      <table className="leads-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Source</th>
            <th>Status</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads.length > 0 ? (
            leads.map((lead) => (
              <tr key={lead._id}>
                <td>
                  <div className="font-medium">{lead.fullName}</div>
                  <div className="text-muted" style={{ fontSize: '0.75rem' }}>{lead.companyName || 'No Company'}</div>
                </td>
                <td>{lead.email}</td>
                <td>{lead.source}</td>
                <td>
                  <span className={`badge badge-${lead.status.toLowerCase()}`}>
                    {lead.status}
                  </span>
                </td>
                <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
                <td>
                  <div className="action-buttons">
                    <Link to={`/leads/${lead._id}`} className="action-btn view" title="View Details">
                      <Eye size={16} />
                    </Link>
                    <button onClick={() => onEdit(lead)} className="action-btn edit" title="Edit">
                      <Edit2 size={16} />
                    </button>
                    <button onClick={() => onDelete(lead._id)} className="action-btn delete" title="Delete">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-4 text-muted">
                No leads found matching your criteria.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LeadTable;
