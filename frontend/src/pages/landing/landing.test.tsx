import React from 'react';
import { render, screen } from '@testing-library/react';
import Landing from './landing';

describe('Landing Page', () => {
  test('renders Hero section', () => {
    render(<Landing />);
    // Check for text visible in Hero, like your site title or input placeholder
    expect(screen.getByText(/qumarketplace/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/browse the catalogue/i)).toBeInTheDocument();
  });

  test('renders Newest section', () => {
    render(<Landing />);
    // Check for the "Newest" text visible in Newest component
    expect(screen.getByText(/newest/i)).toBeInTheDocument();
  });
});
