import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
       {/* Decorative Gradient Blob */}
       <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary-50/50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-600 font-bold tracking-wider text-sm uppercase mb-4 block px-4 py-1.5 rounded-full bg-primary-50 w-fit">
              تواصل معنا
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-secondary-900 mb-8 leading-tight">
              هل لديك مشروع <br />
              <span className="text-primary-700">تريد تنفيذه؟</span>
            </h2>
            <p className="text-secondary-500 text-lg mb-12 leading-relaxed">
              نحن هنا للاستماع إليك وتحويل أفكارك إلى واقع. تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مبدئي لمشروعك.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-primary-50 shadow-lg shadow-primary-900/5 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300">
                  <Phone size={26} />
                </div>
                <div>
                  <p className="text-sm text-secondary-400 font-bold mb-1">اتصل بنا</p>
                  <p className="text-xl font-bold text-secondary-900 dir-ltr text-right group-hover:text-primary-700 transition-colors">+218 91 000 0000</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-primary-50 shadow-lg shadow-primary-900/5 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300">
                  <Mail size={26} />
                </div>
                <div>
                  <p className="text-sm text-secondary-400 font-bold mb-1">البريد الإلكتروني</p>
                  <p className="text-xl font-bold text-secondary-900 group-hover:text-primary-700 transition-colors">info@alaswar.ly</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-primary-50 shadow-lg shadow-primary-900/5 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300">
                  <MapPin size={26} />
                </div>
                <div>
                  <p className="text-sm text-secondary-400 font-bold mb-1">مقرنا الرئيسي</p>
                  <p className="text-xl font-bold text-secondary-900 group-hover:text-primary-700 transition-colors">زاوية الدهماني، طرابلس - ليبيا</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-secondary-200/50 border-2 border-secondary-50"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-secondary-700">الاسم الكامل</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-5 py-3.5 rounded-2xl bg-secondary-50 border border-secondary-100 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all duration-300 outline-none"
                    placeholder="محمد عبدالله"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-secondary-700">رقم الهاتف</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-5 py-3.5 rounded-2xl bg-secondary-50 border border-secondary-100 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all duration-300 outline-none"
                    placeholder="09xxxxxxxx"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-secondary-700">البريد الإلكتروني</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-3.5 rounded-2xl bg-secondary-50 border border-secondary-100 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all duration-300 outline-none"
                  placeholder="name@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-secondary-700">تفاصيل المشروع</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-5 py-3.5 rounded-2xl bg-secondary-50 border border-secondary-100 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all duration-300 outline-none resize-none"
                  placeholder="أخبرنا المزيد عن مشروعك..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary-700 hover:bg-primary-800 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-primary-900/20 hover:shadow-primary-900/40 flex items-center justify-center gap-3 group border-4 border-primary-600 hover:border-primary-500"
              >
                <span>إرسال الطلب</span>
                <Send size={20} className="group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;