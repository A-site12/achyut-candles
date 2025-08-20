// src/pages/AdminDashboard.jsx
import React from 'react';
import AddProductForm from '../components/AddProductForm'; // Make sure this path is correct

const AdminDashboard = () => {
  const token = localStorage.getItem('token'); // Adjust based on how you're storing the token

  return (
    <div style={{ padding: '2rem', fontFamily: "'Poppins', sans-serif" }}>
      <h1 style={{ color: '#9c6b2f' }}>Admin Dashboard</h1>
      <p>Welcome, Admin! This page is protected.</p>

      <AddProductForm token={token} />
    </div>
  );
};

export default AdminDashboard;
