const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/**
 * @route POST /api/auth/register
 * @description Ruta para el registro de nuevos usuarios.
 */
router.post('/register', authController.register);

/**
 * @route POST /api/auth/login
 * @description Ruta para el inicio de sesión.
 */
router.post('/login', authController.login);

module.exports = router;
