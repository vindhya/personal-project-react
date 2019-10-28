import React from 'react';
import { render } from '@testing-library/react';
import { FormField } from 'grommet';

import UsernameForm from './UsernameForm';

xit('submits username', () => {
  const username = 'vindhya';
  const handleSubmit = jest.fn();
  const { getByLabelText, getByText } = render(
    <UsernameForm onUsernameSubmission={handleSubmit} />
  );
});
