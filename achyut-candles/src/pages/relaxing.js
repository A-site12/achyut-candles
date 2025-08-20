import React from 'react';
import { useNavigate } from 'react-router-dom';

const moodCandles = [
  { title: 'Calm & Relax', img: '/images/moods/relaxing.jpg' },
  { title: 'Energize', img: '/images/moods/energizing.jpg' },
  { title: 'Romantic Vibes', img: '/images/moods/romantic.jpg' },
  { title: 'Focus & Clarity', img: '/images/moods/focus.jpg' }
];

const Relaxing = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', padding: '4rem 2rem', backgroundColor: '#fffaf4' }}>
      {/* Left Content */}
      <div style={{ flex: '1', minWidth: '320px', paddingRight: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'serif' }}>
          Calm & Relaxing Candles
        </h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem', color: '#444' }}>
          Buy scented candles online in India that soothe your soul.
          Our aromatherapy candles are crafted for pure relaxation using eco-friendly ingredients
          that care for you and the Earth.
        </p>
        <button
          onClick={() => navigate('/shop')}
          style={{
            padding: '0.8rem 2rem',
            backgroundColor: '#222',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
            borderRadius: '5px',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#444')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#222')}
        >
          Shop Now
        </button>
      </div>

      {/* Right Mood Layout */}
      <div style={{ flex: '1', minWidth: '320px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {moodCandles.map((mood, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              height: '200px',
              backgroundImage: `url(${mood.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'flex-end',
              color: '#fff',
              padding: '1rem',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              backgroundBlendMode: 'darken',
              backgroundColor: 'rgba(0, 0, 0, 0.3)'
            }}
          >
            {mood.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Relaxing;
