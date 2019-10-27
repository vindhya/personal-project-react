import React, { useEffect, useState } from 'react';
import { Box, Heading } from 'grommet';

import { EVENT } from '../../constants';
import { getEventApiUrl } from '../../utils/utils';
import EventList from '../EventList/EventList';

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
          type={EVENT.FORK}
          name="Recent Forks"
          data={filteredEvents.forkEvents}
        />
        <EventList
          type={EVENT.PULL_REQUEST}
          name="Recent Pull Requests"
          data={filteredEvents.prEvents}
        />
      </Box>
    </Box>
  );
};

export default UserDisplay;
