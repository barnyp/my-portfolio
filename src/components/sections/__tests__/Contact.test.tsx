import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

// Mock all Lucide icons
jest.mock('lucide-react', () => {
  const originalModule = jest.requireActual('lucide-react');
  return {
    __esModule: true,
    ...originalModule,
    Mail: () => <div data-testid="mail-icon" />,
    Phone: () => <div data-testid="phone-icon" />,
    MapPin: () => <div data-testid="map-pin-icon" />,
  };
});

// Mock all UI components
jest.mock('@/components/ui/button', () => ({
  Button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
}));

jest.mock('@/components/ui/input', () => ({
  Input: (props: any) => <input {...props} />,
}));

jest.mock('@/components/ui/textarea', () => ({
  Textarea: (props: any) => <textarea {...props} />,
}));

// Mock the Google reCAPTCHA hook
jest.mock('react-google-recaptcha-v3', () => ({
  useGoogleReCaptcha: () => ({
    executeRecaptcha: jest.fn(() => Promise.resolve('test-token')),
  }),
  GoogleReCaptchaProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// Mock next/themes ThemeProvider
jest.mock('next-themes', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useTheme: () => ({ theme: 'light', setTheme: jest.fn() }),
}));

// Mock the fetch function with implementation that resolves successfully by default
const mockFetchPromise = Promise.resolve({
  ok: true,
  json: () => Promise.resolve({ success: true, message: 'Message sent successfully!' }),
});

global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

// Create a comprehensive test wrapper
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Custom render method with providers
const customRender = (ui: React.ReactElement, options?: any) => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

describe('Contact Component', () => {
  beforeEach(() => {
    // Reset the fetch mock before each test
    jest.clearAllMocks();
    (global.fetch as jest.Mock).mockImplementation(() => mockFetchPromise);
  });

  it('renders the contact form correctly', async () => {
    await act(async () => {
      customRender(<Contact />);
    });
    
    // Check if the form elements are rendered
    expect(screen.getByPlaceholderText(/your name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/your email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/subject/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/your message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
    
    // Check if contact info elements are rendered
    expect(screen.getByText(/notify@paulbarnabas.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Lagos, Nigeria/i)).toBeInTheDocument();
  });

  it('handles form input changes', async () => {
    await act(async () => {
      customRender(<Contact />);
    });
    
    // Get form elements
    const nameInput = screen.getByPlaceholderText(/your name/i);
    const emailInput = screen.getByPlaceholderText(/your email/i);
    const subjectInput = screen.getByPlaceholderText(/subject/i);
    const messageInput = screen.getByPlaceholderText(/your message/i);
    
    // Use act to wrap state updates
    await act(async () => {
      // Simulate user input
      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
      fireEvent.change(messageInput, { target: { value: 'This is a test message' } });
    });
    
    // Check if the values were updated
    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(subjectInput).toHaveValue('Test Subject');
    expect(messageInput).toHaveValue('This is a test message');
  });

  it('submits the form successfully', async () => {
    // Mock a successful API response
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, message: 'Message sent successfully!' }),
    });
    
    await act(async () => {
      customRender(<Contact />);
    });
    
    // Fill out the form using act to handle state updates
    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText(/your name/i), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByPlaceholderText(/your email/i), { target: { value: 'john@example.com' } });
      fireEvent.change(screen.getByPlaceholderText(/subject/i), { target: { value: 'Test Subject' } });
      fireEvent.change(screen.getByPlaceholderText(/your message/i), { target: { value: 'This is a test message' } });
    });
    
    // Submit the form
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    });
    
    // Wait for the API call to complete
    await waitFor(() => {
      // Check if fetch was called with the correct arguments
      expect(global.fetch).toHaveBeenCalledWith('/api/contact', expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: expect.any(String),
      }));
    });
    
    // Verify the request payload
    const requestPayload = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body);
    expect(requestPayload).toMatchObject({
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Test Subject',
      message: 'This is a test message',
      recaptchaToken: 'test-token',
    });
  });

  it('handles form submission error', async () => {
    // Mock an error response
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'An error occurred' }),
    });
    
    await act(async () => {
      customRender(<Contact />);
    });
    
    // Fill out the form with wrapped state updates
    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText(/your name/i), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByPlaceholderText(/your email/i), { target: { value: 'john@example.com' } });
      fireEvent.change(screen.getByPlaceholderText(/subject/i), { target: { value: 'Test Subject' } });
      fireEvent.change(screen.getByPlaceholderText(/your message/i), { target: { value: 'This is a test message' } });
    });
    
    // Submit the form
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    });
    
    // Wait for the API call to complete and handle error
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });
  });
});
