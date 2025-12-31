import React from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay, RotateCw, ShieldCheck, Laptop } from 'lucide-react';

const features = [
    {
        icon: <RotateCw size={32} />,
        title: "تدوير 180 درجة",
        desc: "رأس قابل للتدوير يمنحك راحة تامة أثناء استخدام الجوال، سواء للعب أو التصفح.",
        image: "/product/img2.jpg"
    },
    {
        icon: <MonitorPlay size={32} />,
        title: "حامل جوال مدمج",
        desc: "حول الكيبل إلى ستاند للجوال وشاهد مسلسلاتك المفضلة وأنت تشحن في نفس الوقت.",
        image: "/product/img3.jpg"
    },
    {
        icon: <Laptop size={32} />,
        title: "شحن بقوة 240 واط",
        desc: "ليس مجرد كيبل جوال. يدعم شحن أجهزة اللابتوب والماك بوك بأقصى سرعة.",
        image: "/product/img5.jpg"
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "متانة لا تضاهى",
        desc: "مصنوع من سبائك الزنك والنايلون المقاوم للقطع. مصمم ليعيش معك طويلاً.",
        image: "/product/img4.jpg"
    }
];

const Features = () => {
    return (
        <section id="features" className="py-24 bg-zinc-900/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">لماذا هذا الكيبل؟</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        جمعنا لك كل ما تحتاجه في كيبل واحد. تصميم مبتكر يحل مشاكل الكيابل التقليدية.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-black border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-colors"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                            </div>
                            <div className="p-6 relative z-10">
                                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
