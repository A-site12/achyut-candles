// /routes/whatsappBot.js
const express = require('express');
const router = express.Router();

router.post('/webhook', (req, res) => {
  const message = req.body.Body.toLowerCase();
  let responseMessage = '';

  if (message.includes('hi') || message.includes('hello')) {
    responseMessage = 'Hi there! 👋 Welcome to Achyut Candles.\n\nType:\n1. View Products\n2. Track Order\n3. Contact Support';
  } else if (message === '1') {
    responseMessage = '🕯️ View our candles here: https://your-site.com/shop';
  } else if (message === '2') {
    responseMessage = '🧾 Please enter your order ID to track your order.';
  } else if (message === '3') {
    responseMessage = '👨‍💼 Our team will get back to you shortly.';
  } else {
    responseMessage = 'Sorry, I didn’t understand. Please reply with 1, 2, or 3.';
  }

  res.set('Content-Type', 'text/xml');
  res.send(`
    <Response>
      <Message>${responseMessage}</Message>
    </Response>
  `);
});

module.exports = router;
