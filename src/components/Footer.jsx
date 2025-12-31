import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-zinc-950 py-12 border-t border-white/5">
            <div className="container mx-auto px-4 text-center md:text-right">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="text-2xl font-bold text-white mb-4">
                            <span className="text-blue-500">Apex</span> 240
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            شاحن واحد يغنيك عن الكثرة. جودة، سرعة، وضمان.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">روابط سريعة</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-blue-500">الرئيسية</a></li>
                            <li><a href="#features" className="hover:text-blue-500">المميزات</a></li>
                            <li><a href="#details" className="hover:text-blue-500">المواصفات</a></li>
                            <li><a href="#" className="hover:text-blue-500">سياسة الضمان</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">تواصل معنا</h4>
                        <p className="text-gray-400 text-sm mb-2">هل لديك استفسار؟</p>
                        <a href="mailto:support@apex240.sa" className="text-blue-500 hover:text-blue-400">support@apex240.sa</a>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/5 text-center text-xs text-gray-500">
                    © {new Date().getFullYear()} Apex 240. جميع الحقوق محفوظة.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
