import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App integration tests', () => {
test('renders main sections of the app', () => {
render(<App />);


expect(
  screen.getByRole('heading', { name: /portfolio projects/i })
).toBeInTheDocument();

expect(
  screen.getByRole('heading', { name: /add new project/i })
).toBeInTheDocument();

expect(
  screen.getByRole('textbox', { name: /search projects/i })
).toBeInTheDocument();


});

test('adds a new project via the form', () => {
render(<App />);


fireEvent.change(
  screen.getByLabelText(/project title/i),
  { target: { value: 'React Admin Dashboard' } }
);

fireEvent.change(
  screen.getByLabelText(/description/i),
  { target: { value: 'Admin dashboard built with React' } }
);

fireEvent.click(
  screen.getByRole('button', { name: /add project/i })
);

expect(
  screen.getByRole('heading', { name: /react admin dashboard/i })
).toBeInTheDocument();


});

test('filters projects based on search input', () => {
render(<App />);


fireEvent.change(
  screen.getByRole('textbox', { name: /search projects/i }),
  { target: { value: 'react' } }
);

expect(
  screen.getByRole('heading', {
    name: /enterprise e-commerce platform/i,
  })
).toBeInTheDocument();

expect(
  screen.queryByRole('heading', {
    name: /real-time analytics dashboard/i,
  })
).not.toBeInTheDocument();


});

test('deletes a project when delete button is clicked', () => {
render(<App />);


// Confirm project exists first
expect(
  screen.getByRole('heading', {
    name: /enterprise e-commerce platform/i,
  })
).toBeInTheDocument();

const deleteButtons = screen.getAllByRole('button', {
  name: /delete/i,
});

fireEvent.click(deleteButtons[0]);

// Project should be removed from the DOM
expect(
  screen.queryByRole('heading', {
    name: /enterprise e-commerce platform/i,
  })
).not.toBeInTheDocument();


});
});
