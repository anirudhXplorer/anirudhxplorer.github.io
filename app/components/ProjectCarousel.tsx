import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowRight } from 'lucide-react';

const ProjectCarousel: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 px-4 md:px-12 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex justify-between items-end mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl font-light text-slate-900 mb-2">Selected Projects</h2>
            <div className="h-1 w-20 bg-slate-900"></div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="p-2 border border-slate-200 hover:bg-slate-50 rounded-full transition-colors" aria-label="Scroll left">
               <ArrowRight className="rotate-180 w-5 h-5 text-slate-600" />
            </button>
            <button onClick={() => scroll('right')} className="p-2 border border-slate-200 hover:bg-slate-50 rounded-full transition-colors" aria-label="Scroll right">
               <ArrowRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </motion.div>

        <div 
          className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar"
          ref={scrollContainerRef}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PROJECTS.map((project, index) => (
            <motion.a
              href={project.link}
              key={project.id}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="min-w-[85vw] md:min-w-[450px] snap-center group block"
            >
              <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-slate-100">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-sm font-medium text-slate-900 flex items-center gap-2">
                    View Project <ArrowRight size={14} />
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
              <p className="text-slate-500 leading-relaxed font-light">{project.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;