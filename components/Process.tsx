import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Ruler, Hammer, Key } from 'lucide-react';
import { ProcessStep } from '../types';

const steps: ProcessStep[] = [
  {
    id: 1,
    number: '01',
    title: 'الاستشارة',
    description: 'نجتمع معك لفهم رؤيتك واحتياجاتك بدقة متناهية.',
    icon: <MessageSquare size={28} />,
  },
  {
    id: 2,
    number: '02',
    title: 'التخطيط',
    description: 'نضع مخططات هندسية وجداول زمنية دقيقة لضمان سير العمل.',
    icon: <Ruler size={28} />,
  },
  {
    id: 3,
    number: '03',
    title: 'التنفيذ',
    description: 'يبدأ فريقنا المحترف في البناء باستخدام أحدث المعدات.',
    icon: <Hammer size={28} />,
  },
  {
    id: 4,
    number: '04',
    title: 'التسليم',
    description: 'نسلمك المشروع جاهزاً بأعلى معايير الجودة المتفق عليها.',
    icon: <Key size={28} />,
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-secondary-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-secondary-900 mb-6"
          >
            كيف نعمل؟
          </motion.h2>
          <p className="text-secondary-500 max-w-2xl mx-auto text-lg">
            منهجية واضحة وخطوات مدروسة لضمان نجاح مشروعك من الفكرة وحتى التسليم.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[2.75rem] left-0 right-0 h-0.5 bg-secondary-200 -translate-y-1/2 z-0">
             <div className="h-full bg-gradient-to-l from-primary-200 to-primary-100 w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-white border-[6px] border-secondary-50 shadow-xl shadow-secondary-200/50 flex items-center justify-center mb-8 relative transition-all duration-300 group-hover:scale-110 group-hover:border-primary-100 group-hover:shadow-primary-100/50 z-10">
                   <div className="absolute -top-1 -right-1 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md ring-4 ring-white">
                    {step.number}
                   </div>
                   <div className="text-secondary-400 group-hover:text-primary-600 transition-colors">
                     {step.icon}
                   </div>
                </div>
                
                <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-800 transition-colors">
                  {step.title}
                </h3>
                <p className="text-secondary-500 text-sm leading-relaxed max-w-[220px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;