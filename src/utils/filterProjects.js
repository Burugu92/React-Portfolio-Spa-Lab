export const filterProjects = (projects, searchTerm) => {
  if (!searchTerm.trim()) return projects;

  const term = searchTerm.toLowerCase();
  
  return projects.filter(project =>
    project.title.toLowerCase().includes(term) ||
    project.description.toLowerCase().includes(term) ||
    (project.category && project.category.toLowerCase().includes(term)) ||
    (project.technologies && project.technologies.some(tech => 
      tech.toLowerCase().includes(term)
    ))
  );
};