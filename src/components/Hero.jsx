import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Zap, Shield, Smartphone } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black z-0" />
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-right order-2 md:order-1"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1 mb-6"
                    >
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm text-gray-300">الأكثر مبيعاً في المملكة</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400 mb-6 leading-tight">
                        اشحن، العب، <br />
                        <span className="text-blue-500">واستمتع.</span>
                    </h1>

                    <p className="text-lg text-gray-400 mb-8 max-w-lg mr-auto leading-relaxed">
                        الكيبل الذكي 3 في 1 بقوة 240 واط. تصميم قابل للطي 180 درجة ليمنحك حرية كاملة أثناء استخدام هاتفك. وداعاً للكيابل المتقطعة.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-end">
                        <a href="#buy" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-900/50 hover:shadow-blue-600/50 hover:-translate-y-1">
                            احصل عليه الآن
                        </a>
                        <a href="#features" className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full font-medium border border-white/10 backdrop-blur-sm transition-all">
                            اكتشف المميزات
                        </a>
                    </div>

                    <div className="mt-12 flex gap-8 justify-end border-t border-white/10 pt-8">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">240W</div>
                            <div className="text-xs text-gray-500">طاقة قصوى</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">480Mbps</div>
                            <div className="text-xs text-gray-500">نقل بيانات</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">180°</div>
                            <div className="text-xs text-gray-500">دوران</div>
                        </div>
                    </div>
                </motion.div>

                {/* Image/Visual */}
                {/* Image/Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative order-1 md:order-2 flex justify-center"
                >
                    {/* Glow behind video */}
                    <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full z-0" />

                    {/* Phone Frame Mockup */}
                    <div className="relative z-10 w-[280px] md:w-[320px] aspect-[9/19] bg-black border-4 border-gray-800 rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
                        {/* Notch/Island (Optional) */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl z-20"></div>

                        <video
                            src="/product/demo.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Floating Cards */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="absolute bottom-10 -right-10 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-2xl z-20 flex items-center gap-3 shadow-xl"
                    >
                        <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                            <Zap size={24} />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-white">حرية في الحركة</div>
                            <div className="text-xs text-gray-400">تصميم مبتكر</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <ChevronDown className="text-gray-500" />
            </div>
        </section>
    );
};

export default Hero;
