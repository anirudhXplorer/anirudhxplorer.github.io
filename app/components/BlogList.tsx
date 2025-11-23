import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_PREVIEW } from '../constants';
import { ArrowRight, BookOpen } from 'lucide-react';

const BlogList: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-light text-white mb-2">Latest Thoughts</h2>
            <div className="h-1 w-20 bg-blue-500"></div>
          </div>
          <BookOpen className="text-slate-600 w-8 h-8" />
        </div>

        <div className="grid gap-8 mb-12">
          {BLOG_PREVIEW.map((blog) => (
            <div key={blog.id} className="border-b border-slate-800 pb-8 last:border-0">
              <span className="text-sm text-blue-400 font-mono mb-2 block">{blog.date}</span>
              <h3 className="text-2xl font-light mb-2">{blog.title}</h3>
              <p className="text-slate-400 font-light mb-4">{blog.summary}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <motion.a 
            href="./blog/index.html"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-blue-50 transition-colors"
          >
            Read All Articles <ArrowRight size={18} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default BlogList;