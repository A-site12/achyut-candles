import React, { useState } from 'react';
import '../pages/MyOrders'; // Optional preload


const modalOverlayStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalBoxStyle = {
  backgroundColor: '#fff',
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  width: '300px',
  maxWidth: '80%',
};

const inputStyle = {
  width: '100%',
  padding: '0.6rem',
  marginBottom: '1rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem',
};

const buttonStyle = {
  width: '100%',
  padding: '0.6rem',
  backgroundColor: '#d6863f',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const cancelButtonStyle = {
  marginTop: '0.8rem',
  width: '100%',
  padding: '0.6rem',
  backgroundColor: '#ccc',
  color: '#333',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

const toggleTextStyle = {
  marginTop: '1rem',
  fontSize: '0.9rem',
  textAlign: 'center',
  color: '#555',
};

const toggleLinkStyle = {
  color: '#d6863f',
  cursor: 'pointer',
  fontWeight: 'bold',
  marginLeft: '4px',
};

const LoginModal = ({ isOpen, onClose, onLogin, onSignup }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const resetForm = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // ✅ Email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Invalid email format.');
      return;
    }

    if (!email || !password) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!isLogin) {
      if (!username.trim()) {
        setError('Username is required.');
        return;
      }
      if (password.length < 6) {
        setError('Password must be at least 6 characters.');
        return;
      }
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
      if (onSignup) onSignup(username, email, password);
    } else {
      if (onLogin) onLogin(email, password);
    }

    resetForm();
    onClose();
  };

  return (
    <div style={modalOverlayStyle} onClick={onClose}>
      <div style={modalBoxStyle} onClick={(e) => e.stopPropagation()}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        {error && (
          <p style={{ color: 'red', fontWeight: 'bold', marginBottom: '1rem' }}>{error}</p>
        )}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={inputStyle}
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={inputStyle}
            />
          )}

          <button type="submit" style={buttonStyle}>
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <button onClick={onClose} style={cancelButtonStyle}>
          Cancel
        </button>

        <p style={toggleTextStyle}>
          {isLogin ? (
            <>
              Don't have an account?
              <span onClick={() => { setIsLogin(false); setError(''); }} style={toggleLinkStyle}>
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?
              <span onClick={() => { setIsLogin(true); setError(''); }} style={toggleLinkStyle}>
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
