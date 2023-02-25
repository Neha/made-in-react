import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders This is a heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is a heading/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders This is descirption', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is descirption/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders h2', () => {
  render(<App />);
  const heading = screen.getByRole('heading',{ type: 2});
  expect(heading).toBeInTheDocument();
  
});


test('renders button', () => {
  render(<App />);
  const btn = screen.getByRole('button');
  expect(btn).toBeInTheDocument();
});


test('button click', () => {
  render(<App />);
  const handleClick = jest.fn();
  const btn = screen.getByRole('button');
  fireEvent.click(btn);
  const newText = screen.getByText(/More.../i);
  expect(newText).toBeInTheDocument();
});

