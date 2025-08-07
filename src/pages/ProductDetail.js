// src/pages/ProductDetail.js

import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  return (
    <div style={{ padding: '3rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Main Layout */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {/* Image */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <img
            src="/images/products/rose.jpg"
            alt="Heart Bouquet Candle"
            style={{ width: '100%', borderRadius: '16px' }}
          />
        </div>

        {/* Product Info */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Heart Bouquet Candle</h1>
          <p style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Rs. 449.00</p>
          <p style={{ fontSize: '0.9rem', color: '#888' }}>Taxes included. Shipping calculated at checkout.</p>

          {/* Offers */}
          <div style={{ backgroundColor: '#fff6f0', padding: '1rem', borderRadius: '12px', margin: '1rem 0' }}>
            <p><strong>Get 10% OFF on your first purchase!</strong></p>
            <code style={{ background: '#eee', padding: '0.2rem 0.4rem', borderRadius: '6px' }}>FLORIYNEW</code>
            <p style={{ marginTop: '0.5rem' }}>🎁 On ₹1800+: <strong>Free Candle</strong> (Use: <code>FCGLOW</code>)</p>
            <p>🎁 On ₹2500+: <strong>Free Wax Sachet</strong> (Use: <code>FCGIFT25</code>)</p>
            <p>🎁 On ₹5000+: <strong>Gift Box + Surprise</strong> (Use: <code>FCDELIGHT</code>)</p>
          </div>

          {/* Variants */}
          <div style={{ margin: '1rem 0' }}>
            <label><strong>Color:</strong></label>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <button style={{ padding: '0.4rem 1rem', border: '1px solid #ccc', borderRadius: '6px' }}>Red</button>
              <button style={{ padding: '0.4rem 1rem', border: '1px solid #ccc', borderRadius: '6px' }}>Pink</button>
            </div>
          </div>

          <div style={{ margin: '1rem 0' }}>
            <label><strong>Fragrance:</strong></label>
            <div style={{ marginTop: '0.5rem' }}>Whispers of Rose</div>
          </div>

          {/* Quantity */}
          <div style={{ margin: '1rem 0' }}>
            <label><strong>Quantity:</strong></label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
              <button onClick={handleDecrease}><FaMinus /></button>
              <span>{quantity}</span>
              <button onClick={handleIncrease}><FaPlus /></button>
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '1rem', margin: '1.5rem 0' }}>
            <button
              style={{
                backgroundColor: '#222',
                color: 'white',
                padding: '0.75rem 2rem',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Add to Cart
            </button>
            <button
              style={{
                backgroundColor: '#ff8fa3',
                color: '#fff',
                padding: '0.75rem 2rem',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Buy it now
            </button>
          </div>

          {/* Features */}
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', color: '#555' }}>
            <li>✔️ Vegan</li>
            <li>✔️ Trusted Quality</li>
            <li>✔️ Hand Poured</li>
            <li>✔️ Made in India</li>
          </ul>
        </div>
      </div>

      {/* Description */}
      <div style={{ marginTop: '3rem', fontSize: '1rem', lineHeight: '1.8', color: '#333' }}>
        <h3>Ideal For</h3>
        <p>A beautiful addition to any space, designed to fill your surroundings with love and warmth.</p>
        <p>This stunning candle features an elegant bouquet of red roses. Height: 12 cm. Weight: 205 grams.</p>
      </div>
    </div>
  );
};

export default ProductDetail;
