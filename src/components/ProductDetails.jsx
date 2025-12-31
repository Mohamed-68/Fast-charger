import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, AlertCircle } from 'lucide-react';

const ProductDetails = () => {
    return (
        <section id="details" className="py-24 bg-black relative">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-900/10 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Specs & Honest Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">كل التفاصيل بوضوح (بدون تسويق زائف)</h2>

                        <div className="space-y-8">
                            <div className="bg-zinc-900 rounded-2xl p-6 border-r-4 border-blue-500">
                                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                    <AlertCircle size={20} className="text-blue-500" />
                                    سرعة الشحن (240 واط)
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    الكيبل يدعم حتى 240 واط (PD 3.1)، وهذا يعني أنه قادر على شحن أقوى لابتوبات جيمنج وماك بوك برو بسرعة كاملة.
                                    <br />
                                    <span className="text-yellow-500 text-xs mt-2 block">
                                        * ملاحظة: للحصول على السرعة القصوى، يجب أن يكون الشاحن (الرأس) وجهازك داعمين لهذه السرعة.
                                    </span>
                                </p>
                            </div>

                            <div className="bg-zinc-900 rounded-2xl p-6 border-r-4 border-gray-500">
                                <h3 className="text-xl font-bold text-white mb-3">نقل البيانات</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    سرعة النقل هي 480Mbps (USB 2.0).
                                    <br />
                                    هذا الكيبل ممتاز لنقل الصور والملفات العادية، لكنه
                                    <span className="font-bold text-white"> ليس مخصصاً </span>
                                    لنقل ملفات الفيديو الضخمة بسرعة البرق أو لتوصيل شاشات خارجية 4K. نحن صريحون معك.
                                </p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-xl font-bold text-white mb-4">التوافق</h3>
                            <div className="grid grid-cols-2 gap-4 text-gray-400 text-sm">
                                <div className="flex items-center gap-2">
                                    <Check size={16} className="text-green-500" /> Apple iPhone 15/16 Series
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check size={16} className="text-green-500" /> MacBook Air / Pro
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check size={16} className="text-green-500" /> iPad Pro / Air (Type-C)
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check size={16} className="text-green-500" /> Samsung Galaxy S Series
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check size={16} className="text-green-500" /> Laptop & Tablets with USB-C
                                </div>
                                <div className="flex items-center gap-2">
                                    <X size={16} className="text-red-500" /> iPhone 14 وما قبل (Lightning)
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Technical Specs Table */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/50 rounded-3xl p-8 border border-white/5"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">المواصفات التقنية</h3>

                        <div className="space-y-4">
                            <div className="flex justify-between py-4 border-b border-white/5">
                                <span className="text-gray-400">الطول</span>
                                <span className="font-mono text-white">1.5  متر</span>
                            </div>
                            <div className="flex justify-between py-4 border-b border-white/5">
                                <span className="text-gray-400">القوة القصوى</span>
                                <span className="font-mono text-blue-400">240W (48V/5A)</span>
                            </div>
                            <div className="flex justify-between py-4 border-b border-white/5">
                                <span className="text-gray-400">المواد</span>
                                <span className="text-white">سبائك الزنك + نايلون مضفر</span>
                            </div>
                            <div className="flex justify-between py-4 border-b border-white/5">
                                <span className="text-gray-400">الواجهة</span>
                                <span className="text-white" dir="ltr">USB-C to USB-C</span>
                            </div>
                            <div className="flex justify-between py-4 border-b border-white/5">
                                <span className="text-gray-400">المميزات الخاصة</span>
                                <span className="text-white">رأس دوار 180° + مؤشر LED</span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <a href="#buy" className="block w-full bg-white text-black text-center py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors">
                                اطلب الآن
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
