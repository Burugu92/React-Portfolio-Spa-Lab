import React, { useState, useCallback, useEffect, useMemo } from 'react';
import Header from './components/Header';
import AddProjectForm from './components/AddProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';
import { initialProjects } from './utils/projectData';
import { filterProjects } from './utils/filterProjects';
import Footer from './components/Footer';

/*
 * App Component - Root of the Portfolio Application
 * Component Hierarchy:
 * App (Root - Optimized State Management with localStorage persistence)
 * ├── Header (Presentational)
 * ├── AddProjectForm (Form with local state)
 * ├── SearchBar (Controlled input)
 * └── ProjectList (Container)
 *     └── ProjectCard (Presentational, repeated)
 */
function App({ initialData }) {
  // State: Array of all projects

  const [projects, setProjects] = useState(() => {
    // If initialData is provided (for testing), use it
    if (initialData) {
      return initialData;
    }
    
    // Otherwise, try to load from localStorage
    try {
      const savedProjects = localStorage.getItem('portfolioProjects');
      return savedProjects ? JSON.parse(savedProjects) : initialProjects;
    } catch (error) {
      console.error('Error loading projects from localStorage:', error);
      return initialProjects;
    }
  });

  // State: Current search filter term
  const [searchTerm, setSearchTerm] = useState('');

  // Effect: Persist projects to localStorage whenever they change
 
  useEffect(() => {
    if (!initialData) {
      try {
        localStorage.setItem('portfolioProjects', JSON.stringify(projects));
      } catch (error) {
        console.error('Error saving projects to localStorage:', error);
      }
    }
  }, [projects, initialData]);

  // Memoized handler to add a new project to the projects array
 
  const handleAddProject = useCallback((newProject) => {
    setProjects(prevProjects => [newProject, ...prevProjects]);
  }, []);

  // Memoized handler to delete a project by its ID

  const handleDeleteProject = useCallback((projectId) => {
    setProjects(prevProjects => 
      prevProjects.filter(project => project.id !== projectId)
    );
  }, []);

  // Memoized filtered projects

  const filteredProjects = useMemo(
    () => filterProjects(projects, searchTerm),
    [projects, searchTerm]
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section - 10% accent color (emerald gradient) */}
      <Header />

      {/* Main Content Section - 70% dominant color (white/light backgrounds) */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Add Project Form - Passes memoized callback to prevent unnecessary re-renders */}
        <AddProjectForm onAddProject={handleAddProject} />

        {/* Search Bar - Controlled component */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* Projects List - Receives filtered data and memoized delete handler */}
        <ProjectList
          projects={filteredProjects}
          onDelete={handleDeleteProject}
          searchTerm={searchTerm}
        />
      </div>

      {/* Footer Section - Shows total project count */}
      <Footer projectCount={projects.length} />
    </div>
  );
}

export default App;