const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env'
});

const logger = require('./utils/logger');
const errorHandler = require('./middleware/errorHandler');

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

// ** TRUST PROXY FIX FOR EXPRESS-RATE-LIMIT **
app.set('trust proxy', 1);

const PORT = process.env.PORT || 3001;

// === SECURITY MIDDLEWARES ===

// Helmet with secure CSP setup
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'https://cdn.jsdelivr.net'],
      styleSrc: ["'self'", 'https://fonts.googleapis.com', 'https://cdn.jsdelivr.net'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      imgSrc: ["'self'", 'data:', 'blob:'],
      connectSrc: ["'self'", process.env.CLIENT_ORIGIN || 'http://localhost:3000'],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  },
  crossOriginEmbedderPolicy: false,
}));

// Prevent XSS attacks
app.use(xss());

// JSON request parsing
app.use(express.json());

// Rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: '⚠️ Too many requests from this IP, please try again later.',
});
app.use(limiter);

// Enable CORS for frontend
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
  credentials: true,
}));

// Enforce HTTPS in production
app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production' && req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  next();
});

// === ROUTES ===
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// === HEALTH CHECK ===
app.get('/', (req, res) => {
  res.send('✅ Secure Express + MySQL backend is running.');
});

// === 404 HANDLER ===
app.use((req, res, next) => {
  res.status(404).json({ error: '🔍 API endpoint not found' });
});

// === ERROR HANDLER ===
app.use(errorHandler);

// === START SERVER ===
logger.info(`🌐 Environment: ${process.env.NODE_ENV}`);
app.listen(PORT, () => {
  logger.info(`🚀 Secure server running at http://localhost:${PORT}`);
});
