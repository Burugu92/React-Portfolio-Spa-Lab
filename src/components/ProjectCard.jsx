import React from 'react';
import { X, Code2 } from 'lucide-react';

// ProjectCard Component - Displays individual project details
// - project: Object containing project details (id, title, description, technologies, category)
// - onDelete: Function to call when delete button is clicked
const ProjectCard = ({ project, onDelete }) => {
  return (
    <div className="group relative bg-white border border-slate-200 rounded-2xl p-6 mb-4 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1">
      {/* Delete Button - Hidden until hover */}
      <button
        onClick={() => onDelete(project.id)}
        className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center hover:bg-red-600 hover:scale-110 shadow-lg"
        aria-label={`Delete ${project.title}`}
      >
        <X size={16} />
      </button>

      {/* Project Header with Icon and Title */}
      <div className="flex items-start gap-4 mb-4">
        {/* Category Icon Badge */}
        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md">
          <Code2 className="text-white" size={24} />
        </div>

        {/* Title and Category */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-bold text-slate-900 text-lg">
              {project.title}
            </h3>
            {project.category && (
              <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">
                {project.category}
              </span>
            )}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed break-words">
            {project.description}
          </p>
        </div>
      </div>

      {/* Technologies Section */}
      {project.technologies && project.technologies.length > 0 && (
        <div className="mt-4 pt-4 border-t border-slate-100">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 rounded-lg text-xs font-semibold border border-emerald-200 hover:border-emerald-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Decorative Gradient Border (visible on hover) */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default ProjectCard;