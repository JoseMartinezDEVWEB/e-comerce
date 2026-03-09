import React from 'react';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { useConfigStore } from '../store/useConfigStore';
import { Link } from 'react-router-dom';

/**
 * @component Navbar
 * @description Barra de navegación superior con diseño minimalista inspirado en Amazon pero con estética premium.
 */
const Navbar = () => {
    const { config } = useConfigStore();

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-8">
                <Link to="/" className="text-2xl font-bold tracking-tight text-primary">
                    {config.logoUrl ? (
                        <img src={config.logoUrl} alt="Logo" className="h-8" />
                    ) : (
                        'TIENDA.CODE'
                    )}
                </Link>

                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                    <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
                    <Link to="/catalogo" className="hover:text-primary transition-colors">Catálogo</Link>
                    <Link to="/acerca" className="hover:text-primary transition-colors">Nosotros</Link>
                    <Link to="/orientacion" className="hover:text-primary transition-colors">IA Agent</Link>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
                    <Search size={18} className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Buscar productos..."
                        className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full"
                    />
                </div>

                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                    <ShoppingCart size={22} className="text-gray-700" />
                    <span className="absolute top-0 right-0 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
                </button>

                <Link to="/login" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <User size={22} className="text-gray-700" />
                </Link>

                <button className="md:hidden p-2">
                    <Menu size={24} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
