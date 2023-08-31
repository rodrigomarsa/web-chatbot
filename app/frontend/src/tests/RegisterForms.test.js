import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RegisterForms from '../components/RegisterForms';
import AppProvider from '../context/Provider';

describe('Testing RegisterForms', () => {
  test('should render RegisterForms', async () => {
    render(
      <BrowserRouter>
        <AppProvider>
          <RegisterForms />
        </AppProvider>
      </BrowserRouter>
    );

    const usernameInput = screen.getByPlaceholderText(
      'Username (12 characters)'
    );
    const passwordInput = screen.getByPlaceholderText(
      'Password (6 characters)'
    );
    const registerButton = screen.getByText('Register');

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });
});
