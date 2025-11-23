import React from 'react';
import { USER_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white text-center border-t border-slate-100">
      <p className="text-slate-400 text-sm font-light">
        © {new Date().getFullYear()} {USER_INFO.name}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;