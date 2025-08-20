const express = require('express');
const router = express.Router();
const db = require('../config/db');  // Your promise-based pool
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

// === User Signup ===
router.post(
  '/signup',
  [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      const [existing] = await db.query('SELECT id FROM users WHERE email = ?', [email]);
      if (existing.length > 0) {
        return res.status(400).json({ error: 'Email already registered' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      await db.query(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        [username, email, hashedPassword]
      );

      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      console.error('Signup error:', err);
      res.status(500).json({ error: 'Server error during signup' });
    }
  }
);

// === User Login ===
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
      const user = users[0];

      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const role = user.isAdmin === 1 ? 'admin' : 'user';

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          role, // important for authorization
        },
        process.env.JWT_SECRET,
        { expiresIn: '30d' }
      );

      res.json({
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role,
        },
      });
    } catch (err) {
      console.error('Login error:', err);
      res.status(500).json({ error: 'Server error during login' });
    }
  }
);

// === TEMP: Admin Email/Password Update ===
router.put('/admin/update', async (req, res) => {
  const { oldEmail, newEmail, newPassword } = req.body;

  if (!oldEmail || !newEmail || !newPassword) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const [users] = await db.query('SELECT * FROM users WHERE email = ?', [oldEmail]);
    const admin = users[0];

    if (!admin || admin.isAdmin !== 1) {
      return res.status(404).json({ error: 'Admin user not found' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await db.query(
      'UPDATE users SET email = ?, password = ? WHERE id = ?',
      [newEmail, hashedPassword, admin.id]
    );

    res.json({ message: 'Admin credentials updated successfully' });
  } catch (err) {
    console.error('Admin update error:', err);
    res.status(500).json({ error: 'Server error while updating admin' });
  }
});

module.exports = router;
