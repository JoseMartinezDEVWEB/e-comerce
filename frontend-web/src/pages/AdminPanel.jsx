import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useConfigStore } from '../store/useConfigStore';
import { useAuthStore } from '../store/useAuthStore';
import { Save, Palette, Image as ImageIcon, Sparkles } from 'lucide-react';
import axios from 'axios';

/**
 * @component AdminPanel
 * @description Panel de control dinámico para editar la identidad visual de la tienda.
 */
const AdminPanel = () => {
    const { config, fetchConfig } = useConfigStore();
    const { token } = useAuthStore();

    const [form, setForm] = useState({ ...config });
    const [saving, setSaving] = useState(false);
    const [mensaje, setMensaje] = useState(null);

    const handleSave = async () => {
        setSaving(true);
        try {
            await axios.post('http://localhost:4000/api/config', form, {
                headers: { Authorization: `Bearer ${token}` }
            });
            await fetchConfig();
            setMensaje({ type: 'success', text: 'Configuración guardada correctamente' });
        } catch (error) {
            setMensaje({ type: 'error', text: 'Error al guardar la configuración' });
        } finally {
            setSaving(false);
            setTimeout(() => setMensaje(null), 3000);
        }
    };

    return (
        <div className="container mx-auto px-6 py-12 max-w-4xl">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Configuración Dinámica</h1>
                    <p className="text-gray-500">Personaliza la apariencia global de tu ecosistema.</p>
                </div>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="btn-primary flex items-center gap-2"
                >
                    <Save size={18} />
                    {saving ? 'Guardando...' : 'Guardar Cambios'}
                </button>
            </div>

            {mensaje && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg mb-6 ${mensaje.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}
                >
                    {mensaje.text}
                </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Colores */}
                <div className="card p-6">
                    <div className="flex items-center gap-2 mb-4 text-primary font-semibold">
                        <Palette size={20} />
                        <h2>Identidad Visual (Colores)</h2>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Color Primario</label>
                            <div className="flex gap-2">
                                <input
                                    type="color"
                                    value={form.primaryColor}
                                    onChange={(e) => setForm({ ...form, primaryColor: e.target.value })}
                                    className="w-12 h-10 rounded cursor-pointer"
                                />
                                <input
                                    type="text"
                                    value={form.primaryColor}
                                    onChange={(e) => setForm({ ...form, primaryColor: e.target.value })}
                                    className="flex-1 border-gray-200 rounded-lg text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Color Secundario</label>
                            <div className="flex gap-2">
                                <input
                                    type="color"
                                    value={form.secondaryColor}
                                    onChange={(e) => setForm({ ...form, secondaryColor: e.target.value })}
                                    className="w-12 h-10 rounded cursor-pointer"
                                />
                                <input
                                    type="text"
                                    value={form.secondaryColor}
                                    onChange={(e) => setForm({ ...form, secondaryColor: e.target.value })}
                                    className="flex-1 border-gray-200 rounded-lg text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Assets y Animaciones */}
                <div className="card p-6">
                    <div className="flex items-center gap-2 mb-4 text-primary font-semibold">
                        <Sparkles size={20} />
                        <h2>Media y Animaciones</h2>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">URL del Logo</label>
                            <input
                                type="text"
                                value={form.logoUrl || ''}
                                onChange={(e) => setForm({ ...form, logoUrl: e.target.value })}
                                placeholder="https://ejemplo.com/logo.png"
                                className="w-full border-gray-200 rounded-lg text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Animación Global</label>
                            <select
                                value={form.animationType}
                                onChange={(e) => setForm({ ...form, animationType: e.target.value })}
                                className="w-full border-gray-200 rounded-lg text-sm"
                            >
                                <option value="fade">Desvanecimiento (Fade)</option>
                                <option value="slide">Deslizamiento (Slide)</option>
                                <option value="scale">Escalado (Scale)</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
