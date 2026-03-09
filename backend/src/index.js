// Configuración del servidor
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares globales
app.use(cors());
app.use(express.json());

/**
 * @function handleRoot
 * @description Ruta principal para verificar que la API está activa.
 */
app.get('/', (req, res) => {
    res.json({ mensaje: 'API del E-commerce funcionando correctamente' });
});

/**
 * @function startServer
 * @description Inicia el servidor de Express.
 */
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
