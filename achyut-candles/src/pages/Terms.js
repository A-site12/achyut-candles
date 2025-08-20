import React from 'react';

const Terms = () => {
  return (
    <div>
      {/* Inline CSS styles */}
      <style>{`
        .terms-container {
          display: flex;
          justify-content: center;
          padding: 40px 20px;
          background-color: #fefefe;
        }

        .terms-content {
          max-width: 800px;
          width: 100%;
          background: #ffffff;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .terms-content h1 {
          font-size: 32px;
          margin-bottom: 20px;
          text-align: center;
          color: #222;
        }

        .terms-content h2 {
          font-size: 22px;
          margin-top: 25px;
          color: #444;
        }

        .terms-content p {
          font-size: 16px;
          line-height: 1.6;
          margin-top: 10px;
          color: #555;
        }
      `}</style>

      {/* Page Content */}
      <div className="terms-container">
        <div className="terms-content">
          <h1>Terms & Conditions</h1>

          <p>Welcome to Achyut Candles. By using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.</p>

          <h2>1. General</h2>
          <p>This website is owned and operated by Achyut Candles. Throughout the site, the terms “we”, “us” and “our” refer to Achyut Candles.</p>

          <h2>2. Products & Pricing</h2>
          <p>All products listed are subject to availability. We reserve the right to change prices and product details at any time without prior notice.</p>

          <h2>3. Orders & Payments</h2>
          <p>Once an order is placed, you will receive an email confirmation. Payments must be made in full before order processing.</p>

          <h2>4. Shipping & Delivery</h2>
          <p>We aim to ship orders within 2–5 business days. Delivery times may vary based on location and external factors.</p>

          <h2>5. Returns & Refunds</h2>
          <p>Returns are accepted within 7 days of delivery if the product is damaged or incorrect. Refunds will be processed within 5–7 business days.</p>

          <h2>6. Intellectual Property</h2>
          <p>All content, including images, text, and graphics, are the property of Achyut Candles and may not be used without permission.</p>

          <h2>7. Changes to Terms</h2>
          <p>We reserve the right to update these terms at any time. Changes will be posted on this page.</p>

          <h2>8. Contact</h2>
          <p>If you have any questions about these Terms, please contact us at support@achyutcandles.com.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
