import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogClient from '../blog-client';
import '@testing-library/jest-dom';

// Mock framer-motion globally via jest.setup, so no additional mocks here.

const mockPosts = [
  {
    title: 'Post One',
    date: '2025-01-01',
    slug: 'post-one',
    author: 'Test Author',
    coverImage: '/img/test-1.jpg',
    excerpt: 'Excerpt 1',
  },
  {
    title: 'Post Two',
    date: '2025-02-01',
    slug: 'post-two',
    author: 'Test Author',
    coverImage: '/img/test-2.jpg',
    excerpt: 'Excerpt 2',
  },
];

describe('BlogClient Component', () => {
  it('renders a card for each post', () => {
    render(<BlogClient posts={mockPosts} />);
    mockPosts.forEach(post => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    });
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<BlogClient posts={mockPosts} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
