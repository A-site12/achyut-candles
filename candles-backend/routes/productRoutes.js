const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');

const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

// ✅ Public: Get all products
router.get('/', getAllProducts);

// ✅ Public: Get product by ID
router.get(
  '/:id',
  param('id').isInt().withMessage('Product ID must be a number'),
  getProductById
);

// ✅ Admin: Create a product (no category field required anymore)
router.post(
  '/',
  verifyToken,
  isAdmin,
  [
    body('name').isString().trim().notEmpty().withMessage('Name is required'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
    body('image').optional().isString().trim().isLength({ max: 255 }),
  ],
  createProduct
);

// ✅ Admin: Update product
router.put(
  '/:id',
  verifyToken,
  isAdmin,
  [
    param('id').isInt().withMessage('Product ID must be a number'),
    body('name').optional().isString().trim(),
    body('price').optional().isFloat({ gt: 0 }),
    body('image').optional().isString().trim().isLength({ max: 255 }),
  ],
  updateProduct
);

// ✅ Admin: Delete product
router.delete(
  '/:id',
  verifyToken,
  isAdmin,
  param('id').isInt().withMessage('Product ID must be a number'),
  deleteProduct
);

module.exports = router;
