import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check token on initial load
  useEffect(() => {
    const checkLoggedIn = () => {
      const token = localStorage.getItem('token');
      const savedAdmin = localStorage.getItem('admin');
      
      if (token && savedAdmin) {
        setAdmin(JSON.parse(savedAdmin));
      }
      setLoading(false);
    };

    checkLoggedIn();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      const { token, ...adminData } = response.data;
      
      localStorage.setItem('token', token);
      localStorage.setItem('admin', JSON.stringify(adminData));
      
      setAdmin(adminData);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Login failed',
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ admin, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
