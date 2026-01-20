import { render, screen } from '@testing-library/react';
import ProjectList from '../components/ProjectList';

describe('ProjectList Component', () => {
  const mockProjects = [
    { id: 1, title: 'Project 1', description: 'Desc 1', technologies: [] },
    { id: 2, title: 'Project 2', description: 'Desc 2', technologies: [] }
  ];

  test('renders all projects', () => {
    render(<ProjectList projects={mockProjects} onDelete={jest.fn()} searchTerm="" />);
    expect(screen.getByText('Project 1')).toBeInTheDocument();
    expect(screen.getByText('Project 2')).toBeInTheDocument();
  });

  test('shows empty state when no projects', () => {
    render(<ProjectList projects={[]} onDelete={jest.fn()} searchTerm="" />);
    expect(screen.getByText(/No projects yet/i)).toBeInTheDocument();
  });

  test('shows no results message when search returns empty', () => {
    render(<ProjectList projects={[]} onDelete={jest.fn()} searchTerm="nonexistent" />);
    expect(screen.getByText(/No projects found/i)).toBeInTheDocument();
  });
});

