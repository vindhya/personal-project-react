import React from 'react';
import { render } from '@testing-library/react';

import ListItem from './ListItem';

it('renders list item text', () => {
  const { getByText } = render(<ListItem>test list item</ListItem>);
  expect(getByText('test list item')).toBeInTheDocument();
});
