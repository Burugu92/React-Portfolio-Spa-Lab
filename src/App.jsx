import React, { useState } from 'react';
import Header from './components/Header';
import AddProjectForm from './components/AddProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';
import { initialProjects } from './utils/projectData';
import { filterProjects } from './utils/filterProjects';
import Footer from './components/Footer';
/*// App Component - Root of the Portfolio Application
 * Component Hierarchy:
 * App (Root - State Management)
 * ├── Header (Presentational)
 * ├── AddProjectForm (Form with local state)
 * ├── SearchBar (Controlled input)
 * └── ProjectList (Container)
 *     └── ProjectCard (Presentational, repeated)
 */
function App() {
  // State: Array of all projects (initialized with default data)
  const [projects, setProjects] = useState(initialProjects);

  // State: Current search filter term
  const [searchTerm, setSearchTerm] = useState('');

  // Handler to add a new project to the projects array
  const handleAddProject = (newProject) => {
    setProjects([newProject, ...projects]);
  };

  // Handler to delete a project by its ID
  const handleDeleteProject = (projectId) => {
    setProjects(projects.filter(project => project.id !== projectId));
  };

  // Filter projects based on search term (case-insensitive)
  
  const filteredProjects = filterProjects(projects, searchTerm);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section - 10% accent color (emerald gradient) */}
      <Header />

      {/* Main Content Section - 70% dominant color (white/light backgrounds) */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Add Project Form - Passes callback to parent */}
        <AddProjectForm onAddProject={handleAddProject} />

        {/* Search Bar - Controlled component */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm} />

        {/* Projects List - Receives filtered data and delete handler */}
        <ProjectList
          projects={filteredProjects}
          onDelete={handleDeleteProject}
          searchTerm={searchTerm} />
      </div>

      {/* Footer Section */}
<Footer projectCount={projects.length} />

    </div>
  );
}

export default App;