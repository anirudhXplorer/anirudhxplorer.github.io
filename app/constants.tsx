import React from 'react';
import { Project, Skill, Publication, BlogPost } from './types';
import { Code, Database, Layout, PenTool, Terminal, Cpu } from 'lucide-react';

export const USER_INFO = {
  name: "Anirudh",
  role: "Solutions Engineer",
  bio: "I build working software solutions, that allign with the users. Passionate about robust engineering & design.",
  avatar: "https://avatars.githubusercontent.com/u/24821711?v=4"
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon Analytics Dashboard',
    description: 'A real-time data visualization platform processing over 1M events/sec with minimal latency.',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    link: './projects/neon-dashboard.html'
  },
  {
    id: '2',
    title: 'E-Commerce Redesign',
    description: 'Complete UX overhaul for a major fashion retailer resulting in a 40% increase in conversion.',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    link: './projects/ecommerce.html'
  },
  {
    id: '3',
    title: 'AI Image Generator',
    description: 'A local-first generative AI tool using WebGPU for browser-based inference.',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    link: './projects/ai-gen.html'
  },
  {
    id: '4',
    title: 'Mobile Health App',
    description: 'Flutter-based application for tracking daily vitals and connecting with telehealth providers.',
    imageUrl: 'https://picsum.photos/600/400?random=4',
    link: './projects/health-app.html'
  }
];

export const SKILLS: Skill[] = [
  { id: '1', name: 'React & TypeScript', level: 'Expert', category: 'Tech', icon: <Code size={20} /> },
  { id: '2', name: 'Node.js & Python', level: 'Advanced', category: 'Tech', icon: <Terminal size={20} /> },
  { id: '3', name: 'UI/UX Design', level: 'Advanced', category: 'Design', icon: <PenTool size={20} /> },
  { id: '4', name: 'Cloud Architecture', level: 'Intermediate', category: 'Tech', icon: <Database size={20} /> },
  { id: '5', name: 'System Design', level: 'Expert', category: 'Tech', icon: <Layout size={20} /> },
  { id: '6', name: 'Machine Learning', level: 'Intermediate', category: 'Tech', icon: <Cpu size={20} /> },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: '1',
    title: 'Optimizing Rendering Performance in Large-Scale React Applications',
    venue: 'Web Performance Conference 2024',
    year: '2024',
    link: '#'
  },
  {
    id: '2',
    title: 'A Novel Approach to State Management in Distributed Systems',
    venue: 'Journal of Software Engineering',
    year: '2023',
    link: '#'
  },
  {
    id: '3',
    title: 'Accessibility First: Designing for the Next Billion Users',
    venue: 'UX Summit',
    year: '2022',
    link: '#'
  }
];

export const BLOG_PREVIEW: BlogPost[] = [
  { id: '1', title: 'The Future of Web Assembly', date: 'Oct 12, 2024', summary: 'Exploring how Wasm is changing the landscape of browser capabilities.' },
  { id: '2', title: 'Minimalism in Code', date: 'Sep 28, 2024', summary: 'Why writing less code is often the hardest part of engineering.' },
];
