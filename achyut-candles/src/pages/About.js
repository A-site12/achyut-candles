import React from 'react';

const About = () => {
  return (
    <div
      style={{
        maxWidth: '1000px',
        margin: '4rem auto',
        padding: '2rem',
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: '#fffaf6',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(214, 134, 63, 0.15)',
        color: '#5a3a00',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '2.8rem',
          marginBottom: '2rem',
          color: '#9c6b2f',
          textShadow: '1px 1px 2px #f4c095',
        }}
      >
        About Us
      </h2>

      <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
        Welcome to <strong>Candle Shop</strong> — your destination for artisanal, mood-enhancing candles crafted with love and intention. Each of our creations is a blend of aesthetics and aromatherapy, designed to transform your space into a sanctuary.
      </p>

      <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
        Our journey began with a simple goal: to bring peace, warmth, and joy into every corner of your home. From romantic floral notes to energizing citrus blends, our fragrance collection is carefully curated to suit your every mood and moment.
      </p>

      <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
        All our candles are hand-poured using natural soy wax, premium fragrances, and sustainable packaging. We're proud to be a cruelty-free, eco-conscious brand.
      </p>

      <h3 style={{ fontSize: '1.6rem', marginTop: '2rem', color: '#7a4a05' }}>
        Premium Gifting, Redefined
      </h3>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
        We don’t just make candles — we craft memories. Whether it's a celebration or a quiet moment, our flowers, candles, and custom hampers are designed to make every experience unforgettable.
      </p>
    </div>
  );
};

export default About;
