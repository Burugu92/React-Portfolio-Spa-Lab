
import { filterProjects } from '../utils/filterProjects';

const mockProjects = [
  {
    id: 1,
    title: 'React Portfolio',
    description: 'A personal portfolio built with React',
    category: 'Web Development',
    technologies: ['React', 'Tailwind']
  },
  {
    id: 2,
    title: 'Blockchain Tracker',
    description: 'Supply chain tracking on Ethereum',
    category: 'Blockchain',
    technologies: ['Solidity', 'Ethereum']
  }
];

describe('filterProjects utility', () => {
  test('returns all projects when search term is empty', () => {
    const result = filterProjects(mockProjects, '');
    expect(result).toHaveLength(2);
  });

  test('filters projects by title', () => {
    const result = filterProjects(mockProjects, 'react');
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('React Portfolio');
  });

  test('filters projects by description', () => {
    const result = filterProjects(mockProjects, 'supply');
    expect(result).toHaveLength(1);
    expect(result[0].category).toBe('Blockchain');
  });

  test('filters projects by category', () => {
    const result = filterProjects(mockProjects, 'blockchain');
    expect(result).toHaveLength(1);
  });

  test('filters projects by technology', () => {
    const result = filterProjects(mockProjects, 'ethereum');
    expect(result).toHaveLength(1);
  });

  test('returns empty array when no matches are found', () => {
    const result = filterProjects(mockProjects, 'python');
    expect(result).toHaveLength(0);
  });
});

