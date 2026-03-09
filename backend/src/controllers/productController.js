const prisma = require('../utils/prisma');

/**
 * @function getProducts
 * @description Obtiene todos los productos con sus categorías.
 */
exports.getProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            include: { category: true }
        });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener productos', detalles: error.message });
    }
};

/**
 * @function createProduct
 * @description Crea un nuevo producto (Solo OWNER/ADMIN).
 */
exports.createProduct = async (req, res) => {
    try {
        const { name, description, price, stock, images, categoryId, sku } = req.body;
        const product = await prisma.product.create({
            data: { name, description, price, stock, images, categoryId, sku }
        });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear producto', detalles: error.message });
    }
};

/**
 * @function getCategories
 * @description Obtiene todas las categorías disponibles.
 */
exports.getCategories = async (req, res) => {
    try {
        const categories = await prisma.category.findMany();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener categorías', detalles: error.message });
    }
};

/**
 * @function createCategory
 * @description Crea una nueva categoría (Solo OWNER/ADMIN).
 */
exports.createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        const category = await prisma.category.create({
            data: { name, description }
        });
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear categoría', detalles: error.message });
    }
};
