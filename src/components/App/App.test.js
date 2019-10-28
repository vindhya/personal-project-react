import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the username input', () => {
  const { getByText } = render(<App />);
  expect(getByText(/github username/i)).toBeInTheDocument();
});

xit('renders the user display', () => {});
