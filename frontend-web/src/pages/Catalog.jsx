import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { Filter, SlidersHorizontal } from 'lucide-react';

// Datos de ejemplo usando las imágenes generadas anteriormente
const MOCK_PRODUCTS = [
    {
        id: '1',
        name: 'Vestido de Noche Premium',
        description: 'Vestido elegante de alta costura con diseño minimalista y corte moderno.',
        price: 299.99,
        images: ['https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1000'],
        category: 'Elegante'
    },
    {
        id: '2',
        name: 'Conjunto Deportivo Tech',
        description: 'Ropa deportiva de alto rendimiento, transpirable y con estilo urbano.',
        price: 89.50,
        images: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000'],
        category: 'Deportiva'
    },
    {
        id: '3',
        name: 'Chaqueta de Cuero Urban',
        description: 'Chaqueta premium estilo casual, perfecta para cualquier ocasión.',
        price: 150.00,
        images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=1000'],
        category: 'Casual'
    },
    {
        id: '4',
        name: 'Blazer Minimalista',
        description: 'Corte perfecto y materiales de primera calidad.',
        price: 180.00,
        images: ['https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=1000'],
        category: 'Elegante'
    }
];

const Catalog = () => {
    const [filter, setFilter] = useState('Todos');
    const categories = ['Todos', 'Elegante', 'Deportiva', 'Casual'];

    const filteredProducts = filter === 'Todos'
        ? MOCK_PRODUCTS
        : MOCK_PRODUCTS.filter(p => p.category === filter);

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Nuestro Catálogo</h1>
                    <p className="text-gray-500">Explora lo último en moda minimalista.</p>
                </div>

                <div className="flex items-center gap-4 border-b border-gray-100 pb-2 md:border-none">
                    <Filter size={20} className="text-gray-400" />
                    <div className="flex gap-2 overflow-x-auto no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${filter === cat
                                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                <AnimatePresence>
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Catalog;
