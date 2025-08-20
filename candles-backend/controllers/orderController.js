const db = require('../config/db');
const logger = require('../utils/logger');

// Create new order
exports.createOrder = (req, res) => {
  const { userId, items, totalPrice, shippingInfo } = req.body;

  const orderSql = 'INSERT INTO orders (user_id, total_price, shipping_info) VALUES (?, ?, ?)';
  db.query(orderSql, [userId, totalPrice, JSON.stringify(shippingInfo)], (err, result) => {
    if (err) {
      logger.error(`Create order error: ${err.message}`);
      return res.status(500).json({ error: 'Failed to create order' });
    }

    const orderId = result.insertId;

    const orderItemsSql = 'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ?';
    const values = items.map(item => [orderId, item.productId, item.quantity, item.price]);

    db.query(orderItemsSql, [values], (err2) => {
      if (err2) {
        logger.error(`Order items insert error: ${err2.message}`);
        return res.status(500).json({ error: 'Failed to add order items' });
      }

      logger.info(`Order created: ID ${orderId} by user ${userId}`);
      res.status(201).json({ message: 'Order placed successfully', orderId });
    });
  });
};

// Get all orders (admin only)
exports.getAllOrders = (req, res) => {
  const sql = `
    SELECT o.id AS orderId, o.user_id, o.total_price, o.created_at, o.shipping_info,
           oi.product_id, oi.quantity, oi.price
    FROM orders o
    JOIN order_items oi ON o.id = oi.order_id
    ORDER BY o.created_at DESC
  `;

  db.query(sql, (err, results) => {
    if (err) {
      logger.error(`Get all orders error: ${err.message}`);
      return res.status(500).json({ error: 'Failed to fetch orders' });
    }

    const orders = {};

    results.forEach(row => {
      if (!orders[row.orderId]) {
        orders[row.orderId] = {
          orderId: row.orderId,
          userId: row.user_id,
          totalPrice: row.total_price,
          createdAt: row.created_at,
          shippingInfo: JSON.parse(row.shipping_info),
          items: [],
        };
      }
      orders[row.orderId].items.push({
        productId: row.product_id,
        quantity: row.quantity,
        price: row.price,
      });
    });

    res.status(200).json(Object.values(orders));
  });
};

// Get orders for logged-in user
exports.getMyOrders = (req, res) => {
  const userId = req.user.id;

  const sql = `
    SELECT o.id AS orderId, o.total_price, o.created_at, o.shipping_info,
           oi.product_id, oi.quantity, oi.price
    FROM orders o
    JOIN order_items oi ON o.id = oi.order_id
    WHERE o.user_id = ?
    ORDER BY o.created_at DESC
  `;

  db.query(sql, [userId], (err, results) => {
    if (err) {
      logger.error(`Get user orders error: ${err.message}`);
      return res.status(500).json({ error: 'Failed to fetch your orders' });
    }

    const orders = {};

    results.forEach(row => {
      if (!orders[row.orderId]) {
        orders[row.orderId] = {
          orderId: row.orderId,
          totalPrice: row.total_price,
          createdAt: row.created_at,
          shippingInfo: JSON.parse(row.shipping_info),
          items: [],
        };
      }
      orders[row.orderId].items.push({
        productId: row.product_id,
        quantity: row.quantity,
        price: row.price,
      });
    });

    res.status(200).json(Object.values(orders));
  });
};
