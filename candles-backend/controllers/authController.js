const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const logger = require('../utils/logger');

exports.login = (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ?';

  db.query(sql, [email], async (err, results) => {
    if (err) {
      logger.error(`Login DB error: ${err.message}`);
      return res.status(500).json({ error: 'Server error' });
    }

    if (results.length === 0) {
      logger.warn(`Failed login attempt: email not found - ${email}`);
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = results[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      logger.warn(`Failed login attempt: wrong password - ${email}`);
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
    );

    logger.info(`User logged in: ${email} (role: ${user.role})`);
    res.status(200).json({ token });
  });
};
