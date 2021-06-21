import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders spinner when loading', () => {
    render(<App />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });

  test('renders app with Add Reward button on load', async () => {
    render(<App />);
    await waitFor(() => {
      const addRewardButton = screen.getByRole('button', { name: /add reward/i });
      expect(addRewardButton).toBeInTheDocument();
    });
  });
});
