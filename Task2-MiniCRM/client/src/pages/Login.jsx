import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { KeyRound, Mail, AlertCircle } from 'lucide-react';
import './Login.css'; // We'll create a specific CSS bit for the login centering

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    if (!email || !password) {
      setError('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    const result = await login(email, password);
    
    if (result.success) {
      navigate('/');
    } else {
      setError(result.message);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="logo-container">
            <KeyRound size={32} color="var(--primary)" />
          </div>
          <h1>Admin Portal</h1>
          <p>Sign in to manage your CRM leads</p>
        </div>

        {error && (
          <div className="error-banner">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="input-with-icon">
              <Mail className="input-icon" size={18} />
              <input 
                type="email" 
                className="form-input" 
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-with-icon">
              <KeyRound className="input-icon" size={18} />
              <input 
                type="password" 
                className="form-input" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="btn-primary login-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
