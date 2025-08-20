import React from 'react';

const Policy = () => {
  return (
    <div style={{ padding: '3rem 1.5rem', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif', color: '#333' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Privacy Policy & Terms</h1>

      {/* Privacy Policy */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Privacy Policy</h2>
        <p style={{ marginBottom: '1rem' }}>
          At Achyut Candles, we value your privacy. We collect personal data such as name, email, address, and phone number only to process orders and improve customer service. We do not sell or share your information with third parties.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          All payment transactions are handled securely. We use SSL encryption and do not store sensitive card details.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          By using our website, you consent to our privacy policy and the collection of your data as described above.
        </p>
      </section>

      {/* Terms & Conditions */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Terms & Conditions</h2>
        <ul style={{ paddingLeft: '1rem', lineHeight: '1.6' }}>
          <li>All prices are listed in INR and include applicable taxes unless otherwise stated.</li>
          <li>Products are subject to availability and may be withdrawn at any time.</li>
          <li>Once an order is placed, it cannot be canceled if it has already been processed or shipped.</li>
          <li>Returns are accepted only for damaged or defective items reported within 48 hours of delivery.</li>
          <li>Users are responsible for entering correct shipping information. We are not responsible for delays caused by incorrect address entries.</li>
          <li>We reserve the right to modify these terms at any time.</li>
        </ul>
      </section>

      <section>
        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem' }}>Contact Us</h3>
        <p>If you have questions about our privacy policy or terms, please email us at <strong>support@achyutcandles.com</strong>.</p>
      </section>
    </div>
  );
};

export default Policy;
