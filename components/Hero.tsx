import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-950/90 via-primary-950/80 to-primary-900/40 z-10" />
        <div className="absolute inset-0 bg-black/30 z-10 mix-blend-multiply" />
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
          alt="Modern Construction Skyscraper"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 pt-24 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl mb-8"
          >
            <CheckCircle2 size={18} className="text-emerald-400" />
            <span className="font-bold tracking-wide">نلتزم بأعلى معايير الجودة العالمية</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 drop-shadow-2xl"
          >
            نبني المستقبل <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-200">
               بأسس راسخة
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl text-blue-50 mb-12 max-w-2xl leading-relaxed font-medium drop-shadow-md"
          >
            نحول الرؤى المعمارية إلى واقع ملموس، بدقة متناهية وشغف لا يتوقف. شريكك الموثوق في المشاريع الكبرى.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-bold text-xl transition-all duration-300 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] border-4 border-primary-500/30 hover:border-primary-400 hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.6)] transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span>تواصل معنا الآن</span>
              <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-white/70 text-sm font-bold tracking-[0.2em] uppercase">اكتشف المزيد</span>
        <div className="w-[2px] h-16 bg-gradient-to-b from-primary-400 to-transparent opacity-60 rounded-full" />
      </motion.div>
    </section>
  );
};

export default Hero;