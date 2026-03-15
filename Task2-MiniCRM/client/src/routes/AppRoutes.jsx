import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Login from '../pages/Login';
import DashboardLayout from '../layouts/DashboardLayout';

// Placeholder Pages
import Dashboard from '../pages/Dashboard';
import LeadsList from '../pages/LeadsList';
import LeadDetail from '../pages/LeadDetail';

const PrivateRoute = ({ children }) => {
  const { admin, loading } = useContext(AuthContext);
  
  if (loading) return null;
  
  return admin ? children : <Navigate to="/login" replace />;
};

const AppRoutes = () => {
  const { admin } = useContext(AuthContext);

  return (
    <Routes>
      <Route 
        path="/login" 
        element={admin ? <Navigate to="/" replace /> : <Login />} 
      />
      
      <Route
        path="/"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="leads" element={<LeadsList />} />
        <Route path="leads/:id" element={<LeadDetail />} />
      </Route>
      
      {/* Catch all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
