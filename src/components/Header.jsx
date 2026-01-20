import React from 'react';
import { Sparkles } from 'lucide-react';

// Header Component - Displays the main header with title and subtitle
const Header = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 shadow-xl">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="text-center">
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 shadow-lg">
            <Sparkles className="text-white" size={32} />
          </div>
          
          {/* Title */}
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
            Building Tomorrow’s Applications Today
          </h1>
          
          {/* Subtitle */}
          <p className="text-emerald-50 text-lg">
            Delivering Scalable & Cutting-Edge Applications Across Technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;