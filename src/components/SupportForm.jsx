import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, CheckCircle } from 'lucide-react';

const SupportForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '', // Phone or Email
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:3000/api/support', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: '', contact: '', message: '' });
            } else {
                alert('حدث خطأ أثناء الإرسال. الرجاء المحاولة مرة أخرى.');
            }
        } catch (error) {
            console.error('Error sending query:', error);
            alert('فشل الاتصال بالخادم. تأكد من تشغيل الخادم.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="support" className="py-16 bg-zinc-900 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white flex items-center justify-center gap-2">
                        <MessageCircle className="text-blue-500" />
                        لديك استفسار؟
                    </h2>
                    <p className="text-gray-400 mb-8">
                        نحن هنا لمساعدتك. اترك رسالتك وسيتم الرد عليك في أقرب وقت.
                    </p>
                </div>

                <div className="max-w-xl mx-auto bg-black border border-white/10 rounded-2xl p-6 md:p-8">
                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                className="space-y-4"
                            >
                                <div>
                                    <label className="block text-sm text-gray-400 mb-1">الاسم</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-zinc-900 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none"
                                        placeholder="اسمك الكريم"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-1">رقم الجوال أو البريد الإلكتروني</label>
                                    <input
                                        type="text"
                                        name="contact"
                                        required
                                        value={formData.contact}
                                        onChange={handleChange}
                                        className="w-full bg-zinc-900 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none"
                                        placeholder="طريقة للتواصل معك"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-1">الرسالة / الاستفسار</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="3"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-zinc-900 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none resize-none"
                                        placeholder="كيف يمكننا مساعدتك؟"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                                >
                                    {isLoading ? 'جاري الإرسال...' : (
                                        <>
                                            <span>إرسال</span>
                                            <Send size={16} />
                                        </>
                                    )}
                                </button>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-8"
                            >
                                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">تم الإرسال!</h3>
                                <p className="text-gray-400 text-sm mb-6">
                                    شكراً لتواصلك معنا. سنقوم بالرد عليك قريباً.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="text-blue-400 hover:text-blue-300 text-sm underline"
                                >
                                    إرسال استفسار آخر
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default SupportForm;
