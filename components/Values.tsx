import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ShieldCheck, HardHat, Clock, Award, Building } from 'lucide-react';
import { ValueItem } from '../types';

const values: ValueItem[] = [
  {
    id: 1,
    title: 'موثوقية تامة',
    description: 'نلتزم بالشفافية والصدق في كل تعاملاتنا لضمان راحة بالك.',
    icon: <ShieldCheck size={36} />,
  },
  {
    id: 2,
    title: 'جودة استثنائية',
    description: 'نستخدم أفضل المواد وأحدث التقنيات لضمان متانة تدوم طويلاً.',
    icon: <Award size={36} />,
  },
  {
    id: 3,
    title: 'أمان وسلامة',
    description: 'نطبق أعلى معايير السلامة المهنية لحماية فريقنا وموقعك.',
    icon: <HardHat size={36} />,
  },
  {
    id: 4,
    title: 'دقة المواعيد',
    description: 'نحترم وقتك ونلتزم بجدول زمني دقيق لتسليم المشاريع.',
    icon: <Clock size={36} />,
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Values: React.FC = () => {
  return (
    <section id="values" className="py-24 bg-white relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-50 rounded-full blur-3xl opacity-60 translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Company Intro Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto mb-24"
        >
          <div className="bg-gradient-to-b from-secondary-50/80 to-white p-8 md:p-12 rounded-[3rem] border border-secondary-100 shadow-xl relative overflow-hidden group">
             {/* Decorative */}
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-100/40 rounded-full blur-3xl" />
             <div className="absolute top-10 right-10 opacity-5">
                <Building size={120} />
             </div>

             <div className="relative z-10 text-center">
                <span className="inline-block py-1.5 px-5 rounded-full bg-white border border-secondary-200 text-secondary-600 text-sm font-bold mb-6 shadow-sm">
                  عن الشركة
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-secondary-900 mb-8 leading-tight">
                  ريادة ليبية في عالم التشييد <span className="text-primary-600 block md:inline">منذ عام 2007</span>
                </h3>
                <p className="text-lg md:text-xl text-secondary-600 leading-loose md:leading-loose text-justify md:text-center max-w-4xl mx-auto">
                  أُسست شركة الأسوار العالية لتكون إحدى الشركات الليبية الرائدة في مجال المقاولات العامة والتشييد. 
                  بدأت مسيرتنا بمشاريع نوعية أثبتنا من خلالها قدرتنا على توفير <span className="font-bold text-secondary-800">جودة لا تضاهى</span>، 
                  بدقة عالية ومتابعة مستمرة من قبل نخبة من الخبراء والمهندسين المحترفين. 
                  واليوم، نمتلك رصيداً وافراً من الخبرة المتراكمة وأرشيفاً نفخر به من الأعمال المنجزة التي تجسد التزامنا بالتميز.
                </p>
             </div>
          </div>
        </motion.div>

        {/* Values Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-bold tracking-wider text-sm uppercase bg-primary-50 px-5 py-2 rounded-full border border-primary-100 inline-block mb-4"
          >
            لماذا تختارنا؟
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-secondary-900 mb-4"
          >
            قيمنا والتزامنا الراسخ
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-secondary-500 max-w-2xl mx-auto text-lg"
          >
            نؤمن بأن البناء ليس مجرد هياكل خرسانية، بل هو التزام بالجودة وشراكة مستدامة.
          </motion.p>
        </div>

        {/* Values Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((val) => (
            <motion.div
              key={val.id}
              variants={item}
              className="group bg-white rounded-[2rem] p-8 shadow-xl shadow-secondary-100/50 hover:shadow-2xl hover:shadow-primary-900/5 border-2 border-secondary-100 hover:border-primary-200 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110 opacity-50" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white to-secondary-50 border-2 border-secondary-100 shadow-sm text-primary-600 flex items-center justify-center mb-6 group-hover:border-primary-500 group-hover:text-primary-700 transition-all duration-300">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4 group-hover:text-primary-700 transition-colors">
                  {val.title}
                </h3>
                <p className="text-secondary-500 leading-relaxed text-sm">
                  {val.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Values;