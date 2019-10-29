import React from 'react';
import { render } from '@testing-library/react';

import EventList from './EventList';
import { EVENT } from '../../constants';
import { getForkAndPREvents } from '../UserDisplay/UserDisplay.service';
import eventData from '../../example-api-responses/events-fork-pr.json';

// console.log('eventData', eventData);
const { forkEvents, prEvents } = getForkAndPREvents(eventData);

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
    const { queryByText } = render(
      <EventList type={type} name={name} data={forkEvents} />
    );
    expect(queryByText(/forked from/i)).toBeInTheDocument();
  });

  it('shows the status text if the event type is a pull request', () => {
    const name = 'recent prs';
    const type = EVENT.PULL_REQUEST;
    const { getAllByText } = render(
      <EventList type={type} name={name} data={prEvents} />
    );
    const elements = getAllByText(/status: open/i);
    // the below probably isn't necessary...if the above getAllByText doesn't error out,
    // then the test will pass ✅
    elements.forEach(element => {
      expect(element).toHaveTextContent(/status/i);
    });
  });
});
