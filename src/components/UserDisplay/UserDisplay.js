import React, { useEffect, useState } from 'react';
import { Box, Heading } from 'grommet';

import List from '../List/List';
import ListItem from '../List/ListItem';

const getEventApiUrl = username =>
  `https://api.github.com/users/${username}/events`;
const EVENT = { FORK: 'ForkEvent', PULL_REQUEST: 'PullRequestEvent' };

const UserDisplay = props => {
  const [events, setEvents] = useState([]);
  const filteredEvents = events.reduce(
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
  console.log('filteredEvents', filteredEvents);

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
        <Heading level="2" size="medium">
          Recent Forks
        </Heading>
        <List>
          <ListItem>Hello</ListItem>
        </List>
        <Heading level="2" size="medium">
          Recent Pull Requests
        </Heading>
      </Box>
    </Box>
  );
};

export default UserDisplay;
