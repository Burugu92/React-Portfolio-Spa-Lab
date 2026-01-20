// src/components/Footer.jsx
import React from 'react';

const Footer = ({ projectCount }) => {
  return (
    <footer className="mt-16 py-8 bg-slate-800 border-t border-slate-700">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-slate-300 text-sm">
          Showcasing <span className="font-semibold text-emerald-400">{projectCount}</span> projects across Full-Stack, Mobile, AI/ML, Blockchain, DevOps & IoT
        </p>
        <p className="text-slate-400 text-xs mt-2">
          Built with React & Tailwind CSS
        </p>
        <p className="text-slate-400 text-xs mt-2">
          &copy; {new Date().getFullYear()} Edwin Burugu
        </p>
      </div>
    </footer>
  );
};

export default Footer;
