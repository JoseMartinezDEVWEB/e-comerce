const { PrismaClient } = require('@prisma/client');

let prisma;

try {
    prisma = new PrismaClient({
        log: ['error'],
    });
} catch (error) {
    console.error('Error al inicializar Prisma Client:', error.message);
}

/**
 * @module PrismaClient
 * @description Exporta una instancia de PrismaClient con manejo básico de errores de inicialización.
 */
module.exports = prisma;
