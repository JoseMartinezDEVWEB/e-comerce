import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * @component Hero
 * @description Sección de bienvenida con animaciones de entrada premium.
 */
const Hero = () => {
    return (
        <section className="relative h-[80vh] flex items-center overflow-hidden bg-white">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="w-full h-full bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center"
                />
            </div>

            <div className="container mx-auto px-6 relative z-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl"
                >
                    <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Nueva Colección 2026</span>
                    <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
                        Elegancia en <br />
                        <span className="text-primary">Cada Detalle</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Descubre nuestra selección exclusiva de prendas diseñadas para destacar.
                        Minimalismo, calidad y estilo unidos en una sola colección.
                    </p>
                    <div className="flex gap-4">
                        <Link to="/catalogo" className="btn-primary flex items-center gap-2 group">
                            Explorar Catálogo
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/acerca" className="px-6 py-3 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                            Conócenos
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
