import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                {/* Logo */}
                <div className="text-2xl font-bold tracking-tighter text-white">
                    <span className="text-blue-500">Apex</span> 240
                </div>


                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <a href="#features" className="hover:text-blue-400 transition-colors">المميزات</a>
                    <a href="#details" className="hover:text-blue-400 transition-colors">التفاصيل</a>
                    <a href="#reviews" className="hover:text-blue-400 transition-colors">آراء العملاء</a>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <a href="#buy" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-bold transition-transform hover:scale-105 flex items-center gap-2">
                        <span>اطلب الآن</span>
                        <ShoppingBag size={18} />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4 text-center">
                            <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white py-2">المميزات</a>
                            <a href="#details" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white py-2">التفاصيل</a>
                            <a href="#buy" onClick={() => setIsMobileMenuOpen(false)} className="bg-blue-600 text-white py-3 rounded-lg font-bold">اطلب الآن</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
