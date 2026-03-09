// Configuración principal del servidor
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Importación de rutas
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const configRoutes = require('./routes/configRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares globales
app.use(cors());
app.use(express.json());

// Definición de rutas de la API
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/config', configRoutes);

/**
 * @function handleRoot
 * @description Ruta de prueba para verificar el estado de la API.
 */
app.get('/', (req, res) => {
    res.json({ mensaje: 'API del E-commerce v1.0 - Lista para procesar' });
});

/**
 * @function startServer
 * @description Inicia la escucha del servidor en el puerto configurado.
 */
app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
