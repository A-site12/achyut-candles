import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = ({ token }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('decor');
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:3001/api/products',
        { name, price, image, category },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setMessage(`✅ Product "${res.data.name}" added in "${res.data.category}"!`);
      setName('');
      setPrice('');
      setImage('');
      setCategory('decor');
    } catch (err) {
      console.error(err);
      setMessage('❌ Failed to add product');
    }
  };

  return (
    <div style={{
      maxWidth: 500,
      margin: '2rem auto',
      padding: '2rem',
      backgroundColor: '#fffaf6',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Add New Product</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
        />
        <input
          type="text"
          placeholder="Image Path (e.g., /images/lavender.jpg)"
          value={image}
          onChange={e => setImage(e.target.value)}
          style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
        />
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          style={{ width: '100%', marginBottom: '15px', padding: '10px' }}
        >
          <option value="decor">Decor</option>
          <option value="gift">Gift</option>
        </select>
        <button
          type="submit"
          style={{
            padding: '12px 20px',
            backgroundColor: '#9c6b2f',
            color: '#fff',
            border: 'none',
            width: '100%',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Add Product
        </button>
      </form>
      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
    </div>
  );
};

export default AddProductForm;
