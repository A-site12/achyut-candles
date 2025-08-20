// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../config/db'); // already promise-based pool
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

// POST /api/orders — Place order (authenticated users)
router.post('/', verifyToken, async (req, res) => {
  const { cartItems, address, phone, totalAmount, payment_status } = req.body;

  if (!cartItems || !address || !phone || !totalAmount || !payment_status) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const connection = await db.getConnection();

  try {
    await connection.beginTransaction();

    const [orderResult] = await connection.query(
      'INSERT INTO orders (user_id, address, phone, total_amount, payment_status) VALUES (?, ?, ?, ?, ?)',
      [req.user.id, address, phone, totalAmount, payment_status]
    );

    const orderId = orderResult.insertId;

    for (const item of cartItems) {
      await connection.query(
        'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)',
        [orderId, item.id, item.quantity, item.price]
      );
    }

    await connection.commit();
    res.status(201).json({ message: 'Order placed successfully', orderId });
  } catch (err) {
    await connection.rollback();
    console.error('Order placement failed:', err);
    res.status(500).json({ error: 'Failed to place order' });
  } finally {
    connection.release();
  }
});

// GET /api/orders/my-orders — Get user orders
router.get('/my-orders', verifyToken, async (req, res) => {
  try {
    const [orders] = await db.query(
      `
      SELECT o.id, o.created_at, o.payment_status,
             oi.quantity, oi.price,
             p.name AS product_name, p.image AS product_image
      FROM orders o
      JOIN order_items oi ON o.id = oi.order_id
      JOIN products p ON oi.product_id = p.id
      WHERE o.user_id = ?
      ORDER BY o.created_at DESC
      `,
      [req.user.id]
    );

    const grouped = {};
    orders.forEach(row => {
      if (!grouped[row.id]) {
        grouped[row.id] = {
          id: row.id,
          created_at: row.created_at,
          payment_status: row.payment_status,
          items: [],
        };
      }

      grouped[row.id].items.push({
        product_name: row.product_name,
        product_image: row.product_image,
        quantity: row.quantity,
        price: row.price,
      });
    });

    res.json(Object.values(grouped));
  } catch (err) {
    console.error('Fetching user orders failed:', err);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

// GET /api/orders/admin/all-orders — Admin view
router.get('/admin/all-orders', verifyToken, isAdmin, async (req, res) => {
  try {
    const [orders] = await db.query(`
      SELECT 
        o.id AS order_id,
        o.user_id,
        u.name AS customer_name,
        u.email,
        o.created_at,
        o.payment_status,
        oi.quantity,
        oi.price,
        p.name AS product_name,
        p.image AS product_image
      FROM orders o
      JOIN users u ON o.user_id = u.id
      JOIN order_items oi ON o.id = oi.order_id
      JOIN products p ON oi.product_id = p.id
      ORDER BY o.created_at DESC
    `);

    const grouped = {};
    orders.forEach(row => {
      if (!grouped[row.order_id]) {
        grouped[row.order_id] = {
          id: row.order_id,
          user_id: row.user_id,
          customer_name: row.customer_name,
          email: row.email,
          created_at: row.created_at,
          payment_status: row.payment_status,
          items: [],
        };
      }

      grouped[row.order_id].items.push({
        product_name: row.product_name,
        product_image: row.product_image,
        quantity: row.quantity,
        price: row.price,
      });
    });

    res.json(Object.values(grouped));
  } catch (err) {
    console.error('Admin all orders fetch failed:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
