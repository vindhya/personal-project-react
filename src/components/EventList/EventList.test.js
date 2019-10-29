import React from 'react';
import { render } from '@testing-library/react';

import EventList from './EventList';
import { EVENT } from '../../constants';
import { getForkAndPREvents } from '../UserDisplay/UserDisplay.service';

const testData = [];

describe('EventListItem component tests', () => {
  it('renders even if there are no data events', () => {
    render(<EventList />);
  });

  it('shows the appropriate text if there are zero data events', () => {
    const name = 'Repos';
    const data = [];
    const { getByText } = render(<EventList name={name} data={data} />);
    expect(getByText(/there are no repos/i)).toBeInTheDocument();
  });

  it('shows the forked from text if the event type is a fork', () => {
    const name = 'recent forks';
    const type = EVENT.FORK;
    const { getByText } = render(
      <EventList type={type} name={name} data={testForkData} />
    );
    expect(getByText(/forked from/i)).toBeInTheDocument();
  });

  it('shows the status text if the event type is a pull request', () => {
    const name = 'recent prs';
    const type = EVENT.PULL_REQUEST;
    const { getByText } = render(
      <EventList type={type} name={name} data={testPRData} />
    );
    expect(getByText(/status/i)).toBeInTheDocument();
  });
});

// not sure where else to put the test data below because i wouldn't want it to be included
// in the app for the production build

const testForkData = [{ id: 1, forkee: {} }];

const testPRData = [{ id: 1 }];
