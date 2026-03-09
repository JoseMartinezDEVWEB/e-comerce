const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { authenticateToken, authorizeRoles } = require('../middlewares/authMiddleware');

// Rutas públicas
router.get('/', productController.getProducts);
router.get('/categories', productController.getCategories);

// Rutas protegidas (Admin/Owner)
router.post('/', authenticateToken, authorizeRoles('OWNER', 'ADMIN'), productController.createProduct);
router.post('/categories', authenticateToken, authorizeRoles('OWNER', 'ADMIN'), productController.createCategory);

module.exports = router;
