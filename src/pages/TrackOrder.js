import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TrackOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [error, setError] = useState('');

  const handleTrack = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.warning('Please login to track your order.', {
        position: 'top-center',
        autoClose: 3000,
      });
      return;
    }

    if (!orderId.trim()) {
      setError('Please enter a valid Order ID');
      return;
    }

    setError('');
    toast.success('✅ Your order is on the way and will be delivered soon!', {
      position: 'top-center',
      autoClose: 3000,
    });
  };

  const containerStyle = {
    maxWidth: '500px',
    margin: '5rem auto',
    padding: '2rem',
    borderRadius: '10px',
    background: 'linear-gradient(145deg, #fdfdfd, #f0f0f0)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    textAlign: 'center',
    fontFamily: "'Segoe UI', sans-serif",
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#333',
  };

  const paragraphStyle = {
    color: '#666',
    marginBottom: '1.5rem',
  };

  const formStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '1rem',
    flexWrap: 'wrap',
  };

  const inputStyle = {
    padding: '0.7rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '60%',
    fontSize: '1rem',
    minWidth: '200px',
  };

  const buttonStyle = {
    padding: '0.7rem 1.2rem',
    backgroundColor: '#f0c13f',
    border: 'none',
    borderRadius: '5px',
    color: '#222',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const errorStyle = {
    color: 'red',
    fontWeight: 500,
    marginTop: '0.5rem',
  };

  return (
    <>
      <ToastContainer />
      <div style={containerStyle}>
        <h2 style={headingStyle}>Track Your Order</h2>
        <p style={paragraphStyle}>Enter your Order ID to check the order status.</p>
        <div style={formStyle}>
          <input
            type="text"
            placeholder="Enter Order ID"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            style={inputStyle}
          />
          <button
            onClick={handleTrack}
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#e6b731')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#f0c13f')}
          >
            Track
          </button>
        </div>
        {error && <p style={errorStyle}>{error}</p>}
      </div>
    </>
  );
};

export default TrackOrder;
