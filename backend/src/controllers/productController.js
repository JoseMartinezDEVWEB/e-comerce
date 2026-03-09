const prisma = require('../utils/prisma');

/**
 * @function getProducts
 * @description Obtiene todos los productos con sus categorías.
 */
exports.getProducts = async (req, res) => {
    try {
        if (!prisma) throw new Error('Prisma no inicializado');
        const products = await prisma.product.findMany({
            include: { category: true }
        });
        res.json(products);
    } catch (error) {
        console.warn('Usando productos de ejemplo (DB no conectada)');
        res.json([
            {
                id: '1',
                name: 'Vestido de Noche Premium',
                description: 'Vestido elegante de alta costura con diseño minimalista y corte moderno.',
                price: 299.99,
                images: ['https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1000'],
                category: { name: 'Elegante' }
            },
            {
                id: '2',
                name: 'Conjunto Deportivo Tech',
                description: 'Ropa deportiva de alto rendimiento, transpirable y con estilo urbano.',
                price: 89.50,
                images: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000'],
                category: { name: 'Deportiva' }
            }
        ]);
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
