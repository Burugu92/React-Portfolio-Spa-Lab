import { render, screen, fireEvent } from '@testing-library/react';
import AddProjectForm from '../components/AddProjectForm';

describe('AddProjectForm Component', () => {
  const mockAddProject = jest.fn();

  test('renders form fields', () => {
    render(<AddProjectForm onAddProject={mockAddProject} />);
    expect(screen.getByLabelText(/Project Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Technologies/i)).toBeInTheDocument();
  });

  test('adds project with valid inputs', () => {
    render(<AddProjectForm onAddProject={mockAddProject} />);
    
    fireEvent.change(screen.getByLabelText(/Project Title/i), {
      target: { value: 'New Project' }
    });
    fireEvent.change(screen.getByLabelText(/Description/i), {
      target: { value: 'New Description' }
    });
    fireEvent.change(screen.getByLabelText(/Technologies/i), {
      target: { value: 'React, Node.js' }
    });

    fireEvent.click(screen.getByText(/Add Project/i));

    expect(mockAddProject).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'New Project',
        description: 'New Description',
        technologies: ['React', 'Node.js']
      })
    );
  });

  test('button is disabled with empty fields', () => {
    render(<AddProjectForm onAddProject={mockAddProject} />);
    const button = screen.getByText(/Add Project/i);
    expect(button).toBeDisabled();
  });
});