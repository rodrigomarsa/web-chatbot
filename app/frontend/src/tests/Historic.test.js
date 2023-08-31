import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Historic from '../pages/Historic';

describe('Testing Historic Page', () => {
  test('should render Historic page', async () => {
    render(<Historic />, { wrapper: BrowserRouter });

    expect(
      screen.getByText(/Export Conversation History/i)
    ).toBeInTheDocument();

    const exportButton = screen.getByRole('button', { name: 'Export to CSV' });
    expect(exportButton).toBeInTheDocument();
  });
});
