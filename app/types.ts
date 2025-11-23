import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface Skill {
  id: string;
  name: string;
  level: string;
  icon?: React.ReactNode;
  category: 'Tech' | 'Design' | 'Soft Skills';
}

export interface Publication {
  id: string;
  title: string;
  venue: string;
  year: string;
  link: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
}