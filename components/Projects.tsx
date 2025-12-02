import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: 'برج الأفق الأزرق',
    location: 'الرياض، المملكة العربية السعودية',
    description: 'مجمع تجاري وسكني فاخر يتكون من 45 طابقاً.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'مجمع واحة النخيل',
    location: 'جدة، المملكة العربية السعودية',
    description: 'تطوير عمراني متكامل يضم فلل ومرافق ترفيهية.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'مركز المدينة الطبي',
    location: 'الدمام، المملكة العربية السعودية',
    description: 'مستشفى تخصصي بسعة 500 سرير وتجهيزات حديثة.',
    image: 'https://images.unsplash.com/photo-1581094794329-cdac82aadbcc?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'فندق الرمال الذهبية',
    location: 'دبي، الإمارات العربية المتحدة',
    description: 'منتجع سياحي 5 نجوم على الواجهة البحرية.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop',
  },
    {
    id: 5,
    title: 'مقر شركة التقنية',
    location: 'الدوحة، قطر',
    description: 'مبنى إداري ذكي يعتمد على الطاقة المستدامة.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
  },
];

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="projects" className="py-24 bg-secondary-900 text-white overflow-hidden relative" ref={containerRef}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-800/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row items-end justify-between gap-6 relative z-10">
        <div>
           <motion.span
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary-400 font-bold tracking-wider text-sm uppercase mb-3 block"
          >
            معرض الأعمال
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            بصماتنا في كل مكان
          </motion.h2>
        </div>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
        >
             <p className="text-secondary-300 max-w-sm text-lg leading-relaxed text-left pl-4 border-l-4 border-primary-600 rounded-l-sm">
                مجموعة مختارة من مشاريعنا التي تعكس التزامنا بالتميز والابتكار المعماري.
            </p>
        </motion.div>
      </div>

      {/* Slider Container */}
      <div className="relative w-full overflow-x-auto pb-12 hide-scrollbar">
        <div className="flex gap-8 px-6 md:px-12 w-max">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group w-[320px] md:w-[420px] h-[550px] rounded-[2.5rem] overflow-hidden cursor-pointer border-4 border-white/5 hover:border-white/20 transition-all duration-300 shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale-[0.3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-950 via-secondary-950/60 to-transparent opacity-90 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 text-primary-300 text-sm font-bold mb-3 uppercase tracking-wider">
                  <MapPin size={16} />
                  <span>{project.location}</span>
                </div>
                <h3 className="text-3xl font-bold mb-3 text-white leading-tight">{project.title}</h3>
                <p className="text-secondary-300 text-base leading-relaxed mb-8 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  {project.description}
                </p>
                <div className="inline-flex items-center justify-between w-full px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition-colors group/btn">
                  <span className="font-bold">عرض التفاصيل</span>
                  <div className="bg-white text-secondary-900 rounded-full p-1.5 group-hover/btn:bg-primary-500 group-hover/btn:text-white transition-colors">
                     <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;