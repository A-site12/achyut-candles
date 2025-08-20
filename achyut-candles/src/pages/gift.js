import React from 'react';

const giftProducts = [
  { id: 201, name: 'Festive Gift Box', price: 32, image: '/images/festive.jpg' },
  { id: 202, name: 'Mini Candle Set', price: 22, image: '/images/mini-set.jpg' },
  { id: 203, name: 'Heart Candle Gift', price: 28, image: '/images/heart.jpg' }
];

const Gift = () => {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#fffaf6' }}>
      <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '1.5rem', color: '#5c4033' }}>
        Gift Candles
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {giftProducts.map(product => (
          <div key={product.id} style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} />
            <h3 style={{ margin: '0.8rem 0 0.4rem' }}>{product.name}</h3>
            <p style={{ fontWeight: '600', color: '#9c6b2f' }}>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gift;
