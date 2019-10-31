import React, { useEffect, useState } from 'react';
import { Box, Button, Heading } from 'grommet';
import { Previous } from 'grommet-icons';

import { EVENT } from '../../constants';
import { getEventApiUrl } from '../../utils/utils';
import { getForkAndPREvents } from './UserDisplay.service';
import EventList from '../EventList/EventList';

const UserDisplay = props => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState({});

  useEffect(() => {
    const fetchUserData = () => {
      fetch(getEventApiUrl(props.username))
        .then(response => response.json())
        .then(data => setEvents(data));
    };
    fetchUserData();
  }, [props.username]);

  useEffect(() => {
    if (events.length > 0) {
      setFilteredEvents(getForkAndPREvents(events));
    }
  }, [events]);

  return (
    <Box align="center" pad="large">
      <Box fill>
        <Button
          icon={<Previous />}
          onClick={props.onBackButtonClick}
          aria-label="back"
        />
      </Box>
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
