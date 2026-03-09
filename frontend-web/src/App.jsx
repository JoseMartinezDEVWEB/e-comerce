import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useConfigStore } from './store/useConfigStore';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './pages/Catalog';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';
import AIAgent from './pages/AIAgent';

// Componente Home consolidado
const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="w-full"
  >
    <Hero />
    {/* Otras secciones irán aquí */}
  </motion.div>
);

const App = () => {
  const { fetchConfig } = useConfigStore();

  useEffect(() => {
    fetchConfig();
  }, [fetchConfig]);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/orientacion" element={<AIAgent />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;
