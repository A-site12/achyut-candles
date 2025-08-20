const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

// ✅ Middleware to verify token and attach user info to req
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log('🔐 Incoming Authorization header:', authHeader); // <-- added for debugging

  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token missing' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = decoded; // { id, email, role }
    next();
  });
};

// ✅ Middleware to allow only admin users
const isAdmin = (req, res, next) => {
  console.log('🛡️ Checking admin status:', req.user);

  if (req.user && req.user.role === 'admin') {
    return next();
  }

  console.log('⛔ Access denied - not admin:', req.user);
  return res.status(403).json({ error: 'Admins only' });
};

module.exports = { verifyToken, isAdmin };
