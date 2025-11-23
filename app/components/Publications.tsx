import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PUBLICATIONS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Publications: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 px-4 md:px-12 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-light text-slate-900 mb-2">Patents & Publications</h2>
          <div className="h-1 w-20 bg-slate-900 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col gap-4">
          {PUBLICATIONS.map((pub, index) => (
            <motion.a
              href={pub.link}
              key={pub.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group block p-6 border-l-2 border-slate-200 hover:border-slate-900 hover:bg-slate-50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <h3 className="text-xl font-medium text-slate-800 group-hover:text-blue-700 transition-colors">
                  {pub.title}
                </h3>
                <span className="shrink-0 text-sm text-slate-400 font-mono">{pub.year}</span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-slate-500 italic font-light">{pub.venue}</p>
                <ExternalLink size={16} className="text-slate-300 group-hover:text-slate-600 transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;