import React from 'react';
import './MetricCard.css';

const MetricCard = ({ title, value, icon: Icon, colorClass }) => {
  return (
    <div className={`metric-card card ${colorClass}`}>
      <div className="metric-content">
        <h3 className="metric-title">{title}</h3>
        <p className="metric-value">{value}</p>
      </div>
      <div className={`metric-icon-bg ${colorClass}-bg`}>
        <Icon size={24} className={`metric-icon ${colorClass}-text`} />
      </div>
    </div>
  );
};

export default MetricCard;
