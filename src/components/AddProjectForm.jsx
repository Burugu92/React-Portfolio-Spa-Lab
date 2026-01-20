import React, { useState } from 'react';
import { Plus } from 'lucide-react';

// AddProjectForm Component - Form to add new projects
// - onAddProject: Function to call with new project data
const AddProjectForm = ({ onAddProject }) => {
  // Form state management
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [category, setCategory] = useState('');

 // Handler for adding a new project
  const handleAdd = () => {
    // Validate required fields
    if (title.trim() && description.trim()) {
      // Create new project object
      const newProject = {
        id: Date.now(), // Simple unique ID using timestamp
        title: title.trim(),
        description: description.trim(),
        technologies: technologies
          .split(',')
          .map(tech => tech.trim())
          .filter(tech => tech), // Remove empty strings
        category: category.trim()
      };
      
      // Pass project to parent component
      onAddProject(newProject);
      
      // Clear form after successful submission
      setTitle('');
      setDescription('');
      setTechnologies('');
      setCategory('');
    }
  };

 // Handle Enter key press for form submission
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
      handleAdd();
    }
  };

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border-2 border-emerald-200 rounded-2xl p-6 mb-8 shadow-lg">
      {/* Form Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md">
          <Plus className="text-white" size={22} />
        </div>
        <h2 className="text-xl font-bold text-slate-800">Add New Project</h2>
      </div>
      
      {/* Form Fields */}
      <div className="space-y-4">
        {/* Title and Category Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Project Title Input */}
          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-slate-700 mb-2">
              Project Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 placeholder-slate-400"
              placeholder="Enter project title..."
            />
          </div>

          {/* Category Input */}
          <div>
            <label htmlFor="category" className="block text-sm font-semibold text-slate-700 mb-2">
              Category
            </label>
            <input
              id="category"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 placeholder-slate-400"
              placeholder="e.g., Web App, Mobile..."
            />
          </div>
        </div>

        {/* Description Input */}
        <div>
          <label htmlFor="description" className="block text-sm font-semibold text-slate-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none placeholder-slate-400"
            placeholder="Describe what makes this project special..."
          />
        </div>

        {/* Technologies Input */}
        <div>
          <label htmlFor="technologies" className="block text-sm font-semibold text-slate-700 mb-2">
            Technologies (comma-separated)
          </label>
          <input
            id="technologies"
            type="text"
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 placeholder-slate-400"
            placeholder="e.g., React, Node.js, PostgreSQL, AWS"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleAdd}
          disabled={!title.trim() || !description.trim()}
          className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          Add Project
        </button>
      </div>
    </div>
  );
};

export default AddProjectForm;