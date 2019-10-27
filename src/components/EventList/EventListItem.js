import React from 'react';
import { Text } from 'grommet';

import ListItem from '../List/ListItem';
import { capitalize } from '../../utils/utils';

const EventListItem = ({ event, index, type }) => {
  let mainText = '';
  let subText = '';
  if (event && type === 'fork') {
    mainText = event.payload.forkee.full_name;
    subText = `Forked from: ${event.repo.name}`;
  } else if (event && type === 'pr') {
    mainText = event.payload.pull_request.title;
    subText = `Status: ${capitalize(event.payload.pull_request.state)}`;
  }

  return (
    <ListItem index={index}>
      <Text>{mainText}</Text>
      <Text size="small">{subText}</Text>
    </ListItem>
  );
};

export default EventListItem;
