import { render, screen, fireEvent } from '@testing-library/react';
import ProjectCard from '../components/ProjectCard';

describe('ProjectCard Component', () => {
  const mockProject = {
    id: 1,
    title: 'Test Project',
    description: 'Test Description',
    technologies: ['React', 'Node.js'],
    category: 'Web'
  };

  const mockDelete = jest.fn();

  test('renders project information', () => {
    render(<ProjectCard project={mockProject} onDelete={mockDelete} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  test('calls onDelete when delete button is clicked', () => {
    render(<ProjectCard project={mockProject} onDelete={mockDelete} />);
    const deleteButton = screen.getByLabelText(/Delete Test Project/i);
    fireEvent.click(deleteButton);
    expect(mockDelete).toHaveBeenCalledWith(1);
  });

  test('renders all technologies', () => {
    render(<ProjectCard project={mockProject} onDelete={mockDelete} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });
});