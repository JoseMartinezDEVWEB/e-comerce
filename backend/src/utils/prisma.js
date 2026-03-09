const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * @module PrismaClient
 * @description Exporta una instancia única de PrismaClient para ser usada en toda la aplicación.
 */
module.exports = prisma;
