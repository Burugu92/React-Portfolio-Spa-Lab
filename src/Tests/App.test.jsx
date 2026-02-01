import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

describe('App integration tests', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    localStorageMock.clear.mockClear();
  });

  test('renders the add project form', () => {
    render(<App />);
    const formTitle = screen.getByText(/Add New Project/i);
    expect(formTitle).toBeInTheDocument();
  });

  test('renders the search bar', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/Search projects/i);
    expect(searchInput).toBeInTheDocument();
  });

  test('adds a new project when form is submitted', async () => {
    render(<App initialData={[]} />);

    // Fill out the form
    const titleInput = screen.getByLabelText(/Project Title/i);
    const descriptionInput = screen.getByLabelText(/Description/i);
    const addButton = screen.getByRole('button', { name: /Add Project/i });

    fireEvent.change(titleInput, { target: { value: 'Test Project' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    fireEvent.click(addButton);

    // Check if project was added
    await waitFor(() => {
      expect(screen.getByText('Test Project')).toBeInTheDocument();
    });
  });

  test('searches and filters projects', async () => {
    const testProjects = [
      {
        id: 1,
        title: 'React App',
        description: 'A React application',
        technologies: ['React'],
        category: 'Web'
      },
      {
        id: 2,
        title: 'Node API',
        description: 'A Node.js API',
        technologies: ['Node.js'],
        category: 'Backend'
      }
    ];

    render(<App initialData={testProjects} />);

    // Initially both projects should be visible
    expect(screen.getByText('React App')).toBeInTheDocument();
    expect(screen.getByText('Node API')).toBeInTheDocument();

    // Search for "React"
    const searchInput = screen.getByPlaceholderText(/Search projects/i);
    fireEvent.change(searchInput, { target: { value: 'React' } });

    // Only React App should be visible
    await waitFor(() => {
      expect(screen.getByText('React App')).toBeInTheDocument();
      expect(screen.queryByText('Node API')).not.toBeInTheDocument();
    });
  });

  test('deletes a project when delete button is clicked', async () => {
    const testProjects = [
      {
        id: 1,
        title: 'Enterprise E-Commerce Platform',
        description: 'A scalable e-commerce solution',
        technologies: ['React', 'Node.js'],
        category: 'Web'
      }
    ];

    render(<App initialData={testProjects} />);

    // Project should be visible
    const projectTitle = screen.getByText('Enterprise E-Commerce Platform');
    expect(projectTitle).toBeInTheDocument();

    // Find and hover over the project card to reveal delete button
    const projectCard = projectTitle.closest('.group');
    fireEvent.mouseEnter(projectCard);

    // Find and click the delete button
    const deleteButton = screen.getByLabelText(/Delete Enterprise E-Commerce Platform/i);
    fireEvent.click(deleteButton);

    // Project should be removed
    await waitFor(() => {
      expect(
        screen.queryByText('Enterprise E-Commerce Platform')
      ).not.toBeInTheDocument();
    });
  });

  test('displays empty state when no projects exist', () => {
    render(<App initialData={[]} />);
    
    expect(screen.getByText(/No projects yet/i)).toBeInTheDocument();
  });

  test('displays no results message when search has no matches', () => {
    const testProjects = [
      {
        id: 1,
        title: 'React App',
        description: 'A React application',
        technologies: ['React'],
        category: 'Web'
      }
    ];

    render(<App initialData={testProjects} />);

    const searchInput = screen.getByPlaceholderText(/Search projects/i);
    fireEvent.change(searchInput, { target: { value: 'NonexistentProject' } });

    expect(screen.getByText(/No projects found matching your search/i)).toBeInTheDocument();
  });
});