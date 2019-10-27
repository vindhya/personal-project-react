import React, { useEffect, useState } from 'react';
import { Box, Heading } from 'grommet';

import List from '../List/List';
import ListItem from '../List/ListItem';

const getEventApiUrl = username =>
  `https://api.github.com/users/${username}/events`;
const testingText = `Jelly jelly bonbon toffee cookie icing cake. Oat cake cake jelly gummi bears donut jelly beans gummies. Jelly marzipan donut halvah sweet roll jelly beans soufflé ice cream. Fruitcake sweet topping. Dragée sweet soufflé candy canes cake. Jujubes muffin jelly beans chupa chups gummies. Cake powder dragée. Oat cake jelly beans sweet cookie liquorice croissant. Jelly-o candy cotton candy dragée apple pie gummies apple pie sweet. Powder ice cream gingerbread brownie tootsie roll. Muffin oat cake toffee marshmallow donut. Wafer danish gingerbread.`;

const UserDisplay = props => {
  const [events, setEvents] = useState([]);
  const forkEvents = events.filter(event => event.type === 'ForkEvent');
  const prEvents = events.filter(event => event.type === 'PullRequestEvent');
  console.log('prEvents', prEvents);

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
