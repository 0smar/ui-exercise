import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders project logo', () => {
  render(<App />);
  const logoElement = screen.getByTestId('project-logo');
  expect(logoElement).toBeInTheDocument();
});
