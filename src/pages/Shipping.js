import React from 'react';

const Shipping = () => {
  return (
    <div style={{ padding: '3rem 1.5rem', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif', color: '#333' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Shipping Policy</h1>

      {/* Delivery Timeline */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Delivery Timeline</h2>
        <p>
          We aim to dispatch all orders within <strong>1–3 business days</strong>. Once shipped, delivery typically takes:
        </p>
        <ul style={{ paddingLeft: '1rem', lineHeight: '1.6' }}>
          <li><strong>Metro Cities:</strong> 2–4 business days</li>
          <li><strong>Other Cities:</strong> 4–7 business days</li>
          <li><strong>Remote/Rural Areas:</strong> 7–10 business days</li>
        </ul>
      </section>

      {/* Shipping Charges */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Shipping Charges</h2>
        <ul style={{ paddingLeft: '1rem', lineHeight: '1.6' }}>
          <li><strong>Orders above ₹999:</strong> Free Shipping</li>
          <li><strong>Orders below ₹999:</strong> Flat ₹60 shipping fee</li>
        </ul>
      </section>

      {/* Service Areas */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Delivery Locations</h2>
       <p>
  We currently ship across <strong>India</strong>, including metro cities, towns, and rural areas. International shipping is not yet available.
</p>

      </section>

      {/* Delays & Notifications */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Shipping Delays</h2>
        <p>
          While we try to deliver your candles on time, delays may occur due to weather, holidays, or courier partner issues. We’ll notify you via email and WhatsApp in case of any delays.
        </p>
      </section>

      {/* Contact Info */}
      <section>
        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem' }}>Need Help?</h3>
        <p>For shipping-related queries, contact us at <strong>shipping@achyutcandles.in</strong> or WhatsApp us at <strong>+91 8103033730</strong>.</p>
      </section>
    </div>
  );
};

export default Shipping;
