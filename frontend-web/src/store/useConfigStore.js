import { create } from 'zustand';
import axios from 'axios';

/**
 * @store useConfigStore
 * @description Estado global para la configuración dinámica de la aplicación (colores, logo, etc).
 */
export const useConfigStore = create((set) => ({
    config: {
        primaryColor: '#000000',
        secondaryColor: '#ffffff',
        logoUrl: null,
        bannerUrl: null,
        animationType: 'fade',
    },
    loading: false,

    /**
     * @function fetchConfig
     * @description Obtiene la configuración desde la API y actualiza las variables CSS.
     */
    fetchConfig: async () => {
        set({ loading: true });
        try {
            const response = await axios.get('http://localhost:4000/api/config');
            const newConfig = response.data;
            set({ config: newConfig, loading: false });

            // Aplicar colores dinámicos al root
            document.documentElement.style.setProperty('--primary-color', newConfig.primaryColor);
            document.documentElement.style.setProperty('--secondary-color', newConfig.secondaryColor);
        } catch (error) {
            console.error('Error cargando configuración:', error);
            set({ loading: false });
        }
    },
}));
