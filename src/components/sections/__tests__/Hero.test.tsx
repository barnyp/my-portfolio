import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';
import '@testing-library/jest-dom';

// Mock framer-motion components to avoid animation issues during tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}));

// A utility render function (if the component requires providers in the future)
const customRender = (ui: React.ReactElement) => render(ui);

// Basic smoke tests for the Hero section

describe('Hero Component', () => {
  it('renders the main heading', () => {
    customRender(<Hero />);
    // Adjust the heading text according to the actual Hero component implementation
    expect(screen.getByRole('heading', { name: /hi, i'm/i })).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = customRender(<Hero />);
    expect(asFragment()).toMatchSnapshot();
  });
});
