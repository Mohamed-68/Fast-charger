import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, CheckCircle, Phone, User, ShoppingBag, Banknote } from 'lucide-react';

const OrderForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: ''
    });
    const [quantity, setQuantity] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const price = 150;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:3000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, quantity, total: price * quantity }),
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                alert('حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى.');
            }
        } catch (error) {
            console.error('Error placing order:', error);
            alert('فشل الاتصال بالخادم. يرجى التأكد من الاتصال بالإنترنت.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleQuantityChange = (type) => {
        if (type === 'inc') setQuantity(prev => prev + 1);
        if (type === 'dec' && quantity > 1) setQuantity(prev => prev - 1);
    };

    return (
        <section id="buy" className="py-24 bg-gradient-to-t from-blue-900/10 to-black relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto bg-black border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">

                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                            >
                                <div className="text-center mb-10">
                                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">اطلب نسختك الآن</h2>
                                    <p className="text-gray-400">
                                        أدخل معلوماتك وسنقوم بتوصيل المنتج لباب منزلك.
                                    </p>

                                    <div className="flex items-center justify-center gap-2 mt-4 text-green-400 bg-green-900/20 py-2 px-4 rounded-full w-fit mx-auto border border-green-500/20">
                                        <Banknote size={20} />
                                        <span className="font-bold">الدفع عند الاستلام (COD)</span>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">الاسم الأول</label>
                                            <div className="relative">
                                                <User className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    required
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    className="w-full bg-zinc-900 border border-white/10 rounded-xl py-3 pr-12 pl-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                                                    placeholder="مثال: محمد"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">اسم العائلة</label>
                                            <div className="relative">
                                                <User className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    required
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    className="w-full bg-zinc-900 border border-white/10 rounded-xl py-3 pr-12 pl-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                                                    placeholder="مثال: العتيبي"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">رقم الجوال</label>
                                        <div className="relative">
                                            <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                dir="ltr"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full bg-zinc-900 border border-white/10 rounded-xl py-3 pr-12 pl-4 text-white text-right focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                                                placeholder="05xxxxxxxx"
                                            />
                                        </div>
                                        <p className="text-xs text-gray-500">سيتم استخدام هذا الرقم لتأكيد الطلب.</p>
                                    </div>

                                    {/* Quantity Selector */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">الكمية</label>
                                        <div className="flex items-center gap-4 bg-zinc-900 w-fit p-1 rounded-xl border border-white/10">
                                            <button
                                                type="button"
                                                onClick={() => handleQuantityChange('dec')}
                                                className="w-10 h-10 flex items-center justify-center bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition"
                                            >
                                                -
                                            </button>
                                            <span className="w-8 text-center font-bold text-xl">{quantity}</span>
                                            <button
                                                type="button"
                                                onClick={() => handleQuantityChange('inc')}
                                                className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    {/* Order Summary Box */}
                                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 mt-6">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-300">المنتج</span>
                                            <span className="text-white font-medium">Apex 240 Charge Cable (x{quantity})</span>
                                        </div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-300">الشحن والتوصيل</span>
                                            <span className="text-green-400">مجاناً</span>
                                        </div>
                                        <div className="border-t border-white/10 my-2 pt-2 flex justify-between items-center">
                                            <span className="text-white font-bold">الإجمالي</span>
                                            <motion.span
                                                key={quantity}
                                                initial={{ scale: 1.2, color: '#3b82f6' }}
                                                animate={{ scale: 1, color: '#60a5fa' }}
                                                className="text-xl font-bold font-mono text-blue-400"
                                            >
                                                {price * quantity} ر.س
                                            </motion.span>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/50 hover:shadow-blue-600/50 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                    >
                                        {isLoading ? (
                                            <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                <span>إتمام الطلب الآن - {price * quantity} ر.س</span>
                                                <ShoppingBag size={20} />
                                            </>
                                        )}
                                    </button>

                                    <div className="flex items-center justify-center gap-4 text-xs text-gray-500 text-center">
                                        <span className="flex items-center gap-1"><Truck size={14} /> توصيل سريع</span>
                                        <span className="flex items-center gap-1"><CheckCircle size={14} /> ضمان ذهبي</span>
                                    </div>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-900/50">
                                    <CheckCircle size={48} className="text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">تم استلام طلبك بنجاح!</h3>
                                <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto leading-relaxed">
                                    شكراً لك {formData.firstName}.
                                    <br />
                                    سيقوم فريق خدمة العملاء بالتواصل معك قريباً جداً على الرقم <span dir="ltr" className="text-blue-400 font-mono">{formData.phone}</span> لتأكيد العنوان وموعد التوصيل.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="text-gray-500 hover:text-white underline underline-offset-4"
                                >
                                    العودة للصفحة الرئيسية
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </section>
    );
};

export default OrderForm;
