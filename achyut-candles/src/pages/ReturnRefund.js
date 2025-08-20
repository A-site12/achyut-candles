// src/pages/ReturnRefund.js

import React from 'react';

const ReturnRefund = () => {
  return (
    <div style={{ padding: '4rem 1.5rem', maxWidth: '900px', margin: '0 auto', lineHeight: '1.6' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>Return & Refund Policy</h1>
      
      <p><strong>Last Updated:</strong> July 26, 2025</p>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>Returns</h2>
        <p>
          Due to the fragile nature of our products (especially candles), we only accept returns for items that are:
        </p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li>Received in damaged condition</li>
          <li>Defective or incorrect product delivered</li>
          <li>Reported within <strong>48 hours</strong> of delivery</li>
        </ul>
        <p>
          To request a return, please email us at <a href="mailto:support@yourcandlesite.com">support@yourcandlesite.com</a> with your order number and photo evidence.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>Refunds</h2>
        <p>
          Once we receive your returned item, we will inspect it and notify you via email. If approved:
        </p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li>Refunds will be processed to your original payment method</li>
          <li>It may take 5–7 business days to reflect in your account</li>
        </ul>
        <p>
          Shipping charges are non-refundable unless the issue was due to our error.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>Exchanges</h2>
        <p>
          We only replace items if they are defective or damaged. For exchanges, please contact us within 48 hours of delivery.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>Contact Us</h2>
        <p>
          If you have questions about our return & refund policy, email us at <a href="mailto:support@yourcandlesite.com">support@yourcandlesite.com</a> or WhatsApp us at <strong>+91 8103033730</strong>.
        </p>
      </section>
    </div>
  );
};

export default ReturnRefund;
