import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar Component', () => {
  const mockOnChange = jest.fn();

  test('renders search input', () => {
    render(<SearchBar searchTerm="" onSearchChange={mockOnChange} />);
    expect(screen.getByPlaceholderText(/Search projects/i)).toBeInTheDocument();
  });

  test('calls onChange when typing', () => {
    render(<SearchBar searchTerm="" onSearchChange={mockOnChange} />);
    const input = screen.getByPlaceholderText(/Search projects/i);
    
    fireEvent.change(input, { target: { value: 'React' } });
    expect(mockOnChange).toHaveBeenCalledWith('React');
  });
});