// src/pages/Meditation.js

import React from 'react';

const Meditation = () => {
  return (
    <div style={{ padding: '4rem 2rem', backgroundColor: '#fffaf4' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
        Meditation Fragrances
      </h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {/* Left Image & Description */}
        <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
          <img
            src="/images/moods/meditation.jpg"
            alt="Meditation Mood"
            style={{ width: '100%', borderRadius: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
          />
          <p style={{ marginTop: '1rem', fontSize: '1.1rem', color: '#444' }}>
            Create a peaceful atmosphere for your meditation with grounding scents like sandalwood, frankincense, and patchouli.
          </p>
        </div>

        {/* Right Mood Grid */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <img src="/images/moods/sandalwood.jpg" alt="Sandalwood" style={{ width: '100%', borderRadius: '12px' }} />
            <img src="/images/moods/frankincense.jpg" alt="Frankincense" style={{ width: '100%', borderRadius: '12px' }} />
            <img src="/images/moods/lavender.jpg" alt="Lavender" style={{ width: '100%', borderRadius: '12px' }} />
            <img src="/images/moods/patchouli.jpg" alt="Patchouli" style={{ width: '100%', borderRadius: '12px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meditation;
