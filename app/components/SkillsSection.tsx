import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SKILLS } from '../constants';

const SkillsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 px-4 md:px-12 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-slate-900 mb-2">Expertise & Skills</h2>
          <div className="h-1 w-20 bg-slate-300"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 border border-slate-100 hover:border-slate-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-slate-400 mb-4 group-hover:text-blue-600 transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-1">{skill.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500 font-light">{skill.category}</span>
                <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded-full">{skill.level}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;