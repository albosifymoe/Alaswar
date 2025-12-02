
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'قيمنا', href: '#values' },
    { name: 'أعمالنا', href: '#projects' },
    { name: 'آلية العمل', href: '#process' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Offset considering the floating navbar height + top spacing
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-4 md:top-6 left-0 right-0 mx-auto w-[92%] max-w-7xl z-50 transition-all duration-300 rounded-full border border-white/40 shadow-2xl backdrop-blur-lg ${
           scrolled ? 'bg-white/90 shadow-secondary-900/10' : 'bg-white/80'
        }`}
      >
        <div className="px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleScroll(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="p-1.5 rounded-full bg-white transition-transform duration-300 group-hover:scale-105 border-2 border-primary-100 shadow-lg shadow-primary-900/10">
               <img src="/logo.png" alt="شعار الأسوار العالية" className="w-10 h-10 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold leading-none tracking-tight text-primary-900">
                الأسوار العالية
              </span>
              <span className="text-xs font-bold tracking-wide text-secondary-500">
                للمقاولات العامة
              </span>
            </div>
          </a>

          {/* Desktop Menu - Direct implementation without inner box */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="px-4 py-2 rounded-full text-sm font-bold text-secondary-600 hover:text-primary-700 hover:bg-secondary-100 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-lg transform hover:-translate-y-0.5 bg-primary-900 text-white hover:bg-primary-800 border-2 border-primary-700 hover:shadow-primary-900/30"
            >
              <Phone size={18} />
              <span>اتصل بنا</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-full bg-secondary-100 text-secondary-900 hover:bg-secondary-200 transition-colors border border-secondary-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-24 left-4 right-4 z-40 bg-white/95 backdrop-blur-xl rounded-3xl border border-white/40 shadow-2xl overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-lg font-bold text-secondary-800 hover:text-primary-600 hover:bg-secondary-50 transition-all px-4 py-3 rounded-xl flex justify-between items-center group"
                >
                  <span>{link.name}</span>
                  <span className="w-2 h-2 rounded-full bg-secondary-200 group-hover:bg-primary-500 transition-colors" />
                </a>
              ))}
              <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="mt-4 w-full text-center py-4 rounded-xl font-bold bg-primary-900 text-white shadow-lg shadow-primary-900/20"
                >
                  اتصل بنا
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
