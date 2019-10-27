import React, { useEffect, useState } from 'react';
import { Box, Heading } from 'grommet';

import EventList from '../EventList/EventList';

const getEventApiUrl = username =>
  `https://api.github.com/users/${username}/events`;
const EVENT = { FORK: 'ForkEvent', PULL_REQUEST: 'PullRequestEvent' };

const UserDisplay = props => {
  const [events, setEvents] = useState([]);
  let filteredEvents = {};
  if (events.length > 0) {
    filteredEvents = events.reduce(
      (acc, currentEvent) => {
        if (currentEvent.type === EVENT.FORK) {
          return { ...acc, forkEvents: [...acc.forkEvents, currentEvent] };
        } else if (currentEvent.type === EVENT.PULL_REQUEST) {
          return { ...acc, prEvents: [...acc.prEvents, currentEvent] };
        }
        return acc;
      },
      { forkEvents: [], prEvents: [] }
    );
  }

  useEffect(() => {
    const fetchUserData = () => {
      fetch(getEventApiUrl(props.username))
        .then(response => response.json())
        .then(data => setEvents(data));
    };
    fetchUserData();
  }, [props.username]);

  return (
    <Box align="center" pad="large">
      <Heading level="1" size="medium">
        {props.username}
      </Heading>
      <Box width="large">
        <EventList
          type="fork"
          name="Recent Forks"
          data={filteredEvents.forkEvents}
        />
        <EventList
          type="pr"
          name="Recent Pull Requests"
          data={filteredEvents.prEvents}
        />
      </Box>
    </Box>
  );
};

export default UserDisplay;
