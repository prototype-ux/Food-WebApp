import { render, screen } from '@testing-library/react';

import Contact from './Components/Contact';

test('should find button element', () => {
  render(<Contact/>);
  const linkElement = screen.getByRole("button");
  expect(linkElement).toBeInTheDocument();
});

test('should find random text on screen', () => {
  render(<Contact/>);
  const text = screen.getByText("Submit");
  expect(text).toBeInTheDocument();
});
