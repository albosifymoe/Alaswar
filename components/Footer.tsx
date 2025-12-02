
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-950 text-secondary-400 py-16 border-t border-secondary-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-1.5 bg-white rounded-xl border border-primary-800/50">
                <img src="/logo.png" alt="شعار الأسوار العالية" className="w-10 h-10 object-contain" />
              </div>
              <span className="text-xl font-bold text-white">شركة الأسوار العالية</span>
            </div>
            <p className="max-w-md text-sm leading-relaxed mb-8">
              رائدة في مجال المقاولات العامة والبناء، نسعى دائماً لتقديم أفضل الحلول الهندسية والعمرانية التي تلبي تطلعات عملائنا وتسهم في نهضة المجتمع.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-900 border border-secondary-800 flex items-center justify-center hover:bg-primary-600 hover:text-white hover:border-primary-500 transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-900 border border-secondary-800 flex items-center justify-center hover:bg-primary-600 hover:text-white hover:border-primary-500 transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-900 border border-secondary-800 flex items-center justify-center hover:bg-primary-600 hover:text-white hover:border-primary-500 transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-900 border border-secondary-800 flex items-center justify-center hover:bg-primary-600 hover:text-white hover:border-primary-500 transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-primary-500 transition-colors">الرئيسية</a></li>
              <li><a href="#values" className="hover:text-primary-500 transition-colors">عن الشركة</a></li>
              <li><a href="#projects" className="hover:text-primary-500 transition-colors">مشاريعنا</a></li>
              <li><a href="#contact" className="hover:text-primary-500 transition-colors">اطلب عرض سعر</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6">الشركة</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary-500 transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">الشروط والأحكام</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">وظائف</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 شركة الأسوار العالية للمقاولات العامة. جميع الحقوق محفوظة.</p>
          <p>تم التصميم والتطوير بأعلى معايير الجودة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
