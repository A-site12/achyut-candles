// src/pages/Energizing.js

import React from 'react';

const Energizing = () => {
  return (
    <div style={{ padding: '4rem 2rem', backgroundColor: '#fffaf4' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
        Energizing Fragrances
      </h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {/* Left Image & Description */}
        <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
          <img
            src="/images/moods/energizing.jpg"
            alt="Energizing Mood"
            style={{ width: '100%', borderRadius: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
          />
          <p style={{ marginTop: '1rem', fontSize: '1.1rem', color: '#444' }}>
            Refresh your senses with candles that spark motivation and vitality. Perfect for mornings or mid-day boosts.
          </p>
        </div>

        {/* Right Grid Mood Layout */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <img src="/images/moods/citrus.jpg" alt="Citrus" style={{ width: '100%', borderRadius: '12px' }} />
            <img src="/images/moods/mint.jpg" alt="Mint" style={{ width: '100%', borderRadius: '12px' }} />
            <img src="/images/moods/lemon.jpg" alt="Lemon" style={{ width: '100%', borderRadius: '12px' }} />
            <img src="/images/moods/orange.jpg" alt="Orange" style={{ width: '100%', borderRadius: '12px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Energizing;
