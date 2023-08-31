import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from '../context/Provider';
import Home from '../pages/Home';

describe('Testing Home', () => {
  test('should render Chat and Input components', async () => {
    render(
      <BrowserRouter>
        <AppProvider>
          <Home />
        </AppProvider>
      </BrowserRouter>
    );

    const input = screen.getByPlaceholderText('Message');
    const sendButton = screen.getByText('Send');
    userEvent.type(input, 'Ok');
    fireEvent.click(sendButton);

    await waitFor(() => {
      const message = screen.getByText('Ok');
      expect(message).toBeInTheDocument();
    });

    await waitFor(async () => {
      const message = screen.getByText('I did not understand, try to say Hello');
      await expect(message).toBeInTheDocument();
    });
  });
});
