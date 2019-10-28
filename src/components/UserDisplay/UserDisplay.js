import React, { useEffect, useState } from 'react';
import { Box, Heading } from 'grommet';

import { EVENT } from '../../constants';
import { getEventApiUrl } from '../../utils/utils';
import { getForkAndPREvents } from './UserDisplay.service';
import EventList from '../EventList/EventList';

const UserDisplay = props => {
  const [events, setEvents] = useState([]);
  const filteredEvents = events.length > 0 ? getForkAndPREvents(events) : {};

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
