import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';

/**
 * @component ProductCard
 * @description Tarjeta de producto individual con animaciones de hover y diseño minimalista.
 */
const ProductCard = ({ product }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            className="card group cursor-pointer"
        >
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-primary hover:bg-primary hover:text-white">
                    <ShoppingCart size={20} />
                </button>
            </div>

            <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">{product.name}</h3>
                    <span className="font-bold text-lg">${product.price}</span>
                </div>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.description}</p>

                <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < 4 ? "currentColor" : "none"} />
                    ))}
                    <span className="text-xs text-gray-400 ml-1">(42)</span>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
