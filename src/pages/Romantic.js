import React, { useEffect, useState } from 'react';

const Romantic = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 100); // Trigger animation
  }, []);

  return (
    <div
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#fffaf4',
        opacity: showContent ? 1 : 0,
        transform: showContent ? 'translateY(0)' : 'translateY(50px)',
        transition: 'all 0.6s ease',
      }}
    >
      <h1
        style={{
          fontSize: '2.5rem',
          marginBottom: '2rem',
          textAlign: 'center',
        }}
      >
        Romantic Fragrances
      </h1>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
        }}
      >
        {/* Left Image & Description */}
        <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
          <img
            src="/images/moods/romantic.jpg"
            alt="Romantic Mood"
            style={{
              width: '100%',
              borderRadius: '20px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
          <p style={{ marginTop: '1rem', fontSize: '1.1rem', color: '#444' }}>
            Experience love in the air with our romantic candle blends—designed to create a mood of connection, warmth, and magic.
          </p>
        </div>

        {/* Right Mood-Based Grid */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
            }}
          >
            {/* Clickable Grid Images */}
            {[
              { name: 'Rose', img: '/images/moods/Dipped heart candle .jpg', link: '/shop?fragrance=rose' },
              { name: 'Champagne', img: '/images/moods/champagne.jpg', link: '/shop?fragrance=champagne' },
              { name: 'Vanilla', img: '/images/moods/vanilla.jpg', link: '/shop?fragrance=vanilla' },
              { name: 'Jasmine', img: '/images/moods/jasmine.jpg', link: '/shop?fragrance=jasmine' },
            ].map((item, index) => (
              <a href={item.link} key={index}>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: '100%',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Romantic;
