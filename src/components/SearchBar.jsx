import React from 'react';
import { Search } from 'lucide-react';

// SearchBar Component - Controlled input for searching projects
// - searchTerm: Current value of the search input
// - onSearchChange: Function to call when the search input changes
const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="mb-8">
      <div className="relative">
        {/* Search Icon */}
        <Search 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" 
          size={20} 
        />
        
        {/* Search Input Field */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search projects by title, description, or technology..."
          className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md placeholder-slate-400"
          aria-label="Search projects"
        />
      </div>
    </div>
  );
};

export default SearchBar;