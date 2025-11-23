import React from 'react';
import { motion } from 'framer-motion';
import { USER_INFO } from '../constants';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8"
      >
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-slate-100 shadow-xl mx-auto">
          <img 
            src={USER_INFO.avatar} 
            alt={USER_INFO.name} 
            className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-4xl md:text-6xl font-light tracking-tight text-slate-900 mb-4"
      >
        {USER_INFO.name}
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-lg md:text-xl text-slate-500 max-w-2xl font-light leading-relaxed"
      >
        {USER_INFO.bio}
      </motion.p>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 animate-bounce text-slate-400"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;