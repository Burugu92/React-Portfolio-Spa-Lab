import React from 'react';
import ProjectCard from './ProjectCard';
import { Sparkles } from 'lucide-react';

// ProjectList Component - Displays a list of projects or an empty state
// - projects: Array of project objects to display
// - onDelete: Function to call when a project is deleted
// - searchTerm: Current search term for filtering projects
const ProjectList = ({ projects, onDelete, searchTerm }) => {
  // Empty state: No projects or no search results
  if (projects.length === 0) {
    return (
      <div className="text-center py-16 px-4">
        {/* Empty State Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full mb-4">
          <Sparkles className="text-slate-400" size={32} />
        </div>
        
        {/* Empty State Message */}
        <p className="text-slate-500 text-lg font-medium">
          {searchTerm 
            ? 'No projects found matching your search.' 
            : 'No projects yet. Start by adding your first amazing project!'}
        </p>
      </div>
    );
  }

  // Project list with data
  return (
    <div className="space-y-2">
      {/* List Header with Project Count */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
          Portfolio Projects ({projects.length})
        </h3>
      </div>
      
      {/* Map through projects and render ProjectCard for each */}
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ProjectList;