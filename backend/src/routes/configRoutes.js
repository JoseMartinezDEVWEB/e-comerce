const express = require('express');
const router = express.Router();
const configController = require('../controllers/configController');
const { authenticateToken, authorizeRoles } = require('../middlewares/authMiddleware');

/**
 * @route GET /api/config
 * @description Obtiene la configuración pública de la aplicación.
 */
router.get('/', configController.getAppConfig);

/**
 * @route POST /api/config
 * @description Actualiza la configuración de la aplicación (Solo OWNER y ADMIN).
 */
router.post('/', authenticateToken, authorizeRoles('OWNER', 'ADMIN'), configController.updateAppConfig);

module.exports = router;
