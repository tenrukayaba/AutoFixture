// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AutoFixtureNet title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AutoFixtureNet/i);
    expect(titleElement).toBeInTheDocument();
});
