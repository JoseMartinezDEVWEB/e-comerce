import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, User, Sparkles } from 'lucide-react';

/**
 * @component AIAgent
 * @description Sección de orientación interactiva con un agente de IA para ayudar al usuario en su compra.
 */
const AIAgent = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "¡Hola! Soy tu asistente de moda personal. ¿En qué puedo ayudarte hoy?", sender: 'ai' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Simulación de respuesta de IA
        setTimeout(() => {
            const aiMsg = {
                id: Date.now() + 1,
                text: "Basado en tu estilo, te recomiendo echar un vistazo a nuestra nueva colección de Blazers Elegantes. ¿Te gustaría verlos?",
                sender: 'ai'
            };
            setMessages(prev => [...prev, aiMsg]);
        }, 1000);
    };

    return (
        <div className="container mx-auto px-6 py-12 max-w-4xl">
            <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4">
                    <Bot size={40} />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Orientación Inteligente</h1>
                <p className="text-gray-500 text-lg text-balance">Nuestro Agente de IA está aquí para ayudarte a encontrar el outfit perfecto.</p>
            </div>

            <div className="card h-[600px] flex flex-col bg-slate-50 border-none shadow-2xl">
                {/* Chat Header */}
                <div className="p-4 bg-primary text-white flex items-center gap-3">
                    <Sparkles size={20} />
                    <span className="font-semibold">Chat de Estilo IA</span>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    <AnimatePresence initial={false}>
                        {messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`max-w-[80%] p-4 rounded-2xl flex items-start gap-3 shadow-sm ${msg.sender === 'user'
                                        ? 'bg-primary text-white rounded-tr-none'
                                        : 'bg-white text-gray-800 rounded-tl-none'
                                    }`}>
                                    {msg.sender === 'ai' && <Bot size={18} className="mt-1 flex-shrink-0" />}
                                    <p className="text-sm leading-relaxed">{msg.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Chat Input */}
                <div className="p-4 bg-white border-t border-gray-100">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Pregunta algo como: '¿Qué me recomiendas para una boda?'"
                            className="flex-1 border-gray-200 rounded-xl focus:ring-primary focus:border-primary px-4"
                        />
                        <button
                            onClick={handleSend}
                            className="bg-primary text-white p-3 rounded-xl hover:opacity-90 transition-opacity"
                        >
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIAgent;
