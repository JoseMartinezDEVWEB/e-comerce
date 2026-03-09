import { create } from 'zustand';
import axios from 'axios';

/**
 * @store useAuthStore
 * @description Gestión del estado de autenticación y roles de usuario.
 */
export const useAuthStore = create((set) => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),

    login: async (email, password) => {
        try {
            const response = await axios.post('http://localhost:4000/api/auth/login', { email, password });
            const { token, user } = response.data;

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            set({ token, user, isAuthenticated: true });
            return { success: true };
        } catch (error) {
            return { success: false, error: error.response?.data?.error || 'Error al iniciar sesión' };
        }
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        set({ token: null, user: null, isAuthenticated: false });
    }
}));
