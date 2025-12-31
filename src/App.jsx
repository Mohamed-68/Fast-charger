import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductDetails from './components/ProductDetails';
import OrderForm from './components/OrderForm';
import SupportForm from './components/SupportForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-blue-500 selection:text-white" dir="rtl">
      <Navbar />
      <Hero />
      <Features />
      <ProductDetails />
      <OrderForm />
      <SupportForm />

      {/* Sticky Bottom CTA for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-lg border-t border-white/10 z-50">
        <a href="#buy" className="block w-full bg-blue-600/90 hover:bg-blue-600 text-white font-bold py-3 rounded-xl text-center shadow-lg shadow-blue-900/40">
          اطلب الآن - 129 ر.س
        </a>
      </div>

      <Footer />
    </div>
  );
}

export default App;
